import { useState, type FormEvent } from "react";
import { CheckCircle2, MessageCircle, Mail, Send } from "lucide-react";

interface FormState {
  name: string;
  whatsapp: string;
  email: string;
  city_state: string;
  commercial_profile: string;
  expected_companies_90_days: string;
  commercial_experience: string;
  consent: boolean;
}

const initial: FormState = {
  name: "",
  whatsapp: "",
  email: "",
  city_state: "",
  commercial_profile: "",
  expected_companies_90_days: "",
  commercial_experience: "",
  consent: false,
};

function maskPhone(v: string) {
  const d = v.replace(/\D/g, "").slice(0, 11);
  if (d.length <= 2) return d;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
}

export function PartnerLeadForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update<K extends keyof FormState>(k: K, v: FormState[K]) {
    setForm((p) => ({ ...p, [k]: v }));
    setErrors((p) => ({ ...p, [k]: undefined }));
  }

  function validate() {
    const e: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim() || form.name.trim().length < 3) e.name = "Informe seu nome completo";
    if (form.whatsapp.replace(/\D/g, "").length < 10) e.whatsapp = "WhatsApp inválido";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "E-mail inválido";
    if (!form.city_state.trim()) e.city_state = "Informe cidade/estado";
    if (!form.commercial_profile) e.commercial_profile = "Selecione um perfil";
    if (!form.expected_companies_90_days) e.expected_companies_90_days = "Selecione uma faixa";
    if (!form.consent) e.consent = "É necessário autorizar o contato";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(ev: FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // TODO: integrar com Supabase (tabela partner_leads) quando disponível
    await new Promise((r) => setTimeout(r, 600));
    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-primary/40 bg-card p-8 text-center shadow-[var(--shadow-card)]">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-2xl font-bold">Cadastro recebido com sucesso</h3>
        <p className="mt-2 text-muted-foreground">Nossa equipe entrará em contato em breve.</p>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="https://wa.me/5551996479050"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" />
            FALAR AGORA PELO WHATSAPP
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Ou envie um e-mail para{" "}
          <a href="mailto:parceiros@atendenteai.com.br" className="text-primary hover:underline">
            parceiros@atendenteai.com.br
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] sm:p-8"
    >
      <Input
        label="Nome completo *"
        value={form.name}
        onChange={(v) => update("name", v)}
        error={errors.name}
        placeholder="Seu nome"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Input
          label="WhatsApp *"
          value={form.whatsapp}
          onChange={(v) => update("whatsapp", maskPhone(v))}
          error={errors.whatsapp}
          placeholder="(11) 99999-9999"
          inputMode="tel"
        />
        <Input
          label="E-mail *"
          value={form.email}
          onChange={(v) => update("email", v)}
          error={errors.email}
          placeholder="voce@email.com"
          type="email"
        />
      </div>
      <Input
        label="Cidade / Estado *"
        value={form.city_state}
        onChange={(v) => update("city_state", v)}
        error={errors.city_state}
        placeholder="São Paulo / SP"
      />

      <Select
        label="Perfil comercial *"
        value={form.commercial_profile}
        onChange={(v) => update("commercial_profile", v)}
        error={errors.commercial_profile}
        options={[
          "Representante comercial",
          "Consultor empresarial",
          "Agência de marketing",
          "Profissional de tecnologia",
          "Afiliado",
          "Vendedor autônomo",
          "Prestador de serviços",
          "Outro",
        ]}
      />

      <Select
        label="Quantas empresas você acredita conseguir apresentar nos próximos 90 dias? *"
        value={form.expected_companies_90_days}
        onChange={(v) => update("expected_companies_90_days", v)}
        error={errors.expected_companies_90_days}
        options={["1 a 5", "6 a 10", "11 a 25", "Mais de 25"]}
      />

      <div>
        <label className="mb-2 block text-sm font-medium">
          Conte brevemente sobre sua experiência comercial
        </label>
        <textarea
          rows={4}
          value={form.commercial_experience}
          onChange={(e) => update("commercial_experience", e.target.value)}
          className="w-full rounded-lg border border-border bg-input px-3 py-2.5 text-sm outline-none focus:border-primary"
          placeholder="Mercados, públicos, anos de atuação..."
        />
      </div>

      <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-surface p-4 text-sm">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => update("consent", e.target.checked)}
          className="mt-0.5 h-4 w-4 accent-[oklch(0.78_0.19_152)]"
        />
        <span className="text-muted-foreground">
          Declaro interesse em atuar como parceiro comercial do AtendenteAI e autorizo o contato da
          equipe.
        </span>
      </label>
      {errors.consent && <p className="-mt-3 text-xs text-destructive">{errors.consent}</p>}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.01] disabled:opacity-60 sm:text-base"
      >
        <Send className="h-4 w-4" />
        {submitting ? "Enviando..." : "ENVIAR CADASTRO"}
      </button>

      <div className="flex flex-col items-center gap-2 border-t border-border pt-5 text-sm text-muted-foreground sm:flex-row sm:justify-center sm:gap-6">
        <a
          href="https://wa.me/5551996479050"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 hover:text-primary"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp direto
        </a>
        <a
          href="mailto:parceiros@atendenteai.com.br"
          className="inline-flex items-center gap-2 hover:text-primary"
        >
          <Mail className="h-4 w-4" />
          parceiros@atendenteai.com.br
        </a>
      </div>
    </form>
  );
}

function Input({
  label, value, onChange, error, ...rest
}: {
  label: string; value: string; onChange: (v: string) => void; error?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <input
        {...rest}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-input px-3 py-2.5 text-sm outline-none focus:border-primary ${
          error ? "border-destructive" : "border-border"
        }`}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function Select({
  label, value, onChange, error, options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-lg border bg-input px-3 py-2.5 text-sm outline-none focus:border-primary ${
          error ? "border-destructive" : "border-border"
        }`}
      >
        <option value="">Selecione...</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
