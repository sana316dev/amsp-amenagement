import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment AMSP Aménagement collecte et traite vos données personnelles dans le cadre des demandes de devis. Vos droits, durées de conservation et contact.",
  alternates: { canonical: "/politique-de-confidentialite" },
  robots: { index: false, follow: true },
};

export default function ConfidentialitePage() {
  return (
    <section className="bg-paper pb-20 pt-28 md:pb-28 md:pt-36">
      <div className="container-narrow">
        <Breadcrumbs items={[{ label: "Politique de confidentialité", href: "/politique-de-confidentialite" }]} />
        <h1 className="mt-8 text-[clamp(2rem,4vw,3rem)] leading-[1.05]">Politique de confidentialité</h1>
        <p className="mt-4 text-[0.85rem] text-ink/65">Dernière mise à jour : octobre 2026</p>

        <div className="mt-10 space-y-9 text-[0.96rem] leading-[1.75] text-ink/80">
          <section>
            <h2 className="text-[1.3rem]">1. Responsable du traitement</h2>
            <p className="mt-3">
              Les données collectées sur ce site sont traitées par {site.legalName}, {site.address.street},{" "}
              {site.address.postalCode} {site.address.city}. Pour toute question relative à vos données personnelles,
              vous pouvez nous écrire à {site.email} ou nous appeler au {site.phone.display}.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">2. Quelles données sont collectées ?</h2>
            <p className="mt-3">
              Le formulaire de demande de devis nous transmet uniquement les informations que vous saisissez :
            </p>
            <ul className="mt-3 space-y-1.5">
              <li>Votre nom et prénom</li>
              <li>Votre numéro de téléphone</li>
              <li>Votre adresse e-mail, si vous la renseignez</li>
              <li>Votre commune et le type de projet</li>
              <li>Le budget envisagé, si vous le renseignez</li>
              <li>Le descriptif de votre projet</li>
            </ul>
            <p className="mt-3">
              Ces informations sont transmises via WhatsApp ou par e-mail, selon le bouton que vous utilisez. Le site
              ne stocke pas vos données dans une base de données.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">3. Pourquoi et sur quelle base ?</h2>
            <p className="mt-3">
              Vos données sont utilisées dans le seul but de répondre à votre demande, de vous recontacter et
              d&apos;établir un devis. Ce traitement repose sur votre consentement, exprimé en cochant la case prévue à
              cet effet dans le formulaire. Sans ce consentement, nous ne pouvons pas traiter votre demande.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">4. Durée de conservation</h2>
            <p className="mt-3">
              Les demandes non suivies d&apos;un devis sont conservées trois ans à compter du dernier contact. Les
              documents relatifs à un devis ou à un chantier sont conservés pendant la durée des garanties légales et
              les délais comptables et fiscaux applicables (dix ans pour les documents comptables).
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">5. Destinataires</h2>
            <p className="mt-3">
              Vos données sont destinées uniquement à {site.legalName} et ne sont ni vendues, ni louées, ni cédées à des
              tiers à des fins commerciales. Lorsque vous utilisez l&apos;envoi par WhatsApp ou par e-mail, les
              conditions d&apos;utilisation de ces services s&apos;appliquent également.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">6. Vos droits</h2>
            <p className="mt-3">
              Conformément au RGPD et à la loi Informatique et Libertés, vous disposez des droits d&apos;accès, de
              rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de vos données. Pour
              exercer ces droits, écrivez à {site.email} en précisant votre demande. Une réponse vous sera apportée dans
              un délai maximum d&apos;un mois.
            </p>
            <p className="mt-3">
              Vous pouvez également introduire une réclamation auprès de la CNIL (Commission nationale de
              l&apos;informatique et des libertés), 3 place de Fontenoy, TSA 80715, 75334 Paris Cedex 07 —{" "}
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-azur/40 underline-offset-4 hover:text-azur"
              >
                www.cnil.fr
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">7. Cookies et mesure d&apos;audience</h2>
            <p className="mt-3">
              Ce site n&apos;utilise aucun cookie publicitaire ni traceur de réseau social. La carte d&apos;accès Google
              Maps intégrée à la page de contact peut déposer des cookies techniques de Google lors de son affichage.
              Vous pouvez les refuser en bloquant les contenus tiers dans les réglages de votre navigateur.
            </p>
          </section>

          <section>
            <h2 className="text-[1.3rem]">8. Sécurité</h2>
            <p className="mt-3">
              Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les
              informations que vous nous transmettez : accès limité aux personnes concernées, boîte de messagerie
              protégée, appareils sécurisés.
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
