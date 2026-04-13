import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";

const aboutPoints = [
  {
    title: "Curated Selection",
    text: "一台ごとの佇まい、状態、背景まで丁寧に見極め、量ではなく基準で選び抜いています。",
  },
  {
    title: "Quiet Guidance",
    text: "急がせることなく、落ち着いて比較し、納得して選べる静かな案内を大切にしています。",
  },
  {
    title: "Trusted Condition",
    text: "見た目だけではなく、安心して向き合える状態であることを前提にご提案しています。",
  },
];

function About() {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(to_bottom,#111214_0%,#151618_48%,#18191c_100%)] px-5 py-22 sm:px-6 md:py-26 lg:py-30"
    >
      <div className="container-shell">
        <div className="mx-auto max-w-[920px] text-center">
          <InViewReveal
            as="p"
            className="eyebrow mb-4 justify-center"
            direction="up"
            distance={14}
            duration={1000}
            threshold={0.22}
          >
            About VELMONT
          </InViewReveal>

          <h2 className="mx-auto max-w-[14ch] font-serif text-[38px] leading-[1.02] text-velmont-stone sm:text-[46px] lg:max-w-[16ch] lg:text-[56px]">
            <InViewLines
              lines={["Defined by Selection,", "Guided by Trust."]}
              duration={1200}
              distance={20}
              lineDelay={95}
              threshold={0.22}
            />
          </h2>

          <InViewReveal
            as="p"
            className="mx-auto mt-7 max-w-[44ch] text-[15px] leading-8 text-white/62 sm:text-base md:text-[17px] md:leading-9"
            direction="up"
            distance={16}
            duration={1150}
            threshold={0.22}
          >
            ただ高級車を並べるのではなく、選び方そのものに静かな基準と信頼を与えること。
            VELMONT は、車両の質だけでなく、比較し、納得し、選ぶまでの時間ごと整えることを大切にしています。
          </InViewReveal>
        </div>

        <div className="mx-auto mt-12 grid max-w-[1180px] gap-4 md:grid-cols-3 lg:mt-14 lg:gap-5">
          {aboutPoints.map((item, index) => (
            <InViewReveal
              key={item.title}
              className="h-full rounded-[24px] border border-white/8 bg-white/[0.025] p-6 sm:p-7"
              delay={index * 90}
              duration={1150}
              direction="up"
              distance={18}
              threshold={0.14}
            >
              <article className="flex h-full flex-col text-left">
                <p className="text-[11px] uppercase tracking-[0.14em] text-white/28">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-4 font-serif text-[24px] leading-tight text-white/90">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 text-white/56">
                  {item.text}
                </p>
              </article>
            </InViewReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;