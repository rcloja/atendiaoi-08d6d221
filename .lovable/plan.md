## Objetivo

Trazer a landing page de parceiros do projeto [PartnerAI Growth](/projects/264f3618-be95-4e12-a921-973202065418) para este projeto como uma rota real em `/parceiros`, sem alterar nenhum outro conteúdo do site atual.

Sim, é totalmente possível — os dois projetos usam o mesmo template (TanStack Start), então os componentes são portáveis quase 1:1.

## O que será copiado

Do projeto de origem para este projeto, sem modificações de conteúdo:

- `src/routes/parceiros.tsx` — arquivo de rota que registra `/parceiros` com metadata SEO própria e renderiza `PartnerLandingPage`.
- `src/components/partner/` — 16 componentes que compõem a página:
  - `PartnerLandingPage.tsx` (composição)
  - `PartnerHero.tsx`, `PartnerOpportunity.tsx`, `PartnerCalculator.tsx`, `PartnerPortfolio.tsx`, `PartnerUseCases.tsx`, `PartnerBenefits.tsx`, `PartnerAudience.tsx`, `PartnerHowItWorks.tsx`, `PartnerFAQ.tsx`, `PartnerLeadFormSection.tsx`, `PartnerLeadForm.tsx`, `PartnerFooter.tsx`, `FloatingWhatsAppButton.tsx`, `PartnerGrowthChart.tsx`, `PartnerQuickSimulator.tsx`

## O que NÃO será alterado

- Nenhuma seção existente do site (Header, Footer, Hero, planos, FAQ, integrações, etc.).
- O link atual do menu que aponta para `/#parceiros` continuará funcionando como âncora dentro da home. Não vou trocar esse link — se depois você quiser que o menu passe a apontar para `/parceiros`, é só pedir.
- Preços, textos e identidade visual do site atual permanecem intactos.
- Design tokens (`src/styles.css`) não serão tocados. A página de parceiros usa os mesmos utilitários Tailwind + shadcn já presentes aqui.

## Detalhes técnicos

- Dependências usadas pelos componentes copiados: `@/components/ui/accordion` (shadcn — já existe no template), `lucide-react` (já instalado) e `@/assets/atendenteai-logo.png.asset.json` (já existe neste projeto, conforme visto em `src/assets/`).
- Não é necessário `bun add` nada; não é necessário editar `src/routeTree.gen.ts` (o plugin do TanStack Router regenera automaticamente ao detectar o novo `src/routes/parceiros.tsx`).
- A rota terá `head()` próprio com `title`, `description`, `og:title`, `og:description`, `og:type`, `og:url` e `canonical` apontando para `/parceiros` — sem `og:image` no root, respeitando as regras do template.
- Sem mudanças em rotas server, sem mudanças em backend.

## Resultado esperado

- `https://<seu-domínio>/parceiros` passa a servir a landing de parceiros vinda do outro projeto.
- `/#parceiros` continua funcionando como âncora na home, exatamente como hoje.
- Todo o restante do site permanece idêntico.
