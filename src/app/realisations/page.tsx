import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";
import { BeforeAfter } from "@/components/gallery/BeforeAfter";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Réalisations : cuisines, dressings et agencements dans la Loire",
  description:
    "Galerie de réalisations AMSP Aménagement : cuisines sur mesure, dressings, placards, salles de bain et rénovations à Saint-Étienne, Firminy, Le Chambon-Feugerolles et alentours.",
  alternates: { canonical: "/realisations" },
  openGraph: {
    title: "Réalisations — AMSP Aménagement",
    description: "Cuisines, dressings, agencements et rénovations réalisés dans la Loire.",
    url: "/realisations",
    images: ["/images/sejour-2.jpg"],
  },
};

export default function RealisationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Réalisations"
        title={
          <>
            Des projets qui parlent mieux que <em className="italic text-azur">nos promesses</em>.
          </>
        }
        intro="Cuisines, dressings, placards, salles de bain et rénovations : parcourez une sélection de chantiers livrés ces dernières années dans la Loire."
        image="/images/sejour-2.jpg"
        imageAlt="Pièce de vie rénovée avec canapé clair et grand tapis"
        badge="250+ projets livrés"
        crumbs={[{ label: "Réalisations", href: "/realisations" }]}
      >
        <a href="/contact" className="btn btn-primary">
          Demander un devis gratuit
          <Icon name="arrow-right" size={17} />
        </a>
      </PageHero>

      <section className="bg-paper py-16 md:py-24">
        <div className="container-x">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">La galerie</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.04]">
                Filtrez par type de projet.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-muted">
                Chaque projet est unique : les dimensions, les matières et les contraintes n&apos;ont rien à voir d&apos;un
                logement à l&apos;autre. Ces réalisations donnent une idée de notre approche, pas un catalogue figé.
              </p>
            </Reveal>
          </div>

          <div className="mt-10">
            <ProjectGallery />
          </div>
        </div>
      </section>

      <section className="bg-cream py-20 md:py-28">
        <div className="container-x">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow">Avant / après</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,3rem)] leading-[1.04]">
                Faites glisser pour voir la <em className="italic text-azur">différence</em>.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-4 text-[0.98rem] leading-relaxed text-ink-muted">
                Deux transformations récentes : une cuisine devenue plus fonctionnelle, une salle de bain repensée dans
                un esprit plus minéral.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-8">
            <Reveal>
              <BeforeAfter
                before="/images/avant-1.jpg"
                after="/images/cuisine-1.jpg"
                title="Cuisine rénovée — Le Chambon-Feugerolles"
                description="Dépose de l'ancienne cuisine, reprise des murs et pose d'une cuisine sur mesure avec rangements toute hauteur."
                alt="cuisine avant et après rénovation"
              />
            </Reveal>
            <Reveal delay={0.1}>
              <BeforeAfter
                before="/images/avant-2.jpg"
                after="/images/salle-de-bain-2.jpg"
                title="Salle d'eau transformée — Fraisses"
                description="Remplacement de la baignoire par une douche à l'italienne, meuble suspendu sur mesure et paroi vitrée."
                alt="salle d'eau avant et après rénovation"
              />
            </Reveal>
          </div>

          <p className="mt-10 text-[0.74rem] text-ink/60">
            Visuels d&apos;illustration — remplacez ces photos par celles de vos propres chantiers avant mise en ligne.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Votre projet"
        title="Et si la prochaine réalisation était la vôtre ?"
        text="Décrivez-nous votre pièce, vos envies et votre budget. Nous vous dirons ce qui est possible, et à quel prix."
      />
    </>
  );
}
