import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/content";
import { GridBackdrop, RulerTicks } from "@/components/ui/Decor";

export function TrustValues() {
  return (
    <section className="relative isolate overflow-hidden bg-paper py-20 md:py-28">
      <GridBackdrop />
      <div className="container-x grid gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Pourquoi AMSP"
            title={
              <>
                Un artisan local, du premier trait de crayon à la{" "}
                <em className="italic text-azur">dernière plinthe</em>.
              </>
            }
            intro="Nous concevons, fabriquons et posons nous-mêmes vos aménagements. Pas d'intermédiaire, pas de sous-traitance en cascade : le même interlocuteur suit votre projet de la visite initiale à la réception du chantier."
          />
          <RulerTicks className="mt-8 max-w-[18rem]" />
          <Reveal delay={0.2}>
            <Link href="/notre-methode" className="link-arrow mt-8 inline-flex">
              Découvrir notre méthode
              <Icon name="arrow-right" size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
          {values.map((value, index) => (
            <Reveal key={value.title} delay={index * 0.06}>
              <div className="border-t border-ink/12 pt-6">
                <div className="flex items-start justify-between">
                  <span className="flex size-11 items-center justify-center rounded-full bg-cream text-azur">
                    <Icon name={value.icon} size={20} />
                  </span>
                  <span className="font-display text-[0.85rem] text-ink/25">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-[1.15rem] leading-snug">{value.title}</h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-muted">{value.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
