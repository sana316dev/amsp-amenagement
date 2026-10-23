export type Service = {
  slug: string;
  href: string;
  eyebrow: string;
  title: string;
  short: string;
  description: string;
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    slug: "cuisines",
    href: "/cuisines",
    eyebrow: "Cuisines",
    title: "Cuisines sur mesure",
    short: "Conception, fabrication et pose de cuisines qui s'adaptent à votre pièce, à vos usages et à votre budget.",
    description:
      "Cuisine ouverte ou fermée, îlot central, plan de travail en pierre ou en bois, rangements toute hauteur, électroménager intégré : nous dessinons une cuisine qui vous ressemble, fabriquée à la juste mesure de votre logement.",
    image: "/images/cuisine-1.jpg",
    points: [
      "Cuisines modernes, contemporaines et classiques",
      "Rénovation et remplacement complet",
      "Plans de travail, îlots et crédences sur mesure",
      "Électroménager intégré et rangements optimisés",
    ],
  },
  {
    slug: "agencement",
    href: "/agencement-sur-mesure",
    eyebrow: "Agencement",
    title: "Agencements sur mesure",
    short: "Dressings, placards, bibliothèques et meubles pensés au millimètre pour chaque recoin de la maison.",
    description:
      "Sous pente, sous escalier, dans un renfoncement ou le long d'un mur : chaque centimètre est exploité. Nous concevons et fabriquons vos dressings, placards, bibliothèques, meubles TV et rangements d'entrée.",
    image: "/images/agencement-3.jpg",
    points: [
      "Dressings et placards toute hauteur",
      "Bibliothèques et meubles TV",
      "Meubles sous escalier et sous pente",
      "Menuiserie intérieure et finitions",
    ],
  },
  {
    slug: "renovation",
    href: "/renovation-interieure",
    eyebrow: "Rénovation",
    title: "Rénovation intérieure",
    short: "Travaux intérieurs, pose et finitions : une rénovation menée proprement, du premier coup de crayon à la dernière plinthe.",
    description:
      "Nous rénovons les pièces de vie, les cuisines et les salles d'eau, et coordonnons les corps d'état nécessaires. Un seul interlocuteur, un planning clair, un chantier propre.",
    image: "/images/sejour-1.jpg",
    points: [
      "Rénovation de cuisines et salles d'eau",
      "Cloisons, sols, plinthes et finitions",
      "Pose de menuiseries intérieures",
      "Coordination des artisans",
    ],
  },
];

export type ProjectCategory =
  | "Cuisines"
  | "Dressings"
  | "Placards"
  | "Salle de bain"
  | "Agencement"
  | "Rénovation";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  city: string;
  description: string;
  image: string;
  span?: "tall" | "wide";
};

export const projectCategories: ("Tous" | ProjectCategory)[] = [
  "Tous",
  "Cuisines",
  "Dressings",
  "Placards",
  "Salle de bain",
  "Agencement",
  "Rénovation",
];

