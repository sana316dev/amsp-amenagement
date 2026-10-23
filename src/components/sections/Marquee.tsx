const items = [
  "Cuisines sur mesure",
  "Dressings",
  "Placards",
  "Bibliothèques",
  "Meubles TV",
  "Sous-pente",
  "Menuiserie",
  "Rénovation",
  "Salles de bain",
];

export function Marquee() {
  return (
    <section aria-hidden="true" className="overflow-hidden border-b border-ink/10 bg-cream py-4">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <ul key={copy} className="flex shrink-0 items-center">
            {items.map((item) => (
              <li key={`${copy}-${item}`} className="flex items-center gap-8 px-8">
                <span className="whitespace-nowrap font-display text-[1.05rem] tracking-[-0.01em] text-ink/70 md:text-[1.2rem]">
                  {item}
                </span>
                <span className="size-1.5 rotate-45 bg-azur/70" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
