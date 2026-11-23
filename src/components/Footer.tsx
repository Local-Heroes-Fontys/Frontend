const columns = [
  {
    title: "Ontdekken",
    links: ["Sportactiviteiten", "Sportverenigingen", "Hoe werkt het?"],
  },
  {
    title: "Ondersteuning",
    links: ["Financiele hulp", "Meedoenbijdrage", "Veelgestelde vragen"],
  },
  {
    title: "Local Heroes",
    links: ["Over Local Heroes", "Voor sportverenigingen", "Contact"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <a href="/" className="text-2xl font-black leading-tight tracking-tight block mb-2">
              local<br />heroes.
            </a>
            <p className="text-sm text-muted">Een sport voor ieder kind.</p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-muted hover:text-white text-sm transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted">
          <p>&copy; 2026 Local Heroes</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacyverklaring</a>
            <a href="#" className="hover:text-white transition-colors">Toegankelijkheid</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
