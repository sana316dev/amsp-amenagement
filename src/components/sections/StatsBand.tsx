import { Counter } from "@/components/ui/Counter";
import { site } from "@/lib/site";

export function StatsBand() {
  return (
    <section id="confiance" className="border-b border-ink/10 bg-paper">
      <div className="container-x grid grid-cols-2 divide-ink/10 md:grid-cols-4 md:divide-x">
        {site.stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`py-8 md:px-8 md:py-10 ${index % 2 === 1 ? "border-l border-ink/10 pl-5 md:border-l-0 md:pl-8" : ""} ${index === 0 ? "md:pl-0" : ""}`}
          >
            <p className="font-display text-[2.1rem] leading-none tracking-[-0.03em] text-ink md:text-[2.6rem]">
              <Counter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2.5 max-w-[13rem] text-[0.78rem] leading-snug text-ink-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
