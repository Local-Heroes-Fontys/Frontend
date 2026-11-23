export default function Hero() {
  return (
    <section className="bg-brand text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-4">
            Sport ontdekken. Kosten bekijken. Hulp vinden.
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 tracking-tight">
            {/* Heading placeholder */}
            &nbsp;
          </h1>
          <p className="text-base text-muted mb-8 max-w-md leading-relaxed">
            {/* Subtitle placeholder */}
            &nbsp;
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <a
              href="#"
              className="bg-accent hover:bg-accent-hover text-brand-dark font-semibold px-6 py-3 rounded-full flex items-center gap-2 transition-colors"
            >
              Ontdek sportactiviteiten
              <span className="bg-brand-dark text-white rounded-full w-7 h-7 flex items-center justify-center text-sm">&rarr;</span>
            </a>
            <a href="#" className="text-muted hover:text-white text-sm font-medium">
              Bekijk welke financiele hulp er is &rarr;
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="bg-brand-dark/30 rounded-2xl aspect-[4/3] flex items-center justify-center text-muted text-sm">
            [Hero afbeelding]
          </div>
          <div className="absolute bottom-4 right-4 bg-white text-brand rounded-xl p-4 shadow-lg max-w-[200px]">
            <p className="text-xs font-semibold text-accent uppercase mb-1">Sporten voor kinderen</p>
            <p className="text-sm font-bold text-brand">&nbsp;</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-6">
        <p className="text-xs font-semibold text-muted uppercase tracking-widest">
          Ontdekken kan zonder account
        </p>
      </div>
    </section>
  );
}
