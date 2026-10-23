"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/ui/icons";

type Props = {
  before: string;
  after: string;
  title: string;
  description: string;
  alt: string;
};

export function BeforeAfter({ before, after, title, description, alt }: Props) {
  const [position, setPosition] = useState(52);

  return (
    <figure className="group">
      <div className="relative aspect-[4/3] select-none overflow-hidden rounded-[16px] bg-sand">
        <Image src={after} alt={`Après : ${alt}`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image
            src={before}
            alt={`Avant : ${alt}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-paper backdrop-blur">
          Avant
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-paper/85 px-3 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink backdrop-blur">
          Après
        </span>

        <div
          className="pointer-events-none absolute inset-y-0 z-10 w-px bg-paper/90 shadow-[0_0_18px_rgba(0,0,0,0.35)]"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-paper text-ink shadow-lg transition-transform duration-300 group-hover:scale-105">
            <Icon name="ruler" size={18} />
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label={`Comparer avant et après — ${title}`}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>

      <figcaption className="mt-4">
        <h3 className="text-[1.15rem] leading-snug">{title}</h3>
        <p className="mt-1.5 text-[0.88rem] leading-relaxed text-ink-muted">{description}</p>
      </figcaption>
    </figure>
  );
}
