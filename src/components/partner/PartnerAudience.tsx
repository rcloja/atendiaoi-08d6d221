const profiles = [
  "Representantes comerciais",
  "Consultores empresariais",
  "Agências de marketing",
  "Profissionais de tecnologia",
  "Vendedores B2B",
  "Afiliados com público empresarial",
  "Prestadores de serviço",
  "Pessoas com relacionamento com empresários locais",
];

export function PartnerAudience() {
  return (
    <section className="bg-surface/40 py-20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Para quem é essa oportunidade?</h2>
        </div>
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {profiles.map((p) => (
            <div
              key={p}
              className="rounded-xl border border-border bg-card px-5 py-4 text-sm font-medium transition hover:border-primary/40"
            >
              <span className="mr-2 text-primary">→</span>
              {p}
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-2xl text-center text-base text-muted-foreground">
          O parceiro ideal não precisa ser programador. Precisa entender empresas, relacionamento e
          oportunidade comercial.
        </p>
      </div>
    </section>
  );
}
