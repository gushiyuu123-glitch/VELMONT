import { useEffect, useRef, useState } from "react";

function InViewReveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  duration = 1100,
  distance = 18,
  direction = "up", // "up" | "left" | "right" | "down"
  threshold = 0.18,
  triggerOnce = true,
  blur = 0,
  scale = 1,
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
        }, delay);

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
  }, [delay, threshold, triggerOnce, rootMargin]);

  let hiddenTransform = `translate3d(0, ${distance}px, 0) scale(${scale})`;

  if (direction === "down") {
    hiddenTransform = `translate3d(0, -${distance}px, 0) scale(${scale})`;
  } else if (direction === "left") {
    hiddenTransform = `translate3d(${distance}px, 0, 0) scale(${scale})`;
  } else if (direction === "right") {
    hiddenTransform = `translate3d(-${distance}px, 0, 0) scale(${scale})`;
  }

  return (
    <Tag
      ref={ref}
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
        transform: isShown ? "translate3d(0,0,0) scale(1)" : hiddenTransform,
        filter: blur > 0 ? (isShown ? "blur(0px)" : `blur(${blur}px)`) : "none",
        backfaceVisibility: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {children}
    </Tag>
  );
}

export default InViewReveal;