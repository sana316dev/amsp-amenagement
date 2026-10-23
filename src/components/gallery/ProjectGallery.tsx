"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Icon } from "@/components/ui/icons";
import { projectCategories, projects, type ProjectCategory } from "@/lib/content";

export function ProjectGallery() {
  const [category, setCategory] = useState<"Tous" | ProjectCategory>("Tous");
  const filtered = category === "Tous" ? projects : projects.filter((project) => project.category === category);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtrer les réalisations par type de projet">
        {projectCategories.map((item) => {
          const active = category === item;
          return (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              aria-pressed={active}
              className={`rounded-full border px-4 py-2 text-[0.78rem] font-semibold tracking-[0.02em] transition-all duration-300 ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/15 bg-transparent text-ink/65 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {item}
              <span className={`ml-2 text-[0.68rem] ${active ? "text-paper/50" : "text-ink/35"}`}>
                {item === "Tous" ? projects.length : projects.filter((project) => project.category === item).length}
              </span>
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.article
              layout
              key={project.id}
              id={project.id}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
              className="group scroll-mt-32"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-[16px] bg-sand">
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.category} à ${project.city}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[1.1s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />
                <span className="absolute left-4 top-4 rounded-full bg-paper/90 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-ink backdrop-blur">
                  {project.category}
                </span>
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3">
                  <p className="text-[0.7rem] font-medium text-paper/85">{project.city}</p>
                  <span className="flex size-8 items-center justify-center rounded-full border border-paper/40 text-paper opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <Icon name="arrow-up-right" size={14} />
                  </span>
                </div>
              </div>
              <h3 className="mt-4 text-[1.15rem] leading-snug">{project.title}</h3>
              <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-muted">{project.description}</p>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-12 text-center text-[0.95rem] text-ink-muted">
          Aucune réalisation dans cette catégorie pour le moment — contactez-nous pour en parler.
        </p>
      )}
    </div>
  );
}
