import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SplitFeature } from "@/components/sections/SplitFeature";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProjectStrip } from "@/components/sections/ProjectStrip";
import { CtaBand } from "@/components/sections/CtaBand";
import { Icon } from "@/components/ui/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Agencement sur mesure : dressings, placards, bibliothèques",
  description:
    "Dressings, placards, bibliothèques, meubles TV et rangements sous escalier ou sous pente, fabriqués sur mesure au Chambon-Feugerolles et à Saint-Étienne. Devis gratuit.",
  alternates: { canonical: "/agencement-sur-mesure" },
  openGraph: {
    title: "Agencement sur mesure — AMSP Aménagement",
    description: "Dressings, placards, bibliothèques et meubles sur mesure dans la Loire. Devis gratuit sous 48 h.",
    url: "/agencement-sur-mesure",
    images: ["/images/agencement-3.jpg"],
  },
};

export default function AgencementPage() {
  return (
    <>
      <PageHero
        eyebrow="Agencement sur mesure"
        title={
          <>
            Chaque recoin compte, surtout ceux que l&apos;on <em className="italic text-azur">n&apos;utilise pas</em>.
          </>
        }
        intro="Dressings, placards, bibliothèques, meubles TV, rangements sous escalier ou sous pente : nous transformons les espaces perdus en mètres de rangement utiles."
        image="/images/agencement-3.jpg"
        imageAlt="Meuble d'entrée sur mesure en bois avec miroir rond"
        badge="Fabrication à l'atelier"
        crumbs={[{ label: "Agencement sur mesure", href: "/agencement-sur-mesure" }]}
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
        eyebrow="Menuiserie & agencement"
        title={
          <>
            Un meuble qui épouse la pièce, pas l&apos;<em className="italic text-azur">inverse</em>.
          </>
        }
        paragraphs={[
          "Un dressing sous pente, un meuble TV dans un renfoncement, une bibliothèque qui contourne une porte : ces projets ne se trouvent pas en magasin. Ils se dessinent.",
          "Nous relevons les cotes sur place, concevons le meuble dans son environnement, puis le fabriquons à l'atelier avant de le poser et de l'ajuster.",
          "Le choix des matériaux compte autant que la forme : chêne, frêne, panneaux plaqués, laques mates. Nous vous montrons des échantillons avant de décider.",
        ]}
        points={[
          "Relevé de cotes précis",
          "Échantillons de matières",
          "Quincaillerie de qualité",
          "Ajustements sur place",
        ]}
        image="/images/agencement-1.jpg"
        imageAlt="Rangement sur mesure en chêne clair intégré dans un mur"
        reverse
        cta={{ label: "Parler de mon projet", href: "/contact" }}
      />

      <FeatureGrid
        eyebrow="Ce que nous réalisons"
        title={
          <>
            Des meubles <em className="italic text-azur">utiles</em>, dessinés pour durer.
          </>
        }
        intro="Chaque réalisation est pensée pour l'usage quotidien : accès facile, rangement généreux, finitions discrètes."
        features={[
          {
            title: "Dressings",
            text: "Penderies, tiroirs, tiroirs à bijoux, éclairage intérieur. Toute la hauteur sous plafond est exploitée.",
            icon: "compass",
          },
          {
            title: "Placards & rangements",
            text: "Placards toute hauteur, portes coulissantes, rangements d'entrée et de couloir, niches sur mesure.",
            icon: "document",
          },
          {
            title: "Bibliothèques",
            text: "Bibliothèques murales, étagères sur mesure, meubles bas fermés : la culture trouve sa place sans encombrer.",
            icon: "sparkle",
          },
          {
            title: "Meubles TV & séjours",
            text: "Lignes basses, passages de câbles invisibles, rangements fermés pour une pièce toujours nette.",
            icon: "handshake",
          },
          {
            title: "Sous escalier & sous pente",
            text: "Nous exploitons les volumes irréguliers que les meubles standards laissent vides.",
            icon: "ruler",
          },
          {
            title: "Menuiserie intérieure",
            text: "Habillages, têtes de lit, verrières, plinthes et finitions bois en cohérence avec l'existant.",
            icon: "pin",
          },
        ]}
        background="paper"
      />

      <ProjectStrip
        ids={["dressing-chene", "bibliotheque-murale", "entree-console"]}
        eyebrow="Agencements réalisés"
        title={
          <>
            Dressings, bibliothèques et <em className="italic text-azur">entrées</em>.
          </>
        }
        intro="Trois exemples de meubles dessinés pour leur pièce, dans des logements stéphanois et ligériens."
      />

      <CtaBand
        eyebrow="Un espace perdu ?"
        title="Montrez-nous le recoin qui vous pose problème."
        text="Sous-pente, sous-escalier, mur en angle : nous venons mesurer et vous proposons une solution chiffrée, gratuitement."
      />
    </>
  );
}
