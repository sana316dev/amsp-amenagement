import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { StepsTimeline } from "@/components/sections/StepsTimeline";
import { ProjectStrip } from "@/components/sections/ProjectStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { Icon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Rénovation intérieure à Le Chambon-Feugerolles et Saint-Étienne",
  description:
    "Rénovation de cuisines, salles de bain et pièces de vie dans la Loire : pose, finitions et coordination des artisans. Un interlocuteur unique, un devis détaillé, un chantier propre.",
  alternates: { canonical: "/renovation-interieure" },
  openGraph: {
    title: "Rénovation intérieure — AMSP Aménagement",
    description: "Travaux intérieurs, pose et finitions dans la Loire. Devis gratuit et détaillé.",
    url: "/renovation-interieure",
    images: ["/images/sejour-1.jpg"],
  },
};

export default function RenovationPage() {
  return (
    <>
      <PageHero
        eyebrow="Rénovation intérieure"
        title={
          <>
            Des travaux bien menés, des finitions <em className="italic text-azur">nettes</em>.
          </>
        }
        intro="Rénovation de pièces de vie, de cuisines et de salles d'eau : nous prenons en charge les travaux, la pose et les finitions, avec un seul interlocuteur du début à la fin."
        image="/images/sejour-1.jpg"
        imageAlt="Pièce de vie rénovée avec verrière intérieure et habillage bois"
        badge="Chantier propre & daté"
        crumbs={[{ label: "Rénovation intérieure", href: "/renovation-interieure" }]}
      >
        <a href="/contact" className="btn btn-primary">
          Demander un devis gratuit
          <Icon name="arrow-right" size={17} />
        </a>
        <a href={`tel:${site.phone.href}`} className="btn btn-ghost">
          <Icon name="phone" size={16} />
          {site.phone.display}
        </a>
      </PageHero>

      <SplitFeature
        eyebrow="Notre façon de travailler"
        title={
          <>
            Un chantier propre, un planning tenu, des <em className="italic text-azur">surprises évitées</em>.
          </>
        }
        paragraphs={[
          "Une rénovation réussie commence par un diagnostic honnête : ce qui peut être conservé, ce qui doit être repris, et ce que cela implique en temps et en budget.",
          "Nous protégeons les sols et les meubles, nous évacuons les gravats et nous laissons les lieux propres chaque soir. Un chantier qui avance, c'est aussi un chantier rangé.",
          "Lorsque d'autres corps d'état sont nécessaires (électricité, plomberie, carrelage), nous coordonnons les interventions et restons votre point de contact unique.",
        ]}
        points={[
          "Diagnostic avant devis",
          "Planning daté",
          "Protection & évacuation",
          "Garanties légales",
        ]}
        image="/images/sejour-3.jpg"
        imageAlt="Salon rénové avec mobilier clair et décoration naturelle"
        reverse
        cta={{ label: "Demander un diagnostic", href: "/contact" }}
      />

      <FeatureGrid
        eyebrow="Travaux réalisés"
        title={
          <>
            Les pièces que nous <em className="italic text-azur">transformons</em>.
          </>
        }
        intro="Du rafraîchissement au réaménagement complet, selon l'état du logement et votre budget."
        features={[
          {
            title: "Cuisines",
            text: "Rénovation complète ou partielle : dépose, reprise des murs, plomberie, électricité et pose de la nouvelle cuisine.",
            icon: "document",
          },
          {
            title: "Salles de bain & salles d'eau",
            text: "Douche à l'italienne, meuble vasque sur mesure, carrelage et étanchéité réalisés dans les règles.",
            icon: "sparkle",
          },
          {
            title: "Pièces de vie",
            text: "Ouverture de cloisons, verrières sur mesure, sols, peinture et habillages bois.",
            icon: "handshake",
          },
          {
            title: "Sols & finitions",
            text: "Pose de parquet, plinthes, seuils, joints et finitions soignées dans les moindres détails.",
            icon: "ruler",
          },
          {
            title: "Menuiseries intérieures",
            text: "Portes, placards encastrés, habillages et rangements intégrés à la rénovation.",
            icon: "compass",
          },
          {
            title: "Coordination des artisans",
            text: "Nous planifions et suivons les interventions des corps d'état partenaires, sans que vous ayez à courir après.",
            icon: "pin",
          },
        ]}
        background="cream"
      />

      <section className="bg-paper pb-20 md:pb-24">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-[16px] border border-ink/10 bg-cream/60 p-7 md:p-9">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-azur-dark">Périmètre d&apos;intervention</p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
              Nous réalisons nous-mêmes la menuiserie, l&apos;agencement et la pose. Pour les lots techniques
              (électricité, plomberie, carrelage), nous travaillons avec des artisans locaux de confiance et vous
              indiquons clairement qui intervient sur chaque poste du devis. Aucune surprise en cours de chantier.
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-muted">
              Vous avez un doute sur la faisabilité ? Appelez-nous : nous vous dirons franchement si le projet entre
              dans notre champ de compétences, ou vers qui vous tourner.
            </p>
          </div>
        </div>
      </section>

      <StepsTimeline
        eyebrow="Déroulé d'un chantier"
        title={
          <>
            De la première visite à la <em className="italic text-azur">réception</em>.
          </>
        }
        steps={[
          {
            title: "Visite technique",
            text: "Nous évaluons l'état des supports, les réseaux et les contraintes, puis nous vous remettons un avis franc sur ce qui est faisable.",
          },
          {
            title: "Devis détaillé & planning",
            text: "Chaque poste est chiffré, les délais sont datés, et les interventions des différents corps d'état sont planifiées.",
          },
          {
            title: "Préparation du chantier",
            text: "Protection des sols et des accès, évacuation des éléments déposés, livraison des matériaux.",
          },
          {
            title: "Travaux & suivi",
            text: "Nous vous informons de l'avancement, des éventuels ajustements et de la date de livraison prévue.",
          },
          {
            title: "Finitions & réception",
            text: "Reprise des détails, nettoyage, réception ensemble et remise des garanties.",
          },
        ]}
      />

      <ProjectStrip
        ids={["sejour-decloisonne", "sdb-minerale", "sde-verre-bois"]}
        eyebrow="Rénovations livrées"
        title={
          <>
            Séjours et salles d&apos;eau <em className="italic text-azur">rénovés</em>.
          </>
        }
      />

      <CtaBand
        eyebrow="Travaux intérieurs"
        title="Un chantier à préparer ? Parlons-en avant de signer."
        text="Un avis technique gratuit vaut mieux qu'un devis approximatif. Nous venons voir, mesurer et chiffrer."
      />
    </>
  );
}
