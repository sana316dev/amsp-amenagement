import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { MobileCallBar } from "@/components/layout/MobileCallBar";
import { site } from "@/lib/site";
import { services } from "@/lib/content";

const manrope = localFont({
  src: "../fonts/manrope-latin.woff2",
  variable: "--font-manrope",
  weight: "300 700",
  display: "swap",
});

const fraunces = localFont({
  src: "../fonts/fraunces-latin.woff2",
  variable: "--font-fraunces",
  weight: "300 700",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Cuisines et aménagements sur mesure à Le Chambon-Feugerolles | AMSP Aménagement",
    template: "%s | AMSP Aménagement",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "cuisine sur mesure Le Chambon-Feugerolles",
    "cuisiniste Saint-Étienne",
    "agencement sur mesure Loire",
    "dressing sur mesure Saint-Étienne",
    "menuiserie Le Chambon-Feugerolles",
    "rénovation cuisine Firminy",
    "placards sur mesure",
    "AMSP Aménagement",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    title: "Cuisines et aménagements sur mesure — AMSP Aménagement",
    description: site.description,
    url: site.url,
    images: [{ url: "/images/og.jpg", width: 1200, height: 630, alt: "Cuisine sur mesure réalisée par AMSP Aménagement" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cuisines et aménagements sur mesure — AMSP Aménagement",
    description: site.description,
    images: ["/images/og.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "home improvement",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/favicon.svg" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#fbfaf6",
  colorScheme: "light",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${site.url}/#entreprise`,
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  url: site.url,
  telephone: site.phone.href,
  email: site.email,
  image: `${site.url}/images/hero.jpg`,
  logo: `${site.url}/images/og.jpg`,
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Virement, chèque, carte bancaire, espèces",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    postalCode: site.address.postalCode,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    addressCountry: site.address.countryCode,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.geo.lat,
    longitude: site.geo.lng,
  },
  hasMap: site.mapLink,
  areaServed: site.areas.map((city) => ({ "@type": "City", name: city })),
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "09:00",
      closes: "12:00",
      description: "Sur rendez-vous",
    },
  ],
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.short,
      url: `${site.url}${service.href}`,
      areaServed: site.areas.join(", "),
    },
  })),
  knowsAbout: [
    "Cuisine sur mesure",
    "Agencement intérieur",
    "Menuiserie sur mesure",
    "Dressing",
    "Placards",
    "Rénovation intérieure",
  ],
  slogan: site.baseline,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-sm focus:text-paper"
        >
          Aller au contenu
        </a>
        <SiteHeader />
        <main id="contenu">{children}</main>
        <SiteFooter />
        <MobileCallBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
