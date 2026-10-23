import Link from "next/link";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/lib/site";

type Props = {
  title?: string;
  text?: string;
  eyebrow?: string;
};

export function CtaBand({
  eyebrow = "Votre projet commence ici",
  title = "Parlons de votre cuisine, de votre dressing, de votre intérieur.",
  text = "Un échange de quinze minutes suffit souvent à cadrer un projet. Nous nous déplaçons gratuitement pour prendre les mesures et vous remettons un devis détaillé sous 48 heures.",
}: Props) {
  return (
    <section className="relative overflow-hidden bg-azur-dark text-paper">
      <div className="grid-lines-light absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-24 size-[26rem] rounded-full bg-[radial-gradient(circle,rgba(69,196,245,0.3),transparent_65%)] blur-3xl"
      />
      <div className="container-x relative py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <Reveal>
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.24em] text-[#a8dcff]">{eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 max-w-2xl text-[clamp(1.9rem,4vw,3.4rem)] leading-[1.02] text-white">{title}</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-5 max-w-xl text-[0.98rem] leading-relaxed text-paper/90">{text}</p>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="flex flex-col gap-3">
              <Link
                href="/contact"
                className="btn w-full justify-between bg-azur-bright text-ink hover:bg-[#6fd4ff]"
              >
                Demander mon devis gratuit
                <Icon name="arrow-right" size={17} />
              </Link>
              <div className="grid gap-3 sm:grid-cols-2">
                <a
                  href={`tel:${site.phone.href}`}
                  className="btn border border-paper/45 text-paper hover:border-paper hover:bg-paper/10"
                >
                  <Icon name="phone" size={16} />
                  {site.phone.display}
                </a>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn border border-paper/45 text-paper hover:border-paper hover:bg-paper/10"
                >
                  <WhatsAppIcon size={16} />
                  WhatsApp
                </a>
              </div>
              <p className="mt-1 text-center text-[0.72rem] text-paper/80">
                Réponse sous 24 h ouvrées — {site.address.postalCode} {site.address.city}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
