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
      <path
        d="M10 48H54"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M14 46L20 22L32 34L44 18L50 46"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="22" r="2.2" fill="currentColor" />
      <circle cx="32" cy="34" r="2.2" fill="currentColor" />
      <circle cx="44" cy="18" r="2.2" fill="currentColor" />
      <circle cx="50" cy="46" r="2.2" fill="currentColor" />
      <path
        d="M18 46H46"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.72"
      />
    </svg>
  );
}

function Values() {
  return (
    <section
      id="values"
      className="bg-[linear-gradient(to_bottom,#111214_0%,#121317_100%)] px-5 pt-24 pb-16 sm:px-6 md:pt-28 md:pb-20 lg:pt-32 lg:pb-24"
    >
      <div className="container-shell">
        <div className="border-y border-white/8 py-12 md:py-14 lg:py-16">
          <div className="mx-auto max-w-[920px] text-center">
            <InViewReveal
              className="mb-5 flex justify-center"
              direction="up"
              distance={12}
              duration={1000}
              threshold={0.2}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.02] text-white/56">
                <CrownIcon className="h-[18px] w-[18px]" />
              </div>
            </InViewReveal>

            <InViewReveal
              as="p"
              className="eyebrow mb-4 justify-center"
              direction="left"
              distance={12}
              duration={1000}
              threshold={0.2}
            >
              What We Value
            </InViewReveal>

            <h2 className="mx-auto max-w-[14ch] font-serif text-[34px] leading-[1.04] text-velmont-stone sm:text-[40px] lg:max-w-[16ch] lg:text-[48px]">
              <InViewLines
                lines={["What matters is not volume,", "but the quality of trust."]}
                duration={1180}
                distance={18}
                lineDelay={90}
                threshold={0.2}
              />
            </h2>

            <InViewReveal
              as="div"
              className="mx-auto mt-7 max-w-[72ch]"
              direction="up"
              distance={16}
              duration={1150}
              threshold={0.18}
            >
              <p className="text-[15px] leading-8 text-white/64 sm:text-[16px] md:text-[17px] md:leading-9">
                VELMONT が大切にしているのは、ただ高級車を並べることではありません。
                一台ごとの佇まい、状態、背景まで丁寧に見極め、落ち着いて比較できる環境を整え、
                急がせることなく納得して選べる時間ごと届けること。
                見た目の華やかさだけではなく、信頼できる基準と静かな案内によって、
                この場所で選ぶ意味そのものを感じてもらえることを何より大切にしています。
              </p>
            </InViewReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Values;