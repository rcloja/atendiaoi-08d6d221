import {
  Clock, MessageCircle, Brain, UserCheck, Users, Database, Mic, ShieldCheck,
} from "lucide-react";

const benefits = [
  { icon: Clock, title: "Atendimento 24 horas", text: "Nunca deixa o cliente esperando fora do horário comercial." },
  { icon: MessageCircle, title: "WhatsApp integrado", text: "A empresa atende no canal onde o cliente já está." },
  { icon: Brain, title: "IA treinada para o negócio", text: "O agente pode ser ajustado conforme produtos, serviços e regras da empresa." },
  { icon: UserCheck, title: "Transferência para humano", text: "Quando necessário, a conversa pode ir para a equipe." },
  { icon: Users, title: "Múltiplos agentes", text: "Permite diferentes funções, setores ou estilos de atendimento." },
  { icon: Database, title: "Histórico e organização", text: "Ajuda a acompanhar conversas, dúvidas e oportunidades." },
  { icon: Mic, title: "Responde áudio", text: "Mais facilidade para lidar com clientes que preferem mandar mensagens faladas." },
  { icon: ShieldCheck, title: "Sem cobrança por token", text: "Facilita a venda e reduz medo de custo variável." },
];

export function PartnerBenefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Uma solução simples de explicar e forte para vender
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/40"
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <b.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{b.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
