import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "ink" | "paper";
  className?: string;
};

export function SectionHeading({ eyebrow, title, intro, align = "left", tone = "ink", className = "" }: Props) {
  const centered = align === "center";

  return (
    <div className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-3xl"} ${className}`}>
      <Reveal>
        <p
          className={`eyebrow ${centered ? "eyebrow--center justify-center" : ""} ${
            tone === "paper" ? "text-sand/80" : ""
          }`}
        >
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2
          className={`mt-5 text-[clamp(1.9rem,3.6vw,3.1rem)] leading-[1.04] ${
            tone === "paper" ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.14}>
          <p
            className={`mt-5 text-[0.98rem] leading-relaxed md:text-[1.02rem] ${
              tone === "paper" ? "text-paper/70" : "text-ink-muted"
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
