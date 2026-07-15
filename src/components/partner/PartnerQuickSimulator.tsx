import { useMemo, useState } from "react";
import { TrendingUp } from "lucide-react";

const COMMISSION_RATE = 0.15;

const PLANS = [
  { label: "Start", price: 597 },
  { label: "Profissional", price: 797 },
  { label: "Empresarial", price: 997 },
] as const;

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 2 });

export function PartnerQuickSimulator() {
  const [clients, setClients] = useState(10);
  const [price, setPrice] = useState(597);

  const { commissionPerClient, grossRevenue, monthlyCommission, annualCommission } = useMemo(() => {
    const commissionPerClient = price * COMMISSION_RATE;
    const grossRevenue = clients * price;
    const monthlyCommission = clients * commissionPerClient;
    return {
      commissionPerClient,
      grossRevenue,
      monthlyCommission,
      annualCommission: monthlyCommission * 12,
    };
  }, [clients, price]);

  return (
    <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-[var(--shadow-card)] backdrop-blur lg:p-7">
      <div className="flex items-center gap-2">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h3 className="text-lg font-semibold">Simule sua comissão recorrente</h3>
      </div>

      <div className="mt-5 space-y-5">
        <div>
          <label className="text-xs font-medium text-muted-foreground">
            Quantos clientes você acredita conseguir ativar?
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {[5, 10, 25, 50].map((n) => (
              <button
                key={n}
                onClick={() => setClients(n)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  clients === n
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-surface text-foreground hover:bg-surface-elevated"
                }`}
              >
                {n}
              </button>
            ))}
            <input
              type="number"
              min={1}
              value={clients}
              onChange={(e) => setClients(Math.max(1, Number(e.target.value) || 0))}
              className="w-20 rounded-md border border-border bg-input px-2 py-1.5 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="text-xs font-medium text-muted-foreground">Plano médio vendido</label>
          <div className="mt-2 flex flex-wrap gap-2">
            {PLANS.map((p) => (
              <button
                key={p.price}
                onClick={() => setPrice(p.price)}
                className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                  price === p.price
                    ? "bg-primary text-primary-foreground"
                    : "border border-border bg-surface text-foreground hover:bg-surface-elevated"
                }`}
              >
                {p.label} — R$ {p.price}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-md border border-border bg-surface px-3 py-2 text-xs text-muted-foreground">
          Comissão recorrente de <span className="font-semibold text-foreground">15%</span> sobre o
          valor do plano enquanto o cliente estiver ativo.
        </div>

        <div className="grid gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
          <Row label="Comissão por cliente" value={fmt(commissionPerClient)} />
          <Row label="Receita mensal gerada" value={fmt(grossRevenue)} />
          <Row label="Comissão mensal estimada" value={fmt(monthlyCommission)} highlight />
          <Row label="Comissão anual estimada" value={fmt(annualCommission)} />
        </div>

        <p className="text-[11px] leading-relaxed text-muted-foreground">
          Simulação estimada com base em comissão recorrente de 15%. Os valores podem variar
          conforme plano e negociação comercial.
        </p>
      </div>
    </div>
  );
}

function Row({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span
        className={`font-display text-lg font-bold tabular-nums ${
          highlight ? "text-primary" : "text-foreground"
        }`}
      >
        {value}
      </span>
    </div>
  );
}
