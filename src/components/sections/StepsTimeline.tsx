"use client";

import { motion, useInView, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

type Step = { title: string; text: string };

function StepItem({ index, step, total }: { index: number; step: Step; total: number }) {
  const ref = useRef<HTMLLIElement>(null);
  const active = useInView(ref, { margin: "-42% 0px -42% 0px" });
  const reduce = useReducedMotion();

  return (
    <motion.li
      ref={ref}
      initial={reduce ? undefined : { opacity: 0, y: 26 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex gap-5 md:gap-8"
    >
      <div className="relative z-10 flex flex-col items-center">
        <span
          className={`flex size-12 shrink-0 items-center justify-center rounded-full border font-display text-[0.95rem] transition-all duration-500 ${
            active
              ? "border-azur bg-azur text-paper shadow-[0_14px_30px_-12px_rgba(27,79,216,0.6)]"
              : "border-ink/15 bg-paper text-ink/60"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/30">
          {index + 1}/{total}
        </span>
      </div>

      <div
        className={`mb-3 w-full rounded-[16px] border p-5 transition-all duration-500 md:p-6 ${
          active
            ? "border-ink/12 bg-cream/70 shadow-[0_24px_50px_-30px_rgba(14,25,21,0.45)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-[1.18rem] leading-snug transition-colors group-hover:text-azur">{step.title}</h3>
          <span
            className={`mt-1 flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
              active ? "border-azur/50 text-azur" : "border-ink/10 text-ink/25"
            }`}
          >
            <Icon name="arrow-right" size={13} />
          </span>
        </div>
        <p className="mt-2 text-[0.92rem] leading-relaxed text-ink-muted">{step.text}</p>
      </div>
    </motion.li>
  );
}

export function StepsTimeline({
  eyebrow,
  title,
  intro,
  steps,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  steps: Step[];
}) {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 72%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 });

  return (
    <section className="relative overflow-hidden bg-paper py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(224,161,60,0.2),transparent_68%)] blur-2xl"
      />
      <div className="container-x relative grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.05]">{title}</h2>
          </Reveal>
          {intro && (
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-md text-[0.96rem] leading-relaxed text-ink-muted">{intro}</p>
            </Reveal>
          )}
          <Reveal delay={0.18}>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <Link href="/contact" className="link-arrow">
                Demander un devis
                <Icon name="arrow-right" size={15} />
              </Link>
              <span className="hidden text-[0.7rem] uppercase tracking-[0.14em] text-ink/35 sm:inline">
                {steps.length} étapes
              </span>
            </div>
          </Reveal>
        </div>

        <div className="relative">
          <div aria-hidden="true" className="absolute bottom-6 left-6 top-6 w-px bg-ink/10" />
          <motion.div
            aria-hidden="true"
            style={{ scaleY: reduce ? 1 : progress }}
            className="absolute bottom-6 left-6 top-6 w-px origin-top bg-[linear-gradient(to_bottom,rgba(27,79,216,0.15),#1b4fd8)]"
          />
          <ol ref={listRef} className="relative space-y-2">
            {steps.map((step, index) => (
              <StepItem key={step.title} index={index} step={step} total={steps.length} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
