import { Icon, type IconName } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Feature = { title: string; text: string; icon?: IconName };

export function FeatureGrid({
  eyebrow,
  title,
  intro,
  features,
  columns = 3,
  background = "cream",
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
  background?: "cream" | "paper";
}) {
  const gridClass =
    columns === 2 ? "sm:grid-cols-2" : columns === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className={`py-20 md:py-28 ${background === "cream" ? "bg-cream" : "bg-paper"}`}>
      <div className="container-x">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
        <div className={`mt-12 grid gap-x-10 gap-y-9 ${gridClass}`}>
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 0.05}>
              <div className="border-t border-ink/12 pt-6">
                {feature.icon && (
                  <span className="mb-5 flex size-11 items-center justify-center rounded-full bg-paper text-azur">
                    <Icon name={feature.icon} size={20} />
                  </span>
                )}
                <h3 className="text-[1.1rem] leading-snug">{feature.title}</h3>
                <p className="mt-2 text-[0.9rem] leading-relaxed text-ink-muted">{feature.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
