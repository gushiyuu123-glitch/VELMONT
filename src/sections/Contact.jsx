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

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[linear-gradient(to_bottom,#111214_0%,#0d0e10_100%)] px-5 py-20 sm:px-6 md:py-24 lg:py-28"
    >
      <div className="container-shell">
        <div className="overflow-hidden rounded-[28px] border border-white/8 bg-white/[0.03]">
          <div className="grid lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)]">
            <div className="border-b border-white/8 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-10 xl:p-12">
              <InViewReveal
                as="p"
                className="eyebrow mb-4"
                direction="left"
                distance={14}
                duration={1000}
                threshold={0.2}
              >
                Contact
              </InViewReveal>

              <h2 className="font-serif text-[38px] leading-[1.02] text-velmont-stone sm:text-[46px] lg:text-[56px]">
                <InViewLines
                  lines={["Reserve a Visit,", "Begin with Confidence."]}
                  duration={1200}
                  distance={20}
                  lineDelay={95}
                  threshold={0.2}
                />
              </h2>

              <InViewReveal
                as="p"
                className="mt-6 max-w-[40ch] text-[15px] leading-8 text-white/62 sm:text-base"
                direction="up"
                distance={16}
                duration={1150}
                threshold={0.2}
              >
                車両に関するご相談や来店予約は、落ち着いて進められる形で承っています。
                比較や検討の段階からでも、必要な情報を整理しながら丁寧にご案内します。
              </InViewReveal>

              <div className="mt-10 border-t border-white/8">
                {contactInfo.map((item, index) => (
                  <InViewReveal
                    key={item.label}
                    className="border-b border-white/8 py-5 sm:py-6"
                    delay={index * 90}
                    duration={1100}
                    direction="up"
                    distance={18}
                    threshold={0.14}
                  >
                    <article className="grid gap-3 sm:grid-cols-[72px_minmax(0,1fr)] sm:gap-6">
                      <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-white/24">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                      </div>

                      <div>
                        <p className="text-[11px] uppercase tracking-[0.14em] text-white/34">
                          {item.label}
                        </p>
                        <p className="mt-3 font-serif text-[22px] leading-tight text-white/88">
                          {item.value}
                        </p>
                      </div>
                    </article>
                  </InViewReveal>
                ))}
              </div>
            </div>

            <div className="p-7 sm:p-8 lg:p-10 xl:p-12">
              <InViewReveal
                as="form"
                className="grid gap-5"
                direction="up"
                distance={18}
                duration={1150}
                threshold={0.16}
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-[12px] uppercase tracking-[0.12em] text-white/42">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="h-12 rounded-[14px] border border-white/10 bg-white/[0.025] px-4 text-[14px] text-white/88 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/20"
                    />
                  </label>

                  <label className="grid gap-2">
                    <span className="text-[12px] uppercase tracking-[0.12em] text-white/42">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="h-12 rounded-[14px] border border-white/10 bg-white/[0.025] px-4 text-[14px] text-white/88 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/20"
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-[12px] uppercase tracking-[0.12em] text-white/42">
                    Inquiry
                  </span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Reservation / Vehicle Inquiry"
                    className="h-12 rounded-[14px] border border-white/10 bg-white/[0.025] px-4 text-[14px] text-white/88 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-[12px] uppercase tracking-[0.12em] text-white/42">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder="ご希望の車両や来店希望日時などをご記入ください。"
                    className="min-h-[160px] rounded-[18px] border border-white/10 bg-white/[0.025] px-4 py-4 text-[14px] leading-7 text-white/88 outline-none transition-colors duration-500 placeholder:text-white/24 focus:border-white/20"
                  />
                </label>

                <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-[28ch] text-[13px] leading-6 text-white/42">
                    内容を確認のうえ、順次ご案内いたします。
                  </p>

                  <button
                    type="submit"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-white/12 bg-white/[0.06] px-6 text-[13px] font-medium tracking-[0.08em] text-white/88 transition-all duration-500 hover:border-white/18 hover:bg-white/[0.09] hover:text-white"
                  >
                    送信する
                  </button>
                </div>
              </InViewReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;