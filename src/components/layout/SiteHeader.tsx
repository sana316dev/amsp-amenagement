"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { useEffect, useState } from "react";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Logo } from "./Logo";
import { mainNav, secondaryNav } from "@/lib/nav";
import { site, whatsappLink } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (value) => setScrolled(value > 40));

  const overlay = pathname === "/" && !scrolled && !open;

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Bandeau local */}
      <div
        className={`hidden overflow-hidden bg-azur-dark text-paper transition-all duration-500 lg:block ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container-x flex h-9 items-center justify-between text-[0.7rem] tracking-[0.04em]">
          <p className="flex items-center gap-2 text-paper/90">
            <Icon name="pin" size={13} className="text-azur-bright" />
            {site.address.street}, {site.address.postalCode} {site.address.city}
          </p>
          <div className="flex items-center gap-6">
            <span className="text-paper/85">Devis gratuit sous 48 h — sans engagement</span>
            <a
              href={`tel:${site.phone.href}`}
              className="flex items-center gap-2 font-semibold text-paper transition-colors hover:text-azur-bright"
            >
              <Icon name="phone" size={13} />
              {site.phone.display}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-500 ${
          overlay
            ? "bg-transparent"
            : "border-b border-ink/10 bg-paper/95 shadow-[0_10px_30px_-24px_rgba(14,22,34,0.45)] backdrop-blur-md"
        }`}
      >
        <div className="container-x flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
          <Logo tone={overlay ? "paper" : "ink"} />

          <nav aria-label="Navigation principale" className="hidden items-center gap-7 xl:flex">
            {mainNav.map((item) => {
              const active = pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-[0.83rem] font-semibold tracking-[0.01em] transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-azur-bright after:transition-transform after:duration-300 hover:after:scale-x-100 ${
                    overlay
                      ? "text-paper/85 hover:text-paper"
                      : active
                        ? "text-azur"
                        : "text-ink/75 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${site.phone.href}`}
              className={`hidden items-center gap-2 text-[0.83rem] font-semibold transition-colors md:flex ${
                overlay ? "text-paper hover:text-azur-bright" : "text-ink hover:text-azur"
              }`}
            >
              <span
                className={`flex size-9 items-center justify-center rounded-full border ${
                  overlay ? "border-paper/30" : "border-ink/15 text-azur"
                }`}
              >
                <Icon name="phone" size={15} />
              </span>
              {site.phone.display}
            </a>

            <Link
              href="/contact"
              className={`btn hidden md:inline-flex ${
                overlay
                  ? "bg-azur-bright text-ink hover:bg-[#6fd4ff]"
                  : "btn-primary"
              }`}
            >
              Devis gratuit
              <Icon name="arrow-right" size={16} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Ouvrir le menu"
              aria-expanded={open}
              className={`flex size-11 items-center justify-center rounded-full border transition-colors xl:hidden ${
                overlay
                  ? "border-paper/30 text-paper hover:bg-paper/10"
                  : "border-ink/15 text-ink hover:bg-ink/5"
              }`}
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex flex-col bg-paper xl:hidden"
          >
            <div className="container-x flex h-[4.5rem] items-center justify-between md:h-20">
              <Logo />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer le menu"
                className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink/5"
              >
                <Icon name="close" size={20} />
              </button>
            </div>

            <nav aria-label="Navigation mobile" className="container-x flex-1 overflow-y-auto pb-8 pt-6">
              <ul className="space-y-1">
                {[...mainNav, ...secondaryNav].map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b border-ink/10"
                  >
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 font-display text-[1.9rem] leading-tight text-ink"
                    >
                      {item.label}
                      <Icon name="arrow-up-right" size={20} className="text-azur" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 grid gap-3">
                <a href={`tel:${site.phone.href}`} className="btn btn-primary w-full">
                  <Icon name="phone" size={17} />
                  Appeler le {site.phone.display}
                </a>
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-ghost w-full">
                  <WhatsAppIcon size={18} />
                  Écrire sur WhatsApp
                </a>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
                <br />
                {site.openingHours[0].label} : {site.openingHours[0].value}
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
