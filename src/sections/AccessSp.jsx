import InViewReveal from "../components/InViewReveal";

function AccessSp() {
  return (
    <section
      id="access"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#0d0e10_0%,#0b0c0e_100%)] px-5 pt-24 pb-14 md:hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
        <div className="absolute right-[6%] top-[14%] h-[180px] w-[180px] rounded-full bg-white/[0.012] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[120px] bg-[linear-gradient(to_top,rgba(0,0,0,0.16),rgba(0,0,0,0))]" />
      </div>

      <div className="container-shell relative">
        <div className="mx-auto max-w-[420px]">
          <InViewReveal
            as="p"
            className="eyebrow mb-4 text-[10px] tracking-[0.2em] text-white/38"
            direction="up"
            distance={12}
            duration={1000}
            threshold={0.2}
          >
            Access
          </InViewReveal>

          <InViewReveal
            as="h2"
            className="max-w-[9.8em] font-serif text-[30px] leading-[1.08] tracking-[-0.03em] text-[rgba(243,241,237,0.94)]"
            direction="up"
            distance={18}
            duration={1180}
            threshold={0.2}
          >
            Prepared for Visit,
            <br />
            Designed for
            <br />
            Calm Viewing.
          </InViewReveal>

          <InViewReveal
            as="p"
            className="mt-6 max-w-[34ch] text-[13px] leading-[1.9] text-white/56"
            direction="up"
            distance={16}
            duration={1120}
            threshold={0.2}
          >
            ご来店は、ただ場所を訪れるためではなく、
            一台と落ち着いて向き合うための時間として整えています。
            静かな空間の中で、その車を選ぶ意味まで自然に感じられるようご案内しています。
          </InViewReveal>
        </div>

        <InViewReveal
          className="mx-auto mt-11 max-w-[420px]"
          direction="up"
          distance={22}
          duration={1200}
          threshold={0.14}
        >
          <article className="group overflow-hidden rounded-[24px] border border-white/7 bg-white/[0.016] shadow-[0_18px_54px_rgba(0,0,0,0.18)]">
            <div className="relative aspect-[16/10]">
              <img
                src="/images/storefront.png"
                alt="VELMONT showroom exterior"
                className="h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-active:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(11,12,14,0.52)_0%,rgba(11,12,14,0.14)_42%,rgba(11,12,14,0.02)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,12,14,0.18)_0%,rgba(11,12,14,0.06)_34%,rgba(11,12,14,0.01)_100%)]" />

              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.15em] text-white/38">
                  Visit VELMONT
                </p>
                <p className="mt-3 max-w-[17ch] font-serif text-[22px] leading-[1.1] tracking-[-0.01em] text-white/90">
                  A place prepared for more considered visits.
                </p>
              </div>
            </div>
          </article>
        </InViewReveal>

        <InViewReveal
          className="mx-auto mt-7 max-w-[420px]"
          direction="up"
          distance={14}
          duration={1000}
          threshold={0.18}
        >
          <div className="flex flex-col items-start gap-3">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex h-[40px] min-w-[160px] items-center justify-center rounded-full
                border border-white/16 bg-white/[0.038]
                px-5 text-[11px] font-medium tracking-[0.08em] text-white/78
                backdrop-blur-[6px]
                shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]
                transition-all duration-500
                hover:bg-white/[0.05]
                hover:border-white/22
                active:scale-[0.985]
              "
            >
              Google Maps
              <span aria-hidden="true" className="ml-2">
                ↗
              </span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 border-b border-white/10 pb-1 text-[11px] font-medium tracking-[0.1em] text-white/72 transition-colors duration-500 hover:text-white"
            >
              来店予約へ進む
              <span aria-hidden="true" className="text-white/34">
                →
              </span>
            </a>
          </div>
        </InViewReveal>
      </div>
    </section>
  );
}

export default AccessSp;