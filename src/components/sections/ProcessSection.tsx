"use client";

import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { Icon, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/content";
import { GridBackdrop } from "@/components/ui/Decor";

const summaries = [
  "Un appel pour cadrer vos envies, votre budget et vos contraintes.",
  "Nous venons chez vous relever chaque cote et tester les usages.",
  "Plans, matières et devis détaillé, remis sous 48 heures.",
  "Fabrication sur mesure puis pose par nos soins, chantier propre.",
  "Réception ensemble, réglages et garanties légales.",
];

const icons: IconName[] = ["phone", "ruler", "document", "compass", "check"];

export function ProcessSection() {
  const gridRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: gridRef, offset: ["start 82%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 });

  return (
    <section className="relative overflow-hidden bg-cream py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(224,161,60,0.18),transparent_70%)] blur-2xl"
      />
      <div className="container-x relative">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Notre méthode"
            title={
              <>
                Cinq étapes, aucune <em className="italic text-azur">mauvaise surprise</em>.
              </>
            }
            intro="Un déroulé simple et daté, pour que vous sachiez toujours où en est votre projet."
          />
          <Reveal delay={0.1}>
            <Link href="/notre-methode" className="link-arrow shrink-0">
              Le détail de la méthode
              <Icon name="arrow-right" size={15} />
            </Link>
          </Reveal>
        </div>

        <div ref={gridRef} className="relative mt-12 md:mt-16">
          <div aria-hidden="true" className="absolute -top-5 left-0 right-0 hidden h-px bg-ink/10 md:block">
            <motion.span
              style={{ scaleX: reduce ? 1 : progress }}
              className="block h-px origin-left bg-[linear-gradient(90deg,#1b4fd8,rgba(69,196,245,0.95))]"
            />
          </div>

          <ol className="grid gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.li
                key={step.number}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="relative h-full overflow-hidden rounded-[16px] border border-ink/10 bg-paper/70 p-6 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:border-azur/25 group-hover:bg-paper group-hover:shadow-[0_28px_50px_-26px_rgba(14,25,21,0.5)]">
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-[linear-gradient(90deg,#1b4fd8,#45c4f5)] transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-2 -top-3 font-display text-[4.4rem] leading-none text-ink/[0.045] transition-transform duration-700 group-hover:-translate-y-1 group-hover:scale-105"
                  >
                    {step.number}
                  </span>

                  <div className="relative flex items-center justify-between">
                    <span className="flex size-10 items-center justify-center rounded-full border border-ink/10 bg-cream text-azur transition-colors duration-500 group-hover:border-azur/30 group-hover:bg-azur group-hover:text-paper">
                      <Icon name={icons[index]} size={17} />
                    </span>
                    <span className="font-display text-[0.8rem] tracking-[0.08em] text-azur">{step.number}</span>
                  </div>

                  <h3 className="relative mt-5 text-[1.02rem] leading-snug">{step.title}</h3>
                  <p className="relative mt-2 min-h-[4.5rem] text-[0.84rem] leading-relaxed text-ink-muted">
                    {summaries[index]}
                  </p>
                  <p className="relative mt-3 border-t border-ink/10 pt-3 text-[0.63rem] font-semibold uppercase tracking-[0.15em] text-azur-dark">
                    {step.detail}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
