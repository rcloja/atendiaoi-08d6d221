import {
  Stethoscope, Home, Wrench, Store, Briefcase, UtensilsCrossed,
  GraduationCap, HardHat, ShoppingCart, Truck, HeartPulse, Sun,
} from "lucide-react";

const list = [
  { icon: Stethoscope, label: "Clínicas" },
  { icon: Home, label: "Imobiliárias" },
  { icon: Wrench, label: "Oficinas" },
  { icon: Store, label: "Lojas" },
  { icon: Briefcase, label: "Escritórios" },
  { icon: UtensilsCrossed, label: "Restaurantes" },
  { icon: GraduationCap, label: "Escolas" },
  { icon: HardHat, label: "Prestadores de serviço" },
  { icon: ShoppingCart, label: "E-commerces" },
  { icon: Truck, label: "Distribuidoras" },
  { icon: HeartPulse, label: "Consultórios" },
  { icon: Sun, label: "Energia solar" },
];

export function PartnerUseCases() {
  return (
    <section className="bg-surface/40 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Você provavelmente já conhece potenciais clientes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Se você tem relacionamento com empresas locais ou clientes empresariais, já pode ter um
            ponto de partida.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {list.map((i) => (
            <div
              key={i.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition hover:border-primary/40"
            >
              <i.icon className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">{i.label}</span>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-foreground">
          Se a empresa atende pelo WhatsApp, ela pode precisar do AtendenteAI.
        </p>
      </div>
    </section>
  );
}
