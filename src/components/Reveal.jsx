import { useEffect, useState } from "react";

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  duration = 1200,
  y = 20,
  blur = 0,
  scale = 1,
}) {
  const [isShown, setIsShown] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

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

  const hiddenStyle = {
    opacity: 0,
    visibility: "hidden",
    transform: `translate3d(0, ${y}px, 0) scale(${scale})`,
    filter: blur > 0 ? `blur(${blur}px)` : "none",
  };

  const shownStyle = {
    opacity: 1,
    visibility: "visible",
    transform: "translate3d(0,0,0) scale(1)",
    filter: blur > 0 ? "blur(0px)" : "none",
  };

  return (
    <Tag
      className={[
        className,
        isMounted
          ? "transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)]"
          : "",
        "will-change-[opacity,transform,filter]",
      ].join(" ")}
      style={{
        transitionDuration: isMounted ? `${duration}ms` : "0ms",
        backfaceVisibility: "hidden",
        transformPerspective: "1000px",
        WebkitFontSmoothing: "antialiased",
        ...(!isShown ? hiddenStyle : shownStyle),
      }}
    >
      {children}
    </Tag>
  );
}