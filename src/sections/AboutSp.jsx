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

function AboutSp() {
  return (
    <section
      id="about"
      className="bg-[linear-gradient(to_bottom,#111214_0%,#141518_42%,#18191c_100%)] px-5 pt-24 pb-22 md:hidden"
    >
      <div className="container-shell">
        <div className="mx-auto max-w-[348px] pt-2 text-center">
          <InViewReveal
            as="p"
            className="eyebrow mb-4 justify-center text-[10px] tracking-[0.22em] text-white/42"
            direction="up"
            distance={14}
            duration={1000}
            threshold={0.22}
          >
            About VELMONT
          </InViewReveal>

          <h2 className="mx-auto max-w-[15ch] font-serif text-[31px] leading-[1.08] tracking-[-0.024em] text-[rgba(243,241,237,0.94)]">
            <InViewLines
              lines={["Defined by Selection,", "Guided by Trust."]}
              duration={1200}
              distance={18}
              lineDelay={90}
              threshold={0.22}
            />
          </h2>

          <InViewReveal
            as="p"
            className="mx-auto mt-5 max-w-[31ch] text-[12.8px] leading-[1.9] text-white/56"
            direction="up"
            distance={16}
            duration={1150}
            threshold={0.22}
          >
            ただ高級車を並べるのではなく、選び方そのものに静かな基準と信頼を与えること。
            VELMONT は、車両の質だけでなく、比較し、納得し、選ぶまでの時間ごと整えることを大切にしています。
          </InViewReveal>
        </div>

        <div className="mx-auto mt-11 max-w-[420px] space-y-3.5">
          {aboutPoints.map((item, index) => (
            <InViewReveal
              key={item.title}
              className="rounded-[22px] border border-white/7 bg-white/[0.016] px-5 py-6"
              delay={index * 90}
              duration={1150}
              direction="up"
              distance={18}
              threshold={0.14}
            >
              <article className="flex flex-col text-left">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="mt-4 h-px w-9 bg-white/8" />

                <h3 className="mt-4 font-serif text-[21px] leading-[1.16] tracking-[-0.01em] text-white/88">
                  {item.title}
                </h3>

                <p className="mt-3 text-[13px] leading-[1.9] text-white/54">
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

export default AboutSp;