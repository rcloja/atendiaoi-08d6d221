import { createFileRoute } from "@tanstack/react-router";
import {
  Check, X, MessageSquare, Clock, Users, FileText, BarChart3, Layers, Sparkles,
  Headphones, Repeat, Zap, ShieldCheck, ArrowRight, PhoneCall, History,
  TrendingDown, Star, Handshake, Briefcase, Network, Mic, BookOpen, Plug,
  Bot, UserCheck, Mail, AtSign, Instagram, Facebook, Send, ShoppingBag, Store, Music2,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingButtons } from "@/components/site/FloatingButtons";
import { Calculator } from "@/components/site/Calculator";
import { FAQ } from "@/components/site/FAQ";
import { LeadPopup } from "@/components/site/LeadPopup";
import { TrialForm } from "@/components/site/TrialForm";
import heroImg from "@/assets/hero-dashboard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AtendenteAi — Atendimento inteligente no WhatsApp 24h para empresas" },
      { name: "description", content: "Centralize atendimentos no WhatsApp, organize o histórico e responda 24h. Equipe humana + tecnologia, mensalidade previsível, sem cobrança por token. Teste grátis 7 dias." },
      { name: "keywords", content: "atendimento por IA para WhatsApp, agente virtual WhatsApp, IA para empresas, atendimento automático WhatsApp, plataforma de atendimento WhatsApp, WhatsApp com inteligência artificial, atendimento híbrido IA e humano, CRM para WhatsApp, central de atendimento WhatsApp, software de atendimento empresarial" },
      { property: "og:title", content: "AtendenteAi — Atendimento inteligente no WhatsApp" },
      { property: "og:description", content: "Centralize atendimentos, organize o histórico e responda 24h. Teste grátis 7 dias." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "AtendenteAi",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description: "Plataforma de atendimento inteligente para WhatsApp",
          offers: [
            { "@type": "Offer", name: "Start", price: "297", priceCurrency: "BRL" },
            { "@type": "Offer", name: "Profissional", price: "597", priceCurrency: "BRL" },
            { "@type": "Offer", name: "Empresarial", price: "997", priceCurrency: "BRL" },
          ],
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="bg-background text-foreground overflow-x-clip">
      <Header />
      <main className="pt-16">
        <Hero />
        <Section1 />
        <Section2 />
        <SectionCalc />
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <SectionIntegrations />
        <Section8 />
        <Section9 />
        <SectionPlans />
        <SectionPartners />
        <SectionFAQ />
        <SectionTrial />
        <SectionFinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
      <LeadPopup />
      <div className="md:hidden h-20" aria-hidden />
    </div>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-grid opacity-50" />
      <div className="absolute -top-32 -right-32 -z-10 h-[480px] w-[480px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 -z-10 h-[400px] w-[400px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container-page pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
        <div className="fade-up">
          <span className="chip">Atendimento inteligente para empresas</span>
          <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-foreground">
            Seu WhatsApp pode atender clientes{" "}
            <span className="gradient-text">24 horas por dia.</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Centralize atendimentos, mantenha o histórico organizado e permita que sua
            equipe assuma a conversa quando necessário. Tudo em uma única plataforma.
          </p>
          <p className="mt-3 text-sm font-medium text-foreground">
            Sem cobrança por token. Sem surpresas na mensalidade.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#teste" className="btn-primary">Quero testar grátis <ArrowRight size={16} /></a>
            <a href="#parceiros" className="btn-secondary">Quero ser parceiro</a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground max-w-md">
            {["Teste gratuito por 7 dias", "Sem cartão de crédito", "Cancelamento simples", "Suporte brasileiro"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={16} className="text-success shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative fade-up">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/20 to-transparent blur-2xl rounded-3xl" />
          <div className="float-anim rounded-2xl overflow-hidden border border-border shadow-[var(--shadow-elevated)] bg-card">
            <img
              src={heroImg}
              alt="Painel do AtendenteAi mostrando conversas de WhatsApp, métricas e histórico"
              width={1600}
              height={1100}
              className="w-full h-auto"
            />
          </div>
          <FloatingBadge className="absolute -left-3 top-10 hidden sm:flex" icon={<Clock size={14} />} text="Resposta em 3s" />
          <FloatingBadge className="absolute -right-3 bottom-12 hidden sm:flex" icon={<Sparkles size={14} />} text="IA + equipe humana" />
        </div>
      </div>
    </section>
  );
}

function FloatingBadge({ icon, text, className = "" }: { icon: React.ReactNode; text: string; className?: string }) {
  return (
    <div className={`${className} items-center gap-2 rounded-full bg-card border border-border px-3.5 py-2 text-xs font-semibold text-foreground shadow-[var(--shadow-soft)]`}>
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-soft text-primary">{icon}</span>
      {text}
    </div>
  );
}

/* ---------------- SECTION HEADER ---------------- */
function SectionHeader({ chip, title, subtitle, center = true }: { chip?: string; title: React.ReactNode; subtitle?: React.ReactNode; center?: boolean }) {
  return (
    <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
      {chip && <span className="chip">{chip}</span>}
      <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </div>
  );
}

/* ---------------- 1 ---------------- */
function Section1() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="chip">Fora do horário</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            E se sua equipe estivesse <span className="gradient-text">dormindo agora</span>?
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>Imagine um cliente enviando uma mensagem às 23h.</p>
            <p>Outro às 6h da manhã. Outro durante um feriado.</p>
            <p>Enquanto sua equipe descansa, potenciais clientes continuam procurando soluções.</p>
            <p className="text-foreground font-medium">
              Quantas oportunidades deixam de existir simplesmente porque ninguém respondeu?
            </p>
            <p>O AtendenteAi mantém seu atendimento funcionando mesmo quando sua equipe não está disponível.</p>
          </div>
          <a href="#teste" className="btn-primary mt-8">Quero testar grátis</a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { time: "23:14", text: "Ainda atendem?", read: false },
            { time: "06:42", text: "Quanto custa?", read: false },
            { time: "00:08", text: "Bom dia, preciso de informação", read: false },
            { time: "13:20", text: "Vou comprar no concorrente.", read: true },
          ].map((m, i) => (
            <div key={i} className="card-soft p-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-medium">{m.time}</span>
                <span className={m.read ? "text-destructive" : "text-warning"}>{m.read ? "Sem resposta" : "Aguardando"}</span>
              </div>
              <p className="mt-3 text-sm text-foreground">{m.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 2 ---------------- */
function Section2() {
  const flow = ["Cliente interessado", "Envia mensagem", "Espera resposta", "Desiste", "Compra do concorrente"];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          chip="O custo da demora"
          title={<>Quanto custa <span className="gradient-text">perder um cliente</span> por demora no WhatsApp?</>}
        />
        <div className="mt-10 max-w-3xl mx-auto space-y-4 text-muted-foreground text-center leading-relaxed">
          <p>A maioria das empresas não perde clientes porque possui um produto ruim.</p>
          <p className="text-foreground font-medium">Perde porque demora para responder.</p>
          <p>Enquanto sua equipe está ocupada, potenciais clientes continuam enviando mensagens. Muitos nunca recebem resposta. Outros desistem antes do retorno. E alguns simplesmente compram do concorrente que respondeu primeiro.</p>
        </div>

        <ol className="mt-12 flex flex-wrap items-stretch justify-center gap-3">
          {flow.map((step, i) => (
            <li key={i} className="flex items-center gap-3">
              <div className={`card-soft px-4 py-3 text-sm font-semibold ${i === flow.length - 1 ? "border-destructive/30 text-destructive" : "text-foreground"}`}>
                {step}
              </div>
              {i < flow.length - 1 && <ArrowRight size={18} className="text-muted-foreground" />}
            </li>
          ))}
        </ol>

        <div className="mt-12 max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            Seu próximo cliente pode estar aguardando uma resposta <span className="gradient-text">neste exato momento.</span>
          </p>
          <a href="#teste" className="btn-primary mt-8">Quero testar grátis</a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CALC ---------------- */
function SectionCalc() {
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader
          chip="Calculadora"
          title={<>Calcule quanto sua empresa pode estar <span className="gradient-text">perdendo</span> por demora no WhatsApp.</>}
          subtitle="Responda algumas perguntas simples e veja uma estimativa."
        />
        <div className="mt-12">
          <Calculator />
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4 ---------------- */
function Section4() {
  const cards = [
    { icon: Clock, title: "Atendimento lento", text: "Tempo de resposta alto perde vendas para o concorrente." },
    { icon: MessageSquare, title: "Conversas perdidas", text: "Mensagens sem retorno viram receita não convertida." },
    { icon: Users, title: "Equipe sobrecarregada", text: "Sua equipe não consegue dar conta de toda demanda." },
    { icon: History, title: "Falta de histórico", text: "Sem contexto, cada atendimento começa do zero." },
    { icon: Repeat, title: "Respostas inconsistentes", text: "Cada atendente responde de um jeito diferente." },
    { icon: TrendingDown, title: "Dependência de pessoas", text: "Se alguém falta, a operação trava." },
  ];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          chip="Sinais de alerta"
          title={<>Sua empresa está <span className="gradient-text">perdendo oportunidades</span> sem perceber.</>}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="card-soft p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <c.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 5 ---------------- */
function Section5() {
  const flow = [
    { label: "Cliente", icon: Users },
    { label: "WhatsApp", icon: MessageSquare },
    { label: "AtendenteAi", icon: Sparkles },
    { label: "Equipe humana", icon: UserCheck },
    { label: "Venda", icon: Check },
    { label: "Histórico salvo", icon: History },
  ];
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader
          chip="Tudo conectado"
          title={<>O AtendenteAi <span className="gradient-text">organiza tudo</span> em um único lugar.</>}
          subtitle="Responda mais rápido, organize informações e mantenha o histórico completo dos atendimentos."
        />
        <div className="mt-14 flex flex-wrap justify-center items-center gap-3 md:gap-4">
          {flow.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3 md:gap-4">
              <div className="card-soft px-4 py-4 min-w-[140px] text-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary mx-auto">
                  <s.icon size={18} />
                </span>
                <p className="mt-2 text-sm font-semibold text-foreground">{s.label}</p>
              </div>
              {i < flow.length - 1 && <ArrowRight size={18} className="text-primary" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 6 ---------------- */
function Section6() {
  const cards = [
    { icon: Clock, title: "Atendimento 24h", text: "Disponível mesmo quando sua equipe não está." },
    { icon: History, title: "Histórico completo", text: "Tudo registrado e organizado por cliente." },
    { icon: Users, title: "Equipe + tecnologia", text: "Humanos e tecnologia trabalhando juntos." },
    { icon: Layers, title: "Informações centralizadas", text: "Uma única plataforma para toda a operação." },
    { icon: FileText, title: "Resumos automáticos", text: "Saiba em segundos o contexto de cada conversa." },
    { icon: Zap, title: "Implantação simples", text: "Em minutos sua operação está funcionando." },
  ];
  return (
    <section className="section-pad">
      <div className="container-page">
        <SectionHeader
          chip="Benefícios"
          title={<>Mais organização. Mais velocidade. <span className="gradient-text">Menos retrabalho.</span></>}
        />
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c) => (
            <div key={c.title} className="card-soft p-6">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                <c.icon size={20} />
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 7 ---------------- */
function Section7() {
  const features = [
    { icon: MessageSquare, label: "WhatsApp Integrado" },
    { icon: PhoneCall, label: "Múltiplos Números" },
    { icon: Bot, label: "Agentes de Atendimento" },
    { icon: UserCheck, label: "Atendentes Humanos" },
    { icon: History, label: "Histórico Completo" },
    { icon: FileText, label: "Resumo Automático" },
    { icon: BookOpen, label: "Base de Conhecimento" },
    { icon: BarChart3, label: "Relatórios" },
    { icon: TrendingDown, label: "Métricas" },
    { icon: Mic, label: "Áudios Transcritos" },
    { icon: Repeat, label: "Transferência Humano ↔ IA" },
    { icon: Plug, label: "Integrações" },
    { icon: Network, label: "Automações" },
  ];
  return (
    <section id="recursos" className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader
          chip="Recursos"
          title={<>Tudo que sua empresa precisa para <span className="gradient-text">atender melhor.</span></>}
        />
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {features.map((f) => (
            <div key={f.label} className="card-soft px-4 py-4 flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary shrink-0">
                <f.icon size={16} />
              </span>
              <span className="text-sm font-medium text-foreground">{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 8 ---------------- */
function Section8() {
  return (
    <section className="section-pad">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="chip">Preço previsível</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Você sabe <span className="gradient-text">exatamente</span> quanto vai pagar.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>Muitas plataformas utilizam cobranças baseadas em consumo. O problema é que poucas empresas conseguem prever quanto irão gastar.</p>
            <p>Com o AtendenteAi você escolhe um plano e sabe exatamente quanto irá pagar.</p>
          </div>
        </div>
        <div className="card-soft p-8 bg-gradient-to-br from-primary-soft to-background">
          <ul className="space-y-4">
            {["Sem cobrança por token.", "Sem sustos.", "Sem surpresas.", "Sem contas imprevisíveis."].map((t) => (
              <li key={t} className="flex items-center gap-3 text-lg font-semibold text-foreground">
                <ShieldCheck size={22} className="text-primary shrink-0" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 9 ---------------- */
function Section9() {
  const before = ["Conversas perdidas", "Atendimento lento", "Dependência excessiva da equipe", "Falta de histórico", "Falta de organização"];
  const after = ["Atendimento imediato", "Histórico centralizado", "Atendimento contínuo", "Equipe mais produtiva", "Atendimento profissional"];
  return (
    <section className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader chip="Transformação" title={<>Antes e depois do <span className="gradient-text">AtendenteAi.</span></>} />
        <div className="mt-12 grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          <div className="card-soft p-7 border-destructive/20">
            <span className="chip" style={{ background: "color-mix(in oklab, var(--destructive) 12%, transparent)", color: "var(--destructive)", borderColor: "color-mix(in oklab, var(--destructive) 25%, transparent)" }}>Antes</span>
            <ul className="mt-5 space-y-3">
              {before.map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground"><X size={18} className="text-destructive mt-0.5 shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
          <div className="card-soft p-7 border-primary/30 bg-gradient-to-br from-primary-soft to-background">
            <span className="chip">Depois</span>
            <ul className="mt-5 space-y-3">
              {after.map((t) => (
                <li key={t} className="flex items-start gap-3 text-foreground"><Check size={18} className="text-success mt-0.5 shrink-0" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- INTEGRATIONS ---------------- */
function SectionIntegrations() {
  const available = [
    {
      icon: Mail,
      title: "Gmail e Google Workspace",
      desc: "Conecte contas Gmail e Google Workspace para receber, analisar e responder e-mails diretamente pelo fluxo de atendimento do AtendenteAi.",
      bullets: ["Leitura de mensagens recebidas", "Respostas pela conta conectada", "Atendimento com IA e equipe humana", "Conexão segura com autorização Google"],
    },
    {
      icon: Mail,
      title: "Outlook e Microsoft 365",
      desc: "Conecte contas Outlook, Hotmail e Microsoft 365 para transformar e-mails recebidos em atendimentos organizados dentro do AtendenteAi.",
      bullets: ["Leitura da caixa de entrada", "Respostas pela conta Microsoft conectada", "Atendimento centralizado", "Conexão segura com autorização Microsoft"],
    },
    {
      icon: AtSign,
      title: "E-mail profissional",
      hint: "IMAP e SMTP",
      desc: "Conecte e-mails profissionais do seu próprio domínio, mesmo quando não utilizam Gmail ou Microsoft 365.",
      example: "Ex.: atendimento@suaempresa.com.br ou sac@suaempresa.com.br",
      bullets: ["Compatível com diferentes provedores", "Recebimento de mensagens", "Envio de respostas", "Uso da conta profissional da empresa"],
    },
    {
      icon: Instagram,
      title: "Instagram Direct",
      desc: "Receba mensagens enviadas ao Instagram da empresa e transforme conversas do Direct em atendimentos com inteligência artificial e participação humana.",
      bullets: ["Atendimento das mensagens do Direct", "Identificação da conversa e do cliente", "Continuidade entre IA e atendente humano", "Respostas pelo canal conectado"],
    },
    {
      icon: Facebook,
      title: "Facebook Messenger",
      desc: "Centralize as mensagens recebidas pelas páginas da empresa no Facebook e responda pelo fluxo inteligente do AtendenteAi.",
      bullets: ["Mensagens das páginas conectadas", "Atendimento com IA e equipe humana", "Histórico e contexto da conversa", "Respostas pelo Messenger"],
    },
    {
      icon: Send,
      title: "Telegram",
      desc: "Conecte o bot da sua empresa ao AtendenteAi para receber mensagens, atender clientes e criar fluxos de comunicação pelo Telegram.",
      bullets: ["Bot exclusivo por empresa", "Recebimento de mensagens", "Respostas pelo próprio bot", "Atendimento automatizado e humano"],
    },
  ];

  const upcoming = [
    { icon: ShoppingBag, title: "Mercado Livre", desc: "Receba perguntas de compradores antes da venda e prepare respostas com inteligência artificial e supervisão da sua equipe, sem precisar alternar entre diferentes plataformas." },
    { icon: Store, title: "Shopee", desc: "Projeto de integração para centralizar perguntas e atendimentos relacionados às vendas realizadas pela Shopee." },
    { icon: Music2, title: "TikTok Shop", desc: "Projeto de integração para receber e organizar atendimentos relacionados a compradores, produtos e pedidos da TikTok Shop." },
  ];

  const flow = [
    { label: "Canal conectado", icon: Plug },
    { label: "AtendenteAi", icon: Sparkles },
    { label: "IA e equipe humana", icon: UserCheck },
    { label: "Resposta ao cliente", icon: MessageSquare },
  ];

  return (
    <section id="integracoes" className="section-pad">
      <div className="container-page">
        <SectionHeader
          chip="Integrações"
          title={<>Seus canais conectados ao <span className="gradient-text">AtendenteAi.</span></>}
          subtitle="Receba mensagens de diferentes canais em um único ambiente e permita que a inteligência artificial e sua equipe atendam com mais rapidez, contexto e organização."
        />

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {available.map((c) => (
            <div key={c.title} className="card-soft p-6 flex flex-col">
              <div className="flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-soft text-primary">
                  <c.icon size={20} />
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 text-success px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border border-success/20">
                  <Check size={12} /> Disponível
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {c.title}
                {c.hint && <span className="ml-2 text-xs font-medium text-muted-foreground">({c.hint})</span>}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              {c.example && <p className="mt-2 text-xs text-muted-foreground italic">{c.example}</p>}
              <ul className="mt-4 space-y-2 text-sm">
                {c.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" /> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          As integrações podem ser adicionadas conforme a necessidade da sua empresa. Conexões adicionais são contratadas separadamente.
        </p>

        {/* Upcoming */}
        <div className="mt-20">
          <SectionHeader
            chip="Em breve"
            title={<>Próximas <span className="gradient-text">integrações.</span></>}
            subtitle="Estamos trabalhando para levar o atendimento inteligente também aos principais marketplaces."
          />
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            {upcoming.map((c) => (
              <div key={c.title} className="card-soft p-6 flex flex-col border-dashed">
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-muted text-muted-foreground">
                    <c.icon size={20} />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-warning/10 text-warning px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider border border-warning/30">
                    <Clock size={12} /> Em desenvolvimento
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Centralized experience */}
        <div className="mt-20 card-soft p-8 md:p-10 bg-gradient-to-br from-primary-soft to-background">
          <div className="max-w-3xl mx-auto text-center">
            <span className="chip">Um só lugar para atender</span>
            <h3 className="mt-4 text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Tudo o que chega, chega <span className="gradient-text">num só lugar.</span>
            </h3>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              O cliente entra em contato pelo canal que preferir. A mensagem chega ao AtendenteAi, a inteligência artificial analisa o contexto e sua equipe pode acompanhar, complementar ou assumir o atendimento quando necessário.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {flow.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3 md:gap-4">
                <div className="card-soft px-4 py-4 min-w-[150px] text-center bg-background">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary mx-auto">
                    <s.icon size={18} />
                  </span>
                  <p className="mt-2 text-sm font-semibold text-foreground">{s.label}</p>
                </div>
                {i < flow.length - 1 && <ArrowRight size={18} className="text-primary" />}
              </div>
            ))}
          </div>
        </div>

        {/* Commercial CTA */}
        <div className="mt-14 max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Conecte seus canais e <span className="gradient-text">responda mais rápido.</span>
          </h3>
          <p className="mt-3 text-muted-foreground leading-relaxed">
            Reduza o tempo de resposta, mantenha o histórico organizado e permita que sua equipe trabalhe em um único ambiente.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="#teste" className="btn-primary">Testar grátis por 7 dias <ArrowRight size={16} /></a>
            <a href="https://wa.me/5551996479050?text=Quero%20falar%20com%20um%20especialista%20AtendenteAi" target="_blank" rel="noreferrer" className="btn-secondary">
              Falar com um especialista
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PLANS ---------------- */
function SectionPlans() {
  const plans = [
    {
      name: "Start", price: 297, desc: "Ideal para quem está começando.",
      features: ["1 WhatsApp", "2 atendentes humanos", "1 agente IA", "2.000 mensagens de ia /mês", "500 áudios transcritos/mês", "Histórico 3 meses", "Respostas rápidas", "Resumo automático", "Transferência humano ↔ IA"],
      cta: "Começar agora", featured: false,
    },
    {
      name: "Profissional", price: 597, desc: "Para operações em crescimento.",
      features: ["3 WhatsApps", "5 atendentes humanos", "3 agentes IA", "6.000 mensagens de ia /mês", "1.500 áudios transcritos/mês", "Histórico 6 meses", "Resumo automático", "Transferência humano ↔ IA", "Relatórios básicos"],
      cta: "Começar agora", featured: true,
    },
    {
      name: "Empresarial", price: 997, desc: "Operações de alta demanda.",
      features: ["10 WhatsApps", "Atendentes ilimitados", "10 agentes IA", "Mensagens ilimitadas", "Áudios ilimitados", "Histórico 12 meses", "Transferência humano ↔ IA", "Relatórios avançados", "Integrações", "Prioridade no suporte"],
      cta: "Falar com especialista", featured: false,
    },
  ];
  return (
    <section id="planos" className="section-pad">
      <div className="container-page">
        <SectionHeader chip="Planos" title={<>Escolha o <span className="gradient-text">plano ideal.</span></>} subtitle="Mensalidade fixa. Sem cobrança por token." />
        <div className="mt-12 grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`card-soft p-7 flex flex-col relative ${
                p.featured ? "border-primary/40 shadow-[var(--shadow-elevated)] md:-translate-y-3 bg-gradient-to-b from-primary-soft to-background" : ""
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[11px] font-bold tracking-wider uppercase bg-gradient-to-r from-primary to-primary-dark text-primary-foreground rounded-full px-3 py-1 shadow-[var(--shadow-elevated)]">
                  <Star size={12} className="inline -mt-0.5 mr-1" /> Mais escolhido
                </span>
              )}
              <h3 className="text-xl font-bold text-foreground">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight text-foreground">R$ {p.price}</span>
                <span className="text-sm text-muted-foreground">/mês</span>
              </div>
              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-foreground">
                    <Check size={16} className="text-primary mt-0.5 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.cta === "Falar com especialista" ? "https://wa.me/5551996479050" : "#teste"}
                target={p.cta === "Falar com especialista" ? "_blank" : undefined}
                rel={p.cta === "Falar com especialista" ? "noreferrer" : undefined}
                className={`mt-7 ${p.featured ? "btn-primary" : "btn-secondary"} w-full`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PARTNERS ---------------- */
function SectionPartners() {
  const ideal = [
    { icon: Briefcase, label: "Consultores" },
    { icon: Handshake, label: "Representantes comerciais" },
    { icon: Users, label: "Vendedores" },
    { icon: Network, label: "Afiliados" },
  ];
  const benefits = ["Comissão recorrente", "White Label", "Painel próprio", "Material de apoio", "Escalabilidade", "Suporte brasileiro"];

  return (
    <section id="parceiros" className="section-pad bg-surface border-y border-border">
      <div className="container-page grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="chip">Parceiros</span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Construa sua própria <span className="gradient-text">operação SaaS.</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Transforme relacionamentos comerciais em receita recorrente.
          </p>

          <p className="mt-8 text-sm font-semibold text-foreground">Ideal para:</p>
          <div className="mt-3 grid grid-cols-2 gap-3">
            {ideal.map((i) => (
              <div key={i.label} className="card-soft px-4 py-3 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary-soft text-primary"><i.icon size={16} /></span>
                <span className="text-sm font-medium text-foreground">{i.label}</span>
              </div>
            ))}
          </div>

          <a href="https://wa.me/5551996479050?text=Quero%20ser%20parceiro%20AtendenteAi" target="_blank" rel="noreferrer" className="btn-primary mt-8">
            Quero ser parceiro
          </a>
        </div>

        <div className="card-soft p-8 bg-gradient-to-br from-primary-soft to-background">
          <h3 className="text-xl font-bold text-foreground">Benefícios do programa</h3>
          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-center gap-3 text-foreground">
                <Check size={18} className="text-primary shrink-0" /> {b}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function SectionFAQ() {
  return (
    <section id="faq" className="section-pad">
      <div className="container-page">
        <SectionHeader chip="FAQ" title={<>Perguntas <span className="gradient-text">frequentes</span></>} />
        <div className="mt-12"><FAQ /></div>
      </div>
    </section>
  );
}

/* ---------------- TRIAL FORM ---------------- */
function SectionTrial() {
  return (
    <section id="teste" className="section-pad bg-surface border-y border-border">
      <div className="container-page">
        <SectionHeader chip="Teste gratuito" title={<>Crie sua conta em <span className="gradient-text">menos de 1 minuto.</span></>} subtitle="7 dias grátis. Sem cartão de crédito." />
        <div className="mt-10"><TrialForm /></div>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function SectionFinalCTA() {
  return (
    <section className="section-pad">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary-dark p-10 md:p-16 text-center shadow-[var(--shadow-elevated)]">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground max-w-3xl mx-auto">
              Transforme seu WhatsApp em uma central de atendimento inteligente.
            </h2>
            <p className="mt-5 text-primary-foreground/85 max-w-2xl mx-auto text-lg">
              Experimente gratuitamente e descubra como sua empresa pode responder mais rápido, organizar melhor suas conversas e reduzir a perda de oportunidades.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="#teste" className="inline-flex items-center justify-center gap-2 rounded-xl bg-background text-foreground px-6 py-3.5 font-semibold hover:scale-[1.02] transition-transform">
                Quero testar grátis <ArrowRight size={16} />
              </a>
              <a href="https://wa.me/5551996479050" target="_blank" rel="noreferrer" className="btn-whatsapp">
                <Headphones size={18} /> Falar no WhatsApp
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/90">
              {["Teste gratuito por 7 dias", "Sem cartão de crédito", "Cancelamento simples", "Suporte brasileiro"].map((t) => (
                <li key={t} className="flex items-center gap-2"><Check size={16} /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
