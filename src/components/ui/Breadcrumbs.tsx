import Link from "next/link";
import { site } from "@/lib/site";

export type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ label: "Accueil", href: "/" }, ...items].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `${site.url}${item.href}`,
    })),
  };

  return (
    <>
      <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2 text-[0.72rem] text-ink/60">
        <Link href="/" className="transition-colors hover:text-azur">
          Accueil
        </Link>
        {items.map((item, index) => (
          <span key={item.href} className="flex items-center gap-2">
            <span aria-hidden="true" className="text-ink/25">
              /
            </span>
            {index === items.length - 1 ? (
              <span aria-current="page" className="text-ink/70">
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="transition-colors hover:text-azur">
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
