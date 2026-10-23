"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * Mot-symbole géant du footer : aligné sur la ligne des icônes de contact,
 * en filigrane derrière les colonnes.
 */
export function FooterWordmark() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end end"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-10 -z-10 select-none"
    >
      <div className="flex justify-center">
        <motion.span
          style={{ y: reduce ? 0 : y }}
          className="block bg-[linear-gradient(180deg,rgba(69,196,245,0.04)_0%,rgba(69,196,245,0.12)_45%,rgba(69,196,245,0.2)_100%)] bg-clip-text font-display text-[clamp(5rem,21vw,18rem)] leading-[0.72] tracking-[-0.055em] text-transparent"
        >
          AMSP
        </motion.span>
      </div>
    </div>
  );
}
