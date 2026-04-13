import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";

const overviewItems = [
  {
    label: "Location",
    value: "Okinawa",
  },
  {
    label: "Business Hours",
    value: "10:00 – 19:00",
  },
  {
    label: "Style",
    value: "By Appointment",
  },
];

function Overview() {
  return (
    <section
      id="overview"
      className="bg-[linear-gradient(to_bottom,#111214_0%,#121316_100%)] px-5 py-14 sm:px-6 md:py-16"
    >
      <div className="container-shell">
        <div className="grid gap-8 border-y border-white/8 py-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-center md:gap-10 md:py-10">
          <div className="max-w-[620px]">
            <InViewReveal
              as="p"
              className="eyebrow mb-4"
              direction="left"
              distance={12}
              duration={1000}
              threshold={0.2}
            >
              Overview
            </InViewReveal>

            <h2 className="font-serif text-[30px] leading-[1.04] text-velmont-stone sm:text-[36px] lg:text-[42px]">
              <InViewLines
                lines={["Quietly Positioned,", "Clearly Trusted."]}
                duration={1150}
                distance={18}
                lineDelay={90}
                threshold={0.2}
              />
            </h2>

            <InViewReveal
              as="p"
              className="mt-5 max-w-[40ch] text-[14px] leading-7 text-white/58 sm:text-[15px]"
              direction="up"
              distance={14}
              duration={1100}
              threshold={0.2}
            >
              落ち着いた環境の中で、厳選した高級車をゆっくりと見比べられる。
              VELMONT は、慌ただしさではなく信頼の密度で選ばれる場所を目指しています。
            </InViewReveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {overviewItems.map((item, index) => (
              <InViewReveal
                key={item.label}
                className="rounded-[20px] border border-white/8 bg-white/[0.025] p-5 sm:p-6"
                delay={index * 80}
                direction="up"
                distance={16}
                duration={1100}
                threshold={0.14}
              >
                <article>
                  <p className="text-[11px] uppercase tracking-[0.14em] text-white/34">
                    {item.label}
                  </p>
                  <p className="mt-3 font-serif text-[20px] leading-tight text-white/88 sm:text-[22px]">
                    {item.value}
                  </p>
                </article>
              </InViewReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Overview;