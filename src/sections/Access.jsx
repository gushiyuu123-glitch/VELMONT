import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";

function Access() {
  return (
    <section
      id="access"
      className="bg-[linear-gradient(to_bottom,#0d0e10_0%,#0b0c0e_100%)] px-5 py-24 sm:px-6 md:py-28 lg:py-32"
    >
      <div className="container-shell">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:items-center lg:gap-16 xl:gap-18">
          <InViewReveal
            className="group overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.03] shadow-[0_24px_64px_rgba(0,0,0,0.18)]"
            direction="up"
            distance={22}
            duration={1200}
            threshold={0.14}
          >
            <div className="relative aspect-[16/10]">
              <img
                src="/images/storefront.png"
                alt="VELMONT showroom exterior"
                className="h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.022]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,12,14,0.56)_0%,rgba(11,12,14,0.16)_42%,rgba(11,12,14,0.02)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,12,14,0.24)_0%,rgba(11,12,14,0.08)_34%,rgba(11,12,14,0.02)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/42">
                  Visit VELMONT
                </p>
                <p className="mt-2 max-w-[18ch] font-serif text-[24px] leading-tight text-white/90 sm:text-[28px] lg:text-[30px]">
                  A place prepared for more considered visits.
                </p>
              </div>
            </div>
          </InViewReveal>

          <div className="max-w-[680px]">
            <InViewReveal
              as="p"
              className="eyebrow mb-4"
              direction="left"
              distance={14}
              duration={1000}
              threshold={0.2}
            >
              Access
            </InViewReveal>

            <h2 className="font-serif text-[40px] leading-[1.01] text-velmont-stone sm:text-[48px] lg:text-[58px]">
              <InViewLines
                lines={["Prepared for Visit,", "Designed for Calm Viewing."]}
                duration={1200}
                distance={20}
                lineDelay={95}
                threshold={0.2}
              />
            </h2>

            <InViewReveal
              as="p"
              className="mt-7 max-w-[48ch] text-[15px] leading-8 text-white/62 sm:text-base md:text-[16px] md:leading-9"
              direction="up"
              distance={16}
              duration={1150}
              threshold={0.2}
            >
              ご来店は、ただ場所を訪れるためではなく、一台と落ち着いて向き合うための時間として整えています。
              静かな空間の中で、その車を選ぶ意味まで自然に感じられるようご案内しています。
            </InViewReveal>

            <InViewReveal
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
              direction="up"
              distance={14}
              duration={1000}
              threshold={0.18}
            >
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] px-6 text-[13px] font-medium tracking-[0.08em] text-white/84 transition-all duration-500 hover:border-white/18 hover:bg-white/[0.09] hover:text-white"
              >
                Google Maps
                <span aria-hidden="true" className="ml-2">
                  ↗
                </span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] text-white/82 transition-colors duration-500 hover:text-white"
              >
                来店予約へ進む
                <span aria-hidden="true" className="text-white/44">
                  →
                </span>
              </a>
            </InViewReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Access;