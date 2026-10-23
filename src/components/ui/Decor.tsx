type GridVariant = "ink" | "azur" | "light";
type GridMask = "radial" | "bottom" | "right" | "none";

const variantClass: Record<GridVariant, string> = {
  ink: "grid-lines",
  azur: "grid-lines-azur",
  light: "grid-lines-light",
};

const maskClass: Record<GridMask, string> = {
  radial: "mask-radial-soft",
  bottom: "mask-fade-bottom",
  right: "mask-fade-right",
  none: "",
};

/** Trame technique discrète, posée derrière le contenu d'une section. */
export function GridBackdrop({
  variant = "ink",
  mask = "radial",
  className = "",
}: {
  variant?: GridVariant;
  mask?: GridMask;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 -z-10 ${variantClass[variant]} ${maskClass[mask]} ${className}`}
    />
  );
}

/** Repères d'angle façon plan d'atelier. */
export function CornerMarks({
  tone = "paper",
  className = "",
  size = "size-4",
}: {
  tone?: "paper" | "ink" | "azur";
  className?: string;
  size?: string;
}) {
  const color = tone === "paper" ? "border-paper/60" : tone === "azur" ? "border-azur/50" : "border-ink/25";

  return (
    <span aria-hidden="true" className={`pointer-events-none absolute inset-3 z-10 ${className}`}>
      <span className={`absolute left-0 top-0 ${size} border-l border-t ${color}`} />
      <span className={`absolute right-0 top-0 ${size} border-r border-t ${color}`} />
      <span className={`absolute bottom-0 left-0 ${size} border-b border-l ${color}`} />
      <span className={`absolute bottom-0 right-0 ${size} border-b border-r ${color}`} />
    </span>
  );
}

/** Règle graduée : motif de menuiserie utilisé comme séparateur. */
export function RulerTicks({ className = "", tone = "ink" }: { className?: string; tone?: "ink" | "light" }) {
  const color = tone === "light" ? "bg-paper/40" : "bg-ink/20";
  const ticks = Array.from({ length: 41 });

  return (
    <div aria-hidden="true" className={`flex h-5 items-end justify-between ${className}`}>
      {ticks.map((_, index) => (
        <span
          key={index}
          className={`${color} w-px`}
          style={{ height: index % 5 === 0 ? "100%" : index % 2 === 0 ? "55%" : "30%" }}
        />
      ))}
    </div>
  );
}

/** Cote de mesure verticale, façon plan coté. */
export function MeasureLine({
  label,
  className = "",
  tone = "ink",
}: {
  label: string;
  className?: string;
  tone?: "ink" | "paper";
}) {
  const color = tone === "paper" ? "text-paper/60" : "text-ink/40";
  const line = tone === "paper" ? "bg-paper/40" : "bg-ink/25";

  return (
    <div aria-hidden="true" className={`pointer-events-none flex flex-col items-center gap-2 ${color} ${className}`}>
      <span className={`h-px w-2.5 ${line}`} />
      <span className={`w-px flex-1 ${line}`} />
      <span className="rotate-180 text-[0.58rem] font-semibold uppercase tracking-[0.26em] [writing-mode:vertical-rl]">
        {label}
      </span>
      <span className={`w-px flex-1 ${line}`} />
      <span className={`h-px w-2.5 ${line}`} />
    </div>
  );
}
