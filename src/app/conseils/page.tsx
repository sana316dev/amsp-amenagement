import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { articles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Conseils cuisine, agencement et rénovation",
  description:
    "Conseils d'artisan pour préparer votre projet : budget cuisine sur mesure, optimisation d'un dressing, choix des matières et étapes d'une rénovation dans la Loire.",
  alternates: { canonical: "/conseils" },
  openGraph: {
    title: "Conseils — AMSP Aménagement",
    description: "Guides pratiques pour votre cuisine, votre dressing et votre rénovation.",
    url: "/conseils",
    images: ["/images/cuisine-3.jpg"],
  },
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

export default function ConseilsPage() {
  return (
    <>
      <PageHero
        eyebrow="Conseils d'artisan"
        title={
          <>
            Nos conseils avant de vous <em className="italic text-azur">lancer</em>.
          </>
        }
        intro="Budget, implantation, matières, délais : les réponses que nous donnons tous les jours en rendez-vous, rassemblées ici pour vous aider à préparer votre projet."
        image="/images/cuisine-3.jpg"
        imageAlt="Cuisine lumineuse avec plan de travail en pierre"
        badge="Guides pratiques"
        crumbs={[{ label: "Conseils", href: "/conseils" }]}
      />

      <section className="bg-paper pb-20 md:pb-28">
        <div className="container-x">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, index) => (
              <Reveal key={article.slug} delay={index * 0.06}>
                <article className="group">
                  <Link href={`/conseils/${article.slug}`} className="block">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[16px] bg-sand">
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink backdrop-blur">
                        {article.category}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-3 text-[0.7rem] uppercase tracking-[0.12em] text-ink/60">
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                      <span aria-hidden="true">·</span>
                      <span>{article.readingTime} de lecture</span>
                    </div>
                    <h2 className="mt-2.5 text-[1.25rem] leading-snug transition-colors group-hover:text-azur">
                      {article.title}
                    </h2>
                    <p className="mt-2.5 text-[0.9rem] leading-relaxed text-ink-muted">{article.excerpt}</p>
                    <span className="link-arrow mt-4 inline-flex">
                      Lire l&apos;article
                      <Icon name="arrow-right" size={15} />
                    </span>
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Une question précise ?"
        title="Un conseil vaut mieux qu'un long article."
        text="Appelez-nous : nous répondons franchement, même quand la réponse est « ce n'est pas nécessaire »."
      />
    </>
  );
}
