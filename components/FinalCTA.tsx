"use client";

// Source: Custom — section pleine largeur avec gradient + grain, CTA massif

import { motion } from "framer-motion";
import { CalendarCheck } from "lucide-react";
import { CALENDLY_URL } from "@/lib/constants";
import Eyebrow from "@/components/Eyebrow";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0F] via-[#130D2A] to-[#0A0A0F]" />

      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent-violet/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent-green/8 rounded-full blur-3xl pointer-events-none" />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet/30 to-transparent" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <Eyebrow>Prenez de l&apos;avance</Eyebrow>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-[1.1] tracking-tight text-text-primary">
            Prenez une longueur d&apos;avance sur{" "}
            <span className="italic font-light text-accent-violet/95">la recherche IA.</span>
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-xl mx-auto">
            Audit GEO gratuit. 30 minutes. Analyse de votre visibilité actuelle sur
            ChatGPT, Perplexity et Gemini. Sans engagement.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col items-center gap-4"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Réserver mon audit GEO gratuit sur Calendly"
            className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-accent-violet text-white text-lg font-semibold hover:bg-[#6B4BEE] hover:shadow-[0_0_60px_rgba(124,92,255,0.5)] active:scale-[0.98] transition-all duration-200 cursor-pointer"
          >
            <CalendarCheck size={22} />
            Réserver mon audit
          </a>
          <p className="text-text-secondary/50 text-sm">
            Réponse sous 24h • Audit livré en 72h • Aucune carte bancaire
          </p>
        </motion.div>
      </div>
    </section>
  );
}
