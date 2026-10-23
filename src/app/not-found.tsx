import Link from "next/link";
import { Icon } from "@/components/ui/icons";

export default function NotFound() {
  return (
    <section className="flex min-h-[70svh] items-center bg-paper pb-20 pt-32">
      <div className="container-x text-center">
        <p className="eyebrow justify-center eyebrow--center">Erreur 404</p>
        <h1 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.05]">
          Cette page a changé de <em className="italic text-azur">place</em>.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-[0.98rem] leading-relaxed text-ink-muted">
          Le lien que vous avez suivi n&apos;existe plus. Revenez à l&apos;accueil ou parcourez nos réalisations.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Retour à l&apos;accueil
            <Icon name="arrow-right" size={16} />
          </Link>
          <Link href="/realisations" className="btn btn-ghost">
            Voir les réalisations
          </Link>
        </div>
      </div>
    </section>
  );
}
