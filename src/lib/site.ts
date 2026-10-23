/**
 * Coordonnées et informations de l'entreprise.
 * ─────────────────────────────────────────────────────────────
 * ⚠️ À PERSONNALISER AVANT MISE EN LIGNE :
 * le téléphone, le WhatsApp et l'e-mail ci-dessous sont des
 * valeurs de démonstration. Modifiez-les ici uniquement :
 * tout le site (en-tête, pied de page, boutons mobiles, JSON-LD,
 * liens d'appel et formulaire de devis) se met à jour seul.
 */
export const site = {
  name: "AMSP Aménagement",
  shortName: "AMSP",
  legalName: "AMSP Aménagement",
  baseline: "Cuisines & agencements sur mesure",
  description:
    "Cuisines, dressings, placards et agencements intérieurs sur mesure à Le Chambon-Feugerolles, près de Saint-Étienne. Conception, fabrication et pose par un artisan local. Devis gratuit.",
  url: "https://www.amsp-amenagement.fr",

  // TODO : remplacer par le vrai numéro de l'entreprise
  phone: {
    display: "04 77 00 00 00",
    href: "+33477000000",
  },
  // TODO : remplacer par le vrai numéro WhatsApp (format international, sans +)
  whatsapp: "33477000000",
  // TODO : remplacer par l'adresse e-mail de réception des demandes
  email: "contact@amsp-amenagement.fr",

  address: {
    street: "29 rue James Jackson",
    postalCode: "42500",
    city: "Le Chambon-Feugerolles",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    countryCode: "FR",
  },
  geo: {
    // Coordonnées approximatives du quartier — ajustables au mètre près
    lat: 45.3942,
    lng: 4.2975,
  },

  openingHours: [
    { label: "Lundi – Vendredi", value: "8h00 – 18h00" },
    { label: "Samedi", value: "Sur rendez-vous" },
    { label: "Dimanche", value: "Fermé" },
  ],

  areas: [
    "Le Chambon-Feugerolles",
    "Saint-Étienne",
    "Firminy",
    "La Ricamarie",
    "Unieux",
    "Fraisses",
    "Roche-la-Molière",
  ],

  // TODO : chiffres de démonstration à ajuster avec les données réelles
  stats: [
    { value: 15, suffix: " ans", label: "d'expérience en agencement" },
    { value: 250, suffix: "+", label: "projets livrés dans la Loire" },
    { value: 48, suffix: "h", label: "pour votre devis détaillé" },
    { value: 100, suffix: "%", label: "fabriqué sur mesure" },
  ],

  mapEmbed:
    "https://www.google.com/maps?q=29+rue+James+Jackson,+42500+Le+Chambon-Feugerolles,+France&z=15&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=29+rue+James+Jackson+42500+Le+Chambon-Feugerolles",
} as const;

export function whatsappLink(message?: string) {
  const text = message ?? "Bonjour AMSP Aménagement, je souhaite un devis gratuit pour mon projet.";
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoLink(subject?: string, body?: string) {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString();
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
}

export const fullAddress = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;
