const steps = [
  { n: "01", title: "Você se cadastra", text: "Preenche o formulário para avaliação comercial." },
  { n: "02", title: "Recebe orientação", text: "Nossa equipe explica o modelo, materiais e possibilidades de atuação." },
  { n: "03", title: "Indica ou vende para empresas", text: "Você apresenta o AtendenteAI para empresas do seu relacionamento." },
  { n: "04", title: "O cliente ativa a solução", text: "A empresa começa a usar IA no atendimento pelo WhatsApp." },
  { n: "05", title: "Você constrói recorrência", text: "Enquanto os clientes permanecerem ativos, sua carteira continua gerando valor." },
];

export function PartnerHowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Como funciona na prática</h2>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-5">
          {steps.map((s) => (
            <div
              key={s.n}
              className="rounded-xl border border-border bg-card p-6 transition hover:border-primary/40"
            >
              <div className="font-display text-3xl font-bold text-primary/70">{s.n}</div>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-3xl rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="text-2xl font-bold">Não é promessa de dinheiro fácil.</h3>
          <p className="mt-2 text-base text-muted-foreground">
            É venda B2B recorrente. O AtendenteAI é uma solução real para empresas que desejam
            melhorar o atendimento no WhatsApp com inteligência artificial e equipe humana
            trabalhando juntas. O resultado do parceiro depende de prospecção, relacionamento,
            apresentação comercial e permanência dos clientes.
          </p>
          <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm font-medium text-foreground">
            O foco é vender valor para empresas, não vender expectativa vazia para parceiros.
          </div>
        </div>
      </div>
    </section>
  );
}
