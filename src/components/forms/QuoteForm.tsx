"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { site, whatsappLink, mailtoLink } from "@/lib/site";

type Fields = {
  name: string;
  phone: string;
  email: string;
  project: string;
  city: string;
  budget: string;
  message: string;
  consent: boolean;
};

const initial: Fields = {
  name: "",
  phone: "",
  email: "",
  project: "",
  city: "",
  budget: "",
  message: "",
  consent: false,
};

const projectTypes = [
  "Cuisine sur mesure",
  "Dressing",
  "Placard / rangement",
  "Bibliothèque / meuble TV",
  "Salle de bain",
  "Rénovation intérieure",
  "Meuble sous escalier / sous pente",
  "Autre projet",
];

const budgets = ["Moins de 5 000 €", "5 000 – 10 000 €", "10 000 – 20 000 €", "20 000 – 40 000 €", "Plus de 40 000 €", "Je ne sais pas encore"];

export function QuoteForm() {
  const [fields, setFields] = useState<Fields>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sentVia, setSentVia] = useState<"whatsapp" | "email" | null>(null);

  const update = <K extends keyof Fields>(key: K, value: Fields[K]) => {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (fields.name.trim().length < 2) next.name = "Indiquez votre nom.";
    const phoneDigits = fields.phone.replace(/[^0-9]/g, "");
    if (phoneDigits.length < 9) next.phone = "Indiquez un numéro de téléphone valide.";
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email)) next.email = "Vérifiez votre adresse e-mail.";
    if (!fields.project) next.project = "Sélectionnez le type de projet.";
    if (fields.city.trim().length < 2) next.city = "Indiquez votre commune.";
    if (!fields.consent) next.consent = "Merci d'accepter l'utilisation de vos données.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = () => {
    const lines = [
      "Bonjour AMSP Aménagement, je souhaite un devis gratuit.",
      "",
      `Nom : ${fields.name}`,
      `Téléphone : ${fields.phone}`,
      fields.email ? `E-mail : ${fields.email}` : null,
      `Projet : ${fields.project}`,
      `Commune : ${fields.city}`,
      fields.budget ? `Budget envisagé : ${fields.budget}` : null,
      fields.message ? `Précisions : ${fields.message}` : null,
      "",
      "Merci de me recontacter pour convenir d'un rendez-vous.",
    ];
    return lines.filter((line) => line !== null).join("\n");
  };

  const handleSubmit = (channel: "whatsapp" | "email") => {
    if (!validate()) {
      const firstError = document.querySelector<HTMLElement>('[aria-invalid="true"]');
      firstError?.focus();
      return;
    }
    const message = buildMessage();
    if (channel === "whatsapp") {
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    } else {
      window.location.href = mailtoLink(`Demande de devis — ${fields.project} à ${fields.city}`, message);
    }
    setSentVia(channel);
  };

  return (
    <div className="rounded-[20px] border border-ink/10 bg-paper p-6 shadow-[0_30px_80px_rgba(25,23,19,0.07)] md:p-9">
      <AnimatePresence mode="wait">
        {sentVia ? (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="py-4"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-azur/10 text-azur">
              <Icon name="check" size={22} />
            </span>
            <h2 className="mt-5 text-[1.7rem] leading-tight">Votre demande est prête.</h2>
            <p className="mt-3 max-w-lg text-[0.95rem] leading-relaxed text-ink-muted">
              {sentVia === "whatsapp"
                ? "WhatsApp s'est ouvert avec votre demande préremplie. Il ne reste qu'à l'envoyer — et à joindre vos photos si vous en avez."
                : "Votre logiciel de messagerie s'est ouvert avec la demande préremplie. Il ne reste qu'à l'envoyer — et à joindre vos photos si vous en avez."}
            </p>
            <div className="mt-6 rounded-[14px] bg-cream p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-azur-dark">Récapitulatif</p>
              <ul className="mt-3 space-y-1.5 text-[0.88rem] text-ink/80">
                <li>
                  <span className="text-ink/65">Nom :</span> {fields.name}
                </li>
                <li>
                  <span className="text-ink/65">Téléphone :</span> {fields.phone}
                </li>
                <li>
                  <span className="text-ink/65">Projet :</span> {fields.project} — {fields.city}
                </li>
                {fields.message && (
                  <li>
                    <span className="text-ink/65">Précisions :</span> {fields.message}
                  </li>
                )}
              </ul>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={() => handleSubmit("whatsapp")} className="btn btn-primary">
                <WhatsAppIcon size={17} />
                Renvoyer sur WhatsApp
              </button>
              <button type="button" onClick={() => handleSubmit("email")} className="btn btn-ghost">
                <Icon name="mail" size={17} />
                Renvoyer par e-mail
              </button>
            </div>
            <button
              type="button"
              onClick={() => setSentVia(null)}
              className="mt-5 text-[0.8rem] font-semibold text-ink/65 underline underline-offset-4 transition-colors hover:text-azur"
            >
              Modifier ma demande
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={false}
            onSubmit={(event) => {
              event.preventDefault();
              handleSubmit("whatsapp");
            }}
            noValidate
          >
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-azur-dark">
              Devis gratuit — sans engagement
            </p>
            <h2 className="mt-3 text-[1.6rem] leading-tight md:text-[1.9rem]">Décrivez votre projet en 1 minute</h2>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-ink-muted">
              Nous vous répondons sous 24 h ouvrées. Votre demande s&apos;ouvre préremplie dans WhatsApp ou votre
              messagerie : vous gardez la main jusqu&apos;à l&apos;envoi.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label className="field-label" htmlFor="name">
                  Nom et prénom *
                </label>
                <input
                  id="name"
                  className="field"
                  autoComplete="name"
                  value={fields.name}
                  onChange={(event) => update("name", event.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  placeholder="Marie Dupont"
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-[0.75rem] text-[#b3261e]">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="phone">
                  Téléphone *
                </label>
                <input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  className="field"
                  autoComplete="tel"
                  value={fields.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  placeholder="06 12 34 56 78"
                />
                {errors.phone && (
                  <p id="phone-error" className="mt-1.5 text-[0.75rem] text-[#b3261e]">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  inputMode="email"
                  className="field"
                  autoComplete="email"
                  value={fields.email}
                  onChange={(event) => update("email", event.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  placeholder="marie.dupont@exemple.fr"
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-[0.75rem] text-[#b3261e]">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="project">
                  Type de projet *
                </label>
                <select
                  id="project"
                  className="field select-chevron"
                  value={fields.project}
                  onChange={(event) => update("project", event.target.value)}
                  aria-invalid={Boolean(errors.project)}
                  aria-describedby={errors.project ? "project-error" : undefined}
                >
                  <option value="">Choisir…</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.project && (
                  <p id="project-error" className="mt-1.5 text-[0.75rem] text-[#b3261e]">
                    {errors.project}
                  </p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="city">
                  Commune *
                </label>
                <input
                  id="city"
                  className="field"
                  list="communes"
                  value={fields.city}
                  onChange={(event) => update("city", event.target.value)}
                  aria-invalid={Boolean(errors.city)}
                  aria-describedby={errors.city ? "city-error" : undefined}
                  placeholder="Saint-Étienne"
                />
                <datalist id="communes">
                  {site.areas.map((area) => (
                    <option key={area} value={area} />
                  ))}
                </datalist>
                {errors.city && (
                  <p id="city-error" className="mt-1.5 text-[0.75rem] text-[#b3261e]">
                    {errors.city}
                  </p>
                )}
              </div>

              <div>
                <label className="field-label" htmlFor="budget">
                  Budget envisagé
                </label>
                <select
                  id="budget"
                  className="field select-chevron"
                  value={fields.budget}
                  onChange={(event) => update("budget", event.target.value)}
                >
                  <option value="">Facultatif</option>
                  {budgets.map((budget) => (
                    <option key={budget} value={budget}>
                      {budget}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mt-5">
              <label className="field-label" htmlFor="message">
                Votre projet en quelques mots
              </label>
              <textarea
                id="message"
                rows={4}
                className="field resize-y"
                value={fields.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="Cuisine de 12 m² à rénover, envie d'un îlot et de façades bois…"
              />
            </div>

            <div className="mt-5 rounded-[12px] border border-ink/10 bg-cream/50 p-4 text-[0.8rem] leading-relaxed text-ink-muted">
              <span className="font-semibold text-ink">Des photos de votre pièce ?</span> Indiquez-le dans votre message :
              vous pourrez les joindre directement à la conversation WhatsApp ou à votre e-mail. Elles nous permettent
              de préparer la visite.
            </div>

            <div className="mt-5">
              <label className="flex cursor-pointer items-start gap-3 text-[0.8rem] leading-relaxed text-ink-muted">
                <input
                  type="checkbox"
                  checked={fields.consent}
                  onChange={(event) => update("consent", event.target.checked)}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "consent-error" : undefined}
                  className="mt-0.5 size-4 shrink-0 accent-[#1b4fd8]"
                />
                <span>
                  J&apos;accepte que mes informations soient utilisées pour répondre à ma demande de devis.{" "}
                  <a href="/politique-de-confidentialite" className="underline underline-offset-2 hover:text-azur">
                    Politique de confidentialité
                  </a>
                  . *
                </span>
              </label>
              {errors.consent && (
                <p id="consent-error" className="mt-1.5 text-[0.75rem] text-[#b3261e]">
                  {errors.consent}
                </p>
              )}
            </div>

            <div className="mt-7 flex flex-col gap-3">
              <button type="submit" className="btn btn-primary w-full justify-between">
                Demander mon devis gratuit
                <Icon name="arrow-right" size={17} />
              </button>
              <button
                type="button"
                onClick={() => handleSubmit("email")}
                className="btn btn-ghost w-full"
              >
                <Icon name="mail" size={17} />
                Envoyer plutôt par e-mail
              </button>
            </div>

            <p className="mt-4 text-center text-[0.72rem] text-ink/60">
              Vos coordonnées restent confidentielles. Aucun démarchage, aucune revente de données.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
