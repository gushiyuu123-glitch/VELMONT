import InViewReveal from "./InViewReveal";

function Footer() {
  return (
    <footer className="bg-[#0a0b0d] px-5 pt-28 pb-28 sm:px-6 md:pt-36 md:pb-32 lg:pt-44 lg:pb-40">
      <div className="container-shell">
        <div className="border-t border-white/8 pt-28 md:pt-36 lg:pt-44">
          <div className="flex flex-col items-center text-center">
            <InViewReveal
              as="a"
              href="#"
              className="font-serif text-[2.35rem] leading-none tracking-[-0.03em] text-velmont-stone sm:text-[3rem] md:text-[3.9rem] lg:text-[4.8rem]"
              direction="up"
              distance={14}
              duration={1100}
              threshold={0.08}
            >
              VELMONT
            </InViewReveal>

            <InViewReveal
              as="nav"
              aria-label="フッターナビゲーション"
              className="mt-16 w-full md:mt-20 lg:mt-24"
              direction="up"
              distance={14}
              duration={1100}
              threshold={0.08}
            >
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-[11px] uppercase tracking-[0.16em] text-white/38 sm:gap-x-14 sm:text-[12px] md:gap-x-18 lg:gap-x-24">
                <li>
                  <a
                    href="#inventory"
                    className="transition-colors duration-500 hover:text-white/78"
                  >
                    Inventory
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="transition-colors duration-500 hover:text-white/78"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#showroom"
                    className="transition-colors duration-500 hover:text-white/78"
                  >
                    Showroom
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="transition-colors duration-500 hover:text-white/78"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </InViewReveal>

            <InViewReveal
              as="p"
              className="mt-24 text-[10px] tracking-[0.1em] text-white/20 md:mt-28 lg:mt-32"
              direction="up"
              distance={12}
              duration={1000}
              threshold={0.08}
            >
              © 2026 VELMONT
            </InViewReveal>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;