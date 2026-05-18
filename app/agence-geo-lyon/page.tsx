import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/agence-geo-lyon";

export const metadata: Metadata = {
  title: "Agence GEO à Lyon — Visibilité IA pour entreprises lyonnaises | Zenifai",
  description:
    "Zenifai est l’agence GEO basée à Lyon qui positionne les entreprises et cabinets lyonnais dans les réponses de ChatGPT, Perplexity et Gemini. Cadrage gratuit.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "Agence GEO à Lyon — Zenifai", type: "website" },
};

const faq = [
  {
    question: "Pourquoi choisir une agence GEO à Lyon ?",
    answer:
      "Zenifai est implantée à Lyon (16 Rue Cuvier, 69006) et accompagne en priorité les entreprises, SaaS, e-commerces et cabinets de la région lyonnaise. La proximité facilite les ateliers de cadrage, les comités de pilotage et la connaissance du tissu économique local — tout en travaillant pour des clients partout en France.",
  },
  {
    question: "Quels types d’entreprises lyonnaises accompagnez-vous ?",
    answer:
      "SaaS B2B et scale-ups de la French Tech lyonnaise, e-commerces premium, cabinets d’avocats et d’experts-comptables, entreprises de services à forte valeur. La région lyonnaise concentre un tissu B2B dense particulièrement concerné par la visibilité dans les IA.",
  },
  {
    question: "Travaillez-vous uniquement avec des clients à Lyon ?",
    answer:
      "Non. Notre siège est à Lyon mais le GEO se pilote à distance : nous accompagnons des clients dans toute la France. La présence lyonnaise est un avantage de proximité, pas une limite géographique.",
  },
  {
    question: "Comment être cité par ChatGPT pour une recherche locale lyonnaise ?",
    answer:
      "Les requêtes locales (« meilleur cabinet d’avocats à Lyon », « agence X à Lyon ») suivent la même logique GEO que les requêtes nationales : consolidation d’entité, contenu citable et signaux d’autorité — avec en plus un travail spécifique sur les signaux locaux (adresse, ancrage géographique, sources régionales).",
  },
];

// LocalBusiness — signal local fort pour Google et les IA
const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://zenifai.ai/#localbusiness",
  name: "Zenifai — Agence GEO Lyon",
  description:
    "Agence GEO (Generative Engine Optimization) basée à Lyon. Visibilité des marques dans les IA génératives.",
  url: URL,
  parentOrganization: { "@id": "https://zenifai.ai/#organization" },
  image: "https://zenifai.ai/og-image.png",
  email: "robin@zenifai.ai",
  priceRange: "€€",
  areaServed: [
    { "@type": "City", name: "Lyon" },
    { "@type": "Country", name: "France" },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "16 Rue Cuvier",
    addressLocality: "Lyon",
    postalCode: "69006",
    addressRegion: "Auvergne-Rhône-Alpes",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7705,
    longitude: 4.8537,
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
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
              { name: "Agence GEO Lyon", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        eyebrow="Agence GEO · Lyon"
        title="Agence GEO à"
        titleAccent="Lyon"
        intro="Zenifai est l’agence GEO basée à Lyon qui positionne les entreprises et cabinets lyonnais dans les réponses de ChatGPT, Perplexity, Gemini et Claude."
        date="16 Rue Cuvier, 69006 Lyon"
        readTime="Cadrage gratuit · 30 min"
        faq={faq}
        cta={{
          heading: "Discutons de votre visibilité IA",
          accent: "à Lyon",
          sub: "30 minutes de cadrage gratuit pour évaluer la présence de votre entreprise lyonnaise dans les IA génératives.",
          label: "Réserver un cadrage",
        }}
        backLink={{ href: "/services", label: "Découvrir nos services" }}
      >
        <P>
          Zenifai est une agence de{" "}
          <strong className="text-text-primary">
            Generative Engine Optimization (GEO)
          </strong>{" "}
          implantée à Lyon, au 16 Rue Cuvier dans le 6ᵉ arrondissement. Nous aidons les
          entreprises lyonnaises à devenir la marque que les IA génératives citent et
          recommandent quand un prospect cherche leur solution.
        </P>
        <P>
          La région lyonnaise concentre un tissu B2B dense — French Tech, industrie,
          conseil, professions réglementées. Autant de marchés où la phase de
          présélection bascule vers ChatGPT, Perplexity et Gemini. Être basés à Lyon
          nous permet d’accompagner ces acteurs avec la proximité d’ateliers en
          présentiel, tout en pilotant des missions partout en France.
        </P>

        <H2>Le GEO pour les entreprises lyonnaises</H2>
        <P>
          Que vous soyez un SaaS de la Confluence, un cabinet d’avocats de la
          Presqu’île ou un e-commerce de la métropole, le constat est le même : vos
          prospects interrogent les IA avant de vous contacter. Le GEO consiste à faire
          en sorte que votre marque figure dans ces réponses.
        </P>
        <UL
          items={[
            "SaaS B2B et scale-ups lyonnaises — être recommandé pendant l’évaluation produit face aux concurrents.",
            "Cabinets d’avocats et d’experts-comptables — apparaître quand un dirigeant cherche un conseil à Lyon.",
            "E-commerces premium — capter les recherches de comparaison et de recommandation.",
            "Entreprises de services à forte valeur — transformer la notoriété locale en citations IA.",
          ]}
        />

        <H2>Nos services GEO disponibles à Lyon</H2>
        <UL
          items={[
            "Audit de visibilité IA — mesure de votre part de voix dans ChatGPT, Perplexity, Gemini et Claude.",
            "Stratégie & Consulting GEO — roadmap 90 jours sur-mesure.",
            "Optimisation de contenu LLM-ready — contenus structurés pour la citation IA.",
            "Autorité & Mentions de marque — signaux d’entité tiers, y compris sources régionales.",
          ]}
        />
        <P>
          Découvrez le détail de notre offre sur la page{" "}
          <a href="/services" className="text-accent-violet hover:underline">
            Services
          </a>{" "}
          et notre{" "}
          <a href="/methode" className="text-accent-violet hover:underline">
            méthode GEO en 6 étapes
          </a>
          .
        </P>

        <H2>Pourquoi une agence GEO locale</H2>
        <P>
          Le GEO se pilote majoritairement à distance, mais une agence implantée
          localement apporte des avantages concrets : ateliers de cadrage en
          présentiel, comités de pilotage facilités, connaissance du tissu économique
          et des sources d’autorité régionales. Zenifai combine cet ancrage lyonnais
          avec une capacité d’intervention nationale.
        </P>
      </ArticleLayout>
    </>
  );
}
