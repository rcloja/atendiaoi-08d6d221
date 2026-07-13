import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "Preciso saber programar?",
    a: "Não. A plataforma é 100% visual. Você configura tudo em minutos, sem código ou conhecimento técnico.",
  },
  {
    q: "Posso testar gratuitamente?",
    a: "Sim. Oferecemos 7 dias de teste gratuito, sem cobrança de cartão de crédito e cancelamento simples a qualquer momento.",
  },
  {
    q: "A plataforma substitui meus atendentes?",
    a: "Não. O AtendenteAi trabalha junto com sua equipe. Sua equipe assume a conversa quando necessário e a tecnologia cuida dos atendimentos repetitivos e fora do horário comercial.",
  },
  {
    q: "As conversas ficam armazenadas?",
    a: "Sim. Todo o histórico fica organizado e centralizado por cliente, com período de retenção conforme o plano contratado.",
  },
  {
    q: "Posso usar mais de um WhatsApp?",
    a: "Sim. Dependendo do plano, você pode conectar de 1 a 10 números de WhatsApp na mesma conta.",
  },
  {
    q: "Existe cobrança por token?",
    a: "Não. Você paga uma mensalidade fixa, sabe exatamente quanto vai gastar e nunca tem surpresas no boleto.",
  },
  {
    q: "Existe suporte brasileiro?",
    a: "Sim. Nossa equipe de suporte é brasileira, fala português e atende em horário comercial.",
  },
  {
    q: "Como funcionam as integrações com outros canais (e-mail, Instagram, Facebook, Telegram)?",
    a: "Os planos incluem o atendimento pelo WhatsApp. Canais adicionais como Gmail, Google Workspace, Outlook, Microsoft 365, e-mail profissional, Instagram Direct, Facebook Messenger e Telegram podem ser conectados conforme a necessidade. Conexão adicional por canal ou conta: R$ 59/mês. O valor é cobrado por conexão adicionada (por exemplo: uma conta Gmail, uma página do Facebook, um bot do Telegram), e não pelo acesso ilimitado a todas as contas de uma plataforma.",
  },
  {
    q: "Posso revender?",
    a: "Sim. Temos um programa de parceiros e revendedores com comissão recorrente, white label e material de apoio.",
  },


export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {FAQS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className="card-soft overflow-hidden">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-4 md:py-5 text-left"
            >
              <span className="font-semibold text-foreground text-base md:text-lg">{item.q}</span>
              <ChevronDown
                size={20}
                className={`text-muted-foreground transition-transform ${isOpen ? "rotate-180 text-primary" : ""}`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 md:px-6 pb-5 text-muted-foreground leading-relaxed">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
