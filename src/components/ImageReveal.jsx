import { useEffect, useState } from "react";

export default function ImageReveal({
  src,
  alt,
  className = "",
  delay = 0,
  duration = 1800,
  startScale = 1.045,
  startBlur = 1.4,
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
    <img
      src={src}
      alt={alt}
      decoding="async"
      loading="eager"
      className={[
        className,
        "will-change-[opacity,transform,filter]",
        isMounted
          ? "transition-[transform,opacity,filter] ease-[cubic-bezier(0.22,1,0.36,1)]"
          : "",
      ].join(" ")}
      style={{
        transitionDuration: isMounted ? `${duration}ms` : "0ms",
        opacity: isShown ? 1 : 0,
        visibility: isShown ? "visible" : "hidden",
        transform: isShown ? "scale(1)" : `scale(${startScale})`,
        filter: isShown ? "blur(0px)" : `blur(${startBlur}px)`,
        backfaceVisibility: "hidden",
        transformOrigin: "center center",
      }}
    />
  );
}