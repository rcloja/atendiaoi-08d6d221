import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/atendenteai-logo.png";

const NAV: { label: string; href: string; external?: boolean }[] = [
  { label: "Recursos", href: "/#recursos" },
  { label: "Planos", href: "/#planos" },
  { label: "Parceiros", href: "/#parceiros" },
  { label: "Documentação", href: "/documentacao" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-background/60 backdrop-blur-sm"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-2 font-semibold text-foreground">
          <img src={logoAsset.url} alt="AtendenteAi" className="h-9 w-9 object-contain" />
          <span className="text-lg tracking-tight">AtendenteAi</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noreferrer" : undefined}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://admin.atendenteai.com.br"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            Entrar
          </a>
          <a href="#teste" className="btn-primary text-sm py-2.5 px-4">
            Quero testar grátis
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-border bg-background"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-page py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noreferrer" : undefined}
                className="py-2.5 text-base font-medium text-foreground"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://admin.atendenteai.com.br"
              target="_blank"
              rel="noreferrer"
              className="py-2.5 text-base font-medium text-foreground"
            >
              Entrar
            </a>
            <a href="#teste" className="btn-primary mt-2" onClick={() => setOpen(false)}>
              Quero testar grátis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
