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
  const timerRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    let raf1 = 0;
    let raf2 = 0;

    raf1 = window.requestAnimationFrame(() => {
      raf2 = window.requestAnimationFrame(() => {
        setIsMounted(true);
      });
    });

    return () => {
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const clearCurrentTimer = () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = 0;
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          clearCurrentTimer();
          if (!triggerOnce) setIsShown(false);
          return;
        }

        clearCurrentTimer();

        timerRef.current = window.setTimeout(() => {
          setIsShown(true);
          timerRef.current = 0;
        }, delayStart);

        if (triggerOnce) {
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      clearCurrentTimer();
      observer.disconnect();
    };
  }, [delayStart, threshold, triggerOnce, rootMargin]);

  return (
    <span ref={ref} className={className}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className="block overflow-hidden">
          <span
            className={[
              "block will-change-[opacity,transform]",
              isMounted
                ? "transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)]"
                : "",
              lineClassName,
            ].join(" ")}
            style={{
              transitionDuration: isMounted ? `${duration}ms` : "0ms",
              transitionDelay: isShown ? `${index * lineDelay}ms` : "0ms",
              opacity: isShown ? 1 : 0,
              visibility: isShown ? "visible" : "hidden",
              transform: isShown
                ? "translate3d(0,0,0)"
                : `translate3d(0, ${distance}px, 0)`,
              backfaceVisibility: "hidden",
              WebkitFontSmoothing: "antialiased",
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