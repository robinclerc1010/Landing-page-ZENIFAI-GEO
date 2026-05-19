import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/visibilite-ia";

export const metadata: Metadata = {
  title: "Comment apparaître dans les réponses des IA — Guide 2026 | Zenifai",
  description:
    "Le guide complet de la visibilité IA : comment faire citer votre marque par ChatGPT, Perplexity, Google AI Overviews, Gemini et Copilot. Méthode et plateformes.",
  alternates: { canonical: URL },
  openGraph: {
    url: URL,
    title: "Comment apparaître dans les réponses des IA — Zenifai",
    type: "article",
  },
};

const faq = [
  {
    question: "Qu’est-ce que la visibilité IA ?",
    answer:
      "La visibilité IA désigne la présence d’une marque dans les réponses générées par les IA conversationnelles (ChatGPT, Perplexity, Google AI Overviews, Gemini, Copilot). Elle se mesure par la fréquence à laquelle une marque est citée ou recommandée sur les requêtes de son marché. C’est l’objet du GEO, le Generative Engine Optimization.",
  },
  {
    question: "Quelle plateforme IA faut-il prioriser ?",
    answer:
      "ChatGPT concentre le plus d’usage et constitue généralement la priorité. Mais Google AI Overviews touche un public encore plus large via la recherche Google, et Perplexity pèse fort sur les recherches d’évaluation. Une stratégie de visibilité IA solide travaille les mécanismes communs à toutes les plateformes plutôt qu’une seule.",
  },
  {
    question: "La visibilité IA, est-ce la même chose que le SEO ?",
    answer:
      "Non. Le SEO optimise le classement dans une liste de liens ; la visibilité IA optimise la citation dans une réponse rédigée. Les deux partagent des fondations (contenu de qualité, autorité, propreté technique) mais diffèrent sur les formats, la structure du contenu et les indicateurs de succès.",
  },
  {
    question: "Combien de temps pour devenir visible dans les IA ?",
    answer:
      "Sur les leviers de recherche en direct (ChatGPT Search, Perplexity, AI Overviews), l’impact se mesure en quelques semaines. Sur la connaissance d’entraînement des modèles, c’est un jeu de fond de plusieurs mois. Premiers signaux mesurables typiquement sous 30 à 45 jours, impact significatif sur 60 à 90 jours.",
  },
  {
    question: "Comment mesurer sa visibilité dans les IA ?",
    answer:
      "En testant un corpus stable de requêtes représentatives sur chaque plateforme et en mesurant la fréquence de citation de la marque dans le temps. Chez Zenifai, c’est l’IA Visibility Score™ : un score de part de voix calculé sur 50 à 200 prompts mesurés mensuellement sur les LLMs majeurs.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment apparaître dans les réponses des IA : le guide complet 2026",
  description:
    "Guide pilier de la visibilité IA : plateformes, mécanismes communs et méthode pour faire citer une marque par les IA génératives.",
  url: URL,
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: { "@type": "Thing", name: "Generative Engine Optimization" },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Guides de visibilité par plateforme IA",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Comment apparaître sur ChatGPT",
      url: "https://zenifai.ai/ressources/visibilite-chatgpt",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Comment apparaître dans Google AI Overviews",
      url: "https://zenifai.ai/ressources/google-ai-overviews",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Comment apparaître sur Perplexity",
      url: "https://zenifai.ai/ressources/visibilite-perplexity",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Comment apparaître sur Google Gemini",
      url: "https://zenifai.ai/ressources/visibilite-gemini",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Comment apparaître sur Microsoft Copilot",
      url: "https://zenifai.ai/ressources/visibilite-copilot",
    },
  ],
};

