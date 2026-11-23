export default function Financial() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-surface rounded-2xl aspect-[4/3] flex items-center justify-center text-muted text-sm">
            [Afbeelding]
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
              Financiele ondersteuning
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-brand leading-tight tracking-tight mb-6">
              {/* Heading placeholder */}
              &nbsp;
            </h2>
            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed">
                {/* Body text placeholder */}
                &nbsp;
              </p>
              <p className="text-base leading-relaxed">
                {/* Body text placeholder */}
                &nbsp;
              </p>
            </div>
            <a
              href="#"
              className="bg-accent hover:bg-accent-hover text-brand-dark font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2 transition-colors"
            >
              Ontdek financiele hulp
              <span className="bg-brand-dark text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
