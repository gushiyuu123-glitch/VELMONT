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

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsShown(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <Tag
      className={[
        className,
        "transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "will-change-[opacity,transform]",
      ].join(" ")}
      style={{
        transitionDuration: `${duration}ms`,
        opacity: isShown ? 1 : 0,
        transform: isShown
          ? "translate3d(0,0,0) scale(1)"
          : `translate3d(0, ${y}px, 0) scale(${scale})`,
        filter: blur > 0 ? (isShown ? "blur(0px)" : `blur(${blur}px)`) : "none",
      }}
    >
      {children}
    </Tag>
  );
}