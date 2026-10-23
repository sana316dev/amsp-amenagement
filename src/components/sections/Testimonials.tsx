import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GridBackdrop } from "@/components/ui/Decor";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  return (
    <section className="relative isolate overflow-hidden bg-mist py-20 md:py-28">
      <GridBackdrop variant="azur" mask="radial" className="opacity-80" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-24 size-[28rem] rounded-full bg-[radial-gradient(circle,rgba(224,161,60,0.25),transparent_68%)] blur-2xl"
      />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Avis clients"
          align="center"
          title={
            <>
              Ce que nos clients disent de <em className="italic text-azur">leur chantier</em>.
            </>
          }
          intro="Des retours de voisins : la plupart de nos chantiers viennent d'une recommandation, dans un rayon de vingt kilomètres."
        />

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3">
          {testimonials.slice(0, 3).map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <figure className="relative flex h-full flex-col rounded-[18px] border border-ink/10 bg-paper p-7 shadow-[0_20px_45px_-32px_rgba(17,22,28,0.35)] transition-shadow duration-500 hover:shadow-[0_28px_60px_-30px_rgba(17,22,28,0.4)]">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-3 font-display text-[4.5rem] leading-none text-azur/[0.07]"
                >
                  »
                </span>
                <div className="flex items-center gap-1 text-azur" aria-label="Note : 5 sur 5">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Icon key={starIndex} name="star" size={15} className="fill-azur" />
                  ))}
                </div>
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink/80">
                  « {item.text} »
                </blockquote>
                <figcaption className="mt-6 border-t border-ink/10 pt-5">
                  <p className="font-display text-[1.05rem] text-ink">{item.name}</p>
                  <p className="mt-1 text-[0.76rem] text-ink-muted">
                    {item.project} — {item.city}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