export const projects: Project[] = [
  {
    id: "cuisine-chene-pierre",
    title: "Cuisine contemporaine, chêne & pierre",
    category: "Cuisines",
    city: "Saint-Étienne",
    description:
      "Une cuisine ouverte sur le séjour, îlot central en pierre naturelle et façades chêne. Rangements toute hauteur et électroménager entièrement intégré.",
    image: "/images/cuisine-1.jpg",
    span: "tall",
  },
  {
    id: "cuisine-blanc-laiton",
    title: "Cuisine intemporelle, blanc & laiton",
    category: "Cuisines",
    city: "Le Chambon-Feugerolles",
    description:
      "Rénovation complète d'une cuisine de maison de ville : façades shaker, plan de travail clair et crédence en zellige.",
    image: "/images/cuisine-2.jpg",
  },
  {
    id: "cuisine-optimisee",
    title: "Petite cuisine optimisée",
    category: "Cuisines",
    city: "Firminy",
    description:
      "Moins de 8 m², mais chaque geste a sa place : colonnes de rangement, plan de travail continu et éclairage sous meuble.",
    image: "/images/cuisine-3.jpg",
  },
  {
    id: "cuisine-plan-travail",
    title: "Plan de travail & crédence sur mesure",
    category: "Cuisines",
    city: "Unieux",
    description:
      "Détail d'un plan de travail chantourné et d'une crédence ajustée au millimètre autour de la robinetterie.",
    image: "/images/cuisine-4.jpg",
  },
  {
    id: "dressing-chene",
    title: "Dressing en chêne massif",
    category: "Dressings",
    city: "Saint-Étienne",
    description:
      "Un dressing de 4 mètres linéaires, ouvert sur la chambre, avec penderies, tiroirs et niches lumineuses.",
    image: "/images/agencement-1.jpg",
  },
  {
    id: "placards-chambre",
    title: "Chambre parentale : placards & tête de lit",
    category: "Placards",
    city: "La Ricamarie",
    description:
      "Placards toute hauteur intégrés, tête de lit capitonnée et chevets suspendus pour une chambre apaisante.",
    image: "/images/chambre-1.jpg",
  },
  {
    id: "bibliotheque-murale",
    title: "Bibliothèque murale",
    category: "Agencement",
    city: "Firminy",
    description:
      "Une bibliothèque sur mesure qui habille tout un pan de mur, avec éclairage intégré et rangements fermés en partie basse.",
    image: "/images/agencement-2.jpg",
  },
  {
    id: "entree-console",
    title: "Entrée & console sur mesure",
    category: "Agencement",
    city: "Le Chambon-Feugerolles",
    description:
      "Un meuble d'entrée fin et fonctionnel, dessiné pour la profondeur exacte du couloir, avec miroir sur mesure.",
    image: "/images/agencement-3.jpg",
  },
  {
    id: "meuble-tv",
    title: "Meuble TV & rangements",
    category: "Agencement",
    city: "Unieux",
    description:
      "Ligne basse en chêne, passages de câbles invisibles et rangements fermés pour une pièce de vie toujours nette.",
    image: "/images/agencement-4.jpg",
  },
  {
    id: "sdb-minerale",
    title: "Salle de bain minérale",
    category: "Salle de bain",
    city: "Saint-Étienne",
    description:
      "Meuble double vasque sur mesure, plan en pierre et grande douche à l'italienne dans un esprit minéral.",
    image: "/images/salle-de-bain-1.jpg",
  },
  {
    id: "sde-verre-bois",
    title: "Salle d'eau verre & bois",
    category: "Salle de bain",
    city: "Fraisses",
    description:
      "Une petite salle d'eau transformée : paroi vitrée, meuble suspendu en chêne et rangements toute hauteur.",
    image: "/images/salle-de-bain-2.jpg",
  },
  {
    id: "sejour-decloisonne",
    title: "Séjour décloisonné",
    category: "Rénovation",
    city: "Roche-la-Molière",
    description:
      "Ouverture de la cloison cuisine-séjour, verrière sur mesure et habillage bois pour apporter lumière et chaleur.",
    image: "/images/sejour-1.jpg",
    span: "wide",
  },
  {
    id: "piece-de-vie",
    title: "Pièce de vie rénovée",
    category: "Rénovation",
    city: "Le Chambon-Feugerolles",
    description:
      "Sols, murs, éclairage et menuiseries repris dans un esprit doux et lumineux, prêt à vivre.",
    image: "/images/sejour-2.jpg",
  },
];

export const values = [
  {
    title: "Entreprise locale",
    text: "Basés au Chambon-Feugerolles, nous connaissons les logements et les artisans du secteur.",
    icon: "pin" as const,
  },
  {
    title: "Accompagnement personnalisé",
    text: "Un seul interlocuteur, du premier échange à la pose. Vos contraintes deviennent notre point de départ.",
    icon: "handshake" as const,
  },
  {
    title: "Devis gratuit",
    text: "Un devis détaillé, ligne par ligne, remis sous 48 h après la prise de mesures. Sans engagement.",
    icon: "document" as const,
  },
  {
    title: "Pose soignée",
    text: "Fabrication sur mesure et finitions vérifiées avant de quitter le chantier. Chantier laissé propre.",
    icon: "ruler" as const,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Échange & visite",
    text: "Nous vous appelons pour comprendre votre projet, votre budget et vos envies. Nous convenons ensuite d'un rendez-vous à votre domicile, à l'heure qui vous arrange.",
    detail: "Sous 48 h",
  },
  {
    number: "02",
    title: "Prise de mesures & conseil",
    text: "Sur place, nous relevons chaque cote, testons les circulations, repérons les arrivées d'eau et d'électricité. C'est le moment des arbitrages : matières, coloris, ergonomie.",
    detail: "1 h à 2 h sur place",
  },
  {
    number: "03",
    title: "Conception & devis détaillé",
    text: "Nous dessinons votre projet et vous présentons un devis transparent, détaillé poste par poste, avec les délais de fabrication et de pose.",
    detail: "48 h après les mesures",
  },
  {
    number: "04",
    title: "Fabrication & pose",
    text: "Votre mobilier est fabriqué sur mesure, puis posé par nos soins. Nous protégeons vos sols, gérons l'évacuation des déchets et vous tenons informé de l'avancement.",
    detail: "Planning daté",
  },
  {
    number: "05",
    title: "Suivi & garantie",
    text: "Une visite de réception est faite avec vous, puis nous restons disponibles. Les réglages et ajustements éventuels sont réalisés dans le cadre de nos garanties.",
    detail: "Garanties légales",
  },
];

