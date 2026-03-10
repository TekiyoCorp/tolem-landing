"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const specifications = [
  {
    category: "Mouvement",
    items: [
      { label: "Type", value: "Automatique manufacture" },
      { label: "Calibre", value: "TLM Cal. 01" },
      { label: "Fréquence", value: "28 800 alt/h (4 Hz)" },
      { label: "Rubis", value: "42" },
      { label: "Réserve", value: "72 heures" },
    ],
  },
  {
    category: "Boîtier",
    items: [
      { label: "Matériau", value: "Titane Grade 5" },
      { label: "Diamètre", value: "42mm" },
      { label: "Épaisseur", value: "11,2mm" },
      { label: "Glace", value: "Saphir AR" },
      { label: "Étanchéité", value: "100m / 10 ATM" },
    ],
  },
  {
    category: "Cadran",
    items: [
      { label: "Couleur", value: "Noir obsidienne" },
      { label: "Finition", value: "Brossage vertical" },
      { label: "Index", value: "Appliqués, rhodiés" },
      { label: "Aiguilles", value: "Dauphine, SuperLuminova" },
      { label: "Date", value: "3 heures, cerclée" },
    ],
  },
];

const craftSteps = [
  {
    number: "01",
    title: "Conception",
    description: "Conçu dans notre atelier de Besançon. Chaque ligne est pensée pour son jeu d'ombre et de lumière.",
  },
  {
    number: "02",
    title: "Composants",
    description: "347 pièces usinées individuellement, chacune respectant des tolérances mesurées en microns.",
  },
  {
    number: "03",
    title: "Assemblage",
    description: "120 heures d'assemblage manuel par un seul maître horloger qui signe chaque mouvement.",
  },
  {
    number: "04",
    title: "Contrôle",
    description: "500 heures de tests rigoureux : température, pression, précision chronométrique.",
  },
];

export default function Craftsmanship() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      id="savoirfaire"
      className="relative py-32 md:py-48 section-dark overflow-hidden"
    >
      {/* Floating Text */}
      <motion.div
        style={{ x }}
        className="absolute top-20 left-0 right-0 pointer-events-none select-none overflow-hidden"
      >
        <span className="text-[15vw] font-display font-medium text-white/[0.03] whitespace-nowrap">
          PRÉCISION • HÉRITAGE • SAVOIR-FAIRE •
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mb-24"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="font-mono text-[10px] text-gray tracking-wider">03</span>
            <div className="w-8 h-px bg-gray" />
            <span className="font-mono text-[10px] text-gray tracking-wider">SAVOIR-FAIRE</span>
          </div>
          <h2 className="font-display text-h1 md:text-display leading-[0.95] mb-8">
            <span className="block">Fabriqué sans</span>
            <span className="block text-gray">compromis</span>
          </h2>
          <p className="text-xl text-gray-light max-w-2xl font-light leading-relaxed">
            Chez TOLEM, nous croyons que l&apos;excellence se trouve dans l&apos;obsession
            des détails invisibles à tous sauf au créateur. Chaque garde-temps
            nécessite plus de 120 heures d&apos;assemblage méticuleux.
          </p>
        </motion.div>

        {/* Craft Steps */}
        <div className="grid md:grid-cols-4 gap-px bg-white/10 mb-32">
          {craftSteps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: index * 0.15,
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="bg-gray-dark p-8 group hover:bg-white/5 transition-colors"
            >
              <span className="font-mono text-4xl md:text-5xl text-gray/40 group-hover:text-white transition-colors">
                {step.number}
              </span>
              <h3 className="font-display text-xl md:text-2xl mt-4 mb-3">{step.title}</h3>
              <p className="text-gray text-sm font-light leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Specifications Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid lg:grid-cols-12 gap-12"
        >
          {/* Left - Title */}
          <div className="lg:col-span-4 space-y-6">
            <h3 className="font-display text-h2">
              <span className="block">Spécifications</span>
              <span className="block text-gray">techniques</span>
            </h3>
            <p className="text-gray font-light">
              Le dossier complet du TLM-01 Origine, notre garde-temps fondateur.
            </p>
            <div className="pt-4">
              <a
                href="#download"
                className="inline-flex items-center gap-3 text-caption text-white hover:text-gray-light transition-colors group"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="hover-line">Télécharger la fiche technique (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right - Specs */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-3 gap-8">
              {specifications.map((group, groupIndex) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + groupIndex * 0.15, duration: 0.6 }}
                  className="space-y-6"
                >
                  <h4 className="text-caption text-white border-b border-white/10 pb-3 tracking-wider">
                    {group.category}
                  </h4>
                  <div className="space-y-4">
                    {group.items.map((item) => (
                      <div
                        key={item.label}
                        className="flex justify-between items-baseline gap-4"
                      >
                        <span className="text-gray text-sm">{item.label}</span>
                        <span className="font-mono text-sm text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Movement Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-32 relative"
        >
          <div className="aspect-[21/9] bg-white/5 flex items-center justify-center relative overflow-hidden">
            {/* Grid Pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Movement SVG - Monochrome */}
            <svg viewBox="0 0 400 200" className="w-full max-w-2xl h-auto opacity-60">
              {/* Main Plate */}
              <circle cx="200" cy="100" r="80" fill="none" stroke="#E3E3E3" strokeWidth="0.5" />
              <circle cx="200" cy="100" r="70" fill="none" stroke="#B2B3B5" strokeWidth="0.3" />

              {/* Balance Wheel */}
              <circle cx="280" cy="60" r="25" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <circle cx="280" cy="60" r="20" fill="none" stroke="#B2B3B5" strokeWidth="0.3" />
              <line x1="280" y1="35" x2="280" y2="85" stroke="#FFFFFF" strokeWidth="0.3" />
              <line x1="255" y1="60" x2="305" y2="60" stroke="#FFFFFF" strokeWidth="0.3" />

              {/* Gear Train */}
              <circle cx="150" cy="80" r="18" fill="none" stroke="#B2B3B5" strokeWidth="0.5" />
              <circle cx="170" cy="120" r="15" fill="none" stroke="#B2B3B5" strokeWidth="0.5" />
              <circle cx="130" cy="110" r="12" fill="none" stroke="#B2B3B5" strokeWidth="0.5" />

              {/* Mainspring Barrel */}
              <circle cx="100" cy="100" r="30" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
              <path d="M 85 100 Q 100 85 115 100 Q 100 115 85 100" fill="none" stroke="#B2B3B5" strokeWidth="0.3" />

              {/* Annotations */}
              <text x="100" y="145" fill="#B2B3B5" fontSize="6" fontFamily="monospace">BARILLET</text>
              <text x="265" y="95" fill="#B2B3B5" fontSize="6" fontFamily="monospace">BALANCIER</text>
              <text x="320" y="100" fill="#FFFFFF" fontSize="8" fontFamily="sans-serif">TLM Cal. 01</text>
            </svg>

            {/* Labels */}
            <div className="absolute top-6 left-6">
              <div className="tech-label text-gray-light">VUE ÉCLATÉE</div>
            </div>
            <div className="absolute bottom-6 right-6">
              <div className="tech-label text-gray-light">347 COMPOSANTS</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