const platforms: {
  name: string;
  desc: string;
  href?: string;
  guide: string;
}[] = [
  {
    name: "ChatGPT",
    desc: "Le moteur de réponse le plus utilisé. Cite les marques via sa connaissance d’entraînement et via ChatGPT Search.",
    href: "/ressources/visibilite-chatgpt",
    guide: "Lire le guide ChatGPT",
  },
  {
    name: "Google AI Overviews",
    desc: "Les réponses générées en tête des résultats Google. La plus grande surface d’exposition, adossée à l’index Google.",
    href: "/ressources/google-ai-overviews",
    guide: "Lire le guide AI Overviews",
  },
  {
    name: "Perplexity",
    desc: "Moteur de réponse qui cite explicitement ses sources. Levier le plus mesurable et le plus rapide à activer.",
    href: "/ressources/visibilite-perplexity",
    guide: "Lire le guide Perplexity",
  },
  {
    name: "Google Gemini",
    desc: "L’assistant IA de Google, intégré à l’écosystème Workspace et Android. S’appuie sur l’index et le knowledge graph de Google.",
    href: "/ressources/visibilite-gemini",
    guide: "Lire le guide Gemini",
  },
  {
    name: "Microsoft Copilot",
    desc: "L’IA de Microsoft, intégrée à Bing et Windows. S’appuie sur l’index Bing pour sa recherche en direct.",
    href: "/ressources/visibilite-copilot",
    guide: "Lire le guide Copilot",
  },
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://zenifai.ai" },
              { name: "Ressources", url: "https://zenifai.ai/ressources" },
              { name: "Visibilité dans les IA", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        eyebrow="Guide pilier · Fondamentaux"
        title="Comment apparaître dans les"
        titleAccent="réponses des IA"
        intro="Vos prospects ne cherchent plus seulement sur Google : ils demandent à ChatGPT, Perplexity ou Gemini quelle solution choisir. Voici le guide complet de la visibilité IA — les plateformes, les mécanismes communs et la méthode."
        date="Publié en mai 2026"
        readTime="~12 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          Pendant vingt ans, être visible en ligne voulait dire une chose : bien se classer
          sur Google. Ce n’est plus le cas. Une part croissante des recherches
          d’information, d’évaluation et d’achat passe désormais par des{" "}
          <strong className="text-text-primary">moteurs de réponse</strong> — ChatGPT,
          Perplexity, Google AI Overviews, Gemini, Copilot — qui ne renvoient pas une liste
          de liens, mais une réponse rédigée citant quelques marques.
        </P>
        <P>
          Apparaître dans ces réponses, c’est ce que mesure la{" "}
          <strong className="text-text-primary">visibilité IA</strong>, et ce que construit
          le GEO (Generative Engine Optimization). Cette page est notre guide pilier : elle
          couvre les plateformes et les mécanismes communs. Les guides détaillés par
          plateforme y sont reliés.
        </P>

        <H2>Qu’est-ce que la visibilité IA ?</H2>
        <P>
          La visibilité IA est la présence d’une marque dans les réponses générées par les
          IA conversationnelles, mesurée par sa fréquence de citation sur les requêtes de son
          marché. Là où le SEO se mesure en positions et en clics, la visibilité IA se mesure
          en <strong className="text-text-primary">part de voix</strong> : sur 100 questions
          pertinentes posées à une IA, combien de fois votre marque est-elle citée — et
          comparée à qui ?
        </P>
        <P>
          C’est un jeu à somme nulle : une réponse générée ne mentionne que trois, quatre,
          parfois cinq marques. Les absents ne sont pas mal classés — ils sont simplement
          hors de la conversation.
        </P>

        <H2>Les 5 plateformes où votre marque doit apparaître</H2>
        <P>
          Chaque plateforme a sa logique, mais elles se travaillent ensemble. Voici le
          paysage, et les guides détaillés quand ils existent.
        </P>
        <div className="grid sm:grid-cols-2 gap-4 not-prose">
          {platforms.map((p) => {
            const inner = (
              <>
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-2">
                  {p.name}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-3">
                  {p.desc}
                </p>
                <span
                  className={`text-sm font-medium ${
                    p.href ? "text-accent-violet" : "text-text-secondary/50"
                  }`}
                >
                  {p.href ? `${p.guide} →` : p.guide}
                </span>
              </>
            );
            return p.href ? (
              <a
                key={p.name}
                href={p.href}
                className="block p-6 rounded-2xl border border-border-default bg-bg-secondary/30 hover:border-accent-violet/40 transition-colors"
              >
                {inner}
              </a>
            ) : (
              <div
                key={p.name}
                className="p-6 rounded-2xl border border-border-default bg-bg-secondary/30"
              >
                {inner}
              </div>
            );
          })}
        </div>

        <H2>Les 2 mécanismes communs à toutes les IA</H2>
        <P>
          Avant les spécificités de chaque plateforme, une vérité commune : toute IA cite une
          marque par l’un de deux mécanismes — et il faut travailler les deux.
        </P>
        <P>
          <strong className="text-text-primary">
            1. La connaissance d’entraînement.
          </strong>{" "}
          Le modèle a été entraîné sur un vaste corpus de texte. Une marque qui y est
          présente de façon récurrente et cohérente est « connue » du modèle, qui peut la
          citer sans recherche web. Levier de fond, lent, dépendant des mentions tierces et
          de la cohérence d’entité.
        </P>
        <P>
          <strong className="text-text-primary">
            2. La recherche en direct (retrieval).
          </strong>{" "}
          Quand la question l’exige, l’IA effectue une recherche web, lit des pages et cite
          ses sources. Levier rapide, proche du SEO : il faut être indexé, pertinent et
          structuré pour l’extraction.
        </P>
        <P>
          Une marque qui ne travaille que le second reste invisible dès qu’aucune recherche
          n’est déclenchée. Une marque qui ne travaille que le premier manque toutes les
          requêtes récentes ou précises.
        </P>

        <H2>Les 6 leviers de la visibilité IA</H2>
        <P>
          Ces leviers sont communs à toutes les plateformes — c’est le socle de toute
          stratégie GEO. Les guides par plateforme en précisent ensuite l’application.
        </P>
        <UL
          items={[
            "Accès des crawlers IA — autoriser explicitement les robots (GPTBot, OAI-SearchBot, PerplexityBot, Google-Extended…) dans le robots.txt.",
            "Consolidation d’entité — aligner nom, description et faits clés sur le site, les profils, Wikidata et les annuaires pour que les IA résolvent une marque claire.",
            "Contenu citable — réécrire les contenus en passages auto-suffisants, format question-réponse, données sourcées, schema.org.",
            "Contenu de comparaison et d’alternative — les formats « X vs Y » et « alternatives à X » que les IA mobilisent pour construire leurs recommandations.",
            "Autorité tierce — obtenir des mentions cohérentes sur les sources que les IA jugent fiables : presse, communautés, annuaires, Wikipedia/Wikidata.",
            "Mesure — suivre la part de voix IA sur un corpus de requêtes stable, pour piloter plutôt que deviner.",
          ]}
        />

        <H2>Visibilité IA et SEO : complémentaires</H2>
        <P>
          La visibilité IA ne remplace pas le SEO. Un contenu bien référencé sert souvent de
          source aux moteurs de réponse — mais il faut le structurer pour qu’il soit
          réellement citable. Le SEO capte le clic ; la visibilité IA capte la
          recommandation. Pour approfondir la distinction, voir notre page{" "}
          <a href="/ressources/definition-geo" className="text-accent-violet hover:underline">
            « Qu’est-ce que le GEO ? »
          </a>
          .
        </P>

        <H2>Par où commencer</H2>
        <P>
          La première étape est de mesurer où vous en êtes. Un{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          établit votre part de voix actuelle sur ChatGPT, Perplexity, Gemini et Claude, et
          identifie les leviers prioritaires. Vient ensuite la{" "}
          <a href="/services/strategie-geo" className="text-accent-violet hover:underline">
            stratégie GEO
          </a>{" "}
          : une feuille de route de 90 jours appliquant les 6 leviers ci-dessus, étape par
          étape — c’est l’objet de{" "}
          <a href="/methode" className="text-accent-violet hover:underline">
            notre méthode
          </a>
          .
        </P>
      </ArticleLayout>
    </>
  );
}
