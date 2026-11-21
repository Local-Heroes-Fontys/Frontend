const sports = [
  { label: "Teamsport", title: "Voetbal", cta: "Bekijk voetbal" },
  { label: "Watersport", title: "Zwemmen", cta: "Bekijk zwemmen" },
  { label: "Kunst & Beweging", title: "Dansen", cta: "Bekijk dansen" },
];

export default function Sports() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
          03 — Onze sporten
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-brand tracking-tight mb-2">
          {/* Heading placeholder */}
          &nbsp;
        </h2>
        <p className="text-base mb-12 max-w-lg leading-relaxed">
          {/* Subtitle placeholder */}
          &nbsp;
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {sports.map((sport) => (
            <div key={sport.title} className="bg-white rounded-2xl overflow-hidden">
              <div className="bg-surface aspect-[4/3] flex items-center justify-center text-muted text-sm">
                [Afbeelding]
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-1">
                  {sport.label}
                </p>
                <h3 className="text-xl font-bold text-brand mb-2">{sport.title}</h3>
                <p className="text-sm text-body mb-4 leading-relaxed">
                  {/* Description placeholder */}
                  &nbsp;
                </p>
                <a
                  href="#"
                  className="bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-full inline-flex items-center gap-2 transition-colors"
                >
                  {sport.cta} &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
