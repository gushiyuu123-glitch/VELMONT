import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";

function Showroom() {
  return (
    <section
      id="showroom"
      className="bg-[linear-gradient(to_bottom,#18191c_0%,#141518_50%,#111214_100%)] px-5 py-28 sm:px-6 md:py-32 lg:py-40"
    >
      <div className="container-shell">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-24 xl:gap-28">
          <div className="max-w-[560px]">
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

            <h2 className="font-serif text-[40px] leading-[1.01] text-velmont-stone sm:text-[48px] lg:text-[60px]">
              <InViewLines
                lines={["A Space Designed", "for Quiet Decisions."]}
                duration={1240}
                distance={20}
                lineDelay={95}
                threshold={0.22}
              />
            </h2>

            <InViewReveal
              as="p"
              className="mt-8 max-w-[37ch] text-[15px] leading-8 text-white/62 sm:text-base md:text-[17px] md:leading-9"
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
                className="inline-flex items-center gap-3 text-[13px] font-medium tracking-[0.08em] text-white/82 transition-colors duration-500 hover:text-white"
              >
                来店予約へ進む
                <span aria-hidden="true" className="text-white/46">
                  →
                </span>
              </a>
            </InViewReveal>
          </div>

          <InViewReveal
            className="group relative overflow-hidden rounded-[30px] border border-white/8 bg-white/[0.03] shadow-[0_24px_70px_rgba(0,0,0,0.22)]"
            direction="up"
            distance={24}
            duration={1280}
            threshold={0.14}
          >
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[5/6]">
              <img
                src="/images/showroom.png"
                alt="VELMONT showroom interior"
                className="h-full w-full object-cover object-center transition-transform duration-[1700ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.028]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,18,20,0.48)_0%,rgba(17,18,20,0.14)_36%,rgba(17,18,20,0.04)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,18,20,0.2)_0%,rgba(17,18,20,0.05)_32%,rgba(17,18,20,0.02)_100%)]" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-7 lg:p-8">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/46">
                  Visit the Space
                </p>
                <p className="mt-3 max-w-[20ch] font-serif text-[24px] leading-tight text-white/90 sm:text-[28px] lg:text-[30px]">
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