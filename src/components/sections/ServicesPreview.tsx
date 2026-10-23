import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { DepthCard } from "@/components/ui/DepthCard";
import { CornerMarks, GridBackdrop, RulerTicks } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/content";

export function ServicesPreview() {
  return (
    <section className="relative isolate overflow-hidden bg-cream py-20 md:py-28">
      <GridBackdrop mask="bottom" className="opacity-80" />
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Nos savoir-faire"
            title={
              <>
                Trois métiers, une même exigence <em className="italic text-azur">de finition</em>.
              </>
            }
            intro="Cuisines, agencements et rénovation : nous travaillons le bois et la lumière pour créer des espaces qui se vivent au quotidien."
          />
          <Reveal delay={0.1}>
            <Link href="/realisations" className="link-arrow shrink-0">
              Voir les réalisations
              <Icon name="arrow-right" size={15} />
            </Link>
          </Reveal>
        </div>

        <RulerTicks className="mt-10 hidden max-w-[22rem] md:flex" />

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <DepthCard>
                <Link href={service.href} className="group block">
                <div className="media-zoom relative aspect-[4/5] overflow-hidden rounded-[18px] bg-sand">
                  <Image
                    src={service.image}
                    alt={`${service.title} — AMSP Aménagement, ${service.eyebrow.toLowerCase()}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
                  <CornerMarks tone="paper" size="size-5" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
                    <div>
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-paper/70">
                        0{index + 1} — {service.eyebrow}
                      </p>
                      <h3 className="mt-2 font-display text-[1.5rem] leading-tight text-paper">{service.title}</h3>
                    </div>
                    <span className="mb-1 flex size-10 shrink-0 items-center justify-center rounded-full border border-paper/40 text-paper transition-all duration-500 group-hover:border-paper group-hover:bg-paper group-hover:text-ink">
                      <Icon name="arrow-up-right" size={17} />
                    </span>
                  </div>
                </div>
                  <p className="mt-5 text-[0.92rem] leading-relaxed text-ink-muted">{service.short}</p>
                </Link>
              </DepthCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
