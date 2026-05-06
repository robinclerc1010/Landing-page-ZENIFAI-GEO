import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Zenifai — Agence GEO française | Visibilité IA & ChatGPT",
  description:
    "Zenifai est l'agence GEO qui positionne votre marque dans les réponses de ChatGPT, Perplexity, Gemini et Claude. Audit gratuit en 30 min.",
  keywords: [
    "GEO",
    "Generative Engine Optimization",
    "agence GEO",
    "visibilité IA",
    "ChatGPT",
    "Perplexity",
    "Gemini",
    "SEO IA",
    "marque IA",
    "France",
  ],
  authors: [{ name: "Zenifai" }],
  creator: "Zenifai",
  publisher: "Zenifai",
  metadataBase: new URL("https://zenifai.ai"),
  alternates: {
    canonical: "https://zenifai.ai",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://zenifai.ai",
    title: "Zenifai — Agence GEO française | Visibilité IA & ChatGPT",
    description:
      "Zenifai est l'agence GEO qui positionne votre marque dans les réponses de ChatGPT, Perplexity, Gemini et Claude. Audit gratuit en 30 min.",
    siteName: "Zenifai",
    // TODO: remplacer par une vraie OG image
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Zenifai — Agence GEO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zenifai • Agence GEO",
    description: "Positionnez votre marque dans les réponses des IA génératives.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://zenifai.ai/#organization",
      name: "Zenifai",
      legalName: "Zenifai SAS",
      url: "https://zenifai.ai",
      logo: "https://zenifai.ai/logo.png",
      description:
        "Agence GEO (Generative Engine Optimization) française. Nous positionnons votre marque dans les réponses des IA génératives.",
      foundingDate: "2025-04-23",
      founders: [
        { "@id": "https://zenifai.ai/#robin-clerc" },
        { "@id": "https://zenifai.ai/#louis-chabert" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "16 Rue Cuvier",
        addressLocality: "Lyon",
        postalCode: "69006",
        addressCountry: "FR",
      },
      taxID: "FR06943532093",
      vatID: "FR06943532093",
      identifier: [
        { "@type": "PropertyValue", propertyID: "SIREN", value: "943532093" },
        { "@type": "PropertyValue", propertyID: "SIRET", value: "94353209300011" },
        { "@type": "PropertyValue", propertyID: "RCS", value: "943 532 093 R.C.S. Lyon" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "robin@zenifai.ai",
        contactType: "customer service",
        availableLanguage: "French",
      },
      sameAs: [
        "https://www.linkedin.com/company/zenifai",
        "https://www.societe.com/societe/zenifai-943532093.html",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://zenifai.ai/#robin-clerc",
      name: "Robin Clerc",
      givenName: "Robin",
      familyName: "Clerc",
      jobTitle: "Co-fondateur & Directeur de la publication",
      worksFor: { "@id": "https://zenifai.ai/#organization" },
      url: "https://zenifai.ai",
      email: "robin@zenifai.ai",
      nationality: "FR",
      sameAs: ["https://www.linkedin.com/in/robin-clerc-71a2431ba/"],
    },
    {
      "@type": "Person",
      "@id": "https://zenifai.ai/#louis-chabert",
      name: "Louis Chabert",
      givenName: "Louis",
      familyName: "Chabert",
      jobTitle: "Co-fondateur",
      worksFor: { "@id": "https://zenifai.ai/#organization" },
      url: "https://zenifai.ai",
      email: "louis@zenifai.ai",
      nationality: "FR",
      sameAs: ["https://www.linkedin.com/in/louis-chabert-947a521b9/"],
    },
    {
      "@type": "WebSite",
      "@id": "https://zenifai.ai/#website",
      url: "https://zenifai.ai",
      name: "Zenifai",
      inLanguage: "fr-FR",
      publisher: { "@id": "https://zenifai.ai/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://zenifai.ai/?s={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://zenifai.ai/#service",
      name: "Zenifai — Agence GEO",
      provider: { "@id": "https://zenifai.ai/#organization" },
      description:
        "Services de Generative Engine Optimization (GEO) pour marques B2B et e-commerce.",
      serviceType: "Generative Engine Optimization",
      areaServed: "FR",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services GEO",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit de visibilité IA" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stratégie & Consulting GEO" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Optimisation de contenu LLM-ready" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Autorité & Mentions de marque" } },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
