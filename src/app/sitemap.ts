import type { MetadataRoute } from "next";
import { articles } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/cuisines", priority: 0.9, changeFrequency: "monthly" },
    { path: "/agencement-sur-mesure", priority: 0.9, changeFrequency: "monthly" },
    { path: "/renovation-interieure", priority: 0.8, changeFrequency: "monthly" },
    { path: "/realisations", priority: 0.8, changeFrequency: "monthly" },
    { path: "/notre-methode", priority: 0.6, changeFrequency: "yearly" },
    { path: "/zones-d-intervention", priority: 0.6, changeFrequency: "yearly" },
    { path: "/contact", priority: 0.9, changeFrequency: "yearly" },
    { path: "/conseils", priority: 0.5, changeFrequency: "monthly" },
    { path: "/mentions-legales", priority: 0.1, changeFrequency: "yearly" },
    { path: "/politique-de-confidentialite", priority: 0.1, changeFrequency: "yearly" },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...articles.map((article) => ({
      url: `${site.url}/conseils/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}
