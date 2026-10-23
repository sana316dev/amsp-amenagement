import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/ui/icons";
import { MeasureLine } from "@/components/ui/Decor";
import { DepthCard } from "@/components/ui/DepthCard";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  paragraphs: string[];
  points?: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  background?: "paper" | "cream";
  cta?: { label: string; href: string };
};

export function SplitFeature({
  eyebrow,
  title,
  paragraphs,
  points,
  image,
  imageAlt,
  reverse = false,
  background = "paper",
  cta,
}: Props) {
  return (
    <section className={`py-20 md:py-28 ${background === "cream" ? "bg-cream" : "bg-paper"}`}>
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className={reverse ? "lg:order-2" : ""} y={30}>
          <div className="relative">
            <MeasureLine
              label="Sur mesure"
              className="absolute -left-6 bottom-16 top-12 hidden lg:flex"
            />
            <DepthCard intensity={7} glow={false}>
              <div className="arch relative aspect-[4/5] overflow-hidden bg-sand">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
            </DepthCard>
            <div className="absolute -bottom-5 -right-3 hidden items-center gap-3 rounded-full bg-paper px-5 py-3 shadow-[0_18px_40px_rgba(25,23,19,0.14)] sm:flex">
              <span className="flex size-7 items-center justify-center rounded-full bg-azur text-paper">
                <Icon name="sparkle" size={14} />
              </span>
              <span className="text-[0.74rem] font-semibold text-ink">Fait sur mesure, à la main</span>
            </div>
          </div>
        </Reveal>

        <div className={reverse ? "lg:order-1" : ""}>
          <Reveal>
            <p className="eyebrow">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-[clamp(1.9rem,3.4vw,2.9rem)] leading-[1.05]">{title}</h2>
          </Reveal>
          <div className="mt-6 space-y-4">
            {paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph.slice(0, 24)} delay={0.1 + index * 0.05}>
                <p className="text-[0.98rem] leading-relaxed text-ink-muted">{paragraph}</p>
              </Reveal>
            ))}
          </div>

          {points && (
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {points.map((point, index) => (
                <Reveal key={point} delay={0.16 + index * 0.04}>
                  <li className="flex items-start gap-3 text-[0.9rem] leading-snug text-ink/85">
                    <Icon name="check" size={16} className="mt-0.5 shrink-0 text-azur" />
                    {point}
                  </li>
                </Reveal>
              ))}
            </ul>
          )}

          {cta && (
            <Reveal delay={0.24}>
              <Link href={cta.href} className="link-arrow mt-8 inline-flex">
                {cta.label}
                <Icon name="arrow-right" size={15} />
              </Link>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
