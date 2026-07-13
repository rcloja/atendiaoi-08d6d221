import { useMemo, useState } from "react";
import { PartnerGrowthChart } from "./PartnerGrowthChart";

const COMMISSION_RATE = 0.15;

const PLANS = [
  { label: "Start", price: 597 },
  { label: "Profissional", price: 797 },
  { label: "Empresarial", price: 997 },
] as const;

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 2 });

export function PartnerCalculator() {
  const [clients, setClients] = useState(10);
  const [price, setPrice] = useState(597);
  const [growth, setGrowth] = useState(2);

  const results = useMemo(() => {
    const commissionPerClient = price * COMMISSION_RATE;
    const grossRevenueGenerated = clients * price;
    const monthlyCommission = clients * commissionPerClient;
    const annualCommission = monthlyCommission * 12;

    const data: { month: string; clientes: number; comissao: number }[] = [];
    let accumulated = 0;
    let month12Clients = clients;
    let month12Commission = monthlyCommission;
    for (let i = 1; i <= 12; i++) {
      const c = clients + growth * (i - 1);
      const m = c * price * COMMISSION_RATE;
      accumulated += m;
      month12Clients = c;
      month12Commission = m;
      data.push({ month: `M${i}`, clientes: c, comissao: m });
    }

    return {
      commissionPerClient,
      grossRevenueGenerated,
      monthlyCommission,
      annualCommission,
      data,
      month12Clients,
      month12Commission,
      accumulated,
    };
  }, [clients, price, growth]);

  return (
    <section id="calculadora" className="bg-surface/40 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Simule sua comissão recorrente</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Veja quanto você pode receber por mês indicando empresas para o AtendenteAI.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
            <Field label={`Quantidade de clientes ativos: ${clients}`}>
              <input
                type="range"
                min={1}
                max={100}
                value={clients}
                onChange={(e) => setClients(Number(e.target.value))}
                className="w-full accent-[oklch(0.78_0.19_152)]"
              />
            </Field>

            <Field label="Plano médio vendido">
              <div className="flex flex-wrap gap-2">
                {PLANS.map((p) => (
                  <button
                    key={p.price}
                    onClick={() => setPrice(p.price)}
                    className={`rounded-md px-3 py-1.5 text-sm ${
                      price === p.price
                        ? "bg-primary text-primary-foreground"
                        : "border border-border bg-surface hover:bg-surface-elevated"
                    }`}
                  >
                    {p.label} — R$ {p.price}
                  </button>
                ))}
              </div>
            </Field>

            <Field label="Comissão recorrente">
              <div className="rounded-md border border-border bg-surface px-3 py-2 text-sm text-foreground">
                15% sobre o valor do plano vendido — pago enquanto o cliente estiver ativo.
              </div>
            </Field>

            <Field label="Crescimento mensal (novos clientes por mês)">
              <input
                type="number"
                min={0}
                value={growth}
                onChange={(e) => setGrowth(Math.max(0, Number(e.target.value) || 0))}
                className="w-full rounded-md border border-border bg-input px-3 py-2 text-sm"
              />
            </Field>
          </div>

          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              <Stat label="Valor do plano" value={fmt(price)} />
              <Stat label="Comissão por cliente" value={fmt(results.commissionPerClient)} />
              <Stat
                label="Receita mensal gerada para o AtendenteAI"
                value={fmt(results.grossRevenueGenerated)}
              />
              <Stat
                label="Comissão mensal estimada"
                value={fmt(results.monthlyCommission)}
                highlight
              />
              <Stat label="Comissão anual estimada" value={fmt(results.annualCommission)} />
              <Stat label="Clientes em 12 meses" value={String(results.month12Clients)} />
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  Comissão acumulada em 12 meses
                </span>
                <span className="font-display text-2xl font-bold text-primary">
                  {fmt(results.accumulated)}
                </span>
              </div>
              <div className="mt-2 text-xs text-muted-foreground">
                Comissão mensal no mês 12: {fmt(results.month12Commission)}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4">
              <PartnerGrowthChart data={results.data} />
            </div>
          </div>
        </div>

        <p className="mx-auto mt-10 max-w-3xl text-center text-base font-medium text-foreground">
          Quanto maior sua carteira, maior sua comissão mensal recorrente.
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-center text-xs text-muted-foreground">
          Simulação estimada com base em comissão recorrente de 15%. Os valores podem variar
          conforme plano, negociação comercial e modelo de parceria.
        </p>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      {children}
    </div>
  );
}

function Stat({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div
      className={`rounded-xl border p-4 ${
        highlight ? "border-primary/40 bg-primary/5" : "border-border bg-card"
      }`}
    >
      <div className="text-xs text-muted-foreground">{label}</div>
      <div
        className={`mt-1 font-display text-xl font-bold tabular-nums ${
          highlight ? "text-primary" : "text-foreground"
        }`}
      >
        {value}
      </div>
    </div>
  );
}