export const testimonials = [
  {
    name: "Marie & Julien",
    city: "Saint-Étienne",
    text: "Nous avions un budget serré et un espace compliqué. AMSP a trouvé des solutions que nous n'avions pas imaginées, et le résultat dépasse ce qu'on espérait. Pose impeccable.",
    project: "Cuisine sur mesure",
    rating: 5,
  },
  {
    name: "Sophie R.",
    city: "Firminy",
    text: "Un vrai travail d'artisan. Les plans étaient justes, les délais respectés et le chantier laissé propre chaque soir. La bibliothèque est devenue le centre du salon.",
    project: "Bibliothèque murale",
    rating: 5,
  },
  {
    name: "Karim B.",
    city: "Le Chambon-Feugerolles",
    text: "Écoute, conseils francs et devis clair. On sent l'expérience : ils savent dire ce qui va fonctionner et ce qu'il faut éviter. Je recommande sans hésiter.",
    project: "Dressing sur mesure",
    rating: 5,
  },
  {
    name: "Isabelle M.",
    city: "Unieux",
    text: "Rénovation de notre cuisine pendant trois semaines : planning annoncé, planning tenu. Aucune mauvaise surprise, et un rendu très haut de gamme.",
    project: "Rénovation de cuisine",
    rating: 5,
  },
  {
    name: "Pierre & Anne",
    city: "Roche-la-Molière",
    text: "Le rendez-vous à domicile a changé notre projet. Ils ont repéré des contraintes que les autres n'avaient pas vues. Le séjour est maintenant lumineux et chaleureux.",
    project: "Séjour décloisonné",
    rating: 5,
  },
];

