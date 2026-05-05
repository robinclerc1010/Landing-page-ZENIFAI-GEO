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
  title: "Zenifai • Agence GEO — Visibilité IA sur ChatGPT, Perplexity & Gemini",
  description:
    "Agence GEO française. Positionnez votre marque dans les réponses des IA génératives. Audit gratuit en 72h.",
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
    title: "Zenifai • Agence GEO — Visibilité IA sur ChatGPT, Perplexity & Gemini",
    description:
      "Agence GEO française. Positionnez votre marque dans les réponses des IA génératives. Audit gratuit en 72h.",
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
        { "@type": "Person", name: "Robin Clerc" },
        { "@type": "Person", name: "Louis Chabert" },
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
      sameAs: ["https://www.linkedin.com/company/zenifai"],
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
