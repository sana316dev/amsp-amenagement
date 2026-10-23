import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { site } from "@/lib/site";
import { GridBackdrop } from "@/components/ui/Decor";

export function ZonesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-paper py-20 md:py-28">
      <GridBackdrop mask="right" />
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <SectionHeading
          eyebrow="Zone d'intervention"
          title={
            <>
              Un artisan proche de chez vous, entre <em className="italic text-azur">Firminy</em> et Saint-Étienne.
            </>
          }
          intro="Nous nous déplaçons gratuitement pour la visite et la prise de mesures dans un rayon d'environ 30 km autour du Chambon-Feugerolles. Au-delà, appelez-nous : nous étudions chaque demande."
        />

        <div>
          <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
            {site.areas.map((area, index) => (
              <li key={area}>
                <Reveal delay={index * 0.04}>
                  <span className="flex items-center gap-3 border-b border-ink/10 py-3.5 text-[0.95rem] text-ink/85">
                    <Icon name="pin" size={15} className="text-azur" />
                    {area}
                  </span>
                </Reveal>
              </li>
            ))}
            <li>
              <Reveal delay={0.3}>
                <span className="flex items-center gap-3 border-b border-ink/10 py-3.5 text-[0.95rem] text-ink/60">
                  <Icon name="pin" size={15} className="text-azur/60" />
                  et communes alentours
                </span>
              </Reveal>
            </li>
          </ul>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Link href="/zones-d-intervention" className="link-arrow">
              Toutes les zones
              <Icon name="arrow-right" size={15} />
            </Link>
            <Link href="/contact" className="text-[0.85rem] font-semibold text-azur underline decoration-azur/30 underline-offset-4 transition-colors hover:decoration-azur">
              Vérifier mon éligibilité
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
