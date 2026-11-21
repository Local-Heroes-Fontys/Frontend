export default function CallToAction() {
  return (
    <section className="bg-brand-dark text-white py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Ieder kind verdient een kans
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight">
            {/* Heading placeholder */}
            &nbsp;
          </h2>
          <p className="text-base text-muted mt-4 max-w-md leading-relaxed">
            {/* Subtitle placeholder */}
            &nbsp;
          </p>
        </div>
        <a
          href="#"
          className="bg-accent hover:bg-accent-hover text-brand-dark font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors shrink-0"
        >
          Ontdek het sportaanbod
          <span className="bg-brand-dark text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">&rarr;</span>
        </a>
      </div>
    </section>
  );
}
