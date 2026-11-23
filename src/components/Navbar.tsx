export default function Navbar() {
  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="/" className="text-brand font-black text-xl leading-tight tracking-tight">
          local<br />heroes.
        </a>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-brand">
          <li><a href="#" className="hover:text-brand-dark">Home</a></li>
          <li><a href="#" className="hover:text-brand-dark">Sporten ontdekken</a></li>
          <li><a href="#" className="hover:text-brand-dark">Financiele hulp</a></li>
          <li><a href="#" className="hover:text-brand-dark">Hoe werkt het?</a></li>
        </ul>

        <a
          href="#"
          className="bg-accent hover:bg-accent-hover text-brand-dark text-sm font-semibold px-5 py-2.5 rounded-full flex items-center gap-2 transition-colors"
        >
          Bekijk sportaanbod
          <span className="bg-brand-dark text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">&rarr;</span>
        </a>
      </div>
    </nav>
  );
}
