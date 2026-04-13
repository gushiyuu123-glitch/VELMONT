import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";

function ShowroomSp() {
  return (
    <section
      id="showroom"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#18191c_0%,#141518_48%,#111214_100%)] px-5 pt-28 pb-24 md:hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
        <div className="absolute right-[10%] top-[14%] h-[220px] w-[220px] rounded-full bg-white/[0.014] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[150px] bg-[linear-gradient(to_top,rgba(0,0,0,0.16),rgba(0,0,0,0))]" />
      </div>

      <div className="container-shell relative">
        <div className="mx-auto max-w-[308px] text-center">
          <InViewReveal
            as="p"
            className="eyebrow mb-4 justify-center text-[10px] tracking-[0.22em] text-white/40"
            direction="up"
            distance={12}
            duration={1000}
            threshold={0.22}
          >
            Showroom
          </InViewReveal>

          <h2 className="mx-auto max-w-[11ch] font-serif text-[32px] leading-[1.03] tracking-[-0.02em] text-[rgba(243,241,237,0.94)]">
            <InViewLines
              lines={["A Space", "Designed", "for Quiet", "Decisions."]}
              duration={1220}
              distance={18}
              lineDelay={90}
              threshold={0.22}
            />
          </h2>

          <InViewReveal
            as="p"
            className="mx-auto mt-7 max-w-[27ch] text-[13px] leading-[1.95] text-white/56"
            direction="up"
            distance={16}
            duration={1120}
            threshold={0.2}
          >
            車を見る時間も、相談する時間も、ただ情報を受け取るためのものではなく、
            その一台と静かに向き合うための体験として整えること。
            VELMONT は、空間そのものまで含めて設計しています。
          </InViewReveal>
        </div>

        <InViewReveal
          className="mx-auto mt-12 max-w-[420px]"
          direction="up"
          distance={22}
          duration={1240}
          threshold={0.14}
        >
          <article className="group relative overflow-hidden rounded-[24px] border border-white/7 bg-white/[0.016] shadow-[0_18px_54px_rgba(0,0,0,0.18)]">
            <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px bg-white/10" />
            <div className="pointer-events-none absolute inset-x-[14%] bottom-[-18px] z-0 h-[44px] rounded-full bg-black/18 blur-2xl" />

            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src="/images/showroom.png"
                alt="VELMONT showroom interior"
                className="h-full w-full object-cover object-center transition-transform duration-[1600ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-active:scale-[1.02]"
              />

              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,18,20,0.54)_0%,rgba(17,18,20,0.16)_34%,rgba(17,18,20,0.04)_100%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,18,20,0.18)_0%,rgba(17,18,20,0.05)_30%,rgba(17,18,20,0.01)_100%)]" />

              <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/38">
                  Visit the Space
                </p>
                <p className="mt-3 max-w-[16ch] font-serif text-[24px] leading-[1.08] tracking-[-0.01em] text-white/90">
                  Quietly composed for more considered decisions.
                </p>
              </div>
            </div>
          </article>
        </InViewReveal>

        <InViewReveal
          className="mt-8 flex justify-center"
          direction="up"
          distance={12}
          duration={960}
          threshold={0.18}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-b border-white/10 pb-1 text-[11px] font-medium tracking-[0.1em] text-white/72 transition-colors duration-500 hover:text-white"
          >
            来店予約へ進む
            <span aria-hidden="true" className="text-white/34">
              →
            </span>
          </a>
        </InViewReveal>
      </div>
    </section>
  );
}

export default ShowroomSp;