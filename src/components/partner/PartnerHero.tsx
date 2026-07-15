import { ArrowRight, Calculator, ShieldCheck, Sparkles, MessageSquare, Repeat } from "lucide-react";
import { PartnerQuickSimulator } from "./PartnerQuickSimulator";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const badges = [
  { icon: Sparkles, label: "SaaS B2B" },
  { icon: MessageSquare, label: "IA no WhatsApp" },
  { icon: Repeat, label: "Receita recorrente" },
  { icon: ShieldCheck, label: "Suporte brasileiro" },
];

export function PartnerHero() {
  return (
    <section
      className="relative overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,oklch(0.78_0.19_152_/_0.08),transparent_50%)]" />
      <div className="container relative mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Programa de Parceiros AtendenteAI
          </div>
          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Transforme seus contatos empresariais em{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              receita recorrente mensal
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Venda o AtendenteAI para empresas que usam WhatsApp e construa uma carteira de clientes
            recorrentes com uma solução real de inteligência artificial para atendimento.
          </p>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground/90">
            Você indica, apresenta ou revende. A empresa melhora o atendimento. Você participa da
            receita enquanto o cliente permanecer ativo.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("formulario")}
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-glow)] transition-transform hover:scale-[1.02] sm:text-base"
            >
              QUERO SER PARCEIRO
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo("calculadora")}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface-elevated sm:text-base"
            >
              <Calculator className="h-4 w-4" />
              SIMULAR MEUS GANHOS
            </button>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {badges.map((b) => (
              <div
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur"
              >
                <b.icon className="h-3.5 w-3.5 text-primary" />
                {b.label}
              </div>
            ))}
          </div>
        </div>

        <PartnerQuickSimulator />
      </div>
    </section>
  );
}
