import { createFileRoute } from "@tanstack/react-router";
import { PartnerLandingPage } from "@/components/partner/PartnerLandingPage";

export const Route = createFileRoute("/parceiros")({
  head: () => ({
    meta: [
      { title: "Programa de Parceiros AtendenteAI | Receita Recorrente com IA para WhatsApp" },
      {
        name: "description",
        content:
          "Seja parceiro AtendenteAI e ofereça inteligência artificial para empresas que atendem pelo WhatsApp. Construa uma carteira recorrente vendendo uma solução SaaS B2B.",
      },
      { property: "og:title", content: "Programa de Parceiros AtendenteAI" },
      {
        property: "og:description",
        content:
          "Venda IA para atendimento no WhatsApp e construa receita recorrente com empresas do seu relacionamento.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/parceiros" },
    ],
    links: [{ rel: "canonical", href: "/parceiros" }],
  }),
  component: PartnerLandingPage,
});
