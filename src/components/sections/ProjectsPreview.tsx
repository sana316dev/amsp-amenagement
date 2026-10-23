import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { DepthCard } from "@/components/ui/DepthCard";
import { CornerMarks } from "@/components/ui/Decor";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/lib/content";

const selection = [projects[0], projects[7], projects[9]];

export function ProjectsPreview() {
  return (
    <section className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Réalisations"
            title={
              <>
                Des projets pensés pour <em className="italic text-azur">durer</em>.
              </>
            }
            intro="Quelques chantiers récents dans la Loire : cuisines, agencements et rénovations livrés ces derniers mois."
          />
          <Reveal delay={0.1}>
            <Link href="/realisations" className="link-arrow shrink-0">
              Toute la galerie
              <Icon name="arrow-right" size={15} />
            </Link>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2">
          <Reveal className="h-full">
            <DepthCard className="h-full" intensity={7}>
              <ProjectTile project={selection[0]} className="h-full min-h-[26rem]" large />
            </DepthCard>
          </Reveal>
          <div className="grid gap-5">
            <Reveal delay={0.08}>
              <DepthCard intensity={7}>
                <ProjectTile project={selection[1]} className="aspect-[16/11]" />
              </DepthCard>
            </Reveal>
            <Reveal delay={0.14}>
              <DepthCard intensity={7}>
                <ProjectTile project={selection[2]} className="aspect-[16/11]" />
              </DepthCard>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectTile({
  project,
  className = "",
  large = false,
}: {
  project: (typeof projects)[number];
  className?: string;
  large?: boolean;
}) {
  return (
    <Link href={`/realisations#${project.id}`} className={`group relative block overflow-hidden rounded-[18px] ${className}`}>
      <Image
        src={project.image}
        alt={`${project.title} — ${project.category} à ${project.city}`}
        fill
        sizes={large ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 45vw"}
        className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-90" />
      <CornerMarks tone="paper" size="size-5" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
        <div>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-paper/65">
            {project.category} · {project.city}
          </p>
          <h3 className={`mt-2 font-display leading-tight text-paper ${large ? "text-[1.7rem]" : "text-[1.25rem]"}`}>
            {project.title}
          </h3>
        </div>
        <span className="mb-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-paper/35 text-paper transition-all duration-500 group-hover:bg-paper group-hover:text-ink">
          <Icon name="arrow-up-right" size={16} />
        </span>
      </div>
    </Link>
  );
}
