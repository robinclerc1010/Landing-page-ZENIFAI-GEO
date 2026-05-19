import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GeoAvocatsContent from "./GeoAvocatsContent";
import { FAQ_ITEMS } from "./faq-data";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  title: "GEO pour Cabinets d'Avocats : guide stratégique 2026 | Zenifai",
  description:
    "Comment les cabinets d'avocats gagnent des clients via ChatGPT, Perplexity et Gemini. Guide stratégique du GEO appliqué aux cabinets d'avocats d'affaires et fiscalistes.",
  keywords: [
    "GEO avocat",
    "référencement IA cabinet avocat",
    "ChatGPT avocat visibilité",
    "agence GEO juridique",
    "GEO cabinet avocats",
    "visibilité IA avocat",
    "Perplexity avocat",
    "GEO droit",
    "marketing cabinet avocat",
    "Generative Engine Optimization juridique",
  ],
  authors: [{ name: "Zenifai" }],
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: "https://zenifai.ai/ressources/geo-avocats",
    title: "GEO pour Cabinets d'Avocats : guide stratégique 2026",
    description:
      "Comment les cabinets d'avocats d'affaires et fiscalistes gagnent des clients via ChatGPT et Perplexity. Guide complet du GEO appliqué au secteur juridique.",
    siteName: "Zenifai",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "GEO pour Cabinets d'Avocats — Zenifai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GEO pour Cabinets d'Avocats : guide stratégique 2026 | Zenifai",
    description:
      "Comment être recommandé par ChatGPT quand un dirigeant cherche un avocat. Guide complet.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Comment les cabinets d'avocats gagnent des clients via ChatGPT, Perplexity et Gemini",
  description:
    "Guide stratégique du GEO appliqué aux cabinets d'avocats d'affaires et fiscalistes. Comment être recommandé par les IA quand un dirigeant cherche un conseil juridique.",
  author: { "@type": "Organization", name: "Zenifai", url: "https://zenifai.ai" },
  publisher: { "@type": "Organization", name: "Zenifai", url: "https://zenifai.ai" },
  datePublished: "2025-11-15",
  dateModified: "2026-05-19",
  url: "https://zenifai.ai/ressources/geo-avocats",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://zenifai.ai/ressources/geo-avocats",
  },
  inLanguage: "fr-FR",
  about: [
    { "@type": "Thing", name: "Generative Engine Optimization" },
    { "@type": "Thing", name: "Cabinet d'avocats" },
    { "@type": "Thing", name: "Marketing juridique" },
  ],
};

const faqSchema = faqJsonLd(FAQ_ITEMS);

const breadcrumbSchema = breadcrumbJsonLd([
  { name: "Accueil", url: "https://zenifai.ai" },
  { name: "Ressources", url: "https://zenifai.ai/ressources" },
  { name: "GEO pour Cabinets d'Avocats", url: "https://zenifai.ai/ressources/geo-avocats" },
]);

export default function GeoAvocatsPage() {
  return (
    <main className="bg-bg-primary text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />
      <GeoAvocatsContent />
      <Footer />
    </main>
  );
}
