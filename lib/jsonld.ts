// Helpers to build JSON-LD blocks for service pages

export function serviceJsonLd(args: {
  name: string;
  url: string;
  description: string;
  serviceType?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    url: args.url,
    description: args.description,
    serviceType: args.serviceType ?? "Generative Engine Optimization",
    provider: { "@id": "https://zenifai.ai/#organization" },
    areaServed: { "@type": "Country", name: "France" },
    audience: { "@type": "BusinessAudience", audienceType: "B2B" },
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
