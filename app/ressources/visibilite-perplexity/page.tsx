import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/visibilite-perplexity";

export const metadata: Metadata = {
  title: "Comment apparaître sur Perplexity : guide GEO 2026 | Zenifai",
  description:
    "Méthode pas à pas pour faire citer votre marque par Perplexity. Comprendre comment Perplexity sélectionne ses sources et optimiser votre visibilité.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Comment apparaître sur Perplexity — Zenifai", type: "article" },
};

const faq = [
  {
    question: "Comment Perplexity choisit-il ses sources ?",
    answer:
      "Perplexity effectue une recherche web en temps réel, puis synthétise une réponse à partir des pages les plus pertinentes et fiables qu’il trouve, en les citant explicitement. Apparaître suppose donc d’être à la fois bien indexé, pertinent sur la requête et clairement structuré.",
  },
  {
    question: "Faut-il un bon SEO pour être cité par Perplexity ?",
    answer:
      "Un bon référencement aide, car Perplexity s’appuie sur la recherche web. Mais ce n’est pas suffisant : Perplexity privilégie les passages clairs, factuels et auto-suffisants. Une page peut bien ranker sur Google et rester peu citée par Perplexity si son contenu n’est pas structuré pour l’extraction.",
  },
  {
    question: "Le bot de Perplexity peut-il accéder à mon site ?",
    answer:
      "Perplexity utilise les robots PerplexityBot (indexation) et Perplexity-User (navigation à la demande). Il faut les autoriser explicitement dans le fichier robots.txt pour ne pas bloquer la citation.",
  },
  {
    question: "Combien de temps avant d’être cité par Perplexity ?",
    answer:
      "Perplexity s’appuyant sur une recherche en temps réel, l’impact d’une optimisation est plus rapide que sur les modèles entraînés : quelques jours à quelques semaines après l’indexation des contenus optimisés.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment apparaître sur Perplexity",
  description:
    "Méthode en 5 étapes pour faire citer votre marque par le moteur de réponse Perplexity.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Autoriser les crawlers Perplexity",
      text: "Autoriser PerplexityBot et Perplexity-User dans le fichier robots.txt pour permettre l’indexation et la navigation à la demande.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Identifier les requêtes cibles",
      text: "Lister les questions que vos prospects posent réellement à Perplexity dans votre marché.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Structurer des passages citables",
      text: "Réécrire les contenus en passages auto-suffisants, format question-réponse, avec données chiffrées et sources liées.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Renforcer l’autorité de la source",
      text: "Construire des signaux d’autorité tiers afin que Perplexity considère le domaine comme fiable sur le sujet.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Mesurer et itérer",
      text: "Tester régulièrement les requêtes cibles dans Perplexity et ajuster les contenus selon les citations obtenues.",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment apparaître sur Perplexity : guide GEO 2026",
  description:
    "Méthode pas à pas pour faire citer votre marque par le moteur de réponse Perplexity.",
  url: URL,
  datePublished: "2025-07-15",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: { "@type": "Thing", name: "Perplexity AI" },
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
              { name: "Visibilité sur Perplexity", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        eyebrow="Guide · Plateforme"
        title="Comment apparaître sur"
        titleAccent="Perplexity"
        intro="Perplexity cite ses sources explicitement — ce qui en fait le moteur de réponse le plus actionnable pour le GEO. Voici la méthode en 5 étapes pour y faire citer votre marque."
        date="Publié en juillet 2025"
        readTime="~8 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          Parmi les moteurs de réponse, Perplexity occupe une place particulière : il
          fonctionne par recherche web en temps réel et{" "}
          <strong className="text-text-primary">
            cite explicitement ses sources
          </strong>{" "}
          sous chaque réponse. Pour une marque, c’est une double opportunité : la
          citation est visible, cliquable, et l’impact d’une optimisation se mesure
          rapidement.
        </P>
        <P>
          Mais cette transparence a une contrepartie : Perplexity est sélectif. Il
          privilégie les passages clairs, factuels et faciles à extraire. Voici comment
          structurer votre présence pour en faire partie.
        </P>

        <H2>Étape 1 — Autoriser les crawlers Perplexity</H2>
        <P>
          Perplexity utilise deux agents : <strong className="text-text-primary">PerplexityBot</strong>{" "}
          pour l’indexation et <strong className="text-text-primary">Perplexity-User</strong> pour la
          navigation à la demande. Tous deux doivent être explicitement autorisés dans
          votre <code className="text-accent-violet">robots.txt</code>. Un blocage,
          même involontaire, vous rend invisible.
        </P>

        <H2>Étape 2 — Identifier les requêtes cibles</H2>
        <P>
          Listez les questions réelles que vos prospects posent à Perplexity dans votre
          marché : requêtes de comparaison, de recommandation, de définition. Ce corpus
          devient la base de mesure de votre visibilité.
        </P>

        <H2>Étape 3 — Structurer des passages citables</H2>
        <P>
          C’est le cœur du travail. Perplexity extrait des passages, pas des pages
          entières. Chaque section utile doit :
        </P>
        <UL
          items={[
            "Répondre à une question précise dès la première phrase.",
            "Être auto-suffisante : compréhensible hors contexte de la page.",
            "Contenir des données chiffrées et des sources liées vers des références primaires.",
            "Adopter un format question-réponse, avec des titres explicites.",
          ]}
        />

        <H2>Étape 4 — Renforcer l’autorité de la source</H2>
        <P>
          Perplexity pondère ses sources par fiabilité. Une marque citée ailleurs — sur
          des sources sectorielles reconnues, des comparateurs, la presse — est jugée
          plus crédible et davantage retenue dans les réponses.
        </P>

        <H2>Étape 5 — Mesurer et itérer</H2>
        <P>
          Testez régulièrement vos requêtes cibles directement dans Perplexity. Notez
          quelles pages sont citées, lesquelles ne le sont pas, et ajustez la structure
          des contenus en conséquence. La boucle de feedback est courte : c’est l’un des
          grands avantages de Perplexity pour piloter une stratégie GEO.
        </P>
        <P>
          Pour aller plus loin, notre{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          mesure votre part de voix sur Perplexity comme sur ChatGPT, Gemini et Claude. Voir
          aussi le guide pilier{" "}
          <a href="/ressources/visibilite-ia" className="text-accent-violet hover:underline">
            « Comment apparaître dans les réponses des IA »
          </a>{" "}
          et le guide{" "}
          <a href="/ressources/visibilite-chatgpt" className="text-accent-violet hover:underline">
            « Comment apparaître sur ChatGPT »
          </a>
          .
        </P>
      </ArticleLayout>
    </>
  );
}
