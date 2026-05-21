// Reusable layout for service detail pages — SSR, SEO/GEO-optimized
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeroReveal from "@/components/PageHeroReveal";
import FAQAccordion from "@/components/FAQAccordion";
import { CALENDLY_URL } from "@/lib/constants";

export type ServicePageProps = {
  eyebrow: string; // e.g. "Service 01"
  title: string;
  titleAccent?: string; // last word with gradient
  intro: string;
  forWho: string[];
  deliverables: { title: string; description: string }[];
  process: { number: string; title: string; description: string }[];
  faq: { question: string; answer: string }[];
  duration?: string;
  ctaLabel?: string;
};

export default function ServicePageLayout({
  eyebrow,
  title,
  titleAccent,
  intro,
  forWho,
  deliverables,
  process,
  faq,
  duration,
  ctaLabel = "Réserver un audit gratuit",
}: ServicePageProps) {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <PageHeroReveal
        eyebrow={eyebrow}
        title={title}
        titleAccent={titleAccent}
        intro={intro}
        chips={duration ? [`Durée typique : ${duration}`] : []}
      />

      {/* Pour qui */}
      <section className="py-16 lg:py-20 border-t border-border-default">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-8">
            Pour qui
          </h2>
          <ul className="space-y-3">
            {forWho.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text-secondary leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-violet flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Livrables */}
      <section className="py-16 lg:py-20 border-t border-border-default bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-10">
            Ce qu’on livre
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {deliverables.map((d, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-border-default bg-bg-primary"
              >
                <h3 className="font-serif text-xl font-semibold text-text-primary mb-2">
                  {d.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-20 border-t border-border-default">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-10">
            Comment ça se passe
          </h2>
          <ol className="space-y-8">
            {process.map((step) => (
              <li key={step.number} className="flex gap-6">
                <span className="font-serif text-2xl text-accent-violet flex-shrink-0 w-12">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-serif text-xl font-semibold text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-20 border-t border-border-default bg-bg-secondary/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-10">
            Questions fréquentes
          </h2>
          <FAQAccordion items={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            Prêt à <span className="italic font-light text-accent-violet/95">passer à l’action</span> ?
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            30 minutes pour évaluer votre visibilité actuelle dans les IA et identifier les
            actions à fort impact.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-violet text-white font-medium hover:opacity-90 transition-opacity"
          >
            {ctaLabel} →
          </a>
          <p className="mt-6 text-sm text-text-secondary/60">
            <Link href="/services" className="hover:text-text-secondary">
              ← Tous nos services
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
