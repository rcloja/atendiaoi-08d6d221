import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Preciso saber programação?", a: "Não. O parceiro atua na indicação, apresentação comercial ou revenda. A parte técnica é orientada pela equipe AtendenteAI." },
  { q: "Posso vender para empresas da minha cidade?", a: "Sim. Empresas locais que usam WhatsApp são um excelente público para começar." },
  { q: "Posso indicar clientes em vez de revender diretamente?", a: "Sim. O modelo pode variar conforme o perfil do parceiro: indicação, venda consultiva ou revenda." },
  { q: "Existe comissão recorrente?", a: "Sim, a proposta da parceria é permitir ganhos recorrentes enquanto os clientes permanecerem ativos, conforme regras comerciais e contrato aplicável." },
  { q: "O cliente precisa trocar o WhatsApp?", a: "A proposta é integrar o atendimento com WhatsApp, mantendo o canal onde o cliente já conversa." },
  { q: "O AtendenteAI cobra por token?", a: "A comunicação comercial deve destacar o diferencial de não trabalhar com cobrança por token para o cliente final, conforme política atual da empresa." },
  { q: "Quem dá suporte?", a: "O suporte é brasileiro e orientado pela equipe AtendenteAI." },
  { q: "Como começo?", a: "Preencha o formulário ou fale diretamente pelo WhatsApp." },
];

export function PartnerFAQ() {
  return (
    <section className="bg-surface/40 py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Perguntas frequentes</h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="rounded-xl border border-border bg-card px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
