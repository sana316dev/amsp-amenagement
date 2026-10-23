import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { StepsTimeline } from "@/components/sections/StepsTimeline";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { Testimonials } from "@/components/sections/Testimonials";
import { CtaBand } from "@/components/sections/CtaBand";
import { Icon } from "@/components/ui/icons";
import { processSteps } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Notre méthode : 5 étapes du projet à la pose",
  description:
    "Visite gratuite, prise de mesures, conception, devis détaillé sous 48 h, fabrication sur mesure et pose soignée : découvrez la méthode AMSP Aménagement au Chambon-Feugerolles.",
  alternates: { canonical: "/notre-methode" },
  openGraph: {
    title: "Notre méthode — AMSP Aménagement",
    description: "Cinq étapes claires, de la visite à la garantie, pour un projet sans mauvaise surprise.",
    url: "/notre-methode",
    images: ["/images/atelier.jpg"],
  },
};

export default function MethodePage() {
  return (
    <>
      <PageHero
        eyebrow="Notre méthode"
        title={
          <>
            La proximité, l&apos;écoute et la <em className="italic text-azur">qualité de pose</em>.
          </>
        }
        intro="Un projet d'aménagement réussi n'est pas une question de chance : c'est une méthode. La nôtre tient en cinq étapes, toutes documentées et datées."
        image="/images/atelier.jpg"
        imageAlt="Détail d'un plan de travail et d'une robinetterie dans une cuisine sur mesure"
        badge="Devis sous 48 h"
        crumbs={[{ label: "Notre méthode", href: "/notre-methode" }]}
      >
        <a href="/contact" className="btn btn-primary">
          Démarrer mon projet
          <Icon name="arrow-right" size={17} />
        </a>
        <a href={`tel:${site.phone.href}`} className="btn btn-ghost">
          <Icon name="phone" size={16} />
          {site.phone.display}
        </a>
      </PageHero>

      <StepsTimeline
        eyebrow="Étape par étape"
        title={
          <>
            Cinq étapes, de la première visite à la <em className="italic text-azur">garantie</em>.
          </>
        }
        intro="Chaque étape a un livrable : un relevé, un plan, un devis, une date de pose, un procès-verbal de réception."
        steps={processSteps.map((step) => ({ title: step.title, text: step.text }))}
      />

      <FeatureGrid
        eyebrow="Nos engagements"
        title={
          <>
            Ce que vous pouvez <em className="italic text-azur">attendre de nous</em>.
          </>
        }
        intro="Des engagements simples, vérifiables, que nous tenons sur chaque chantier."
        background="cream"
        features={[
          {
            title: "La proximité",
            text: "Nous sommes implantés au Chambon-Feugerolles et intervenons dans un rayon de 30 km. Un déplacement rapide, un suivi réel.",
            icon: "pin",
          },
          {
            title: "L'écoute",
            text: "Nous posons des questions avant de proposer. Votre budget et vos contraintes ne sont pas des détails.",
            icon: "handshake",
          },
          {
            title: "La qualité de pose",
            text: "Les ajustements se font sur place, à la main. Une plinthe qui ne tombe pas juste, on la reprend.",
            icon: "ruler",
          },
          {
            title: "La transparence",
            text: "Un devis détaillé, des délais datés, et aucun poste ajouté sans votre accord écrit.",
            icon: "document",
          },
        ]}
      />

      <Testimonials />
      <CtaBand />
    </>
  );
}
