import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { StatsBand } from "@/components/sections/StatsBand";
import { Marquee } from "@/components/sections/Marquee";
import { TrustValues } from "@/components/sections/TrustValues";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProjectsPreview } from "@/components/sections/ProjectsPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { ZonesSection } from "@/components/sections/ZonesSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";

export const metadata: Metadata = {
  title: "Cuisines et aménagements sur mesure au Chambon-Feugerolles | AMSP Aménagement",
  description:
    "AMSP Aménagement conçoit, fabrique et pose cuisines, dressings, placards et agencements intérieurs sur mesure au Chambon-Feugerolles, près de Saint-Étienne. Devis gratuit sous 48 h.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Marquee />
      <TrustValues />
      <ServicesPreview />
      <ProjectsPreview />
      <ProcessSection />
      <Testimonials />
      <ZonesSection />
      <FaqSection limit={4} />
      <CtaBand />
    </>
  );
}
