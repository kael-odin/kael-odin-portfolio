import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Letter-by-letter blur/fade reveal, mirroring the reference TextAnimate.
export function TextAnimate({
  as = "span",
  children,
  delay = 0,
  once = true,
  by = "letter",
  className = "",
  ...rest
}) {
  const parts = by === "word" ? String(children).split(/(\s+)/) : Array.from(String(children));
  const Tag = motion[as] ?? motion.span;
  // key on children: re-animates when language switches
  return (
    <Tag
      key={String(children)}
      className={className}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.025, delayChildren: delay } } }}
      {...rest}
    >
      {parts.map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block whitespace-pre"
          variants={{
            hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5 } },
          }}
        >
          {ch}
        </motion.span>
      ))}
    </Tag>
  );
}

// Scroll-triggered fade-up wrapper mirroring reference StaggerGroup/Item.
export function StaggerGroup({ children, className = "", stagger = 0.08, delay = 0, mount = false }) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      {...(mount ? { animate: "show" } : { whileInView: "show", viewport: { once: true, margin: "-40px" } })}
      variants={{ hidden: {}, show: { transition: { staggerChildren: stagger, delayChildren: delay } } }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
        show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function useCountUp(target, active, duration = 1200) {
  const [value, setValue] = useRefSafe(target);
  useEffect(() => {
    if (!active) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      setValue(Math.round(target * (0.2 + 0.8 * p)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, target, duration]);
  return value;
}

import { useState } from "react";
function useRefSafe(initial) {
  const [v, setV] = useState(initial);
  return [v, setV];
}
