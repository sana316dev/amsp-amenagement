"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Amplitude du basculement en degrés (6 = discret, 12 = marqué). */
  intensity?: number;
};

/**
 * Enveloppe une carte dans une scène 3D : la carte se redresse puis
 * s'incline en suivant sa position dans le viewport au scroll.
 */
export function DepthCard({ children, className = "", intensity = 9 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [`${intensity}deg`, "0deg", `${-intensity * 0.75}deg`]);
  const rotateZ = useTransform(scrollYProgress, [0, 0.5, 1], ["1.2deg", "0deg", "-1deg"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.955, 1, 0.985]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [26, 0, -14]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.55, 0]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div ref={ref} className={`relative isolate [perspective:1400px] ${className}`}>
      <motion.span
        aria-hidden="true"
        style={{ opacity: glow }}
        className="pointer-events-none absolute -inset-4 -z-10 rounded-[32px] bg-[radial-gradient(ellipse_at_center,rgba(27,79,216,0.28),transparent_70%)] blur-2xl"
      />
      <motion.div
        style={{ rotateX, rotateZ, scale, y, transformStyle: "preserve-3d" }}
        className="h-full will-change-transform"
      >
        {children}
      </motion.div>
    </div>
  );
}
