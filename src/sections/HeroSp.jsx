import { useEffect, useState } from "react";
import Reveal from "../components/Reveal";
import RevealLine from "../components/RevealLine";
import ImageReveal from "../components/ImageReveal";

function HeroSp() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsReady(true);
    }, 120);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#111214] md:hidden">
      <div className="absolute inset-0">
        <ImageReveal
          src="/images/hero2.png"
          alt="VELMONT showroom hero"
          className="h-full w-full object-cover object-[75%_center]"
          delay={0}
          duration={1800}
          startScale={1.03}
          startBlur={0.4}
        />

        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(8,9,11,0.68)_0%,rgba(8,9,11,0.30)_22%,rgba(8,9,11,0.08)_42%,rgba(8,9,11,0.10)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,11,13,0.24)_0%,rgba(10,11,13,0.12)_22%,rgba(10,11,13,0.04)_42%,rgba(10,11,13,0)_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(8,9,11,0.74)_0%,rgba(8,9,11,0.24)_24%,rgba(8,9,11,0.05)_48%,rgba(8,9,11,0)_72%)]" />

        <div
          className={[
            "absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(255,255,255,0.05),transparent_24%),radial-gradient(circle_at_62%_44%,rgba(255,255,255,0.018),transparent_38%)]",
            "transition-opacity duration-[2200ms] ease-out",
            isReady ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        <div
          className={[
            "pointer-events-none absolute inset-y-0 -left-[34%] w-[64%]",
            "bg-[linear-gradient(90deg,rgba(255,255,255,0)_0%,rgba(255,255,255,0.014)_42%,rgba(255,255,255,0.005)_72%,rgba(255,255,255,0)_100%)]",
            "blur-[13px]",
            "transition-[transform,opacity] duration-[2200ms] ease-[cubic-bezier(0.22,1,0.36,1)]",
            isReady ? "translate-x-[136%] opacity-100" : "translate-x-0 opacity-0",
          ].join(" ")}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_54%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.08)_54%,rgba(0,0,0,0.18)_100%)]" />
      </div>

      <div className="container-shell relative z-10 flex min-h-[100svh] flex-col justify-between pt-24 pb-11">
        <div className="max-w-[286px] pl-[8px]">
          <Reveal
            as="p"
            className="eyebrow mb-5 text-[10px] tracking-[0.24em] text-white/60"
            delay={160}
            duration={1200}
            y={18}
            blur={1}
          >
            Precision in Motion
          </Reveal>

          <h1 className="font-serif text-[36px] font-medium leading-[0.98] tracking-[-0.026em] text-[rgba(243,241,237,0.95)]">
            <RevealLine delay={280} duration={1400} y={20}>
              Luxury,
            </RevealLine>
            <RevealLine delay={390} duration={1400} y={20}>
              Curated with
            </RevealLine>
            <RevealLine delay={500} duration={1400} y={20}>
              Precision.
            </RevealLine>
          </h1>
        </div>

        <div className="max-w-[248px] pl-[8px]">
          <Reveal
            as="p"
            className="text-[12px] leading-[1.92] text-[rgba(232,234,236,0.58)]"
            delay={560}
            duration={1400}
            y={16}
            blur={1}
          >
            <>
              厳選された高級車を、
              <br />
              静かな信頼と精度で届ける。
            </>
          </Reveal>

          <Reveal
            className="mt-6 flex flex-col gap-2"
            delay={700}
            duration={1400}
            y={16}
            blur={1}
          >
            <>
              <a
                href="#inventory"
                className="
                  inline-flex h-[40px] w-[196px] items-center justify-center rounded-full
                  border border-white/16
                  bg-white/[0.038]
                  px-5 text-[11px] font-medium tracking-[0.08em] text-white/76
                  backdrop-blur-[6px]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]
                  transition-all duration-500
                  hover:bg-white/[0.05]
                  hover:border-white/22
                  active:scale-[0.985]
                "
              >
                在庫車を見る
              </a>

              <a
                href="#contact"
                className="
                  inline-flex h-[38px] w-[196px] items-center justify-center rounded-full
                  border border-white/8
                  bg-white/[0.02]
                  px-5 text-[10px] font-medium tracking-[0.09em] text-white/46
                  backdrop-blur-[5px]
                  shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]
                  transition-all duration-500
                  hover:text-white/64
                  hover:border-white/12
                  active:scale-[0.985]
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

export default HeroSp;