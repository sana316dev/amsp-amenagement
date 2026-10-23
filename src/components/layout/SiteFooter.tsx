import Link from "next/link";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "./Logo";
import { FooterWordmark } from "./FooterWordmark";
import { footerNav } from "@/lib/nav";
import { services } from "@/lib/content";
import { site, whatsappLink } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-azur-dark text-paper">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="container-x relative z-10 pt-16 pb-24 md:pt-20 lg:pb-10">
        <div className="relative isolate grid gap-12 pb-10 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <FooterWordmark />
          <div>
            <Logo tone="paper" />
            <p className="mt-6 max-w-xs text-[0.95rem] leading-relaxed text-paper/85">
              Cuisines, dressings et agencements intérieurs sur mesure. Conception, fabrication et pose par un artisan
              implanté au Chambon-Feugerolles.
            </p>
            <div className="mt-7 flex gap-3">
              <a
                href={`tel:${site.phone.href}`}
                aria-label={`Appeler le ${site.phone.display}`}
                className="flex size-10 items-center justify-center rounded-full border border-paper/25 text-paper/90 transition-colors hover:border-azur-bright hover:text-azur-bright"
              >
                <Icon name="phone" size={17} />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous écrire sur WhatsApp"
                className="flex size-10 items-center justify-center rounded-full border border-paper/25 text-paper/90 transition-colors hover:border-azur-bright hover:text-azur-bright"
              >
                <WhatsAppIcon size={17} />
              </a>
              <a
                href={`mailto:${site.email}`}
                aria-label="Nous envoyer un e-mail"
                className="flex size-10 items-center justify-center rounded-full border border-paper/25 text-paper/90 transition-colors hover:border-azur-bright hover:text-azur-bright"
              >
                <Icon name="mail" size={17} />
              </a>
            </div>
          </div>

          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-paper/70">Nos prestations</p>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={service.href} className="text-paper/85 transition-colors hover:text-azur-bright">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/realisations" className="text-paper/85 transition-colors hover:text-azur-bright">
                  Nos réalisations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-paper/70">Le site</p>
            <ul className="mt-5 space-y-3 text-[0.92rem]">
              {footerNav.slice(4).map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-paper/85 transition-colors hover:text-azur-bright">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-paper/70">Nous trouver</p>
            <address className="mt-5 space-y-3 text-[0.92rem] not-italic text-paper/85">
              <p className="flex gap-3">
                <Icon name="pin" size={17} className="mt-0.5 shrink-0 text-azur-bright" />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.postalCode} {site.address.city}
                </span>
              </p>
              <p className="flex gap-3">
                <Icon name="phone" size={17} className="mt-0.5 shrink-0 text-azur-bright" />
                <a href={`tel:${site.phone.href}`} className="transition-colors hover:text-azur-bright">
                  {site.phone.display}
                </a>
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
            </address>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-paper/20 pt-8 text-[0.75rem] text-paper/70 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName} — Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/mentions-legales" className="transition-colors hover:text-azur-bright">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="transition-colors hover:text-azur-bright">
              Politique de confidentialité
            </Link>
            <Link href="/zones-d-intervention" className="transition-colors hover:text-azur-bright">
              Zones d&apos;intervention
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
