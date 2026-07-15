import { Clock, MessageSquare, Users, DollarSign } from "lucide-react";

const items = [
  {
    icon: Clock,
    title: "Atendimento lento perde vendas",
    text: "Muitas empresas recebem contatos todos os dias e não conseguem responder com velocidade, padrão e organização.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp já é o canal principal",
    text: "O AtendenteAI entra onde o cliente já conversa: no WhatsApp.",
  },
  {
    icon: Users,
    title: "IA + humanos",
    text: "A inteligência artificial atende, organiza e transfere para a equipe humana quando necessário.",
  },
  {
    icon: DollarSign,
    title: "Sem cobrança por tokens",
    text: "Um diferencial comercial forte para apresentar às empresas sem assustar com custos variáveis.",
  },
];

export function PartnerOpportunity() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Empresas já precisam responder melhor no WhatsApp
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Você não precisa vender uma tecnologia desconhecida. Você oferece uma solução para um
            problema que praticamente toda empresa já sente: demora no atendimento, perda de leads e
            falta de acompanhamento.
          </p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((i) => (
            <div
              key={i.title}
              className="group rounded-xl border border-border bg-card p-6 transition hover:border-primary/40 hover:bg-surface-elevated"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <i.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{i.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{i.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
