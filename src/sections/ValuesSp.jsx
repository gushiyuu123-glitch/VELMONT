import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";

function CrownIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10 48H54" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" />
      <path
        d="M14 46L20 22L32 34L44 18L50 46"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="22" r="2.1" fill="currentColor" />
      <circle cx="32" cy="34" r="2.1" fill="currentColor" />
      <circle cx="44" cy="18" r="2.1" fill="currentColor" />
      <circle cx="50" cy="46" r="2.1" fill="currentColor" />
      <path
        d="M18 46H46"
        stroke="currentColor"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.62"
      />
    </svg>
  );
}

function ValuesSp() {
  return (
    <section
      id="values"
      className="bg-[linear-gradient(to_bottom,#111214_0%,#121317_100%)] px-5 pt-26 pb-18 md:hidden"
    >
      <div className="container-shell">
        <div className="border-y border-white/7 py-11">
          <div className="mx-auto max-w-[308px] text-center">
            <InViewReveal
              className="mb-5 flex justify-center"
              direction="up"
              distance={12}
              duration={1000}
              threshold={0.2}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.015] text-white/44">
                <CrownIcon className="h-[17px] w-[17px]" />
              </div>
            </InViewReveal>

            <InViewReveal
              as="p"
              className="eyebrow mb-4 justify-center text-[10px] tracking-[0.22em] text-white/40"
              direction="up"
              distance={12}
              duration={1000}
              threshold={0.2}
            >
              What We Value
            </InViewReveal>

            <h2 className="mx-auto max-w-[11ch] font-serif text-[32px] leading-[1.04] tracking-[-0.02em] text-[rgba(243,241,237,0.94)]">
              <InViewLines
                lines={[
                  "What matters",
                  "is not volume,",
                  "but the quality",
                  "of trust.",
                ]}
                duration={1180}
                distance={18}
                lineDelay={90}
                threshold={0.2}
              />
            </h2>

            <InViewReveal
              as="div"
              className="mx-auto mt-7 max-w-[27ch]"
              direction="up"
              distance={16}
              duration={1150}
              threshold={0.18}
            >
              <p className="text-[13px] leading-[1.95] text-white/56">
                VELMONT が大切にしているのは、ただ高級車を並べることではありません。
                一台ごとの佇まい、状態、背景まで丁寧に見極め、急がせることなく、
                落ち着いて比較し、納得して選べる時間ごと届けることを大切にしています。
              </p>
            </InViewReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ValuesSp;