import { useEffect, useRef, useState } from "react";

function InViewLines({
  lines = [],
  className = "",
  lineClassName = "",
  delayStart = 0,
  lineDelay = 90,
  duration = 1200,
  distance = 22,
  threshold = 0.18,
  triggerOnce = true,
  rootMargin = "0px 0px -8% 0px",
}) {
  const ref = useRef(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          if (!triggerOnce) setIsShown(false);
          return;
        }

        const timer = window.setTimeout(() => {
          setIsShown(true);
        }, delayStart);

        if (triggerOnce) observer.unobserve(el);

        return () => window.clearTimeout(timer);
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [delayStart, threshold, triggerOnce, rootMargin]);

  return (
    <span ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block overflow-hidden">
          <span
            className={[
              "block transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]",
              "will-change-[opacity,transform]",
              lineClassName,
            ].join(" ")}
            style={{
              transitionDuration: `${duration}ms`,
              transitionDelay: `${index * lineDelay}ms`,
              opacity: isShown ? 1 : 0,
              transform: isShown
                ? "translate3d(0,0,0)"
                : `translate3d(0, ${distance}px, 0)`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}

export default InViewLines;