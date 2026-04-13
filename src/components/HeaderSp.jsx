import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import RevealX from "./RevealX";

const navItems = [
  { href: "#values", label: "Values" },
  { href: "#inventory", label: "Inventory" },
  { href: "#about", label: "About" },
  { href: "#showroom", label: "Showroom" },
  { href: "#contact", label: "Contact" },
  { href: "#access", label: "Access" },
];

function HeaderSp() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleClose = () => setMenuOpen(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container-shell flex items-center justify-between py-5 sm:py-6 lg:py-8">
        <Reveal
          as="a"
          href="#"
          aria-label="VELMONT ホームへ"
          className="relative z-40 font-serif text-[1.05rem] uppercase tracking-logo text-velmont-stone sm:text-[1.18rem] lg:text-[1.28rem]"
          delay={120}
          duration={1100}
          y={12}
          blur={1}
        >
          VELMONT
        </Reveal>

        {/* PC Navigation */}
        <nav aria-label="メインナビゲーション" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-8 text-[12px] lg:text-[13px] font-medium tracking-[0.06em] text-white/80">
            {navItems.map((item, index) => (
              <li key={item.href} className="overflow-hidden">
                <RevealX delay={220 + index * 120} duration={580} x={-24}>
                  <a
                    className="block transition-colors duration-500 hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </RevealX>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="relative z-40 inline-flex h-11 w-11 items-center justify-center md:hidden"
        >
          <span className="sr-only">menu</span>

          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-px w-5 bg-white transition-all duration-500 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-px w-5 bg-white transition-all duration-500 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-px w-5 bg-white transition-all duration-500 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Panel */}
      <div
        className={`md:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 h-screen bg-black/45 backdrop-blur-[6px] transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
          aria-hidden="true"
        />

        <nav
          id="mobile-nav"
          aria-label="モバイルナビゲーション"
          className={`absolute inset-x-0 top-0 min-h-screen bg-[rgba(10,10,11,0.92)] px-7 pb-10 pt-28 transition-all duration-500 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-6 border-t border-white/10 pt-8">
            {navItems.map((item, index) => (
              <li
                key={item.href}
                className={`transition-all duration-500 ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-3 opacity-0"
                }`}
                style={{ transitionDelay: `${120 + index * 55}ms` }}
              >
                <a
                  href={item.href}
                  onClick={handleClose}
                  className="block text-[0.95rem] font-medium tracking-[0.08em] text-white/86 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderSp;