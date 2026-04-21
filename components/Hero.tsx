"use client";

import { motion } from "framer-motion";
import { ArrowRight, CalendarCheck } from "lucide-react";
import { CALENDLY_URL, LLM_NAMES } from "@/lib/constants";
import TextRotate from "@/components/ui/TextRotate";

// Sources: simple-icons (Malt, Aircall), arcticons/Iconify (Doctolib, Qonto, Swile),
// datocms official (PayFit), fa-brands/Iconify (Sellsy). Alan: no icon in any public lib.
type FillLogo = { type: "fill"; name: string; viewBox: string; path: string; fillRule?: "evenodd" };
type StrokeLogo = { type: "stroke"; name: string; viewBox: string; paths: string[]; hasCircle?: true; hasRect?: true };
type WordmarkLogo = { type: "wordmark"; name: string };
type BrandLogo = FillLogo | StrokeLogo | WordmarkLogo;

const BRAND_LOGOS: BrandLogo[] = [
  {
    type: "stroke",
    name: "Doctolib",
    viewBox: "0 0 48 48",
    paths: [
      "M28.888 11.548a120.4 120.4 0 0 0-4.89 20.964",
      "M17.288 6.027c9.294-.908 20.824-1.537 24.108 6.08s1.048 19.077-2.166 23.62s-10.46 7.448-17.4 6.638c-9.573-1.118-16.845-4.659-16.841-12.858a8.64 8.64 0 0 1 1.892-5.062",
    ],
  },
  {
    type: "stroke",
    name: "Qonto",
    viewBox: "0 0 48 48",
    paths: [
      "M42.485 42.5Q25.926 40.85 24 24q16.253 3.266 18.486 18.5zm.015-37Q40.266 20.75 24 24Q25.94 7.15 42.5 5.5m-36.984 37Q22.074 40.85 24 24Q7.747 27.266 5.514 42.5zM5.5 5.5Q7.734 20.75 24 24Q22.06 7.15 5.5 5.5",
    ],
  },
  {
    type: "fill",
    name: "PayFit",
    viewBox: "0 0 36 36",
    fillRule: "evenodd",
    path: "M18.06 36C8.087 36 0 27.941 0 18S8.086 0 18.06 0c9.976 0 18.062 8.059 18.062 18S28.036 36 18.06 36Zm-.245-11.598v-3.58a.192.192 0 0 1 .205-.204h4.207c2.966-.12 5.308-2.553 5.302-5.512-.005-2.958-2.356-5.384-5.322-5.492H11.904a.41.41 0 0 0-.41.409v14.44c0 1.74 1.414 3.15 3.16 3.15 1.746 0 3.16-1.41 3.16-3.15.028-.04.028-.06 0-.06l.001-.001Zm.205-8.488h3.982a.82.82 0 0 0 .82-.819.82.82 0 0 0-.82-.818h-5.398a.41.41 0 0 0-.41.41v9.756c0 .847-.69 1.534-1.54 1.534-.85 0-1.54-.687-1.54-1.534V11.434a.192.192 0 0 1 .206-.204H22a3.903 3.903 0 0 1 3.413 1.88 3.876 3.876 0 0 1 .072 3.887 3.902 3.902 0 0 1-3.34 2.005H18.02a.193.193 0 0 1-.205-.204v-2.66c0-.116.088-.214.205-.224Z",
  },
  {
    type: "fill",
    name: "Aircall",
    viewBox: "0 0 24 24",
    path: "M23.451 5.906a6.978 6.978 0 0 0-5.375-5.39C16.727.204 14.508 0 12 0S7.273.204 5.924.516a6.978 6.978 0 0 0-5.375 5.39C.237 7.26.034 9.485.034 12s.203 4.74.515 6.094a6.978 6.978 0 0 0 5.375 5.39C7.273 23.796 9.492 24 12 24s4.727-.204 6.076-.516a6.978 6.978 0 0 0 5.375-5.39c.311-1.354.515-3.578.515-6.094 0-2.515-.203-4.74-.515-6.094zm-5.873 12.396l-.003.001c-.428.152-1.165.283-2.102.377l-.147.014a.444.444 0 0 1-.45-.271 1.816 1.816 0 0 0-1.296-1.074c-.351-.081-.928-.134-1.58-.134s-1.229.053-1.58.134a1.817 1.817 0 0 0-1.291 1.062.466.466 0 0 1-.471.281 8 8 0 0 0-.129-.012c-.938-.094-1.676-.224-2.105-.377l-.003-.001a.76.76 0 0 1-.492-.713c0-.032.003-.066.005-.098.073-.979.666-3.272 1.552-5.89C8.5 8.609 9.559 6.187 10.037 5.714a1.029 1.029 0 0 1 .404-.26l.004-.002c.314-.106.892-.178 1.554-.178.663 0 1.241.071 1.554.178l.005.002a1.025 1.025 0 0 1 .405.26c.478.472 1.537 2.895 2.549 5.887.886 2.617 1.479 4.91 1.552 5.89.002.032.005.066.005.098a.76.76 0 0 1-.491.713z",
  },
  { type: "wordmark", name: "Alan" },
  {
    type: "stroke",
    name: "Swile",
    viewBox: "0 0 48 48",
    paths: [
      "M24.948 22.952c-2.562-.633-2.308 3.793-2.851 5.517l-1.68-5.669l-1.68 5.67l-1.784-5.67m10.109 0v5.67m-15.352-.42c.42.314.84.42 1.68.42h.42a1.39 1.39 0 0 0 1.364-1.366h0a1.39 1.39 0 0 0-1.364-1.364h-.945a1.39 1.39 0 0 1-1.365-1.365h0c0-.735.63-1.365 1.365-1.365h.42c.945 0 1.364 0 1.68.42m14.403-3.36v7.35c0 .63.42 1.05 1.05 1.05h.315m5.452-1.05c-.315.63-1.05 1.05-1.785 1.05h0c-1.154 0-2.1-.946-2.1-2.1v-1.365c0-1.155.946-2.1 2.1-2.1h0c1.155 0 2.1.945 2.1 2.1v.735h-4.2",
    ],
    hasCircle: true,
    hasRect: true,
  },
  {
    type: "fill",
    name: "Sellsy",
    viewBox: "0 0 640 512",
    path: "M539.71 237.308c3.064-12.257 4.29-24.821 4.29-37.384C544 107.382 468.618 32 376.076 32c-77.22 0-144.634 53.012-163.02 127.781c-15.322-13.176-34.934-20.53-55.157-20.53c-46.271 0-83.962 37.69-83.962 83.961c0 7.354.92 15.015 3.065 22.369c-42.9 20.225-70.785 63.738-70.785 111.234C6.216 424.843 61.68 480 129.401 480h381.198c67.72 0 123.184-55.157 123.184-123.184c.001-56.384-38.916-106.025-94.073-119.508M199.88 401.554c0 8.274-7.048 15.321-15.321 15.321H153.61c-8.274 0-15.321-7.048-15.321-15.321V290.626c0-8.273 7.048-15.321 15.321-15.321h30.949c8.274 0 15.321 7.048 15.321 15.321zm89.477 0c0 8.274-7.048 15.321-15.322 15.321h-30.949c-8.274 0-15.321-7.048-15.321-15.321V270.096c0-8.274 7.048-15.321 15.321-15.321h30.949c8.274 0 15.322 7.048 15.322 15.321zm89.477 0c0 8.274-7.047 15.321-15.321 15.321h-30.949c-8.274 0-15.322-7.048-15.322-15.321V238.84c0-8.274 7.048-15.321 15.322-15.321h30.949c8.274 0 15.321 7.048 15.321 15.321zm87.027 0c0 8.274-7.048 15.321-15.322 15.321h-28.497c-8.274 0-15.321-7.048-15.321-15.321V176.941c0-8.579 7.047-15.628 15.321-15.628h28.497c8.274 0 15.322 7.048 15.322 15.628z",
  },
  {
    type: "fill",
    name: "Malt",
    viewBox: "0 0 24 24",
    path: "M20.195 8.581c-.069 0-.285.026-.484.113-.432.181-.597.311-.597.58v5.023c0 .277.26.355.735.355.467 0 .649-.087.649-.355V8.858c0-.173-.113-.277-.303-.277zm3.502 4.903c-.345.087-.45.113-.57.113-.147 0-.2-.044-.2-.2v-2.161h.788c.207 0 .285-.078.285-.285 0-.173-.078-.26-.285-.26h-.787v-.839c0-.259-.087-.363-.268-.363-.173 0-.415.156-.934.597-.528.45-.83.744-.83.951 0 .121.086.199.224.199h.424v2.335c0 .683.337 1.08.925 1.08.39 0 .675-.146 1.012-.406.311-.242.51-.432.51-.596 0-.139-.103-.217-.294-.165zm-15.21-3.078c-.13 0-.285.026-.484.112-.433.19-.597.312-.597.58v3.2c0 .276.26.354.735.354.467 0 .649-.087.649-.355v-3.614c0-.173-.113-.277-.303-.277Zm1.816 0c-.355 0-.675.121-.986.363-.173.138-.32.294-.32.424 0 .112.078.173.19.173.19 0 .251-.078.416-.078.164 0 .25.173.25.476v2.533c0 .277.26.355.735.355.467 0 .649-.087.649-.355v-2.776c0-.657-.39-1.115-.934-1.115zm2.43 0c-.337 0-.692.121-1.003.363-.173.138-.32.294-.32.424 0 .112.078.173.19.173.19 0 .25-.078.432-.078s.268.173.268.476v2.533c0 .277.26.355.735.355.467 0 .649-.087.649-.355v-2.776c0-.657-.39-1.115-.951-1.115zm5.335 0a1.29 1.29 0 0 0-.484.112c-.26.113-.398.2-.467.312-.26-.303-.597-.398-.977-.398-1.116 0-1.911.942-1.911 2.283 0 1.124.605 1.954 1.461 1.954.26 0 .493-.104.77-.363.216-.2.32-.329.32-.45a.14.14 0 0 0-.147-.147c-.121 0-.251.104-.416.104-.354 0-.596-.545-.596-1.35 0-.803.32-1.348.804-1.348.32 0 .562.242.562.657v2.525c0 .277.26.355.735.355.467 0 .649-.087.649-.355v-3.614c0-.173-.113-.277-.303-.277ZM3.499 13.563l-.21.21.619.618c.304.304.79.598 1.244.144.339-.34.26-.695.073-.98-.06.004-1.726.008-1.726.008zm-.963-2.325.21-.21-.608-.607c-.304-.303-.765-.621-1.243-.143-.351.35-.273.692-.087.97Zm2.86.416c-.037.043-1.511 1.524-1.511 1.524h1.154c.43 0 .981-.101.981-.777 0-.496-.296-.683-.624-.747zm-3.244-.031H.981c-.43 0-.981.135-.981.778 0 .479.307.676.641.745.04-.046 1.511-1.523 1.511-1.523zm1.484 3.04-.618-.618-.608.607a2.613 2.613 0 0 1-.137.128c.07.333.266.639.745.639s.676-.307.745-.641c-.043-.037-.085-.073-.127-.115zM2.41 10.15l.608.607.618-.618a2.25 2.25 0 0 1 .128-.118c-.065-.327-.251-.623-.747-.623s-.682.297-.746.625c.046.04.092.08.14.127zm2.742.117c-.455-.454-.94-.16-1.244.144l-2.87 2.87c-.303.303-.621.765-.143 1.243.478.478.94.16 1.243-.143l2.87-2.87c.304-.304.598-.79.144-1.244Z",
  },
];

