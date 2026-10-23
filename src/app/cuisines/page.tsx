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
  title: "Cuisines sur mesure à Saint-Étienne et au Chambon-Feugerolles",
  description:
    "Cuisiniste artisan à Le Chambon-Feugerolles, près de Saint-Étienne : cuisines modernes sur mesure, rénovation de cuisine, îlots, plans de travail et électroménager intégré. Devis gratuit sous 48 h.",
  alternates: { canonical: "/cuisines" },
  openGraph: {
    title: "Cuisines sur mesure — AMSP Aménagement",
    description:
      "Conception, fabrication et pose de cuisines sur mesure à Le Chambon-Feugerolles et dans la Loire. Devis gratuit.",
    url: "/cuisines",
    images: ["/images/cuisine-1.jpg"],
  },
};

export default function CuisinesPage() {
  return (
    <>
      <PageHero
        eyebrow="Cuisines sur mesure"
        title={
          <>
            La cuisine qui vous ressemble, dessinée <em className="italic text-azur">au millimètre</em>.
          </>
        }
        intro="Cuisine ouverte, îlot central, rangements toute hauteur : nous concevons, fabriquons et posons votre cuisine à la mesure exacte de votre pièce et de vos habitudes."
        image="/images/cuisine-2.jpg"
        imageAlt="Cuisine sur mesure aux façades claires avec plan de travail en pierre"
        badge="Étude et devis gratuits"
        crumbs={[{ label: "Cuisines", href: "/cuisines" }]}
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
        eyebrow="Notre approche"
        title={
          <>
            Une cuisine pensée pour <em className="italic text-azur">cuisiner</em>, pas seulement pour être vue.
          </>
        }
        paragraphs={[
          "Nous partons toujours de vos gestes : où vous rangez les casseroles, à quelle hauteur vous coupez, combien vous êtes à cuisiner le soir. Le plan vient après.",
          "Chaque meuble est fabriqué sur mesure pour votre pièce : murs qui ne sont pas d'aplomb, fenêtre basse, gaine technique dans l'angle — rien n'est laissé à l'approximation.",
          "Vous choisissez les façades, le plan de travail et la quincaillerie avec nos conseils, sans catalogue imposé et sans supplément caché.",
        ]}
        points={[
          "Fabrication sur mesure",
          "Plans et 3D avant validation",
          "Pose par nos soins",
          "Électroménager intégré",
        ]}
        image="/images/cuisine-4.jpg"
        imageAlt="Détail d'un plan de travail et d'une robinetterie de cuisine sur mesure"
        cta={{ label: "Prendre rendez-vous", href: "/contact" }}
      />

      <FeatureGrid
        eyebrow="Nos prestations cuisine"
        title={
          <>
            Du simple relooking à la cuisine <em className="italic text-azur">entièrement repensée</em>.
          </>
        }
        intro="Nous adaptons le projet à l'état de la pièce et à votre budget, sans jamais sacrifier la qualité de la pose."
        features={[
          {
            title: "Cuisines modernes & contemporaines",
            text: "Lignes épurées, façades laquées ou bois, plan de travail minéral. Une cuisine actuelle qui reste intemporelle.",
            icon: "sparkle",
          },
          {
            title: "Rénovation & remplacement",
            text: "Dépose de l'ancienne cuisine, reprise des murs et des sols si nécessaire, puis installation complète.",
            icon: "document",
          },
          {
            title: "Plans de travail, îlots & crédences",
            text: "Plan de travail sur mesure, îlot avec assise, crédence ajustée au millimètre autour de vos équipements.",
            icon: "ruler",
          },
          {
            title: "Rangements & électroménager intégré",
            text: "Tiroirs profonds, colonnes, rangements d'angle, hotte et four intégrés : chaque volume est utilisé.",
            icon: "compass",
          },
          {
            title: "Éclairage & finitions",
            text: "Bandeaux LED sous meubles, prises judicieusement placées, plinthes et joints soignés.",
            icon: "handshake",
          },
          {
            title: "Petites surfaces",
            text: "Moins de 8 m² ? Nous savons exploiter les cuisines étroites, en L ou en linéaire optimisé.",
            icon: "pin",
          },
        ]}
      />

      <StepsTimeline
        eyebrow="Comment ça se passe"
        title={
          <>
            Six étapes claires, de la visite à la <em className="italic text-azur">pose</em>.
          </>
        }
        intro="Un calendrier daté dès la signature du devis, et un interlocuteur unique jusqu'à la réception."
        steps={[
          {
            title: "Visite & premier échange",
            text: "Nous venons chez vous pour comprendre vos usages, mesurer la pièce et repérer les contraintes techniques (eau, électricité, évacuations).",
          },
          {
            title: "Prise de mesures détaillée",
            text: "Relevé précis de chaque cote, y compris les défauts des murs et la hauteur sous plafond. C'est la base d'un meuble qui tombe juste.",
          },
          {
            title: "Conception & conseils",
            text: "Nous dessinons plusieurs implantations, comparons les matières et validons ensemble les arbitrages, en tenant compte de votre budget.",
          },
          {
            title: "Devis détaillé",
            text: "Un document ligne par ligne : meubles, quincaillerie, plan de travail, électroménager, pose et délais. Remis sous 48 h après les mesures.",
          },
          {
            title: "Fabrication sur mesure",
            text: "Votre cuisine est fabriquée à l'atelier, aux cotes relevées. Vous êtes informé de l'avancement et de la date de livraison.",
          },
          {
            title: "Pose & réception",
            text: "Pose par nos soins, protection des sols, évacuation des emballages, réglages et réception ensemble, avec les garanties.",
          },
        ]}
      />

      <ProjectStrip
        ids={["cuisine-chene-pierre", "cuisine-blanc-laiton", "cuisine-optimisee"]}
        eyebrow="Cuisines réalisées"
        title={
          <>
            Quelques cuisines livrées dans la <em className="italic text-azur">Loire</em>.
          </>
        }
        intro="Des projets différents, une même exigence sur les ajustements et les finitions."
      />

      <CtaBand
        eyebrow="Votre cuisine"
        title="Un projet de cuisine ? Commençons par une visite gratuite."
        text="Nous nous déplaçons avec un mètre et beaucoup de questions. Vous recevez ensuite une proposition chiffrée, sans engagement."
      />
    </>
  );
}
