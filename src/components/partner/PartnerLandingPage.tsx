import { PartnerHero } from "@/components/partner/PartnerHero";
import { PartnerOpportunity } from "@/components/partner/PartnerOpportunity";
import { PartnerCalculator } from "@/components/partner/PartnerCalculator";
import { PartnerPortfolio } from "@/components/partner/PartnerPortfolio";
import { PartnerUseCases } from "@/components/partner/PartnerUseCases";
import { PartnerBenefits } from "@/components/partner/PartnerBenefits";
import { PartnerAudience } from "@/components/partner/PartnerAudience";
import { PartnerHowItWorks } from "@/components/partner/PartnerHowItWorks";
import { PartnerFAQ } from "@/components/partner/PartnerFAQ";
import { PartnerLeadFormSection } from "@/components/partner/PartnerLeadFormSection";
import { PartnerFooter } from "@/components/partner/PartnerFooter";
import { FloatingWhatsAppButton } from "@/components/partner/FloatingWhatsAppButton";

import logo from "@/assets/atendenteai-logo.png";

export function PartnerLandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
          <a href="/" className="flex items-center gap-2">
            <img src={logo} alt="AtendenteAI" className="h-8 w-auto" />
          </a>
          <a
            href="#formulario"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90"
          >
            Ser parceiro
          </a>
        </div>
      </header>
      <main>
        <PartnerHero />
        <PartnerOpportunity />
        <PartnerCalculator />
        <PartnerPortfolio />
        <PartnerUseCases />
        <PartnerBenefits />
        <PartnerAudience />
        <PartnerHowItWorks />
        <PartnerFAQ />
        <PartnerLeadFormSection />
      </main>
      <PartnerFooter />
      <FloatingWhatsAppButton />
    </div>
  );
}