export const faq = [
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui. La visite, la prise de mesures et le devis détaillé sont gratuits et sans engagement, dans un rayon d'environ 30 km autour du Chambon-Feugerolles. Vous recevez un document clair, poste par poste, sous 48 h après le rendez-vous.",
  },
  {
    question: "Quels sont les délais pour une cuisine sur mesure ?",
    answer:
      "Comptez en général 6 à 10 semaines entre la validation du devis et la pose, selon les matières choisies et la disponibilité de l'électroménager. Le planning précis est indiqué noir sur blanc sur votre devis.",
  },
  {
    question: "Fabriquez-vous réellement sur mesure ?",
    answer:
      "Oui. Nous concevons chaque meuble pour la pièce concernée : cotes relevées sur place, adaptations aux murs, aux pentes, aux passages de gaines. Rien n'est standardisé, c'est ce qui permet d'exploiter des espaces que les cuisinistes refusent souvent.",
  },
  {
    question: "Intervenez-vous en dehors du Chambon-Feugerolles ?",
    answer:
      "Nous travaillons à Saint-Étienne, Firminy, La Ricamarie, Unieux, Fraisses, Roche-la-Molière et dans toute la Loire. Pour une commune plus éloignée, appelez-nous : nous vous dirons rapidement si nous pouvons intervenir.",
  },
  {
    question: "Puis-je conserver mon électroménager ?",
    answer:
      "Bien sûr. Nous relevons les dimensions et les raccordements de vos appareils pour les intégrer au nouveau meuble. Si un remplacement est préférable, nous vous expliquons pourquoi et proposons des solutions adaptées.",
  },
  {
    question: "Comment se déroule le paiement et quelles garanties avez-vous ?",
    answer:
      "Un acompte à la commande, puis des paiements intermédiaires selon l'avancement, le solde à la réception. Vous bénéficiez des garanties légales de conformité et de vices cachés, ainsi que de la garantie de parfait achèvement sur les travaux.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  image: string;
  category: string;
  sections: { heading?: string; paragraphs: string[]; list?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: "cuisine-sur-mesure-questions",
    title: "Cuisine sur mesure : les 6 questions à se poser avant de se lancer",
    excerpt:
      "Plan en L ou en U, îlot, électroménager intégré… Avant de choisir un modèle, commencez par vos usages. Voici les questions que nous posons systématiquement lors du premier rendez-vous.",
    date: "2026-02-12",
    readingTime: "5 min",
    image: "/images/cuisine-3.jpg",
    category: "Cuisines",
    sections: [
      {
        paragraphs: [
          "Une cuisine réussie ne se choisit pas sur un catalogue : elle se dessine à partir de votre façon de vivre. Avant même de parler de couleurs ou de matières, prenez le temps de répondre à ces quelques questions. Elles orientent tout le projet.",
        ],
      },
      {
        heading: "1. Combien de personnes cuisinent, et à quel moment ?",
        paragraphs: [
          "Deux cuisiniers simultanés ont besoin de deux zones de travail distinctes, avec au moins 60 cm de plan de travail de part et d'autre des feux. Si vous recevez souvent, un îlot avec assise change complètement l'usage de la pièce.",
        ],
      },
      {
        heading: "2. Où se trouve le triangle d'activité ?",
        paragraphs: [
          "Le trajet entre le froid (réfrigérateur), le lavage (évier) et la cuisson (plaques) doit rester fluide. Un triangle bien pensé fait gagner du temps et réduit les allers-retours inutiles. C'est le premier point que nous vérifions sur plan.",
        ],
      },
      {
        heading: "3. Quel rangement vous manque aujourd'hui ?",
        paragraphs: [
          "Plutôt que d'ajouter des placards au hasard, listez ce qui vous gêne : les poêles empilées, l'absence de tiroirs profonds, les appareils qui traînent. Un meuble sur mesure répond à un problème précis, pas à une mode.",
        ],
      },
      {
        heading: "4. Ouvert ou fermé ?",
        paragraphs: [
          "Une cuisine ouverte agrandit l'espace mais expose les odeurs et le bruit. Une verrière, une demi-cloison ou un îlot avec retour permettent de trouver un équilibre, sans mur plein.",
        ],
      },
      {
        heading: "5. Quelles contraintes techniques ?",
        paragraphs: [
          "Arrivées d'eau, évacuations, tableau électrique, hauteur de fenêtre, murs non droits : ces éléments déterminent l'implantation possible. C'est pourquoi une prise de mesures sur place reste irremplaçable.",
        ],
      },
      {
        heading: "6. Quel budget global, pose comprise ?",
        paragraphs: [
          "Distinguer le meuble, le plan de travail, l'électroménager et la pose évite les mauvaises surprises. Un devis détaillé vous permet d'arbitrer : investir sur le plan de travail, attendre sur l'électroménager, choisir un rangement intérieur plus simple.",
        ],
      },
    ],
  },
  {
    slug: "budget-cuisine-equipee",
    title: "Quel budget prévoir pour une cuisine sur mesure en 2026 ?",
    excerpt:
      "Entre le remplacement de façade et la cuisine entièrement repensée, les écarts sont importants. Voici comment se compose un budget, poste par poste, et où se situent les vrais leviers d'économie.",
    date: "2026-01-20",
    readingTime: "6 min",
    image: "/images/cuisine-1.jpg",
    category: "Budget",
    sections: [
      {
        paragraphs: [
          "Le prix d'une cuisine sur mesure dépend surtout de trois facteurs : la longueur de meubles, le niveau de finition et le plan de travail. Deux cuisines de 12 m² peuvent varier du simple au triple selon ces choix. Voici les ordres de grandeur que nous donnons lors des premiers échanges.",
        ],
      },
      {
        heading: "Ce qui compose le budget",
        paragraphs: [
          "On distingue généralement le mobilier, le plan de travail et la crédence, l'électroménager, la robinetterie, puis la pose et les éventuels travaux (électricité, plomberie, reprise de sols et de murs). Chaque poste doit apparaître séparément sur le devis.",
        ],
        list: [
          "Mobilier sur mesure : le poste le plus variable",
          "Plan de travail : stratifié, céramique, pierre naturelle",
          "Électroménager : libre ou entièrement intégré",
          "Pose, raccordements et évacuation des déchets",
        ],
      },
      {
        heading: "Les leviers d'économie intelligents",
        paragraphs: [
          "Conserver l'implantation existante lorsque les réseaux sont bien placés, garder un électroménager récent, privilégier des façades laquées plutôt que du bois massif, ou concentrer le budget sur les zones les plus utilisées sont des choix qui ne se voient pas au quotidien, mais qui allègent nettement la facture.",
        ],
      },
      {
        heading: "Pourquoi demander un devis détaillé",
        paragraphs: [
          "Un devis global empêche de comparer et de comprendre. Exigez toujours le détail des meubles, des finitions, de la quincaillerie et de la pose. C'est aussi le meilleur moyen de vérifier que rien n'a été oublié — la célèbre ligne « divers » qui gonfle en fin de chantier.",
        ],
      },
    ],
  },
  {
    slug: "optimiser-dressing",
    title: "Dressing sur mesure : comment gagner un mètre de rangement",
    excerpt:
      "Hauteur sous plafond, profondeur, penderie courte ou longue, tiroirs : un dressing bien conçu range presque deux fois plus qu'une armoire classique. Nos règles d'implantation.",
    date: "2025-12-08",
    readingTime: "4 min",
    image: "/images/agencement-1.jpg",
    category: "Agencement",
    sections: [
      {
        paragraphs: [
          "Un dressing n'est pas une pièce remplie d'étagères : c'est une organisation. Bien dessiné, il exploite la hauteur sous plafond, libère la chambre et rend le quotidien plus simple. Voici les règles que nous appliquons.",
        ],
      },
      {
        heading: "Commencer par compter, pas par dessiner",
        paragraphs: [
          "Comptez vos penderies longues (manteaux, robes), vos penderies courtes (chemises, vestes) et le volume de tiroirs nécessaires. Un dressing se dimensionne en mètres linéaires utiles, pas en nombre d'étagères.",
        ],
      },
      {
        heading: "Les cotes qui changent tout",
        paragraphs: [
          "Une penderie longue demande 140 à 160 cm de hauteur, une penderie courte 90 à 100 cm, avec 55 à 60 cm de profondeur. Au-dessus, une étagère haute accueille valises et couvertures : c'est souvent un mètre cube récupéré.",
        ],
        list: [
          "Profondeur utile : 60 cm pour les vêtements sur cintre",
          "Hauteur libre au-dessus des portes : jusqu'au plafond",
          "Éclairage intérieur : bandeau LED sur détection",
          "Tiroirs : en bas pour les accès fréquents",
        ],
      },
      {
        heading: "Le sous-pente, un espace sous-exploité",
        paragraphs: [
          "Sous une pente, la hauteur varie tous les 30 cm. En fractionnant l'agencement — tiroirs bas, penderie au milieu, étagères basses sur l'arrière — on récupère une surface de rangement que les meubles standard laissent vide.",
        ],
      },
    ],
  },
];

