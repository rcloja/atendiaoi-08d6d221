import { MessageCircle } from "lucide-react";

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/5551996479050"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o time pelo WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.55)] transition-transform hover:scale-105 sm:px-5 sm:text-base"
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">Falar com o time</span>
      <span className="sm:hidden">Falar</span>
    </a>
  );
}
