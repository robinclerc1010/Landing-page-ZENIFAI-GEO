"use client";

// Source: Custom Framer Motion — section problème avec visuel before/after animé

import { motion } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

function GoogleMockup() {
  return (
    <div className="rounded-xl border border-border-default bg-bg-secondary p-4 space-y-3 text-xs">
      <div className="flex items-center gap-2 bg-[#0D0D15] rounded-lg px-3 py-2 border border-border-default">
        <span className="text-text-secondary/40 font-mono">google.com</span>
      </div>
      <p className="text-text-secondary/60 text-[11px] px-1">Environ 4 200 000 résultats (0,42 sec.)</p>
      <div className="space-y-3">
        {["Concurrent A — Leader du marché", "Concurrent B — Solution #1", "Concurrent C — Recommandée par 500 entreprises"].map(
          (item, i) => (
            <div key={i} className="space-y-0.5 px-1">
              <p className="text-[#8AB4F8] hover:underline cursor-pointer">{item}</p>
              <p className="text-text-secondary/50 leading-relaxed">
                La meilleure solution pour votre secteur. Testée et approuvée...
              </p>
            </div>
          )
        )}
        <div className="space-y-0.5 px-1 relative">
          <p className="text-[#8AB4F8]/40">Votre marque — Position 4</p>
          <p className="text-text-secondary/30">
            Notre solution innovante pour les entreprises...
          </p>
          <div className="absolute -right-1 -top-1">
            <div className="bg-red-500/20 border border-red-500/40 rounded-full p-0.5">
              <X size={10} className="text-red-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatMockup() {
  return (
    <div className="rounded-xl border border-border-default bg-bg-secondary overflow-hidden text-xs">
      <div className="px-4 py-2.5 bg-[#0D0D15] border-b border-border-default text-text-secondary/60 font-mono">
        ChatGPT
      </div>
      <div className="p-4 space-y-3">
        <div className="bg-[#1A1A2E] rounded-xl rounded-tr-sm px-3 py-2.5 text-text-primary text-right ml-8 border border-border-default">
          Quelle est la meilleure solution pour mon secteur ?
        </div>
        <div className="space-y-2 text-text-secondary/80 leading-relaxed">
          <p>Voici les solutions que je recommande :</p>
          <div className="space-y-1">
            <div className="flex items-start gap-2">
              <span className="text-accent-green">▶</span>
              <span><strong className="text-text-primary">Concurrent A</strong> — Solution leader, très citée</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent-green">▶</span>
              <span><strong className="text-text-primary">Concurrent B</strong> — Excellente alternative</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-accent-green">▶</span>
              <span><strong className="text-text-primary">Concurrent C</strong> — Idéale pour PMEs</span>
            </div>
          </div>
          <div className="flex items-start gap-2 text-red-400/70">
            <X size={12} className="mt-0.5 flex-shrink-0" />
            <span className="italic">Votre marque n&apos;est pas mentionnée.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function WithZenifaiMockup() {
  return (
    <div className="rounded-xl border border-accent-violet/30 bg-bg-secondary overflow-hidden text-xs shadow-violet-sm">
      <div className="px-4 py-2.5 bg-[#0D0D15] border-b border-accent-violet/20 text-text-secondary/60 font-mono">
        ChatGPT <span className="text-accent-violet ml-1 text-[10px]">+ Zenifai</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="bg-[#1A1A2E] rounded-xl rounded-tr-sm px-3 py-2.5 text-text-primary text-right ml-8 border border-border-default">
          Quelle est la meilleure solution pour mon secteur ?
        </div>
        <div className="space-y-2 text-text-secondary/80 leading-relaxed">
          <p>Voici les solutions que je recommande :</p>
          <div className="space-y-1">
            <div className="flex items-start gap-2">
              <span className="text-accent-green">▶</span>
              <span><strong className="text-accent-violet">Votre marque</strong> — Référence pour les exigences de votre secteur</span>
            </div>
            <div className="flex items-start gap-2 opacity-60">
              <span>▶</span>
              <span>Concurrent A — Solution alternative</span>
            </div>
            <div className="flex items-start gap-2 opacity-60">
              <span>▶</span>
              <span>Concurrent B — Autre option</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-accent-green">
            <CheckCircle2 size={12} />
            <span className="font-medium">Votre marque citée en premier.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <SectionWrapper className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: text */}
          <div className="space-y-6">
            <p className="text-xs font-medium tracking-widest uppercase text-accent-violet">
              Le problème
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight">
              La recherche a changé.{" "}
              <span className="gradient-text">Et vous ?</span>
            </h2>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Le parcours d&apos;achat bascule des moteurs classiques vers les moteurs génératifs.
                Aujourd&apos;hui, vos prospects posent leurs questions directement à ChatGPT,
                Perplexity ou Gemini — et reçoivent une réponse en 3 secondes, sans cliquer.
              </p>
              <p>
                Quand un prospect demande{" "}
                <span className="text-text-primary italic">
                  &quot;quelle est la meilleure solution pour X&quot;
                </span>
                , les IA citent 3 à 5 marques. Si vous n&apos;y êtes pas,{" "}
                <span className="text-text-primary font-medium">vous n&apos;existez plus</span> dans
                son processus de décision.
              </p>
              <p>
                Le GEO n&apos;est pas une mode — c&apos;est la nouvelle frontière de la visibilité
                organique. Et les marques qui s&apos;y positionnent maintenant auront 18 mois
                d&apos;avance.
              </p>
            </div>
          </div>

          {/* Right: before/after visuals */}
          <div className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-widest uppercase text-text-secondary/60 text-center">
                  Avant
                </p>
                <GoogleMockup />
              </div>
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-widest uppercase text-red-400/70 text-center">
                  Sans GEO
                </p>
                <ChatMockup />
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center gap-3 text-text-secondary/40">
              <div className="flex-1 h-px bg-border-default" />
              <span className="text-xs font-medium tracking-wider text-accent-violet whitespace-nowrap">
                Avec Zenifai →
              </span>
              <div className="flex-1 h-px bg-border-default" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <WithZenifaiMockup />
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
