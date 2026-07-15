import { PartnerLeadForm } from "./PartnerLeadForm";

export function PartnerLeadFormSection() {
  return (
    <section id="formulario" className="py-20">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Quero ser parceiro AtendenteAI</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Preencha seus dados e nossa equipe entrará em contato.
          </p>
        </div>
        <div className="mt-10">
          <PartnerLeadForm />
        </div>
      </div>
    </section>
  );
}
