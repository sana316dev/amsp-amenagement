import Link from "next/link";

export function Logo({ tone = "ink", className = "" }: { tone?: "ink" | "paper"; className?: string }) {
  return (
    <Link href="/" className={`group inline-flex flex-col leading-none ${className}`} aria-label="AMSP Aménagement — accueil">
      <span
        className={`font-display text-[1.6rem] tracking-[-0.03em] transition-colors ${
          tone === "paper" ? "text-paper" : "text-ink"
        }`}
      >
        AMSP
        <span className="text-azur-bright">.</span>
      </span>
      <span
        className={`mt-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.4em] ${
          tone === "paper" ? "text-paper/60" : "text-ink/65"
        }`}
      >
        Aménagement
      </span>
    </Link>
  );
}
