import type { Metadata } from "next";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { site, whatsappLink, fullAddress } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & devis gratuit — Le Chambon-Feugerolles",
  description:
    "Demandez votre devis gratuit pour une cuisine, un dressing ou un agencement sur mesure. AMSP Aménagement, 29 rue James Jackson, 42500 Le Chambon-Feugerolles. Réponse sous 24 h.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact & devis gratuit — AMSP Aménagement",
    description: "Un projet de cuisine ou d'agencement ? Demandez votre devis gratuit sous 48 h.",
    url: "/contact",
    images: ["/images/og.jpg"],
  },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-paper pb-16 pt-28 md:pb-24 md:pt-36">
        <div className="container-x">
          <Breadcrumbs items={[{ label: "Contact & devis", href: "/contact" }]} />

          <div className="mt-8 max-w-3xl">
            <Reveal>
              <p className="eyebrow">Contact & devis</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="mt-5 text-[clamp(2.2rem,5vw,3.9rem)] leading-[1.02]">
                Demandez votre <em className="italic text-azur">devis gratuit</em>.
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-2xl text-[1rem] leading-relaxed text-ink-muted md:text-[1.05rem]">
                Décrivez votre projet en une minute : nous vous rappelons sous 24 h ouvrées pour convenir d&apos;une
                visite gratuite à domicile. Vous recevez ensuite un devis détaillé sous 48 h.
              </p>
            </Reveal>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:gap-10">
            <Reveal delay={0.1}>
              <QuoteForm />
            </Reveal>

            <div className="space-y-5">
              <Reveal delay={0.16}>
                <div className="rounded-[20px] bg-azur p-7 text-paper">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-paper/80">
                    Nous joindre directement
                  </p>

                  <a
                    href={`tel:${site.phone.href}`}
                    className="mt-5 flex items-center gap-3 font-display text-[1.6rem] leading-none text-paper transition-colors hover:text-azur-bright"
                  >
                    <Icon name="phone" size={19} className="text-azur-bright" />
                    {site.phone.display}
                  </a>

                  <div className="mt-5 grid gap-2.5">
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn border border-paper/25 text-paper hover:border-paper hover:bg-paper/10"
                    >
                      <WhatsAppIcon size={17} />
                      Écrire sur WhatsApp
                    </a>
                    <a
                      href={`mailto:${site.email}`}
                      className="btn border border-paper/25 text-paper hover:border-paper hover:bg-paper/10"
                    >
                      <Icon name="mail" size={17} />
                      {site.email}
                    </a>
                  </div>

                  <div className="mt-7 space-y-4 border-t border-paper/15 pt-6 text-[0.88rem] text-paper/80">
                    <p className="flex gap-3">
                      <Icon name="pin" size={17} className="mt-0.5 shrink-0 text-azur-bright" />
                      <span>
                        {site.address.street}
                        <br />
                        {site.address.postalCode} {site.address.city}
                      </span>
                    </p>
                    <p className="flex gap-3">
                      <Icon name="clock" size={17} className="mt-0.5 shrink-0 text-azur-bright" />
                      <span>
                        {site.openingHours.map((slot) => (
                          <span key={slot.label} className="block">
                            {slot.label} : {slot.value}
                          </span>
                        ))}
                      </span>
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.22}>
                <div className="rounded-[20px] border border-ink/10 bg-cream/60 p-7">
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.22em] text-azur-dark">
                    Ce qui se passe ensuite
                  </p>
                  <ol className="mt-5 space-y-4">
                    {[
                      "Nous vous rappelons sous 24 h ouvrées.",
                      "Nous fixons ensemble un rendez-vous à domicile.",
                      "Vous recevez un devis détaillé sous 48 h.",
                    ].map((step, index) => (
                      <li key={step} className="flex gap-3 text-[0.88rem] leading-snug text-ink/80">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-paper font-display text-[0.78rem] text-azur">
                          {index + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                  <p className="mt-5 text-[0.78rem] leading-relaxed text-ink-muted">
                    Devis gratuit et sans engagement, dans un rayon de 30 km autour du Chambon-Feugerolles.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-cream pb-20 pt-4">
        <div className="container-x">
          <Reveal>
            <div className="overflow-hidden rounded-[20px] border border-ink/10 bg-sand">
              <iframe
                title={`Plan d'accès — ${site.name}, ${fullAddress}`}
                src={site.mapEmbed}
                width="100%"
                height="420"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[0.25]"
              />
            </div>
          </Reveal>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
            <p className="text-[0.85rem] text-ink-muted">{fullAddress}</p>
            <a
              href={site.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="link-arrow"
            >
              Ouvrir dans Google Maps
              <Icon name="arrow-up-right" size={15} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
