import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site d'AMSP Aménagement, cuisiniste et agenceur au Chambon-Feugerolles.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: false, follow: true },
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-paper pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="container-narrow">
        <Breadcrumbs items={[{ label: "Mentions légales", href: "/mentions-legales" }]} />
        <h1 className="mt-8 text-[clamp(2rem,4vw,3rem)] leading-[1.05]">Mentions légales</h1>
        <p className="mt-4 text-[0.85rem] text-ink/65">Dernière mise à jour : octobre 2026</p>

        <div className="mt-10 space-y-9 text-[0.96rem] leading-[1.75] text-ink/80">
          <section>
            <h2 className="text-[1.3rem]">1. Éditeur du site</h2>
            <p className="mt-3">
              Le site {site.url.replace("https://", "")} est édité par {site.legalName}, entreprise artisanale spécialisée
              dans les cuisines et agencements sur mesure.
            </p>
            <ul className="mt-3 space-y-1.5">
              <li>Adresse : {site.address.street}, {site.address.postalCode} {site.address.city}, France</li>
              <li>Téléphone : {site.phone.display}</li>
              <li>E-mail : {site.email}</li>
              <li>Forme juridique : [à compléter]</li>
              <li>Numéro SIRET : [à compléter]</li>
              <li>Numéro de TVA intracommunautaire : [à compléter]</li>
              <li>Responsable de la publication : [à compléter]</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[1.3rem]">2. Hébergement</h2>
            <p className="mt-3">
              Le site est hébergé par : [nom et adresse de l&apos;hébergeur à compléter — téléphone, site web]. Ces
              informations doivent être renseignées avant la mise en ligne du site.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">3. Propriété intellectuelle</h2>
            <p className="mt-3">
              L&apos;ensemble des contenus présents sur ce site (textes, photographies, illustrations, logos, plans,
              éléments graphiques) est protégé par le droit de la propriété intellectuelle. Toute reproduction,
              représentation ou réutilisation, totale ou partielle, sans autorisation écrite préalable est interdite.
            </p>
            <p className="mt-3">
              Les photographies de réalisations présentées sur ce site sont des visuels d&apos;illustration et ne
              constituent pas une description contractuelle des prestations.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">4. Responsabilité</h2>
            <p className="mt-3">
              {site.legalName} s&apos;efforce d&apos;assurer l&apos;exactitude des informations diffusées sur son site.
              Toutefois, elle ne peut garantir l&apos;exhaustivité ou l&apos;absence d&apos;erreur des informations
              présentées. Les informations relatives aux prestations, aux délais et aux prix sont données à titre
              indicatif et sont précisées dans le devis signé par le client.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">5. Liens externes</h2>
            <p className="mt-3">
              Ce site peut contenir des liens vers des sites tiers. {site.legalName} n&apos;exerce aucun contrôle sur ces
              sites et décline toute responsabilité quant à leur contenu.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">6. Données personnelles</h2>
            <p className="mt-3">
              Le traitement des données personnelles est décrit dans notre{" "}
              <a href="/politique-de-confidentialite" className="underline decoration-azur/40 underline-offset-4 hover:text-azur">
                politique de confidentialité
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">7. Droit applicable</h2>
            <p className="mt-3">
              Le présent site est soumis au droit français. En cas de litige, les tribunaux français sont seuls
              compétents.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