export const heroHighlights = [
  "Devis gratuit sous 48 h",
  "Fabrication sur mesure",
  "Artisan local — Le Chambon-Feugerolles",
];

export const zones = [
  {
    name: "Le Chambon-Feugerolles",
    text: "Notre commune d'implantation. Nous intervenons dans les maisons de ville, les pavillons et les appartements du centre et des quartiers alentours.",
  },
  {
    name: "Saint-Étienne",
    text: "Rénovation de cuisines, dressings et agencements sur mesure dans les appartements stéphanois, y compris en centre-ville et dans les immeubles anciens.",
  },
  {
    name: "Firminy",
    text: "Cuisines et aménagements pour les maisons et logements collectifs firminois, avec un soin particulier apporté aux petites surfaces.",
  },
  {
    name: "La Ricamarie",
    text: "Agencement intérieur, placards et menuiserie sur mesure pour les familles ricamandoises.",
  },
  {
    name: "Unieux",
    text: "Cuisines ouvertes et pièces de vie réaménagées, en lien avec les artisans locaux du secteur.",
  },
  {
    name: "Fraisses",
    text: "Dressings, salles d'eau et rangements optimisés pour les maisons fraissinoises.",
  },
  {
    name: "Roche-la-Molière",
    text: "Rénovation de pièces de vie, verrières et agencements pour les logements rochelais.",
  },
];
