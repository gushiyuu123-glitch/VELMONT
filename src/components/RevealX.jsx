import { useEffect, useState } from "react";

export default function RevealX({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  duration = 580,
  x = -24,
  blur = 0,
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
    <Tag
      className={[
        className,
        "will-change-[opacity,transform,filter]",
        isMounted
          ? "transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)]"
          : "",
      ].join(" ")}
      style={{
        transitionDuration: isMounted ? `${duration}ms` : "0ms",
        opacity: isShown ? 1 : 0,
        visibility: isShown ? "visible" : "hidden",
        transform: isShown ? "translate3d(0,0,0)" : `translate3d(${x}px,0,0)`,
        filter: blur > 0 ? (isShown ? "blur(0px)" : `blur(${blur}px)`) : "none",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {children}
    </Tag>
  );
}