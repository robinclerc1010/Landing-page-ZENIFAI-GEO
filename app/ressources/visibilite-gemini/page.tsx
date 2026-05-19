import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/visibilite-gemini";

export const metadata: Metadata = {
  title: "Comment apparaître sur Google Gemini — Guide GEO 2026 | Zenifai",
  description:
    "Méthode complète pour faire citer votre marque par Google Gemini. Comprendre comment Gemini sélectionne ses sources et optimiser votre visibilité en 6 étapes.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Comment apparaître sur Gemini — Zenifai", type: "article" },
};

const faq = [
  {
    question: "Qu’est-ce que Google Gemini ?",
    answer:
      "Gemini est l’assistant IA de Google : une application conversationnelle (gemini.google.com) également intégrée à l’écosystème Google — Workspace (Gmail, Docs), Android, Chrome. Il s’appuie sur les modèles Gemini et peut ancrer ses réponses dans une recherche Google en direct.",
  },
  {
    question: "Quelle différence entre Gemini et Google AI Overviews ?",
    answer:
      "Les AI Overviews sont les réponses générées affichées dans les résultats de recherche Google. Gemini est l’assistant conversationnel autonome. Les deux reposent sur les modèles Gemini et sur l’index de Google, mais Gemini est un dialogue complet tandis que l’AI Overview répond à une requête de recherche ponctuelle.",
  },
  {
    question: "Comment Gemini choisit-il ses sources ?",
    answer:
      "Quand une réponse nécessite des informations à jour ou vérifiables, Gemini ancre sa réponse dans une recherche Google et cite des sources. Il s’appuie donc sur l’index Google et sur le knowledge graph — la cohérence de votre entité et votre indexation sont déterminantes.",
  },
  {
    question: "Faut-il autoriser Google-Extended pour Gemini ?",
    answer:
      "Oui. Google-Extended est le token du robots.txt qui contrôle l’usage de votre contenu par les modèles Gemini et leur ancrage. L’autoriser est nécessaire pour participer pleinement à l’écosystème Gemini de Google.",
  },
  {
    question: "Combien de temps avant d’apparaître dans Gemini ?",
    answer:
      "Sur le levier d’ancrage en recherche (grounding), l’impact se mesure en quelques semaines après indexation des contenus optimisés. Sur la connaissance d’entraînement des modèles Gemini, c’est un jeu de fond de plusieurs mois lié aux mentions tierces et à la cohérence d’entité.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment apparaître sur Google Gemini",
  description: "Méthode en 6 étapes pour faire citer une marque par Google Gemini.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Garantir une indexation propre par Google",
      text: "Vérifier que Googlebot accède au site et que le sitemap est à jour — Gemini ancre ses réponses dans l’index Google.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Autoriser Google-Extended",
      text: "Autoriser Google-Extended dans le robots.txt pour participer à l’écosystème des modèles Gemini.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Consolider l’entité de marque",
      text: "Aligner nom, description et faits clés sur le site, les profils, Wikidata et le knowledge graph de Google.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Structurer un contenu citable",
      text: "Réécrire les contenus en passages auto-suffisants, format question-réponse, données sourcées et schema.org.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Construire l’autorité tierce",
      text: "Obtenir des mentions cohérentes sur les sources fiables : presse, communautés, annuaires, Wikipedia/Wikidata.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Mesurer et itérer",
      text: "Tester régulièrement un corpus de requêtes dans Gemini et ajuster les contenus selon les citations obtenues.",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment apparaître sur Google Gemini : le guide GEO 2026",
  description:
    "Méthode complète pour faire citer votre marque par l’assistant IA Google Gemini.",
  url: URL,
  datePublished: "2025-08-15",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: { "@type": "Thing", name: "Google Gemini" },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
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
              { name: "Visibilité sur Gemini", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        icon="gemini"
        eyebrow="Guide · Plateforme"
        title="Comment apparaître sur"
        titleAccent="Google Gemini"
        intro="Gemini est l’assistant IA de Google — présent dans une app dédiée, dans Workspace et sur Android. Voici comment faire en sorte que votre marque figure dans ses réponses."
        date="Publié en août 2025"
        readTime="~9 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          Gemini occupe une position particulière dans le paysage des IA : c’est l’assistant
          de <strong className="text-text-primary">Google</strong>, et il est partout —
          application dédiée, intégration dans Gmail et Docs, présence sur Android et Chrome.
          Pour une marque, être citée par Gemini, c’est être recommandée au cœur même de
          l’écosystème le plus utilisé au monde.
        </P>

        <H2>Gemini, AI Overviews : ne pas confondre</H2>
        <P>
          Google déploie l’IA générative à deux endroits distincts. Les{" "}
          <a href="/ressources/google-ai-overviews" className="text-accent-violet hover:underline">
            AI Overviews
          </a>{" "}
          sont les réponses générées affichées <em>dans les résultats de recherche</em>.
          Gemini est l’<strong className="text-text-primary">assistant conversationnel
          autonome</strong> : un dialogue complet, pas une réponse de recherche ponctuelle.
        </P>
        <P>
          Les deux partagent la même fondation : les modèles Gemini et l’index de Google.
          Travailler sa visibilité sur l’un renforce l’autre — mais Gemini, en tant
          qu’assistant, mobilise davantage la connaissance du modèle et le knowledge graph.
        </P>

        <H2>Comment Gemini cite une marque</H2>
        <P>
          Gemini mobilise deux ressources. D’abord la{" "}
          <strong className="text-text-primary">connaissance de ses modèles</strong>, issue
          de l’entraînement : une marque cohérente et présente dans le corpus est « connue ».
          Ensuite l’<strong className="text-text-primary">ancrage en recherche</strong>{" "}
          (grounding) : quand la question l’exige, Gemini lance une recherche Google, lit des
          pages et cite ses sources. Le knowledge graph de Google joue un rôle central pour
          résoudre les entités.
        </P>

        <H2>La méthode en 6 étapes</H2>

        <H2>Étape 1 — Garantir une indexation propre</H2>
        <P>
          Gemini ancre ses réponses dans l’index de Google. Vérifiez que Googlebot accède
          sans entrave à vos pages clés et que votre{" "}
          <code className="text-accent-violet">sitemap.xml</code> est à jour.
        </P>

        <H2>Étape 2 — Autoriser Google-Extended</H2>
        <P>
          Dans le <code className="text-accent-violet">robots.txt</code>, autorisez
          Google-Extended : ce token contrôle l’usage de votre contenu par les modèles
          Gemini. Le bloquer revient à sortir de l’écosystème Gemini.
        </P>

        <H2>Étape 3 — Consolider l’entité de marque</H2>
        <P>
          Gemini s’appuie fortement sur le knowledge graph de Google. Une entité claire —
          nom, description, secteur, dirigeants cohérents sur le site, les profils, Wikidata
          et les annuaires — est la condition pour être cité avec fiabilité.
        </P>

        <H2>Étape 4 — Structurer un contenu citable</H2>
        <P>
          Passages auto-suffisants, format question-réponse, titres explicites, données
          chiffrées avec sources, schema.org : ce sont les signaux qui rendent un contenu
          facile à extraire et à reprendre.
        </P>

        <H2>Étape 5 — Construire l’autorité tierce</H2>
        <P>
          La connaissance des modèles Gemini se construit à partir des sources qui parlent de
          votre marque : presse, communautés, annuaires sectoriels, Wikipedia et Wikidata.
          Une marque mentionnée de façon cohérente ailleurs devient une référence stable.
        </P>

        <H2>Étape 6 — Mesurer et itérer</H2>
        <P>
          Testez régulièrement vos requêtes cibles dans Gemini : votre marque est-elle citée ?
          Avec quels attributs ? Cette mesure dans le temps permet d’ajuster les contenus et
          de piloter votre part de voix.
        </P>

        <H2>Par où commencer</H2>
        <P>
          Pour la vue d’ensemble, consultez notre guide pilier{" "}
          <a href="/ressources/visibilite-ia" className="text-accent-violet hover:underline">
            « Comment apparaître dans les réponses des IA »
          </a>{" "}
          et les guides{" "}
          <a href="/ressources/visibilite-chatgpt" className="text-accent-violet hover:underline">
            ChatGPT
          </a>
          ,{" "}
          <a href="/ressources/google-ai-overviews" className="text-accent-violet hover:underline">
            AI Overviews
          </a>{" "}
          et{" "}
          <a href="/ressources/visibilite-perplexity" className="text-accent-violet hover:underline">
            Perplexity
          </a>
          . Notre{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          mesure votre présence dans Gemini comme dans les autres moteurs.
        </P>
      </ArticleLayout>
    </>
  );
}
