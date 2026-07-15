import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Point {
  month: string;
  clientes: number;
  comissao: number;
}

export function PartnerGrowthChart({ data }: { data: Point[] }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="comissaoGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="oklch(0.78 0.19 152)" stopOpacity={0.6} />
              <stop offset="100%" stopColor="oklch(0.78 0.19 152)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="oklch(0.32 0.025 250)" strokeDasharray="3 3" />
          <XAxis dataKey="month" stroke="oklch(0.72 0.02 250)" fontSize={12} />
          <YAxis stroke="oklch(0.72 0.02 250)" fontSize={12} />
          <Tooltip
            contentStyle={{
              background: "oklch(0.23 0.028 250)",
              border: "1px solid oklch(0.32 0.025 250)",
              borderRadius: 8,
              color: "oklch(0.98 0.005 250)",
            }}
            formatter={(v: number, k) =>
              k === "comissao"
                ? v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })
                : v
            }
            labelFormatter={(l) => `Mês ${l}`}
          />
          <Area
            type="monotone"
            dataKey="comissao"
            name="Comissão mensal"
            stroke="oklch(0.78 0.19 152)"
            strokeWidth={2}
            fill="url(#comissaoGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
