import Reveal from "./Reveal";
import RevealX from "./RevealX";

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="container-shell flex items-center justify-between py-6 lg:py-8">
        <Reveal
          as="a"
          href="#"
          aria-label="VELMONT ホームへ"
          className="font-serif text-[1.15rem] uppercase tracking-logo text-velmont-stone sm:text-[1.28rem]"
          delay={120}
          duration={1100}
          y={12}
          blur={1}
        >
          VELMONT
        </Reveal>

        <nav aria-label="メインナビゲーション" className="hidden md:block">
          <ul className="flex items-center gap-8 text-[13px] font-medium tracking-[0.06em] text-white/80">
            <li className="overflow-hidden">
              <RevealX delay={220} duration={580} x={-24}>
                <a
                  className="block transition-colors duration-500 hover:text-white"
                  href="#values"
                >
                  Values
                </a>
              </RevealX>
            </li>

            <li className="overflow-hidden">
              <RevealX delay={340} duration={580} x={-24}>
                <a
                  className="block transition-colors duration-500 hover:text-white"
                  href="#inventory"
                >
                  Inventory
                </a>
              </RevealX>
            </li>

            <li className="overflow-hidden">
              <RevealX delay={460} duration={580} x={-24}>
                <a
                  className="block transition-colors duration-500 hover:text-white"
                  href="#about"
                >
                  About
                </a>
              </RevealX>
            </li>

            <li className="overflow-hidden">
              <RevealX delay={580} duration={580} x={-24}>
                <a
                  className="block transition-colors duration-500 hover:text-white"
                  href="#showroom"
                >
                  Showroom
                </a>
              </RevealX>
            </li>

            <li className="overflow-hidden">
              <RevealX delay={700} duration={580} x={-24}>
                <a
                  className="block transition-colors duration-500 hover:text-white"
                  href="#contact"
                >
                  Contact
                </a>
              </RevealX>
            </li>

            <li className="overflow-hidden">
              <RevealX delay={820} duration={580} x={-24}>
                <a
                  className="block transition-colors duration-500 hover:text-white"
                  href="#access"
                >
                  Access
                </a>
              </RevealX>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;