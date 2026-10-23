# AMSP Aménagement — site vitrine

Site vitrine haut de gamme pour **AMSP Aménagement** (cuisines, agencements sur mesure, menuiserie et rénovation intérieure) au 29 rue James Jackson, 42500 Le Chambon-Feugerolles.

Construit avec **Next.js 16 (App Router)**, **Tailwind CSS 4** et **Motion** (animations). Toutes les pages sont prérendues en statique pour un chargement rapide et un référencement local propre.

---

## 1. Démarrer

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # serveur de production
```

Si vous ouvrez l'aperçu de développement par un autre nom d'hôte que `localhost` (tunnel, proxy, panneau d'aperçu), ajoutez-le à `NEXT_ALLOWED_DEV_ORIGINS` : Next refuse sinon les ressources `/_next` cross-origin et la page s'affiche sans jamais s'hydrater.

```bash
NEXT_ALLOWED_DEV_ORIGINS="mon-apercu.exemple.dev" npm run dev
```

---

## 2. À personnaliser avant la mise en ligne

### 2.1 Coordonnées (le plus important)

Tout est centralisé dans **`src/lib/site.ts`** :

- `phone.display` / `phone.href` → numéro affiché et lien `tel:`
- `whatsapp` → numéro au format international sans `+` (ex. `33612345678`)
- `email` → adresse de réception des demandes
- `address`, `geo` → adresse et coordonnées GPS exactes
- `openingHours` → horaires affichés
- `areas` → communes d'intervention

> ⚠️ Les valeurs actuelles (`04 77 00 00 00`, `33477000000`) sont des **valeurs de démonstration**. Un seul fichier à modifier met à jour l'en-tête, le pied de page, la barre mobile, le formulaire et les données structurées Google.

### 2.2 Photos

Les visuels sont dans **`public/images/`** et sont des **photos d'illustration** (Unsplash) : elles doivent être remplacées par les vraies réalisations de l'entreprise.

Pour remplacer une photo, il suffit de déposer un fichier au même nom et au même format (JPG), aux dimensions recommandées :

| Fichier | Usage | Taille conseillée |
| --- | --- | --- |
| `hero.jpg` | image d'accueil | 2200 × 1460 |
| `hero-agencement.jpg` | cadre 3D du héro (agencement) | 900 × 1200 |
| `cuisine-1…4.jpg` | cuisines | 1500 × 1125 |
| `agencement-1…4.jpg` | dressings, placards, meubles | 1500 × 1125 |
| `sejour-1…3.jpg`, `chambre-1.jpg`, `escalier-1.jpg` | rénovation | 1500 × 1125 |
| `salle-de-bain-1…2.jpg` | salles d'eau | 1500 × 1125 |
| `avant-1.jpg`, `avant-2.jpg` | comparateurs avant/après | 1500 × 1125 |
| `og.jpg` | partage réseaux sociaux | 1200 × 630 |

Pensez à adapter les textes alternatifs (`alt`) et les descriptions dans `src/lib/content.ts`.

### 2.3 Contenus éditoriaux

- **`src/lib/content.ts`** : services, réalisations (`projects`), avis clients (`testimonials`), FAQ, articles de conseils, zones d'intervention.
- **`src/lib/site.ts`** : chiffres clés (`stats`), coordonnées. Les chiffres (15 ans, 250 projets, 48 h…) sont des **valeurs de démonstration à ajuster**.
- Les avis clients et les projets sont des **exemples à remplacer** par de vrais contenus.

### 2.4 Mentions légales

`src/app/mentions-legales/page.tsx` contient des champs `[à compléter]` : forme juridique, SIRET, TVA, responsable de publication, hébergeur. À renseigner avant publication.

---

## 3. Fonctionnement du formulaire de devis

Le formulaire (`src/components/forms/QuoteForm.tsx`) valide les champs puis **préremplit un message** envoyé via WhatsApp ou par e-mail :

1. L'internaute remplit le formulaire.
2. « Demander mon devis gratuit » ouvre WhatsApp avec la demande préremplie (le visiteur garde la main jusqu'à l'envoi).
3. « Envoyer plutôt par e-mail » ouvre son logiciel de messagerie avec le même récapitulatif.
4. Un écran de confirmation affiche le récapitulatif et permet de renvoyer sur l'autre canal.

Aucun serveur, aucune base de données, aucun cookie : il n'y a rien à héberger ni à maintenir. Les photos sont jointes par le client directement dans WhatsApp ou l'e-mail (mention prévue dans le formulaire).

### Passer à un envoi automatique par e-mail

Si vous préférez recevoir les demandes sans passer par WhatsApp, ajoutez une route API (`src/app/api/devis/route.ts`) qui envoie le contenu du formulaire via un service d'e-mailing (Resend, Brevo, Postmark…), puis remplacez l'action du formulaire par un `fetch` vers cette route. La validation et le récapitulatif actuels peuvent être réutilisés tels quels.

---

## 4. Structure

```
src/
├── app/
│   ├── page.tsx                     # Accueil (hero animé + sections)
│   ├── cuisines/
│   ├── agencement-sur-mesure/
│   ├── renovation-interieure/
│   ├── realisations/                # galerie filtrable + avant/après
│   ├── notre-methode/
│   ├── zones-d-intervention/
│   ├── contact/                     # formulaire, coordonnées, Google Maps
│   ├── conseils/                    # blog + articles
│   ├── conseils/[slug]/
│   ├── mentions-legales/
│   ├── politique-de-confidentialite/
│   ├── sitemap.ts, robots.ts
│   └── globals.css                  # identité visuelle (couleurs, typo, boutons)
├── components/
│   ├── layout/                      # header, footer, barre mobile
│   ├── sections/                    # hero, services, méthode, avis, CTA…
│   ├── gallery/                     # galerie filtrable, comparateur avant/après
│   ├── forms/                       # formulaire de devis
│   └── ui/                          # icônes, reveal, accordéon, compteurs
├── lib/                             # site.ts (coordonnées), content.ts, nav.ts
└── fonts/                           # Fraunces + Manrope (auto-hébergées)
```

---

## 5. Identité visuelle

Définie dans `src/app/globals.css` (`@theme`) :

| Rôle | Couleur |
| --- | --- |
| Blanc cassé (fond) | `#fbfaf6` |
| Crème (sections) | `#f1eee6` |
| Sable (accents doux) | `#e3ded1` |
| Encre (texte) | `#0e1622` |
| Bleu azur (accent principal) | `#1b4fd8` |
| Bleu nuit (fonds sombres) | `#0c2a63` |
| Azur clair (surbrillance, filets) | `#45c4f5` |

