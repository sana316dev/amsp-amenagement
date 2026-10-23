"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * Mot-symbole géant du footer : posé à cheval sur le bandeau de conversion
 * et le haut du footer, en filigrane derrière le contenu.
 */
export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["16%", "0%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 z-0 select-none"
    >
      <div className="-translate-y-[44%]">
        <div className="flex justify-center">
          <motion.span
            style={{ y: reduce ? 0 : y }}
            className="block bg-[linear-gradient(180deg,rgba(69,196,245,0.02)_0%,rgba(69,196,245,0.16)_34%,rgba(69,196,245,0.2)_58%,rgba(69,196,245,0.06)_100%)] bg-clip-text font-display text-[clamp(5rem,21vw,18rem)] leading-[0.72] tracking-[-0.055em] text-transparent"
          >
            AMSP
          </motion.span>
        </div>
      </div>
    </div>
  );
}
