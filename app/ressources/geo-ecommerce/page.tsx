import type { Metadata } from "next";
import ArticleLayout, { H2, P, UL } from "@/components/ArticleLayout";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

const URL = "https://zenifai.ai/ressources/geo-ecommerce";

export const metadata: Metadata = {
  title: "GEO pour e-commerce : faire recommander vos produits par les IA | Zenifai",
  description:
    "Comment un site e-commerce se fait recommander par ChatGPT, Perplexity et Google AI Overviews. Guide GEO complet : requêtes d’achat, leviers, erreurs à éviter.",
  alternates: { canonical: URL },
  openGraph: { url: URL, title: "GEO pour e-commerce — Zenifai", type: "article" },
};

const faq = [
  {
    question: "Pourquoi le GEO est-il stratégique pour un e-commerce ?",
    answer:
      "Les acheteurs utilisent de plus en plus les IA pour choisir un produit : « quel est le meilleur X ? », « quelle alternative à Y ? », « où acheter Z ? ». Si vos produits ne sont pas cités dans ces réponses, vous êtes éliminé d’une présélection que vous ne voyez pas — avant même la comparaison de prix.",
  },
  {
    question: "Quelle différence entre le GEO et le SEO e-commerce classique ?",
    answer:
      "Le SEO e-commerce optimise le classement des pages produit et catégorie dans Google. Le GEO optimise la citation de vos produits dans une réponse générée. Les deux partagent des fondations (schema produit, contenu de qualité, autorité), mais le GEO exige en plus du contenu de comparaison, des avis structurés et une entité de marque claire.",
  },
  {
    question: "Les pages produit suffisent-elles pour être cité par les IA ?",
    answer:
      "Rarement. Les pages produit décrivent un article ; les IA, elles, répondent à des questions de choix. Il faut leur fournir du contenu qui compare, classe et recommande : guides d’achat, pages « meilleur X », comparatifs « A vs B ». C’est ce contenu que les IA mobilisent pour bâtir leurs recommandations.",
  },
  {
    question: "Le GEO fonctionne-t-il pour une petite boutique en ligne ?",
    answer:
      "Oui. Les marques de niche ont souvent un avantage : sur des catégories précises, la concurrence dans les IA est plus faible que sur Google. Une boutique spécialisée qui structure tôt sa présence GEO peut devenir la référence citée de son segment.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "GEO pour e-commerce : faire recommander vos produits par les IA",
  description:
    "Guide complet du Generative Engine Optimization appliqué aux sites e-commerce.",
  url: URL,
  datePublished: "2025-12-15",
  dateModified: "2026-05-19",
  inLanguage: "fr-FR",
  author: { "@id": "https://zenifai.ai/#organization" },
  publisher: { "@id": "https://zenifai.ai/#organization" },
  mainEntityOfPage: { "@type": "WebPage", "@id": URL },
  about: [
    { "@type": "Thing", name: "Generative Engine Optimization" },
    { "@type": "Thing", name: "E-commerce" },
  ],
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Accueil", url: "https://zenifai.ai" },
              { name: "Ressources", url: "https://zenifai.ai/ressources" },
              { name: "GEO pour e-commerce", url: URL },
            ]),
          ),
        }}
      />
      <ArticleLayout
        eyebrow="Guide · E-commerce"
        title="GEO pour"
        titleAccent="e-commerce"
        intro="Vos clients demandent à ChatGPT et Perplexity quel produit acheter. Voici comment faire en sorte que vos produits soient ceux que les IA recommandent — guide GEO complet pour l’e-commerce."
        date="Publié en décembre 2025"
        readTime="~10 min de lecture"
        faq={faq}
        backLink={{ href: "/ressources", label: "Toutes les ressources" }}
      >
        <P>
          Le parcours d’achat en ligne commençait hier sur Google ou sur une marketplace. Il
          commence de plus en plus par une question posée à une IA : « quel est le meilleur
          aspirateur robot pour les poils d’animaux ? », « quelle alternative à cette marque
          de cosmétiques ? », « quel vélo électrique pour un trajet urbain de 15 km ? ».
        </P>
        <P>
          La réponse de l’IA contient quelques produits, quelques marques. Soit les vôtres en
          font partie, soit le client ne les verra jamais — il ne saura même pas qu’ils
          existaient. C’est exactement le problème que résout le GEO (Generative Engine
          Optimization) pour l’e-commerce.
        </P>

        <H2>Les 4 types de requêtes IA qui décident d’un achat</H2>
        <UL
          items={[
            "Requêtes de catégorie — « meilleur [type de produit] », « meilleur [produit] pour [usage] ». L’IA construit un classement de la catégorie.",
            "Requêtes de comparaison — « [produit A] ou [produit B] ? », « [marque] vs [marque] ». L’acheteur hésite entre deux options et veut trancher.",
            "Requêtes d’alternative — « alternative à [marque/produit] ». Acheteur insatisfait ou en quête d’une option plus accessible : intention d’achat très forte.",
            "Requêtes de cas d’usage — « quel produit pour [besoin précis] ? ». L’IA recommande des solutions concrètes adaptées au contexte.",
          ]}
        />

        <H2>Pourquoi les sites e-commerce sont mal cités</H2>
        <P>
          Les boutiques en ligne sont souvent excellentes en SEO produit mais invisibles dans
          les IA. Les causes récurrentes que nous identifions :
        </P>
        <UL
          items={[
            "Le site n’a que des pages produit : elles décrivent un article, mais ne répondent pas aux questions de choix que posent les acheteurs.",
            "Aucun contenu de comparaison ni guide d’achat — les formats que les IA mobilisent pour recommander.",
            "Les avis clients existent mais ne sont pas structurés (pas de schema Review / AggregateRating), donc peu exploitables par les IA.",
            "Le balisage produit est incomplet : prix, disponibilité, marque, caractéristiques mal déclarés en schema.org.",
            "L’entité de marque est floue : l’IA ne sait pas situer la boutique, son positionnement, sa fiabilité.",
            "Faible présence sur les sources tierces que les IA consultent pour les produits : comparateurs, médias spécialisés, communautés.",
          ]}
        />

        <H2>Les leviers GEO pour l’e-commerce</H2>
        <P>Par ordre d’impact pour la majorité des sites marchands :</P>
        <UL
          items={[
            "Guides d’achat et pages « meilleur X » — le format le plus cité par les IA pour les requêtes de catégorie. Un guide par catégorie clé, structuré et argumenté.",
            "Contenu de comparaison — pages « A vs B » et comparatifs multi-produits, mobilisés par les IA pour départager des options.",
            "Balisage produit complet — schema.org Product, Offer (prix, disponibilité), Brand et AggregateRating sur chaque fiche, pour une lecture fiable par les IA.",
            "Avis clients structurés — exposer les avis en schema Review : la preuve sociale devient un signal exploitable, pas un simple bloc visuel.",
            "Pages catégorie LLM-ready — décrire la catégorie, les critères de choix et les cas d’usage, au format question-réponse.",
            "Consolidation d’entité de marque — aligner nom, positionnement et informations clés sur le site, les profils, les comparateurs et Wikidata.",
            "Autorité tierce — présence maîtrisée sur les comparateurs, médias et communautés spécialisés de votre secteur.",
          ]}
        />

        <H2>Google Shopping, AI Overviews et fiches produit</H2>
        <P>
          Pour l’e-commerce, Google joue un rôle double. Les{" "}
          <a href="/ressources/google-ai-overviews" className="text-accent-violet hover:underline">
            AI Overviews
          </a>{" "}
          intègrent de plus en plus de recommandations de produits, et Google relie son
          index, Google Shopping et son knowledge graph. Un flux produit propre, des fiches
          bien balisées et des avis structurés alimentent ces surfaces. Le travail GEO et le
          travail e-commerce technique se renforcent ici mutuellement.
        </P>

        <H2>Erreurs fréquentes à éviter</H2>
        <UL
          items={[
            "Se reposer uniquement sur les pages produit : sans contenu de choix, l’IA n’a rien à recommander.",
            "Négliger les pages de comparaison par peur de citer des concurrents — c’est précisément là que se joue la décision d’achat.",
            "Laisser les avis clients en texte non structuré, invisibles pour les IA.",
            "Traiter le GEO comme un projet ponctuel : la visibilité IA se construit et se mesure par cycles.",
          ]}
        />

        <H2>Par où commencer</H2>
        <P>
          La première étape est un{" "}
          <a href="/services/audit-visibilite-ia" className="text-accent-violet hover:underline">
            audit de visibilité IA
          </a>{" "}
          : il mesure la fréquence à laquelle vos produits et votre marque sont cités par les
          IA sur les requêtes d’achat de votre marché, et identifie les leviers prioritaires.
          Pour la vue d’ensemble, voir aussi notre guide pilier{" "}
          <a href="/ressources/visibilite-ia" className="text-accent-violet hover:underline">
            « Comment apparaître dans les réponses des IA »
          </a>
          .
        </P>
      </ArticleLayout>
    </>
  );
}
