import { Mail, MessageCircle } from "lucide-react";
import logo from "@/assets/atendenteai-logo.png";

export function PartnerFooter() {
  return (
    <footer className="border-t border-border bg-surface/60">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-semibold">
              <img src={logo} alt="AtendenteAi" className="h-9 w-9 object-contain" />
              <span className="text-lg tracking-tight">AtendenteAi</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Inteligência artificial para atendimento empresarial no WhatsApp.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Contato</h4>
            <div className="mt-3 space-y-2 text-sm text-muted-foreground">
              <a
                href="mailto:parceiros@atendenteai.com.br"
                className="flex items-center gap-2 hover:text-primary"
              >
                <Mail className="h-4 w-4" /> parceiros@atendenteai.com.br
              </a>
              <a
                href="https://wa.me/5551996479050"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp do time
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold">Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-primary">Termos de Uso</a></li>
              <li>
                <a
                  href="https://wa.me/5551996479050"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  Falar com o time
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AtendenteAi · Todos os direitos reservados
        </div>
      </div>
    </footer>
  );
}
