const COMMISSION_RATE = 0.15;
const PLAN_PRICE = 597;
const COMMISSION_PER_CLIENT = PLAN_PRICE * COMMISSION_RATE; // 89.55

const cards = [5, 10, 25, 50].map((clients) => ({
  clients,
  monthly: clients * COMMISSION_PER_CLIENT,
  annual: clients * COMMISSION_PER_CLIENT * 12,
}));

const fmt = (v: number) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 2 });

export function PartnerPortfolio() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Você não precisa vender para 100 empresas
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Com poucas ativações por mês, sua comissão recorrente começa a ganhar força.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <div
              key={c.clients}
              className={`rounded-xl border p-6 transition hover:-translate-y-1 ${
                i === 2
                  ? "border-primary/50 bg-gradient-to-b from-primary/10 to-card"
                  : "border-border bg-card"
              }`}
            >
              <div className="font-display text-4xl font-bold text-primary">{c.clients}</div>
              <div className="mt-1 text-sm text-muted-foreground">clientes ativos</div>
              <div className="mt-6 space-y-2 border-t border-border pt-4 text-sm">
                <Row label="Plano" value="Start — R$ 597" />
                <Row label="Comissão por cliente" value="R$ 89,55" />
                <Row label="Comissão mensal" value={fmt(c.monthly)} bold />
                <Row label="Comissão anual" value={fmt(c.annual)} bold />
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead className="bg-surface text-left text-xs uppercase tracking-wide text-muted-foreground">
              <tr>
                <th className="px-4 py-3">Plano</th>
                <th className="px-4 py-3">Mensalidade</th>
                <th className="px-4 py-3">Comissão 15%</th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Start", price: 597 },
                { name: "Profissional", price: 797 },
                { name: "Empresarial", price: 997 },
              ].map((p) => (
                <tr key={p.name} className="border-t border-border">
                  <td className="px-4 py-3 font-medium">{p.name}</td>
                  <td className="px-4 py-3">R$ {p.price}/mês</td>
                  <td className="px-4 py-3 font-semibold text-primary">
                    {fmt(p.price * 0.15)}/mês por cliente
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base text-muted-foreground">
          Receba 15% de comissão recorrente sobre cada cliente ativo. A diferença está na
          recorrência — sua carteira cresce mês após mês.
        </p>
      </div>
    </section>
  );
}

function Row({ label, value, bold }: { label: string; value: string; bold?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <span className="text-muted-foreground">{label}</span>
      <span className={bold ? "font-bold text-foreground" : "text-foreground"}>{value}</span>
    </div>
  );
}
