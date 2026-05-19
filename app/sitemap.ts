import type { MetadataRoute } from "next";

const BASE_URL = "https://zenifai.ai";

// Per-URL last-modification dates. Update these manually when a page changes
// substantively. Distinct timestamps signal real freshness to Googlebot and
// AI crawlers (a single shared timestamp gets deprioritized).
const PAGES: Array<{
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", lastModified: "2026-05-06", changeFrequency: "weekly", priority: 1.0 },
  { path: "/methode", lastModified: "2026-05-05", changeFrequency: "monthly", priority: 0.9 },
  { path: "/services", lastModified: "2026-05-05", changeFrequency: "monthly", priority: 0.9 },
  {
    path: "/agence-geo-lyon",
    lastModified: "2026-05-06",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/audit-visibilite-ia",
    lastModified: "2026-05-06",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/strategie-geo",
    lastModified: "2026-05-05",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/contenu-llm",
    lastModified: "2026-05-05",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/services/autorite-marque",
    lastModified: "2026-05-05",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/ressources",
    lastModified: "2026-04-22",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/ressources/geo-avocats",
    lastModified: "2026-04-21",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/ressources/cas-client-cabinet-avocats",
    lastModified: "2026-05-06",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/ressources/definition-geo",
    lastModified: "2026-05-06",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/ressources/geo-saas",
    lastModified: "2026-05-06",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/ressources/visibilite-ia",
    lastModified: "2026-05-19",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/ressources/visibilite-chatgpt",
    lastModified: "2026-05-19",
    changeFrequency: "monthly",
    priority: 0.9,
  },
  {
    path: "/ressources/visibilite-perplexity",
    lastModified: "2026-05-06",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/ressources/meilleures-agences-geo-france",
    lastModified: "2026-05-06",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/mentions-legales",
    lastModified: "2026-05-06",
    changeFrequency: "yearly",
    priority: 0.3,
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastModified: new Date(p.lastModified),
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
