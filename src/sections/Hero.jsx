import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import RevealLine from "../components/RevealLine";
import ImageReveal from "../components/ImageReveal";

function Hero() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsReady(true);
    }, 120);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#111214]">
      {/* background image */}
      <div className="absolute inset-0">
        <ImageReveal
          src="/images/hero1.png"
          alt="VELMONT showroom hero"
          className="h-full w-full object-cover object-[64%_center] sm:object-center"
          delay={0}
          duration={1800}
          startScale={1.03}
          startBlur={0.6}
        />

        {/* base overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(17,18,20,0.92)_0%,rgba(17,18,20,0.78)_24%,rgba(17,18,20,0.48)_44%,rgba(17,18,20,0.18)_68%,rgba(17,18,20,0.06)_100%)] md:bg-[linear-gradient(to_right,rgba(17,18,20,0.88)_0%,rgba(17,18,20,0.68)_18%,rgba(17,18,20,0.34)_38%,rgba(17,18,20,0.10)_62%,rgba(17,18,20,0.03)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(17,18,20,0.78)_0%,rgba(17,18,20,0.30)_40%,rgba(17,18,20,0.08)_100%)] md:bg-[linear-gradient(to_top,rgba(17,18,20,0.70)_0%,rgba(17,18,20,0.22)_40%,rgba(17,18,20,0.05)_100%)]" />

        {/* subtle light veil */}
        <div
          className={[
            "absolute inset-0 bg-[radial-gradient(circle_at_72%_28%,rgba(255,255,255,0.04),transparent_26%),radial-gradient(circle_at_50%_58%,rgba(255,255,255,0.02),transparent_40%)]",
            "md:bg-[radial-gradient(circle_at_70%_34%,rgba(255,255,255,0.045),transparent_28%),radial-gradient(circle_at_52%_56%,rgba(255,255,255,0.022),transparent_42%)]",
            "transition-opacity duration-[2200ms] ease-out",
            isReady ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* restrained passing glow */}
        <div
          className={[
            "pointer-events-none absolute inset-y-0 -left-[36%] w-[72%] md:-left-[22%] md:w-[52%]",
            "bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.028)_42%,rgba(255,255,255,0.01)_72%,rgba(255,255,255,0)_100%)]",
            "blur-[16px] md:blur-[18px]",
            "transition-[transform,opacity] duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            isReady ? "translate-x-[140%] opacity-100" : "translate-x-0 opacity-0",
          ].join(" ")}
        />

        {/* subtle dark polish */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_32%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.10)_60%,rgba(0,0,0,0.22)_100%)]" />
      </div>

      {/* content */}
      <div className="container-shell relative z-10 flex min-h-[100svh] items-end pt-24 pb-12 md:min-h-screen md:items-center md:pt-32 md:pb-20 lg:pb-16">
        <div className="max-w-[330px] sm:max-w-[420px] md:max-w-[500px]">
          <Reveal
            as="p"
            className="eyebrow mb-4 sm:mb-5"
            delay={180}
            duration={1200}
            y={22}
            blur={1}
          >
            Precision in Motion
          </Reveal>

          <h1 className="font-serif text-[42px] font-medium leading-[0.94] tracking-[-0.025em] text-velmont-stone sm:text-[52px] md:text-[64px] lg:text-[80px]">
            <RevealLine delay={320} duration={1400} y={24}>
              Luxury,
            </RevealLine>
            <RevealLine delay={430} duration={1400} y={24}>
              Curated with
            </RevealLine>
            <RevealLine delay={540} duration={1400} y={24}>
              Precision.
            </RevealLine>
          </h1>

          <Reveal
            as="p"
            className="mt-6 max-w-[26ch] text-[14px] leading-[2] text-[rgba(232,234,236,0.78)] sm:mt-7 sm:max-w-[31ch] sm:text-[15px] md:text-base"
            delay={520}
            duration={1400}
            y={18}
            blur={1}
          >
            <>
              厳選された高級車を、
              <br />
              静かな信頼と精度で届ける。
            </>
          </Reveal>

          <Reveal
            className="mt-8 flex flex-col gap-2.5 sm:mt-9 sm:flex-row sm:items-center sm:gap-3"
            delay={720}
            duration={1400}
            y={18}
            blur={1}
          >
            <>
              <a
                href="#inventory"
                className="
                  inline-flex h-12 w-full items-center justify-center rounded-full
                  border border-white/16
                  bg-white/[0.09]
                  px-7 text-[13px] font-medium tracking-[0.05em] text-white/88
                  backdrop-blur-[12px]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.12),0_10px_30px_rgba(0,0,0,0.16)]
                  transition-all duration-500
                  hover:border-white/24
                  hover:bg-white/[0.12]
                  hover:text-white
                  sm:h-[46px] sm:w-auto
                "
              >
                在庫車を見る
              </a>

              <a
                href="#contact"
                className="
                  inline-flex h-12 w-full items-center justify-center rounded-full
                  border border-white/12
                  bg-white/[0.04]
                  px-7 text-[13px] font-medium tracking-[0.05em] text-white/66
                  backdrop-blur-[10px]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]
                  transition-all duration-500
                  hover:border-white/18
                  hover:bg-white/[0.06]
                  hover:text-white/84
                  sm:h-[46px] sm:w-auto
                "
              >
                来店予約をする
              </a>
            </>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default Hero;