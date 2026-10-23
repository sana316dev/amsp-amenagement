import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DepthCard } from "@/components/ui/DepthCard";
import { projects } from "@/lib/content";

export function ProjectStrip({
  ids,
  eyebrow = "Réalisations",
  title,
  intro,
}: {
  ids: string[];
  eyebrow?: string;
  title: React.ReactNode;
  intro?: string;
}) {
  const selection = ids
    .map((id) => projects.find((project) => project.id === id))
    .filter((project): project is (typeof projects)[number] => Boolean(project));

  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          <Reveal delay={0.1}>
            <Link href="/realisations" className="link-arrow shrink-0">
              Toute la galerie
              <Icon name="arrow-right" size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selection.map((project, index) => (
            <Reveal key={project.id} delay={index * 0.07}>
              <Link href={`/realisations#${project.id}`} className="group block">
                <DepthCard intensity={6} glow={false}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-sand">
                    <Image
                      src={project.image}
                      alt={`${project.title} — ${project.city}`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                    />
                  </div>
                </DepthCard>
                <p className="mt-4 text-[0.64rem] font-semibold uppercase tracking-[0.18em] text-azur-dark">
                  {project.category} — {project.city}
                </p>
                <h3 className="mt-1.5 text-[1.12rem] leading-snug">{project.title}</h3>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
