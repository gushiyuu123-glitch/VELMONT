import { useEffect, useState } from "react";
import Reveal from "./Reveal";

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
    <header className="absolute inset-x-0 top-0 z-40 md:hidden">
      <div className="container-shell flex items-center justify-between py-5">
        <Reveal
          as="a"
          href="#"
          aria-label="VELMONT ホームへ"
          className="relative z-50 font-serif text-[1.02rem] uppercase tracking-[0.18em] text-[rgba(243,241,237,0.92)]"
          delay={120}
          duration={1100}
          y={10}
          blur={1}
        >
          VELMONT
        </Reveal>
<button
  type="button"
  aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
  aria-expanded={menuOpen}
  aria-controls="mobile-nav"
  onClick={() => setMenuOpen((prev) => !prev)}
  className="relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/18 backdrop-blur-[4px]"
>
  <span className="sr-only">menu</span>

  <span className="relative block h-4 w-5">
    <span
      className={`absolute left-0 top-0 h-px w-5 bg-white transition-all duration-500 ${
        menuOpen ? "translate-y-[7px] rotate-45" : ""
      }`}
    />
    <span
      className={`absolute left-0 top-[7px] h-px w-5 bg-white/90 transition-all duration-500 ${
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

      <div className={menuOpen ? "pointer-events-auto" : "pointer-events-none"}>
        <div
          className={`absolute inset-0 h-screen bg-black/42 backdrop-blur-[6px] transition-opacity duration-500 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={handleClose}
          aria-hidden="true"
        />

        <nav
          id="mobile-nav"
          aria-label="モバイルナビゲーション"
          className={`absolute inset-x-0 top-0 min-h-screen bg-[rgba(10,11,13,0.92)] px-7 pb-10 pt-28 transition-all duration-500 ${
            menuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-3 opacity-0"
          }`}
        >
          <div className="border-t border-white/8 pt-8">
            <ul className="flex flex-col gap-6">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className={`transition-all duration-500 ${
                    menuOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-2 opacity-0"
                  }`}
                  style={{ transitionDelay: `${120 + index * 55}ms` }}
                >
                  <a
                    href={item.href}
                    onClick={handleClose}
                    className="block text-[0.92rem] font-medium tracking-[0.08em] text-white/78 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div
              className={`mt-10 border-t border-white/6 pt-6 transition-all duration-500 ${
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
              style={{ transitionDelay: "460ms" }}
            >
              <p className="max-w-[18ch] text-[11px] leading-6 tracking-[0.08em] text-white/34">
                Quietly curated for more considered decisions.
              </p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default HeaderSp;