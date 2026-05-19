import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/google-ai-overviews";

export const metadata: Metadata = {
  title: "Comment apparaître dans Google AI Overviews — Guide 2026 | Zenifai",
  description:
    "Méthode complète pour faire citer votre site dans les AI Overviews de Google. Comprendre comment Google génère ces réponses IA et optimiser votre visibilité.",
  alternates: { canonical: URL },
  openGraph: {
    url: URL,
    title: "Comment apparaître dans Google AI Overviews — Zenifai",
    type: "article",
  },
};

const faq = [
  {
    question: "Qu’est-ce que Google AI Overviews ?",
    answer:
      "Les AI Overviews sont des réponses générées par l’IA, affichées en tête des résultats de recherche Google. Produites par des modèles Gemini et ancrées dans l’index de Google, elles synthétisent une réponse et renvoient vers des pages sources. Elles apparaissent surtout sur les requêtes informationnelles et complexes.",
  },
  {
    question: "Faut-il un bon SEO pour apparaître dans les AI Overviews ?",
    answer:
      "Oui — c’est la base. Les AI Overviews puisent dans l’index de recherche de Google : une page doit être correctement indexée et pertinente pour la requête. Mais le SEO classique ne suffit pas : Google privilégie les contenus qui répondent directement à l’intention, sont bien structurés et faciles à extraire.",
  },
  {
    question: "Faut-il un balisage spécial pour les AI Overviews ?",
    answer:
      "Non, il n’existe pas de balise dédiée aux AI Overviews. Google s’appuie sur le contenu et la structure habituels. Un bon schema.org, des titres explicites, un format question-réponse et des passages auto-suffisants augmentent toutefois nettement la probabilité d’être repris.",
  },
  {
    question: "Google-Extended : faut-il l’autoriser ou le bloquer ?",
    answer:
      "Google-Extended est un token du robots.txt qui contrôle l’usage de votre contenu pour les modèles Gemini et leur ancrage. Le bloquer ne vous retire pas de la recherche Google ni des AI Overviews liés à l’index, mais vous prive de l’écosystème Gemini. Pour une stratégie de visibilité IA, il est recommandé de l’autoriser.",
  },
  {
    question: "Les AI Overviews font-ils baisser mon trafic ?",
    answer:
      "Ils peuvent réduire les clics sur certaines requêtes informationnelles, puisque la réponse est donnée directement. C’est précisément pourquoi être la source citée dans l’AI Overview devient stratégique : la citation maintient la visibilité de marque et capte les clics restants, les plus qualifiés.",
  },
];

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Comment apparaître dans Google AI Overviews",
  description:
    "Méthode en 6 étapes pour faire citer un site dans les AI Overviews de Google.",
  step: [
    {
      "@type": "HowToStep",
      position: 1,
      name: "Garantir une indexation propre par Google",
      text: "Vérifier que Googlebot accède au site, que le sitemap est à jour et qu’aucune page clé n’est bloquée.",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Autoriser Google-Extended",
      text: "Autoriser le token Google-Extended dans le robots.txt pour participer à l’écosystème Gemini.",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Répondre directement à l’intention de recherche",
      text: "Construire chaque page autour d’une question précise et y répondre dès les premières lignes.",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Structurer le contenu pour l’extraction",
      text: "Utiliser des titres explicites, des listes, des tableaux, un format question-réponse et un schema.org riche.",
    },
    {
      "@type": "HowToStep",
      position: 5,
      name: "Renforcer l’E-E-A-T et l’autorité",
      text: "Afficher l’expertise et les sources, et obtenir des mentions tierces fiables : Google privilégie les sources crédibles.",
    },
    {
      "@type": "HowToStep",
      position: 6,
      name: "Suivre les AI Overviews et itérer",
      text: "Tester régulièrement les requêtes cibles, observer quelles pages sont citées et ajuster les contenus.",
    },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment apparaître dans Google AI Overviews : le guide 2026",
  description:
    "Méthode complète pour faire citer un site dans les AI Overviews de Google.",
  url: URL,
  datePublished: "2026-05-19",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: { "@type": "Thing", name: "Google AI Overviews" },
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
              { name: "Google AI Overviews", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        eyebrow="Guide · Plateforme"
        title="Comment apparaître dans"
        titleAccent="Google AI Overviews"
        intro="Les AI Overviews placent une réponse générée par l’IA tout en haut des résultats Google — devant le premier lien organique. C’est la plus grande surface d’exposition IA. Voici comment votre site peut en devenir une source citée."
        date="Publié en mai 2026"
        readTime="~10 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          Quand un internaute fait une recherche sur Google, il voit de plus en plus souvent,
          avant même le premier résultat organique, une{" "}
          <strong className="text-text-primary">réponse générée par l’IA</strong> : c’est
          l’AI Overview. Google y synthétise une réponse et cite quelques sources. Pour une
          marque, c’est à la fois une menace — la réponse peut suffire à l’internaute — et
          une opportunité : être la source citée, c’est occuper la position la plus visible
          de toute la recherche.
        </P>

        <H2>Qu’est-ce que Google AI Overviews ?</H2>
        <P>
          Les AI Overviews sont des résumés générés par l’IA, affichés en tête des résultats
          de recherche Google. Ils sont produits par des modèles{" "}
          <strong className="text-text-primary">Gemini</strong> et ancrés dans l’index de
          Google : le modèle ne « rédige » pas librement, il s’appuie sur des pages réelles
          qu’il cite et lie. Ils apparaissent surtout sur les requêtes informationnelles,
          comparatives ou complexes.
        </P>
        <P>
          À côté des AI Overviews, Google déploie aussi un mode conversationnel plus complet
          (AI Mode) où la recherche devient un véritable dialogue. Les deux reposent sur la
          même logique : une réponse générée, ancrée dans l’index, qui cite des sources.
        </P>

        <H2>AI Overviews et SEO : la nuance importante</H2>
        <P>
          Contrairement à ChatGPT, les AI Overviews ne reposent pas sur une connaissance
          d’entraînement opaque : ils sont{" "}
          <strong className="text-text-primary">ancrés dans l’index de recherche Google</strong>.
          Conséquence directe : votre SEO compte. Une page mal indexée ou non pertinente n’a
          aucune chance d’être citée.
        </P>
        <P>
          Mais le SEO classique ne suffit pas. Là où le SEO vise une position dans une liste,
          l’AI Overview sélectionne des <em>passages</em> qui répondent précisément à
          l’intention. Une page peut être première sur Google et n’être jamais reprise dans
          l’AI Overview si son contenu n’est pas structuré pour l’extraction. C’est l’apport
          du GEO par-dessus le SEO.
        </P>

        <H2>Googlebot et Google-Extended</H2>
        <P>
          Deux agents Google à connaître, aux rôles distincts :
        </P>
        <div className="overflow-x-auto rounded-2xl border border-border-default">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-default bg-bg-secondary/40 text-left">
                <th className="p-4 font-medium">Agent</th>
                <th className="p-4 font-medium">Rôle</th>
                <th className="p-4 font-medium text-accent-violet">Recommandation</th>
              </tr>
            </thead>
            <tbody className="text-text-secondary">
              {[
                [
                  "Googlebot",
                  "Indexe le web pour la recherche Google — l’index sur lequel s’appuient les AI Overviews.",
                  "Autoriser impérativement. Le bloquer = invisible dans Google et ses AI Overviews.",
                ],
                [
                  "Google-Extended",
                  "Contrôle l’usage du contenu pour les modèles Gemini et leur ancrage.",
                  "Autoriser pour participer pleinement à l’écosystème IA de Google.",
                ],
              ].map(([a, r, reco]) => (
                <tr key={a} className="border-b border-border-default last:border-0">
                  <td className="p-4 font-medium text-text-primary">{a}</td>
                  <td className="p-4">{r}</td>
                  <td className="p-4">{reco}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <H2>La méthode en 6 étapes</H2>

        <H2>Étape 1 — Garantir une indexation propre</H2>
        <P>
          Tout commence par l’index. Vérifiez que Googlebot accède sans entrave à vos pages
          clés, que votre <code className="text-accent-violet">sitemap.xml</code> est à jour
          et qu’aucune directive (robots.txt, balise noindex) ne bloque un contenu
          stratégique. Sans indexation, pas d’AI Overview.
        </P>

        <H2>Étape 2 — Autoriser Google-Extended</H2>
        <P>
          Dans votre <code className="text-accent-violet">robots.txt</code>, autorisez
          Google-Extended. Le bloquer ne vous retire pas de la recherche, mais vous prive de
          l’écosystème Gemini — un signal contre-productif pour une stratégie de visibilité
          IA.
        </P>

        <H2>Étape 3 — Répondre directement à l’intention</H2>
        <P>
          Les AI Overviews reprennent les passages qui répondent à la question, nettement et
          tôt. Chaque page doit être construite autour d’une intention précise et y répondre
          dès les premières lignes, avant de développer.
        </P>

        <H2>Étape 4 — Structurer le contenu pour l’extraction</H2>
        <P>
          Titres explicites, listes, tableaux comparatifs, format question-réponse, schema
          .org riche : ce sont les signaux qui rendent un passage facile à isoler et à citer.
          Un contenu dense et non structuré, même excellent, est difficile à reprendre.
        </P>

        <H2>Étape 5 — Renforcer l’E-E-A-T et l’autorité</H2>
        <P>
          Google privilégie les sources crédibles pour générer ses AI Overviews. Affichez
          l’expérience et l’expertise (auteurs identifiés, sources citées, données vérifiables)
          et construisez une autorité tierce solide. Une marque reconnue ailleurs est une
          marque que Google reprend plus volontiers.
        </P>

        <H2>Étape 6 — Suivre les AI Overviews et itérer</H2>
        <P>
          Testez régulièrement vos requêtes cibles dans Google : un AI Overview apparaît-il ?
          Votre site est-il cité ? Quelles pages sont reprises ? Cette observation continue
          permet d’ajuster les contenus et de mesurer les progrès.
        </P>

        <H2>Pourquoi votre site n’apparaît pas</H2>
        <UL
          items={[
            "Le contenu n’est pas (ou mal) indexé par Google.",
            "La page ne répond pas directement à l’intention de la requête.",
            "Le contenu est dense et non structuré — difficile à extraire en passages.",
            "Les signaux d’expertise et d’autorité sont faibles face aux sources concurrentes.",
            "Google-Extended est bloqué, limitant la participation à l’écosystème Gemini.",
          ]}
        />

        <H2>Par où commencer</H2>
        <P>
          Les AI Overviews ne sont qu’une plateforme parmi d’autres. Pour la vue d’ensemble,
          consultez notre guide pilier{" "}
          <a href="/ressources/visibilite-ia" className="text-accent-violet hover:underline">
            « Comment apparaître dans les réponses des IA »
          </a>{" "}
          et les guides{" "}
          <a href="/ressources/visibilite-chatgpt" className="text-accent-violet hover:underline">
            ChatGPT
          </a>{" "}
          et{" "}
          <a href="/ressources/visibilite-perplexity" className="text-accent-violet hover:underline">
            Perplexity
          </a>
          . Pour mesurer votre point de départ, notre{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          couvre les AI Overviews comme les autres moteurs de réponse.
        </P>
      </ArticleLayout>
    </>
  );
}
