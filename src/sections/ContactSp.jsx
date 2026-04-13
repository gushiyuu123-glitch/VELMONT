import InViewReveal from "../components/InViewReveal";
import InViewLines from "../components/InViewLines";

const contactInfo = [
  {
    label: "Vehicle Inquiry",
    value: "車両選びや比較のご相談",
  },
  {
    label: "Visit Reservation",
    value: "来店日時のご相談・事前予約",
  },
  {
    label: "Quiet Guidance",
    value: "急がせない静かなご案内",
  },
];

function ContactSp() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#111214_0%,#0d0e10_100%)] px-5 pt-20 pb-18 md:hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
        <div className="absolute left-1/2 top-[12%] h-[180px] w-[320px] -translate-x-1/2 rounded-full bg-white/[0.012] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[110px] bg-[linear-gradient(to_top,rgba(0,0,0,0.16),rgba(0,0,0,0))]" />
      </div>

      <div className="container-shell relative">
        {/* ここを細い中央箱にしない */}
        <div className="w-full">
          <InViewReveal
            as="p"
            className="eyebrow mb-3 text-[10px] tracking-[0.2em] text-white/38"
            direction="up"
            distance={10}
            duration={950}
            threshold={0.2}
          >
            Contact
          </InViewReveal>

          <h2 className="font-serif text-[29px] leading-[1.08] tracking-[-0.025em] text-[rgba(243,241,237,0.94)] sm:text-[31px]">
            <InViewLines
              lines={["Reserve a Visit,", "Begin with Confidence."]}
              duration={1150}
              distance={16}
              lineDelay={85}
              threshold={0.2}
            />
          </h2>

          <InViewReveal
            as="p"
            className="mt-5 pr-1 text-[12.5px] leading-[1.86] text-white/54"
            direction="up"
            distance={14}
            duration={1080}
            threshold={0.2}
          >
            車両に関するご相談や来店予約は、落ち着いて進められる形で承っています。
            比較や検討の段階からでも、必要な情報を整理しながら丁寧にご案内します。
          </InViewReveal>
        </div>

        <div className="mt-9 space-y-3">
          {contactInfo.map((item, index) => (
            <InViewReveal
              key={item.label}
              className="rounded-[20px] border border-white/7 bg-white/[0.016] px-4 py-4.5"
              delay={index * 80}
              duration={1050}
              direction="up"
              distance={16}
              threshold={0.14}
            >
              <article className="flex flex-col text-left">
                <p className="text-[9px] uppercase tracking-[0.16em] text-white/18">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="mt-3 h-px w-8 bg-white/8" />

                <p className="mt-3 text-[9px] uppercase tracking-[0.14em] text-white/32">
                  {item.label}
                </p>
                <p className="mt-2.5 font-serif text-[18px] leading-[1.22] tracking-[-0.01em] text-white/88">
                  {item.value}
                </p>
              </article>
            </InViewReveal>
          ))}
        </div>

<InViewReveal
  as="form"
  className="mt-8 grid gap-3 rounded-[18px] border border-white/7 bg-white/[0.014] px-3 py-4"
  direction="up"
  distance={16}
  duration={1100}
  threshold={0.16}
>
  <label className="grid gap-1.5">
    <span className="text-[10px] uppercase tracking-[0.14em] text-white/36">
      Name
    </span>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      className="h-[42px] rounded-[9px] border border-white/8 bg-white/[0.018] px-3 text-[13px] text-white/86 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/14"
    />
  </label>

  <label className="grid gap-1.5">
    <span className="text-[10px] uppercase tracking-[0.14em] text-white/36">
      Email
    </span>
    <input
      type="email"
      name="email"
      placeholder="you@example.com"
      className="h-[42px] rounded-[9px] border border-white/8 bg-white/[0.018] px-3 text-[13px] text-white/86 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/14"
    />
  </label>

  <label className="grid gap-1.5">
    <span className="text-[10px] uppercase tracking-[0.14em] text-white/36">
      Inquiry
    </span>
    <input
      type="text"
      name="subject"
      placeholder="Reservation / Vehicle Inquiry"
      className="h-[42px] rounded-[9px] border border-white/8 bg-white/[0.018] px-3 text-[13px] text-white/86 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/14"
    />
  </label>

  <label className="grid gap-1.5">
    <span className="text-[10px] uppercase tracking-[0.14em] text-white/36">
      Message
    </span>
    <textarea
      name="message"
      rows={5}
      placeholder="ご希望の車両や来店希望日時などをご記入ください。"
      className="min-h-[116px] rounded-[9px] border border-white/8 bg-white/[0.018] px-3 py-3 text-[13px] leading-[1.75] text-white/86 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/14"
    />
  </label>

  <div className="pt-1">
    <p className="text-[11px] leading-[1.75] text-white/40">
      内容を確認のうえ、順次ご案内いたします。
    </p>

    <button
      type="submit"
      className="
        mt-4 inline-flex h-[40px] min-w-[148px] items-center justify-center rounded-full
        border border-white/16 bg-white/[0.038]
        px-4 text-[11px] font-medium tracking-[0.08em] text-white/78
        backdrop-blur-[6px]
        shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]
        transition-all duration-500
        hover:bg-white/[0.05]
        hover:border-white/22
        active:scale-[0.985]
      "
    >
      送信する
    </button>
  </div>
</InViewReveal>
      </div>
    </section>
  );
}

export default ContactSp;