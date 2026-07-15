import logoAsset from "@/assets/atendenteai-logo.png";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-semibold">
            <img src={logoAsset.url} alt="AtendenteAi" className="h-9 w-9 object-contain" />
            <span className="text-lg">AtendenteAi</span>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-md">
            Plataforma de atendimento para WhatsApp. Centralize conversas, organize
            seu histórico e responda mais rápido — com equipe humana e tecnologia
            trabalhando juntas.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Produto</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#recursos" className="hover:text-foreground">Recursos</a></li>
            <li><a href="#planos" className="hover:text-foreground">Planos</a></li>
            <li><a href="#parceiros" className="hover:text-foreground">Parceiros</a></li>
            <li><a href="#faq" className="hover:text-foreground">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="https://wa.me/5551996479050" target="_blank" rel="noreferrer" className="hover:text-foreground">WhatsApp (51) 99647-9050</a></li>
            <li><a href="/documentacao" className="hover:text-foreground">Documentação</a></li>
            <li><a href="https://admin.atendenteai.com.br" target="_blank" rel="noreferrer" className="hover:text-foreground">Login</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-page py-6 text-xs text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} AtendenteAi. Todos os direitos reservados.</p>
          <p>atendenteai.com.br</p>
        </div>
      </div>
    </footer>
  );
}
