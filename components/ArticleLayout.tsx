// Reusable editorial layout for resource articles & landing pages — SSR.
import type { ReactNode } from "react";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { CALENDLY_URL } from "@/lib/constants";

export type ArticleLayoutProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  intro: string;
  date?: string;
  readTime?: string;
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
  children,
  faq,
  cta,
  backLink,
}: ArticleLayoutProps) {
  return (
    <main className="bg-bg-primary text-text-primary">
      <Nav />

      {/* Hero */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet mb-4">
            {eyebrow}
          </p>
          <h1
            data-speakable
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] tracking-tight mb-6"
          >
            {title}{" "}
            {titleAccent && <span className="gradient-text">{titleAccent}</span>}
          </h1>
          <p data-speakable className="text-lg sm:text-xl text-text-secondary leading-relaxed">
            {intro}
          </p>
          {(date || readTime) && (
            <div className="mt-8 flex flex-wrap gap-3 text-xs text-text-secondary/70">
              {date && (
                <span className="px-3 py-1 rounded-full border border-border-default">
                  {date}
                </span>
              )}
              {readTime && (
                <span className="px-3 py-1 rounded-full border border-border-default">
                  {readTime}
                </span>
              )}
            </div>
          )}
        </div>
      </section>

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
            <div className="space-y-6">
              {faq.map((item, i) => (
                <details
                  key={i}
                  className="group border-b border-border-default pb-5 cursor-pointer"
                >
                  <summary className="font-medium text-text-primary list-none flex items-center justify-between gap-4">
                    <span>{item.question}</span>
                    <span className="text-accent-violet transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-text-secondary leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 lg:py-28 border-t border-border-default">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight mb-6">
            {cta?.heading ?? "Prêt à devenir une référence citée par les IA ?"}{" "}
            {cta?.accent && <span className="gradient-text">{cta.accent}</span>}
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
