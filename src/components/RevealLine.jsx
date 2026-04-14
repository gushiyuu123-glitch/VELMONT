import { useEffect, useState } from "react";

export default function RevealLine({
  children,
  className = "",
  delay = 0,
  duration = 1400,
  y = 28,
}) {
  const [isMounted, setIsMounted] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;
    let timer = 0;

    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        setIsMounted(true);

        timer = window.setTimeout(() => {
          setIsShown(true);
        }, delay);
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
      window.clearTimeout(timer);
    };
  }, [delay]);

  return (
    <span className="block overflow-hidden">
      <span
        className={[
          "block will-change-[opacity,transform]",
          isMounted
            ? "transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]"
            : "",
          className,
        ].join(" ")}
        style={{
          transitionDuration: isMounted ? `${duration}ms` : "0ms",
          opacity: isShown ? 1 : 0,
          visibility: isShown ? "visible" : "hidden",
          transform: isShown
            ? "translate3d(0,0,0)"
            : `translate3d(0, ${y}px, 0)`,
          backfaceVisibility: "hidden",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {children}
      </span>
    </span>
  );
}