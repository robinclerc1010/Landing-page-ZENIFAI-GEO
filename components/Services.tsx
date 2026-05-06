"use client";

// Source: Custom bento grid 2×2 — cards avec hover glow lumineux, inspiré Magic UI BentoGrid

import Link from "next/link";
import { Search, Compass, FileText, Share2, ArrowUpRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = {
  Search,
  Compass,
  FileText,
  Share2,
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-14">
          <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
            Services
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
            Nos expertises{" "}
            <span className="gradient-text">GEO</span>
          </h2>
          <p className="text-text-secondary max-w-xl mx-auto leading-relaxed">
            Une approche full-stack de votre visibilité dans les IA génératives — de l&apos;audit
            au reporting mensuel.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link
                  href={service.href}
                  aria-label={`En savoir plus sur ${service.title}`}
                  className="group relative block h-full rounded-2xl border border-border-default bg-bg-secondary p-6 lg:p-8 overflow-hidden
                    hover:border-accent-violet/40 hover:shadow-violet-sm transition-all duration-300"
                >
                  {/* Hover gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                  {/* Corner glow on hover */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent-violet/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-8 -translate-y-8" />

                  {/* Top-right arrow indicator */}
                  <ArrowUpRight
                    size={18}
                    className="absolute top-5 right-5 text-text-secondary/40 group-hover:text-accent-violet group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300"
                  />

                  <div className="relative space-y-4">
                    <div className="inline-flex p-3 rounded-xl border border-accent-violet/20 bg-accent-violet/10">
                      <Icon size={22} className="text-accent-violet" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans text-xl font-semibold text-text-primary group-hover:text-accent-violet transition-colors duration-200">
                        {service.title}
                      </h3>
                      <p className="text-text-secondary text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm text-accent-violet font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      En savoir plus →
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
