"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL, NAV_LINKS } from "@/lib/constants";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Floating pill nav — desktop */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4 flex justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-full border transition-all duration-300 ${
            scrolled
              ? "bg-[rgba(10,10,18,0.85)] border-white/10 shadow-2xl shadow-black/50 backdrop-blur-xl"
              : "bg-[rgba(18,18,26,0.6)] border-white/8 shadow-2xl shadow-black/40 backdrop-blur-xl"
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            className="font-serif text-base font-semibold text-text-primary hover:opacity-80 transition-opacity px-3 py-1.5 flex-shrink-0"
            aria-label="Zenifai — Accueil"
          >
            Zenifai<span className="text-accent-violet ml-0.5">•</span>
          </a>

          {/* Divider */}
          <span className="hidden md:block w-px h-4 bg-white/10 flex-shrink-0" />

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative flex flex-col items-center px-4 py-1.5 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  {link.label}
                  {/* Hover dot */}
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent-violet opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-200" />
                </a>
              </li>
            ))}
          </ul>

          {/* Divider */}
          <span className="hidden md:block w-px h-4 bg-white/10 flex-shrink-0" />

          {/* Desktop CTA */}
          <div className="hidden md:block px-1">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Réserver un audit GEO gratuit"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-violet text-white text-sm font-medium hover:bg-[#6B4BEE] hover:shadow-violet transition-all duration-200 cursor-pointer flex-shrink-0"
            >
              Audit gratuit
            </a>
          </div>

          {/* Mobile: hamburger inside pill */}
          <button
            className="md:hidden p-2 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.div>
      </header>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-bg-primary/95 backdrop-blur-xl flex flex-col pt-20"
          >
            <nav className="flex flex-col gap-2 p-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-serif font-medium text-text-primary py-4 border-b border-border-default hover:text-accent-violet transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full text-center px-6 py-4 rounded-full bg-accent-violet text-white text-base font-medium hover:bg-[#6B4BEE] transition-colors cursor-pointer"
                aria-label="Réserver un audit GEO gratuit"
                onClick={() => setMobileOpen(false)}
              >
                Réserver un audit gratuit
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
