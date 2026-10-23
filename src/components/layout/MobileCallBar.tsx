import Link from "next/link";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { site, whatsappLink } from "@/lib/site";

export function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-ink/10 bg-paper/95 backdrop-blur-md lg:hidden">
      <nav aria-label="Actions rapides" className="grid grid-cols-3 pb-[env(safe-area-inset-bottom)]">
        <a
          href={`tel:${site.phone.href}`}
          className="flex flex-col items-center gap-1 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink"
        >
          <Icon name="phone" size={19} />
          Appeler
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-ink/10 py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink"
        >
          <WhatsAppIcon size={19} className="text-azur" />
          WhatsApp
        </a>
        <Link
          href="/contact"
          className="flex flex-col items-center gap-1 bg-azur py-2.5 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-paper"
        >
          <Icon name="document" size={19} />
          Devis
        </Link>
      </nav>
    </div>
  );
}
