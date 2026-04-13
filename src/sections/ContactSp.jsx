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
      className="relative overflow-hidden bg-[linear-gradient(to_bottom,#111214_0%,#0d0e10_100%)] px-5 pt-26 pb-24 md:hidden"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-white/6" />
        <div className="absolute left-1/2 top-[14%] h-[220px] w-[420px] -translate-x-1/2 rounded-full bg-white/[0.012] blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-[140px] bg-[linear-gradient(to_top,rgba(0,0,0,0.18),rgba(0,0,0,0))]" />
      </div>

      <div className="container-shell relative">
        <div className="mx-auto max-w-[308px] text-center">
          <InViewReveal
            as="p"
            className="eyebrow mb-4 justify-center text-[10px] tracking-[0.22em] text-white/40"
            direction="up"
            distance={12}
            duration={1000}
            threshold={0.2}
          >
            Contact
          </InViewReveal>

          <h2 className="mx-auto max-w-[11ch] font-serif text-[32px] leading-[1.03] tracking-[-0.02em] text-[rgba(243,241,237,0.94)]">
            <InViewLines
              lines={["Reserve a", "Visit,", "Begin with", "Confidence."]}
              duration={1200}
              distance={18}
              lineDelay={90}
              threshold={0.2}
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
            車両に関するご相談や来店予約は、落ち着いて進められる形で承っています。
            比較や検討の段階からでも、必要な情報を整理しながら丁寧にご案内します。
          </InViewReveal>
        </div>

        <div className="mx-auto mt-12 max-w-[420px] space-y-3.5">
          {contactInfo.map((item, index) => (
            <InViewReveal
              key={item.label}
              className="rounded-[22px] border border-white/7 bg-white/[0.016] px-5 py-5"
              delay={index * 90}
              duration={1100}
              direction="up"
              distance={18}
              threshold={0.14}
            >
              <article className="flex flex-col text-left">
                <p className="text-[10px] uppercase tracking-[0.16em] text-white/20">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <div className="mt-4 h-px w-9 bg-white/8" />

                <p className="mt-4 text-[10px] uppercase tracking-[0.14em] text-white/34">
                  {item.label}
                </p>
                <p className="mt-3 font-serif text-[21px] leading-[1.16] tracking-[-0.01em] text-white/88">
                  {item.value}
                </p>
              </article>
            </InViewReveal>
          ))}
        </div>

        <InViewReveal
          as="form"
          className="mx-auto mt-10 grid max-w-[420px] gap-4 rounded-[24px] border border-white/7 bg-white/[0.014] p-5"
          direction="up"
          distance={18}
          duration={1150}
          threshold={0.16}
        >
          <label className="grid gap-2">
            <span className="text-[10px] uppercase tracking-[0.14em] text-white/38">
              Name
            </span>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="h-[46px] rounded-[10px] border border-white/8 bg-white/[0.018] px-4 text-[13px] text-white/86 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/14"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[10px] uppercase tracking-[0.14em] text-white/38">
              Email
            </span>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="h-[46px] rounded-[10px] border border-white/8 bg-white/[0.018] px-4 text-[13px] text-white/86 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/14"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[10px] uppercase tracking-[0.14em] text-white/38">
              Inquiry
            </span>
            <input
              type="text"
              name="subject"
              placeholder="Reservation / Vehicle Inquiry"
              className="h-[46px] rounded-[10px] border border-white/8 bg-white/[0.018] px-4 text-[13px] text-white/86 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/14"
            />
          </label>

          <label className="grid gap-2">
            <span className="text-[10px] uppercase tracking-[0.14em] text-white/38">
              Message
            </span>
            <textarea
              name="message"
              rows="6"
              placeholder="ご希望の車両や来店希望日時などをご記入ください。"
              className="min-h-[150px] rounded-[10px] border border-white/8 bg-white/[0.018] px-4 py-4 text-[13px] leading-[1.9] text-white/86 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/14"
            />
          </label>

          <div className="pt-1">
            <p className="max-w-[28ch] text-[12px] leading-6 text-white/40">
              内容を確認のうえ、順次ご案内いたします。
            </p>

            <button
              type="submit"
              className="
                mt-5 inline-flex h-[42px] w-[196px] items-center justify-center rounded-full
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
              送信する
            </button>
          </div>
        </InViewReveal>
      </div>
    </section>
  );
}

export default ContactSp;