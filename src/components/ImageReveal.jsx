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
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsShown(true);
    }, delay);

    return () => window.clearTimeout(timer);
  }, [delay]);

  return (
    <img
      src={src}
      alt={alt}
      className={[
        className,
        "transition-[transform,opacity,filter] ease-[cubic-bezier(0.22,1,0.36,1)]",
        "will-change-[opacity,transform]",
      ].join(" ")}
      style={{
        transitionDuration: `${duration}ms`,
        opacity: isShown ? 1 : 0,
        transform: isShown ? "scale(1)" : `scale(${startScale})`,
        filter: isShown ? "blur(0px)" : `blur(${startBlur}px)`,
      }}
    />
  );
}