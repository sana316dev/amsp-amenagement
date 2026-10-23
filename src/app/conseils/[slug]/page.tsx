import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/icons";
import { CtaBand } from "@/components/sections/CtaBand";
import { articles } from "@/lib/content";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/conseils/${article.slug}` },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url: `/conseils/${article.slug}`,
      images: [article.image],
      publishedTime: article.date,
    },
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(new Date(value));
}

export default async function ArticlePage({ params }: Params) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);
  if (!article) notFound();

  const others = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: `${site.url}${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${site.url}/conseils/${article.slug}` },
  };

  return (
    <>
      <article>
        <header className="bg-paper pb-10 pt-28 md:pt-36">
          <div className="container-narrow">
            <Breadcrumbs
              items={[
                { label: "Conseils", href: "/conseils" },
                { label: article.title, href: `/conseils/${article.slug}` },
              ]}
            />
            <div className="mt-8 flex flex-wrap items-center gap-3 text-[0.7rem] uppercase tracking-[0.14em] text-ink/60">
              <span className="rounded-full bg-cream px-3 py-1 font-semibold text-azur-dark">{article.category}</span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{article.readingTime} de lecture</span>
            </div>
            <h1 className="mt-5 text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.05]">{article.title}</h1>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-relaxed text-ink-muted">{article.excerpt}</p>
          </div>
        </header>

        <div className="container-narrow">
          <Reveal>
            <div className="relative aspect-[16/9] overflow-hidden rounded-[18px] bg-sand">
              <Image src={article.image} alt={article.title} fill priority sizes="100vw" className="object-cover" />
            </div>
          </Reveal>

          <div className="mt-12 space-y-8 pb-8">
            {article.sections.map((section, index) => (
              <section key={index}>
                {section.heading && <h2 className="text-[1.5rem] leading-snug md:text-[1.75rem]">{section.heading}</h2>}
                <div className={`space-y-4 ${section.heading ? "mt-4" : ""}`}>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph.slice(0, 30)} className="text-[1rem] leading-[1.75] text-ink/80">
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.list && (
                  <ul className="mt-5 space-y-2.5">
                    {section.list.map((item) => (
                      <li key={item} className="flex gap-3 text-[0.96rem] leading-relaxed text-ink/80">
                        <Icon name="check" size={16} className="mt-1 shrink-0 text-azur" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <div className="my-10 flex flex-col items-start gap-4 rounded-[16px] border border-ink/10 bg-cream/60 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-[1.2rem]">Un projet dans la Loire ?</p>
              <p className="mt-1 text-[0.88rem] text-ink-muted">Visite et devis gratuits, sous 48 h.</p>
            </div>
            <Link href="/contact" className="btn btn-primary shrink-0">
              Demander un devis
              <Icon name="arrow-right" size={16} />
            </Link>
          </div>

          {others.length > 0 && (
            <section className="border-t border-ink/10 py-10">
              <h2 className="text-[1.1rem] uppercase tracking-[0.16em] text-ink/65">À lire aussi</h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {others.map((item) => (
                  <Link key={item.slug} href={`/conseils/${item.slug}`} className="group">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[14px] bg-sand">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    <p className="mt-3 text-[0.66rem] uppercase tracking-[0.14em] text-ink/60">{item.category}</p>
                    <h3 className="mt-1.5 text-[1.02rem] leading-snug transition-colors group-hover:text-azur">
                      {item.title}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>

      <CtaBand />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
