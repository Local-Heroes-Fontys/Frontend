const steps = [
  { number: "01", title: "Ontdek een sport", cta: "Bekijk sporten" },
  { number: "02", title: "Bekijk de mogelijkheden", cta: "Bekijk financiele hulp" },
  { number: "03", title: "Meld je kind aan", cta: "Bekijk sporten" },
];

export default function Steps() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
          02 — Hoe werkt het?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-brand tracking-tight mb-12">
          {/* Heading placeholder */}
          &nbsp;
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-2xl p-8 flex flex-col">
              <span className="bg-accent text-brand-dark text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center mb-6">
                {step.number}
              </span>
              <h3 className="text-xl font-bold text-brand mb-3">{step.title}</h3>
              <p className="text-sm text-body mb-6 flex-1 leading-relaxed">
                {/* Description placeholder */}
                &nbsp;
              </p>
              <a
                href="#"
                className="text-brand font-semibold text-sm flex items-center gap-2 hover:underline"
              >
                {step.cta}
                <span className="bg-brand text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">&rarr;</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
