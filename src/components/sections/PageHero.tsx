import Image from "next/image";
import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { CornerMarks, GridBackdrop } from "@/components/ui/Decor";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image: string;
  imageAlt: string;
  crumbs: Crumb[];
  badge?: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, imageAlt, crumbs, badge, children }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-paper pb-14 pt-28 md:pb-20 md:pt-36">
      <GridBackdrop mask="right" />
      <div
        className="pointer-events-none absolute -right-40 top-10 size-[28rem] rounded-full bg-sand/40 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative">
        <Breadcrumbs items={crumbs} />

        <div className="mt-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <p className="eyebrow">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 text-[clamp(2.2rem,5vw,3.9rem)] leading-[1.02]">{title}</h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-ink-muted md:text-[1.05rem]">{intro}</p>
            </Reveal>
            {children && (
              <Reveal delay={0.18}>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">{children}</div>
              </Reveal>
            )}
          </div>

          <Reveal delay={0.1} y={34}>
            <div className="relative">
              <div className="media-zoom relative aspect-[4/3] overflow-hidden rounded-[20px] bg-sand">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
                <CornerMarks tone="paper" size="size-5" />
              </div>
              {badge && (
                <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-full bg-paper px-5 py-3 shadow-[0_18px_40px_rgba(25,23,19,0.12)]">
                  <span className="flex size-7 items-center justify-center rounded-full bg-azur text-paper">
                    <Icon name="check" size={14} />
                  </span>
                  <span className="text-[0.76rem] font-semibold tracking-[0.02em] text-ink">{badge}</span>
                </div>
              )}
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
