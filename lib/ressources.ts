// Données de la page Ressources — articles regroupés par thématique.
// L'icône est une clé résolue côté composant client (ICON_MAP).

export type ResourceArticle = {
  href: string;
  icon: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
};

export type ResourceTheme = {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  articles: ResourceArticle[];
};

export const RESOURCE_THEMES: ResourceTheme[] = [
  {
    id: "plateformes",
    eyebrow: "Guides plateformes",
    title: "Apparaître sur chaque IA",
    accent: "#7C5CFF",
    articles: [
      {
        href: "/ressources/visibilite-chatgpt",
        icon: "chatgpt",
        title: "Comment apparaître sur ChatGPT",
        excerpt:
          "Les deux leviers de ChatGPT — connaissance du modèle et ChatGPT Search — et la méthode en 6 étapes pour y faire citer votre marque.",
        date: "Mai 2025",
        readTime: "10 min",
      },
      {
        href: "/ressources/google-ai-overviews",
        icon: "aio",
        title: "Comment apparaître dans Google AI Overviews",
        excerpt:
          "La réponse IA en tête de Google : comment Google génère les AI Overviews et la méthode pour en devenir une source citée.",
        date: "Juin 2025",
        readTime: "10 min",
      },
      {
        href: "/ressources/visibilite-perplexity",
        icon: "perplexity",
        title: "Comment apparaître sur Perplexity",
        excerpt:
          "Perplexity cite ses sources explicitement. La méthode en 5 étapes pour y faire citer votre marque.",
        date: "Juillet 2025",
        readTime: "8 min",
      },
      {
        href: "/ressources/visibilite-gemini",
        icon: "gemini",
        title: "Comment apparaître sur Google Gemini",
        excerpt:
          "L'assistant IA de Google, présent dans Workspace et sur Android. La méthode en 6 étapes pour y faire citer votre marque.",
        date: "Août 2025",
        readTime: "9 min",
      },
      {
        href: "/ressources/visibilite-copilot",
        icon: "copilot",
        title: "Comment apparaître sur Microsoft Copilot",
        excerpt:
          "Copilot s'appuie sur l'index Bing — un levier souvent négligé. La méthode en 6 étapes pour en tirer parti.",
        date: "Septembre 2025",
        readTime: "9 min",
      },
    ],
  },
  {
    id: "fondamentaux",
    eyebrow: "Fondamentaux GEO",
    title: "Comprendre le GEO",
    accent: "#3B82F6",
    articles: [
      {
        href: "/ressources/visibilite-ia",
        icon: "network",
        title: "Comment apparaître dans les réponses des IA",
        excerpt:
          "Le guide pilier de la visibilité IA : les 5 plateformes que vos prospects interrogent, les 2 mécanismes communs à toutes les IA (connaissance du modèle et recherche en direct) et les 6 leviers du GEO. Le point de départ pour comprendre le GEO en profondeur.",
        date: "Avril 2025",
        readTime: "12 min",
      },
      {
        href: "/ressources/definition-geo",
        icon: "help",
        title: "Qu'est-ce que le GEO ?",
        excerpt:
          "Définition claire du GEO, différences avec le SEO et lexique des termes clés de la visibilité dans les IA génératives.",
        date: "Janvier 2025",
        readTime: "7 min",
      },
      {
        href: "/ressources/geo-vs-seo",
        icon: "compare",
        title: "GEO vs SEO : quelles différences ?",
        excerpt:
          "Le tableau comparatif complet — objectifs, formats, mesure, leviers d'autorité — et les chiffres de la bascule vers la recherche par IA.",
        date: "Février 2025",
        readTime: "8 min",
      },
      {
        href: "/ressources/lexique-geo",
        icon: "book",
        title: "Lexique GEO",
        excerpt:
          "Le glossaire complet de la visibilité IA : 47 termes définis et classés en 5 catégories, du GEO à la part de voix.",
        date: "Mars 2025",
        readTime: "Référence",
      },
    ],
  },
  {
    id: "sectoriels",
    eyebrow: "Guides sectoriels",
    title: "Le GEO par secteur",
    accent: "#00D4AA",
    articles: [
      {
        href: "/ressources/geo-saas",
        icon: "cloud",
        title: "GEO pour SaaS B2B",
        excerpt:
          "Vos acheteurs demandent à ChatGPT quel outil choisir. Comment faire en sorte que votre SaaS soit le nom qui revient.",
        date: "Octobre 2025",
        readTime: "10 min",
      },
      {
        href: "/ressources/geo-avocats",
        icon: "scale",
        title: "GEO pour Cabinets d'Avocats",
        excerpt:
          "Comment les cabinets d'avocats d'affaires et fiscalistes gagnent des clients via ChatGPT et Perplexity. Guide complet.",
        date: "Novembre 2025",
        readTime: "12 min",
      },
      {
        href: "/ressources/geo-ecommerce",
        icon: "shopping",
        title: "GEO pour e-commerce",
        excerpt:
          "Vos clients demandent à ChatGPT quel produit acheter. Comment faire en sorte que vos produits soient ceux que les IA recommandent.",
        date: "Décembre 2025",
        readTime: "10 min",
      },
    ],
  },
  {
    id: "donnees",
    eyebrow: "Données & études",
    title: "Chiffres et cas concrets",
    accent: "#F59E0B",
    articles: [
      {
        href: "/ressources/statistiques-geo",
        icon: "chart",
        title: "Statistiques GEO 2026",
        excerpt:
          "Les chiffres clés de la recherche par IA en 2026 : 900 M d'utilisateurs ChatGPT, +206 % de trafic de référence sortant, 88 % d'adoption de l'IA en entreprise. Données publiques sourcées OpenAI, Semrush, McKinsey et Google.",
        date: "Mai 2026",
        readTime: "7 min",
      },
      {
        href: "/ressources/cas-client-cabinet-avocats",
        icon: "trophy",
        title: "8 % → 64 % de visibilité IA en 90 jours",
        excerpt:
          "Étude de cas anonymisée : comment un cabinet d'avocats a multiplié par 8 sa part de voix dans les IA. Méthode, livrables, métriques.",
        date: "Mars 2026",
        readTime: "9 min",
      },
      {
        href: "/ressources/meilleures-agences-geo-france",
        icon: "award",
        title: "Meilleures agences GEO en France",
        excerpt:
          "Grille de critères objective et questions à poser pour choisir l'agence GEO adaptée à votre besoin.",
        date: "Janvier 2026",
        readTime: "9 min",
      },
    ],
  },
];

export const RESOURCE_ARTICLES = RESOURCE_THEMES.flatMap((t) => t.articles);
