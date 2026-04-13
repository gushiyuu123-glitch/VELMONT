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

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 hidden md:block">
      <div className="container-shell flex items-center justify-between py-6 lg:py-8">
        <Reveal
          as="a"
          href="#"
          aria-label="VELMONT ホームへ"
          className="font-serif text-[1.16rem] uppercase tracking-[0.18em] text-[rgba(243,241,237,0.92)] lg:text-[1.26rem]"
          delay={120}
          duration={1100}
          y={12}
          blur={1}
        >
          VELMONT
        </Reveal>

        <nav aria-label="メインナビゲーション">
          <ul className="flex items-center gap-7 lg:gap-8 text-[12px] lg:text-[13px] font-medium tracking-[0.06em] text-white/74">
            {navItems.map((item, index) => (
              <li key={item.href} className="overflow-hidden">
                <RevealX delay={220 + index * 110} duration={560} x={-20}>
                  <a
                    className="block transition-colors duration-500 hover:text-white/96"
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </RevealX>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;