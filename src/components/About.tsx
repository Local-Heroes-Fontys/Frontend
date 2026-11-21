export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted mb-4">
          01 — Waarom Local Heroes?
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand leading-tight tracking-tight mb-4">
              {/* Heading placeholder */}
              &nbsp;
            </h2>
            <div className="w-16 h-1 bg-accent rounded"></div>
          </div>

          <div className="space-y-4">
            <p className="text-base leading-relaxed">
              {/* Body text placeholder */}
              &nbsp;
            </p>
            <p className="text-base leading-relaxed">
              {/* Body text placeholder */}
              &nbsp;
            </p>
            <a href="#" className="text-brand font-semibold hover:underline inline-block mt-2">
              Ontdek hoe Local Heroes werkt &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
