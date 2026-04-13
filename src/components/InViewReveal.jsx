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
        }, delay);

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
  }, [delay, threshold, triggerOnce, rootMargin]);

  let hiddenTransform = "translate3d(0, 18px, 0) scale(1)";
  if (direction === "up") {
    hiddenTransform = `translate3d(0, ${distance}px, 0) scale(${scale})`;
  } else if (direction === "down") {
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
        "transition-[opacity,transform,filter] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "will-change-[opacity,transform]",
      ].join(" ")}
      style={{
        transitionDuration: `${duration}ms`,
        opacity: isShown ? 1 : 0,
        transform: isShown ? "translate3d(0,0,0) scale(1)" : hiddenTransform,
        filter: blur > 0 ? (isShown ? "blur(0px)" : `blur(${blur}px)`) : "none",
      }}
    >
      {children}
    </Tag>
  );
}

export default InViewReveal;