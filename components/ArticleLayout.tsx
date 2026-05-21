// Reusable editorial layout for resource articles & landing pages — SSR.
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageHeroReveal from "@/components/PageHeroReveal";
import FAQAccordion from "@/components/FAQAccordion";
import { CALENDLY_URL } from "@/lib/constants";

export type ArticleLayoutProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro: string;
  date?: string;
  readTime?: string;
  icon?: string;
  children: ReactNode;
  faq?: { question: string; answer: string }[];
  cta?: { heading: string; accent?: string; sub: string; label?: string };
  backLink?: { href: string; label: string };
};

export default function ArticleLayout({
  eyebrow,
  title,
  titleAccent,
  intro,
  date,
  readTime,
  icon,
  children,
  faq,
  cta,
  backLink,
}: ArticleLayoutProps) {
  return (
    <main className="bg-bg-primary text-text-primary">
      <Nav />

      {/* Hero */}
      <PageHeroReveal
        eyebrow={eyebrow}
        title={title}
        titleAccent={titleAccent}
        intro={intro}
        maxWidth="max-w-3xl"
        icon={icon}
        chips={[date, readTime].filter((c): c is string => Boolean(c))}
      />

      {/* Body */}
      <section className="pb-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {children}
        </div>
      </section>

      {/* FAQ */}
      {faq && faq.length > 0 && (
        <section className="py-16 lg:py-20 border-t border-border-default bg-bg-secondary/30">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-10">
              Questions fréquentes
            </h2>
            <FAQAccordion items={faq} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            {cta?.heading ?? "Prêt à devenir une référence citée par les IA ?"}{" "}
            {cta?.accent && (
              <span className="italic font-light text-accent-violet/95">
                {cta.accent}
              </span>
            )}
          </h2>
          <p className="text-text-secondary mb-8 max-w-xl mx-auto">
            {cta?.sub ??
              "30 minutes de cadrage gratuit pour évaluer votre visibilité actuelle dans les IA génératives."}
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-violet text-white font-medium hover:opacity-90 transition-opacity"
          >
            {cta?.label ?? "Réserver un cadrage"} →
          </a>
          {backLink && (
            <p className="mt-8 text-sm text-text-secondary/60">
              <Link href={backLink.href} className="hover:text-accent-violet">
                ← {backLink.label}
              </Link>
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}

// ── Shared prose primitives ────────────────────────────────────────────────
export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-text-primary leading-tight pt-8">
      {children}
    </h2>
  );
}

export function P({ children }: { children: ReactNode }) {
  return <p className="text-text-secondary leading-relaxed">{children}</p>;
}

export function UL({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-3">
      {items.map((it, i) => (
        <li key={i} className="flex gap-3 items-start text-text-secondary leading-relaxed">
          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-violet flex-shrink-0" />
          <span>{it}</span>
        </li>
      ))}
    </ul>
  );
}
