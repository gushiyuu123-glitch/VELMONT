import InViewReveal from "./InViewReveal";

function FooterSp() {
  return (
    <footer
      className="bg-[#0a0b0d] px-5 pt-24 pb-20 md:hidden"
      aria-label="VELMONT フッター"
    >
      <div className="container-shell">
        <div className="border-t border-white/7 pt-16">
          <div className="flex flex-col items-center text-center">
            <InViewReveal
              as="a"
              href="#"
              aria-label="VELMONT トップへ戻る"
              className="font-serif text-[2.2rem] leading-none tracking-[-0.03em] text-[rgba(243,241,237,0.94)]"
              direction="up"
              distance={14}
              duration={1100}
              threshold={0.08}
            >
              VELMONT
            </InViewReveal>

            <InViewReveal
              as="p"
              className="mt-5 max-w-[24ch] text-[12px] leading-6 text-white/42"
              direction="up"
              distance={12}
              duration={1000}
              threshold={0.08}
            >
              静かな信頼と精度で、
              一台と向き合う時間を整える。
            </InViewReveal>

            <InViewReveal
              as="nav"
              aria-label="フッターナビゲーション"
              className="mt-10 w-full"
              direction="up"
              distance={14}
              duration={1100}
              threshold={0.08}
            >
              <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-[10px] uppercase tracking-[0.14em] text-white/36">
                <li>
                  <a href="#inventory" className="transition-colors duration-500 hover:text-white/78">
                    Inventory
                  </a>
                </li>
                <li>
                  <a href="#about" className="transition-colors duration-500 hover:text-white/78">
                    About
                  </a>
                </li>
                <li>
                  <a href="#showroom" className="transition-colors duration-500 hover:text-white/78">
                    Showroom
                  </a>
                </li>
                <li>
                  <a href="#contact" className="transition-colors duration-500 hover:text-white/78">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#access" className="transition-colors duration-500 hover:text-white/78">
                    Access
                  </a>
                </li>
              </ul>
            </InViewReveal>

            <InViewReveal
              className="mt-10"
              direction="up"
              distance={12}
              duration={1000}
              threshold={0.08}
            >
              <a
                href="https://gushikendesign.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GUSHIKEN DESIGN を開く"
                className="inline-flex items-center gap-2 border-b border-white/10 pb-1 text-[10px] uppercase tracking-[0.14em] text-white/40 transition-colors duration-500 hover:text-white/78"
              >
                GUSHIKEN DESIGN
                <span aria-hidden="true" className="text-white/28">
                  ↗
                </span>
              </a>
            </InViewReveal>

            <InViewReveal
              as="p"
              className="mt-14 text-[10px] tracking-[0.1em] text-white/20"
              direction="up"
              distance={12}
              duration={1000}
              threshold={0.08}
            >
              © 2026 VELMONT. Designed by GUSHIKEN DESIGN.
            </InViewReveal>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSp;