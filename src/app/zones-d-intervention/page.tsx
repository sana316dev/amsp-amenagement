import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { zones } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Zones d'intervention : Saint-Étienne, Firminy, Le Chambon-Feugerolles",
  description:
    "AMSP Aménagement intervient au Chambon-Feugerolles, Saint-Étienne, Firminy, La Ricamarie, Unieux, Fraisses et Roche-la-Molière pour vos cuisines et agencements sur mesure.",
  alternates: { canonical: "/zones-d-intervention" },
  openGraph: {
    title: "Zones d'intervention — AMSP Aménagement",
    description: "Cuisines et agencements sur mesure dans la Loire, autour du Chambon-Feugerolles et de Saint-Étienne.",
    url: "/zones-d-intervention",
    images: ["/images/escalier-1.jpg"],
  },
};

export default function ZonesPage() {
  return (
    <>
      <PageHero
        eyebrow="Zones d'intervention"
        title={
          <>
            Un artisan au plus près de <em className="italic text-azur">chez vous</em>.
          </>
        }
        intro="Implantés au Chambon-Feugerolles, nous intervenons dans toute la vallée de l'Ondaine et à Saint-Étienne. La visite et la prise de mesures sont gratuites dans un rayon d'environ 30 km."
        image="/images/escalier-1.jpg"
        imageAlt="Intérieur rénové avec escalier et salle à manger"
        badge="Visite gratuite"
        crumbs={[{ label: "Zones d'intervention", href: "/zones-d-intervention" }]}
      >
        <a href="/contact" className="btn btn-primary">
          Vérifier ma commune
          <Icon name="arrow-right" size={17} />
        </a>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow">Notre secteur</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-[clamp(1.8rem,3.2vw,2.6rem)] leading-[1.06]">
                Cuisiniste et agenceur dans la <em className="italic text-azur">Loire</em>.
              </h2>
            </Reveal>
            <div className="mt-6 space-y-4 text-[0.96rem] leading-relaxed text-ink-muted">
              <p>
                Nous sommes une entreprise artisanale installée au 29 rue James Jackson, au Chambon-Feugerolles, à
                quelques minutes de Saint-Étienne. Cette proximité n&apos;est pas un argument marketing : elle nous
                permet de revenir rapidement sur un chantier, de livrer sans frais de déplacement excessifs et de
                connaître les spécificités des logements du secteur.
              </p>
              <p>
                Maisons de ville anciennes du Chambon, pavillons de Firminy ou d&apos;Unieux, appartements stéphanois en
                centre-ville : les contraintes diffèrent, et notre expérience locale nous aide à anticiper les
                difficultés (murs humides, hauteurs sous plafond irrégulières, réseaux vétustes).
              </p>
              <p>
                Pour les cuisines, dressings, placards et agencements intérieurs, la visite technique et le devis sont
                gratuits dans les communes listées ci-contre. Au-delà, contactez-nous : nous étudions chaque demande au
                cas par cas.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`tel:${site.phone.href}`} className="btn btn-ghost">
                <Icon name="phone" size={16} />
                {site.phone.display}
              </a>
              <a href="/contact" className="btn btn-primary">
                Demander un devis
                <Icon name="arrow-right" size={16} />
              </a>
            </div>
          </div>

          <ul className="grid gap-4">
            {zones.map((zone, index) => (
              <li key={zone.name}>
                <Reveal delay={index * 0.05}>
                  <div className="rounded-[14px] border border-ink/10 bg-cream/50 p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-8 items-center justify-center rounded-full bg-paper text-azur">
                        <Icon name="pin" size={15} />
                      </span>
                      <h3 className="text-[1.05rem]">{zone.name}</h3>
                    </div>
                    <p className="mt-3 text-[0.88rem] leading-relaxed text-ink-muted">{zone.text}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-cream py-16 md:py-20">
        <div className="container-x">
          <div className="rounded-[16px] border border-ink/10 bg-paper p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-azur-dark">Et alentours ?</p>
                <h2 className="mt-4 text-[1.6rem] leading-tight md:text-[2rem]">
                  Votre commune n&apos;apparaît pas dans la liste ?
                </h2>
                <p className="mt-3 max-w-xl text-[0.93rem] leading-relaxed text-ink-muted">
                  Saint-Just-Saint-Razurt, Saint-Genest-Lerpt, Villars, Saint-Paul-en-Cornillon et les communes de
                  l&apos;Ondaine font souvent partie de nos déplacements. Un appel suffit pour savoir si nous pouvons
                  intervenir chez vous.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <a href={`tel:${site.phone.href}`} className="btn btn-primary justify-between">
                  Appeler maintenant
                  <Icon name="phone" size={16} />
                </a>
                <a href="/contact" className="btn btn-ghost justify-between">
                  Écrire un message
                  <Icon name="arrow-right" size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