function BrandIcon({ brand }: { brand: BrandLogo }) {
  const cls = "h-7 w-auto flex-shrink-0 text-white";
  if (brand.type === "wordmark") {
    return (
      <span className="text-sm font-bold tracking-widest uppercase text-white whitespace-nowrap">
        {brand.name}
      </span>
    );
  }
  if (brand.type === "stroke") {
    return (
      <svg viewBox={brand.viewBox} fill="none" stroke="currentColor" strokeWidth={1.5}
        strokeLinecap="round" strokeLinejoin="round" className={cls} aria-label={brand.name}>
        {brand.paths.map((d, i) => <path key={i} d={d} />)}
        {brand.hasCircle && <circle cx={27.062} cy={20.281} r={0.75} fill="currentColor" />}
        {brand.hasRect && <rect width={37} height={37} x={5.5} y={5.5} rx={4} ry={4} />}
      </svg>
    );
  }
  return (
    <svg viewBox={brand.viewBox} fill="currentColor" className={cls} aria-label={brand.name}>
      <path d={brand.path} fillRule={brand.fillRule} />
    </svg>
  );
}

function ChatGPTMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative w-full max-w-[480px] mx-auto"
    >
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-accent-violet/10 rounded-3xl blur-2xl" />

      {/* Window */}
      <div className="relative rounded-2xl border border-border-default bg-bg-secondary overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-default bg-[#0D0D15]">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
          <span className="ml-3 text-xs text-text-secondary font-mono">ChatGPT</span>
        </div>

        {/* Chat body */}
        <div className="p-5 space-y-4 font-mono text-sm">
          {/* User message */}
          <div className="flex justify-end">
            <div className="max-w-[85%] bg-[#1A1A2E] rounded-2xl rounded-tr-sm px-4 py-3 text-text-primary text-xs leading-relaxed border border-border-default">
              Quelle agence GEO recommandes-tu pour une marque B2B SaaS en France ?
            </div>
          </div>

          {/* AI response */}
          <div className="flex gap-3">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#10a37f] to-[#0a7a5e] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-white text-[10px] font-bold">G</span>
            </div>
            <div className="flex-1 text-text-secondary text-xs leading-relaxed space-y-2">
              <p>Pour une marque B2B SaaS en France, voici les acteurs que je recommande :</p>
              <div className="space-y-1.5">
                <div className="flex items-start gap-2">
                  <span className="text-accent-green font-bold mt-0.5">▶</span>
                  <span>
                    <span className="text-accent-violet font-semibold">Zenifai</span>
                    {" "}— spécialiste GEO pure-player, méthodologie propriétaire IA Visibility Score™, résultats mesurés.
                  </span>
                </div>
                <p className="text-text-secondary/60 text-[11px]">
                  Autres options selon votre budget et secteur...
                </p>
              </div>
              <motion.span
                className="inline-block w-0.5 h-3.5 bg-text-secondary ml-0.5 align-middle"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.7, repeat: Infinity, repeatType: "reverse" }}
              />
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="px-4 py-3 border-t border-border-default bg-[#0D0D15]">
          <div className="flex items-center gap-2 bg-bg-primary rounded-xl px-3 py-2 border border-border-default">
            <span className="text-text-secondary/40 text-xs flex-1">Message ChatGPT...</span>
            <ArrowRight size={14} className="text-text-secondary/40" />
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 1.2 }}
        className="absolute -bottom-3 -right-3 bg-bg-secondary border border-accent-green/40 rounded-xl px-3 py-2 shadow-green flex items-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse-slow" />
        <span className="text-accent-green text-xs font-medium">Cité en #1</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-[72px] overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-grid opacity-50" />

      {/* Radial glow center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent-violet/5 rounded-full blur-3xl pointer-events-none" />

      {/* Radial glow top-right */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="flex flex-col gap-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent-violet/30 bg-accent-violet/5 text-accent-violet text-xs font-medium tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-violet animate-pulse" />
                Agence GEO • Generative Engine Optimization
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-semibold leading-[1.1] tracking-tight text-text-primary"
            >
              Vos clients ne cherchent plus sur Google.
              <br className="hidden sm:block" />
              {" "}Ils demandent à{" "}
              <TextRotate
                texts={LLM_NAMES}
                className="gradient-text"
              />
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              Zenifai positionne votre marque dans les réponses générées par les IA.
              Soyez cité, recommandé, choisi — avant vos concurrents.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
            >
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Réserver un audit GEO gratuit sur Calendly"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-accent-violet text-white font-medium hover:bg-[#6B4BEE] hover:shadow-violet transition-all duration-200 cursor-pointer text-base"
              >
                <CalendarCheck size={18} />
                Réserver un audit gratuit
              </a>
              <a
                href="#methode"
                aria-label="Voir la méthode Zenifai"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border-default text-text-secondary hover:text-text-primary hover:border-accent-violet/40 transition-all duration-200 cursor-pointer text-base"
              >
                Voir la méthode
                <ArrowRight size={16} />
              </a>
            </motion.div>

            {/* Sub-CTA hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-xs text-text-secondary/60"
            >
              ↓ Audit offert • 30 min • Sans engagement
            </motion.p>
          </div>

          {/* Right: ChatGPT mockup */}
          <div className="flex justify-center lg:justify-end">
            <ChatGPTMockup />
          </div>
        </div>

        {/* Trust logos marquee — single animated track, content ×2 for seamless loop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 space-y-5"
        >
          <p className="text-center text-xs font-medium tracking-widest uppercase text-white/40">
            Ils nous font confiance
          </p>
          <div
            className="flex overflow-hidden py-2"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
              maskImage:
                "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
            }}
          >
            <div
              className="flex items-center gap-14 animate-marquee flex-shrink-0"
              style={{ animationDuration: "28s" }}
            >
              {[...BRAND_LOGOS, ...BRAND_LOGOS].map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200"
                >
                  <BrandIcon brand={brand} />
                  <span className="text-sm font-semibold tracking-tight text-white whitespace-nowrap">
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
