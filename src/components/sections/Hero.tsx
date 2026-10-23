"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { CSSProperties, PointerEvent } from "react";
import { useRef } from "react";
import { Icon } from "@/components/ui/icons";
import { site } from "@/lib/site";
import { heroHighlights } from "@/lib/content";

function delay(value: number): CSSProperties {
  return { "--rise-delay": `${value}s` } as CSSProperties;
}

function LineMask({
  children,
  delaySeconds = 0,
  className = "",
}: {
  children: React.ReactNode;
  delaySeconds?: number;
  className?: string;
}) {
  return (
    <span className={`block overflow-hidden pb-[0.09em] ${className}`}>
      <span className="line-rise" style={delay(delaySeconds)}>
        {children}
      </span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "16%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.02, reduce ? 1.02 : 1.12]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-16%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "14%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.9], [1, reduce ? 1 : 0.12]);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springConfig = { stiffness: 90, damping: 18, mass: 0.6 };
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-11, 11]), springConfig);
  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [8, -8]), springConfig);
  const frameX = useSpring(useTransform(pointerX, [-0.5, 0.5], [18, -18]), springConfig);
  const frameY = useSpring(useTransform(pointerY, [-0.5, 0.5], [12, -12]), springConfig);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetPointer = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={resetPointer}
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink text-paper"
    >
      <motion.div style={{ y: imageY, scale: imageScale }} className="absolute inset-0 -z-30">
        <Image
          src="/images/hero.jpg"
          alt="Cuisine sur mesure avec îlot central, façades bois et plan de travail minéral"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Voiles de lecture */}
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(100deg,rgba(6,12,22,0.97)_0%,rgba(6,12,22,0.86)_34%,rgba(6,12,22,0.45)_62%,rgba(6,12,22,0.2)_100%)]" />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(to_top,rgba(6,12,22,0.96)_0%,rgba(6,12,22,0.35)_38%,rgba(6,12,22,0.05)_62%,rgba(6,12,22,0.72)_100%)]" />

      {/* Reliefs et lumières */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="aurora-a absolute -left-24 top-[8%] size-[30rem] rounded-full bg-[radial-gradient(circle,rgba(69,196,245,0.34),transparent_66%)] blur-3xl" />
        <div className="aurora-b absolute -bottom-32 right-[4%] size-[34rem] rounded-full bg-[radial-gradient(circle,rgba(27,79,216,0.6),transparent_66%)] blur-3xl" />
        <div className="hero-grid absolute inset-0" />
      </div>

      <div className="container-x relative flex min-h-[100svh] flex-col justify-end pb-10 pt-32 md:pb-14 md:pt-36">
        <div className="grid items-end gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10">
          {/* Bloc texte : panneau fumé + repères émeraude pour garantir la lisibilité */}
          <div className="relative max-w-[39rem]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -left-3 -top-3 z-10 size-9 rounded-tl-[6px] border-l border-t border-azur-bright/80"
            />
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-3 -right-3 z-10 size-9 rounded-br-[6px] border-b border-r border-azur-bright/80"
            />

            <motion.div style={{ y: contentY, opacity: contentOpacity }}>
              <div className="relative overflow-hidden rounded-[24px] border border-paper/12 bg-[#060c16]/60 p-6 shadow-[0_40px_90px_-30px_rgba(0,0,0,0.85)] backdrop-blur-md md:p-9">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(69,196,245,0.85),transparent)]"
                />

                <p
                  className="fade-up-soft mb-6 flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-azur-bright"
                  style={delay(0.15)}
                >
                  <span className="h-px w-8 bg-azur-bright" aria-hidden="true" />
                  Artisan aménageur — {site.address.city}
                </p>

                <h1 className="font-display text-[clamp(2.15rem,4.6vw,4.1rem)] leading-[1] tracking-[-0.03em] text-white [text-shadow:0_2px_30px_rgba(0,0,0,0.45)]">
                  <LineMask delaySeconds={0.25}>Cuisines et</LineMask>
                  <LineMask delaySeconds={0.33}>aménagements</LineMask>
                  <LineMask delaySeconds={0.41}>
                    <em className="font-light italic text-azur-bright">sur mesure</em>
                  </LineMask>
                  <LineMask
                    delaySeconds={0.53}
                    className="mt-3 text-[clamp(0.92rem,1.5vw,1.18rem)] leading-snug tracking-[0.01em] text-paper/80"
                  >
                    à {site.address.city}, près de Saint-Étienne
                  </LineMask>
                </h1>

                <p
                  className="fade-up-soft mt-6 max-w-xl text-[0.98rem] leading-relaxed text-paper/90 md:text-[1.04rem]"
                  style={delay(0.62)}
                >
                  Conception, fabrication et pose de cuisines, dressings, placards et agencements intérieurs.
                </p>

                <div className="fade-up-soft mt-8 flex flex-col gap-3 sm:flex-row sm:items-center" style={delay(0.72)}>
                  <Link
                    href="/contact"
                    className="btn bg-azur-bright text-ink shadow-[0_18px_40px_-14px_rgba(69,196,245,0.75)] transition-colors hover:bg-[#6fd4ff]"
                  >
                    Demander un devis gratuit
                    <Icon name="arrow-right" size={17} />
                  </Link>
                  <Link
                    href="/realisations"
                    className="btn border border-paper/40 bg-paper/5 text-paper backdrop-blur-sm transition-colors hover:border-paper hover:bg-paper hover:text-ink"
                  >
                    Découvrir nos réalisations
                  </Link>
                </div>

                <ul
                  className="fade-up-soft mt-8 flex flex-wrap gap-x-7 gap-y-3 text-[0.76rem] text-paper/85"
                  style={delay(0.86)}
                >
                  {heroHighlights.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <Icon name="check" size={14} className="text-azur-bright" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Composition 3D : cadres superposés, photo secondaire, carte flottante */}
          <motion.div style={{ y: cardY }} className="relative hidden h-[23rem] select-none lg:block xl:h-[27rem]">
            <div className="absolute inset-0" style={{ perspective: "1100px" }}>
              <motion.div style={{ rotateX, rotateY, transformStyle: "preserve-3d" }} className="relative h-full w-full">
                <motion.div
                  style={{ x: frameX, y: frameY, z: -70 }}
                  className="absolute inset-x-4 bottom-2 top-8 rounded-[28px] border border-azur-bright/45"
                >
                  <span className="absolute left-1/2 top-0 h-8 w-px -translate-y-full bg-azur-bright/60" />
                </motion.div>

                <motion.div
                  style={{ z: 40 }}
                  className="absolute right-0 top-0 h-[86%] w-[82%] overflow-hidden rounded-[22px] border border-paper/20 shadow-[0_45px_80px_-30px_rgba(0,0,0,0.9)]"
                >
                  <Image
                    src="/images/hero-agencement.jpg"
                    alt="Agencement sur mesure : meuble TV, étagères et rangements en bois clair"
                    fill
                    sizes="(max-width: 1280px) 34vw, 30vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,12,22,0.72),transparent_55%)]" />
                  <div className="absolute inset-x-0 top-0 h-24 overflow-hidden">
                    <span className="sheen absolute inset-y-0 left-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(69,196,245,0.35),transparent)]" />
                  </div>
                  <p className="absolute bottom-4 left-4 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-paper/90">
                    Agencement sur mesure — Firminy
                  </p>
                </motion.div>

                <motion.div
                  style={{ z: 90 }}
                  className="absolute bottom-0 left-0 w-[13.5rem] rounded-[18px] border border-paper/20 bg-[#070d17]/90 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-md"
                >
                  <p className="font-display text-[1.9rem] leading-none text-azur-bright">48 h</p>
                  <p className="mt-1.5 text-[0.72rem] leading-snug text-paper/75">pour recevoir votre devis détaillé</p>
                  <div className="mt-3 flex items-center gap-2 border-t border-paper/15 pt-3 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-azur-bright">
                    <Icon name="check" size={12} />
                    Gratuit &amp; sans engagement
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <div
          className="fade-up-soft mt-10 flex items-end justify-between border-t border-paper/15 pt-5"
          style={delay(1.05)}
        >
          <a
            href="#confiance"
            className="group flex items-center gap-3 text-[0.64rem] font-semibold uppercase tracking-[0.24em] text-paper/70 transition-colors hover:text-paper"
          >
            <span className="flex h-10 w-5 items-start justify-center overflow-hidden rounded-full border border-paper/30 pt-1.5">
              <span className="cue-line block h-4 w-px bg-azur-bright" />
            </span>
            Faire défiler
          </a>

          <div className="hidden items-center gap-4 md:flex">
            <div className="text-right">
              <p className="font-display text-lg leading-none text-paper">Devis sous 48 h</p>
              <p className="mt-1.5 text-[0.72rem] text-paper/70">Gratuit &amp; sans engagement</p>
            </div>
            <span className="relative flex size-[74px] items-center justify-center">
              <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0 size-full text-paper/55" aria-hidden="true">
                <defs>
                  <path id="badge-circle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                </defs>
                <text fontSize="8.4" letterSpacing="2.6" fill="currentColor">
                  <textPath href="#badge-circle">SUR MESURE • FABRIQUÉ EN FRANCE •</textPath>
                </text>
              </svg>
              <Icon name="sparkle" size={22} className="text-azur-bright" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
