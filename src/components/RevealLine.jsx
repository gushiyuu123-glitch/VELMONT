import { useEffect, useState } from "react";

export default function RevealLine({
  children,
  className = "",
  delay = 0,
  duration = 1400,
  y = 28,
}) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsShown(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <span className="block overflow-hidden">
      <span
        className={[
          "block transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]",
          "will-change-[opacity,transform]",
          className,
        ].join(" ")}
        style={{
          transitionDuration: `${duration}ms`,
          opacity: isShown ? 1 : 0,
          transform: isShown
            ? "translate3d(0,0,0)"
            : `translate3d(0, ${y}px, 0)`,
        }}
      >
        {children}
      </span>
    </span>
  );
}