Typographies : **Fraunces** (titres, serif chaleureuse) et **Manrope** (textes), auto-hébergées dans `src/fonts/` — aucun appel à Google Fonts au chargement.

---

## 6. SEO local

- Balises `title` / `meta description` uniques par page, canoniques, Open Graph.
- Données structurées **LocalBusiness / HomeAndConstructionBusiness** (coordonnées, horaires, zones desservies, prestations) dans `src/app/layout.tsx`.
- **BreadcrumbList** sur les pages internes, **FAQPage** sur les questions fréquentes, **Article** sur les conseils.
- `sitemap.xml` et `robots.txt` générés automatiquement.
- Un H1 unique par page, hiérarchie Hn respectée, textes alternatifs sur les images.
- Contenu localisé (Le Chambon-Feugerolles, Saint-Étienne, Firminy, La Ricamarie, Unieux, Fraisses, Roche-la-Molière).

Après mise en ligne : créez la fiche **Google Business Profile**, déclarez le site dans la Search Console et déposez le sitemap.

---

## 7. Accessibilité & performance

- Respect de `prefers-reduced-motion` (animations désactivées).
- Navigation clavier, focus visibles, libellés de formulaire, `aria-*` sur le menu et l'accordéon.
- Images en `loading="lazy"` hors hero, dimensions réservées pour éviter les décalages.
- Aucun cookie publicitaire ni script tiers, hors carte Google Maps intégrée à la page contact.
