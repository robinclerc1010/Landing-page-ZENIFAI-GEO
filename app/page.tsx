import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import ProblemSection from "@/components/ProblemSection";
import WhyNow from "@/components/WhyNow";
import Services from "@/components/Services";
import Methodology from "@/components/Methodology";
import CaseStudy from "@/components/CaseStudy";
import ForWho from "@/components/ForWho";
import Differentiation from "@/components/Differentiation";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";
import { FAQ_ITEMS } from "@/lib/constants";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://zenifai.ai/#webpage",
  url: "https://zenifai.ai/",
  name: "Zenifai — Agence GEO française",
  description:
    "Zenifai est l’agence GEO qui positionne votre marque dans les réponses de ChatGPT, Perplexity, Gemini et Claude.",
  isPartOf: { "@id": "https://zenifai.ai/#website" },
  about: { "@id": "https://zenifai.ai/#organization" },
  inLanguage: "fr-FR",
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", "[data-speakable]"],
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Nav />
      <Hero />
      <StatsBar />
      <ProblemSection />
      <WhyNow />
      <SectionDivider />
      <Services />
      <Methodology />
      <CaseStudy />
      <ForWho />
      <Differentiation />
      <SectionDivider />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
