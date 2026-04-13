import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";

function Showroom() {
  return (
    <section
      id="showroom"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#18191c_0%,#141518_50%,#111214_100%)] px-5 py-32 sm:px-6 md:py-36 lg:py-44"
    >
      {/* subtle atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
        <div className="absolute right-[14%] top-[20%] h-[320px] w-[320px] rounded-full bg-white/[0.02] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[180px] bg-[linear-gradient(to_top,rgba(0,0,0,0.18),rgba(0,0,0,0))]" />
      </div>

      <div className="container-shell relative">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] lg:items-center lg:gap-24 xl:gap-28">
          <div className="max-w-[520px]">
            <InViewReveal
              as="p"
              className="eyebrow mb-4"
              direction="right"
              distance={14}
              duration={1000}
              threshold={0.22}
            >
              Showroom
            </InViewReveal>

            <h2 className="font-serif text-[42px] leading-[0.98] tracking-[-0.02em] text-velmont-stone sm:text-[50px] lg:text-[66px]">
              <InViewLines
                lines={["A Space Designed", "for Quiet Decisions."]}
                duration={1260}
                distance={20}
                lineDelay={95}
                threshold={0.22}
              />
            </h2>

            <InViewReveal
              as="p"
              className="mt-8 max-w-[34ch] text-[15px] leading-8 text-white/62 sm:text-base md:text-[17px] md:leading-9"
              direction="right"
              distance={18}
              duration={1100}
              threshold={0.22}
            >
              車を見る時間も、相談する時間も、ただ情報を受け取るためのものではなく、
              その一台と静かに向き合うための体験として整えること。
              VELMONT は、落ち着いて選ぶための空間そのものまで含めて設計しています。
            </InViewReveal>

            <InViewReveal
              className="mt-12"
              direction="right"
              distance={14}
              duration={950}
              threshold={0.18}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-3 border-b border-white/16 pb-1 text-[13px] font-medium tracking-[0.08em] text-white/84 transition-colors duration-500 hover:text-white"
              >
                来店予約へ進む
                <span aria-hidden="true" className="text-white/46">
                  →
                </span>
              </a>
            </InViewReveal>
          </div>

          <InViewReveal
            className="group relative overflow-hidden rounded-[24px] border border-white/8 bg-white/[0.03] shadow-[0_28px_90px_rgba(0,0,0,0.26)]"
            direction="up"
            distance={24}
            duration={1280}
            threshold={0.14}
          >
            {/* top highlight */}
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-white/14" />

            {/* bottom mass */}
            <div className="pointer-events-none absolute inset-x-[10%] bottom-[-28px] z-0 h-[64px] rounded-full bg-black/24 blur-2xl" />

            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[7/8]">
              <img
                src="/images/showroom.png"
                alt="VELMONT showroom interior"
                className="h-full w-full object-cover object-center transition-transform duration-[1800ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.032]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,18,20,0.58)_0%,rgba(17,18,20,0.18)_34%,rgba(17,18,20,0.05)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,18,20,0.22)_0%,rgba(17,18,20,0.06)_30%,rgba(17,18,20,0.02)_100%)]" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-9">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/46">
                  Visit the Space
                </p>
                <p className="mt-3 max-w-[18ch] font-serif text-[26px] leading-[1.08] text-white/90 sm:text-[30px] lg:text-[34px]">
                  Quietly composed for more considered decisions.
                </p>
              </div>
            </div>
          </InViewReveal>
        </div>
      </div>
    </section>
  );
}

export default Showroom;