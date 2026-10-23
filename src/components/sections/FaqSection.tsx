import Link from "next/link";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faq } from "@/lib/content";
import { site } from "@/lib/site";
import { GridBackdrop } from "@/components/ui/Decor";

export function FaqSection({ limit }: { limit?: number }) {
  const items = limit ? faq.slice(0, limit) : faq;

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <section className="relative isolate overflow-hidden bg-paper py-20 md:py-28">
      <GridBackdrop mask="radial" className="opacity-70" />
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Questions fréquentes"
            title={
              <>
                Vos questions, nos <em className="italic text-azur">réponses</em>.
              </>
            }
            intro="Une question de budget, de délai ou d'implantation ? Ces réponses couvrent les demandes les plus courantes."
          />
          <Reveal delay={0.2}>
            <div className="mt-8 rounded-[16px] border border-ink/10 bg-cream/60 p-6">
              <p className="text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-azur-dark">
                Vous préférez parler ?
              </p>
              <a
                href={`tel:${site.phone.href}`}
                className="mt-3 flex items-center gap-3 font-display text-[1.4rem] text-ink transition-colors hover:text-azur"
              >
                <Icon name="phone" size={18} className="text-azur" />
                {site.phone.display}
              </a>
              <p className="mt-2 text-[0.82rem] text-ink-muted">
                {site.openingHours[0].label} · {site.openingHours[0].value}
              </p>
              <Link href="/contact" className="link-arrow mt-5 inline-flex">
                Poser ma question
                <Icon name="arrow-right" size={15} />
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <Accordion items={items} />
        </Reveal>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
