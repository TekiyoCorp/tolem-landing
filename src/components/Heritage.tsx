"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const timeline = [
  {
    year: "2021",
    title: "Genèse",
    description: "Fondée à Besançon, capitale historique de l'horlogerie française. Deux héritages convergent : l'excellence joaillière et l'ingénierie industrielle.",
  },
  {
    year: "2022",
    title: "Calibre TLM",
    description: "Développement du mouvement manufacture. 18 mois de R&D, 47 prototypes. La quête de la perfection ne connaît pas de raccourcis.",
  },
  {
    year: "2024",
    title: "Première Édition",
    description: "Édition limitée de 50 pièces pour les collectionneurs fondateurs. Reconnaissance immédiate dans le cercle horloger.",
  },
  {
    year: "2026",
    title: "Kickstarter",
    description: "Lancement de la collection complète : Origine, Voyageur, Chronographe. Un nouveau chapitre de l'horlogerie française commence.",
  },
];

export default function Heritage() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={containerRef}
      id="histoire"
      className="relative py-32 md:py-48 overflow-hidden"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Story */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-[10px] text-gray tracking-wider">04</span>
                <div className="w-8 h-px bg-gray-light" />
                <span className="font-mono text-[10px] text-gray tracking-wider">HISTOIRE</span>
              </div>

              <h2 className="font-display text-h1 md:text-display leading-[0.95] mb-8">
                <span className="block">Née de</span>
                <span className="block text-gray">l&apos;obsession</span>
              </h2>

              <div className="space-y-6 text-gray font-light leading-relaxed max-w-xl">
                <p>
                  TOLEM est née d&apos;une conviction singulière : que l&apos;horlogerie
                  avait perdu son chemin. Trop d&apos;héritage revendiqué, pas assez
                  de vision. Trop de décoration, pas assez d&apos;âme.
                </p>
                <p>
                  Nos fondateurs se sont rencontrés au carrefour de la tradition
                  et de l&apos;innovation — l&apos;un apportant des décennies d&apos;expertise
                  en joaillerie, l&apos;autre une vision forgée par l&apos;ingénierie
                  industrielle et le design minimal.
                </p>
                <p>
                  Le nom TOLEM trouve son origine dans le poinçon de Moïse Toledano,
                  maître-horloger du XIXe siècle. Un héritage que nous perpétuons
                  avec la même exigence d&apos;excellence.
                </p>
              </div>

              {/* Heritage Badge */}
              <div className="mt-12 pt-8 border-t border-gray-light">
                <div className="flex items-center gap-8">
                  <div className="space-y-2">
                    <div className="tech-label">Assemblage</div>
                    <div className="font-display text-xl">Besançon, France</div>
                  </div>
                  <div className="w-px h-12 bg-gray-light" />
                  <div className="space-y-2">
                    <div className="tech-label">Héritage</div>
                    <div className="font-display text-xl">Depuis 2021</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gray-light origin-top"
            />

            {/* Timeline Items */}
            <div className="space-y-16 md:space-y-24">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    delay: 0.3 + index * 0.2,
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative pl-16 md:pl-24"
                >
                  {/* Dot */}
                  <div className="absolute left-2 md:left-6 top-2 w-4 h-4">
                    <div className="absolute inset-0 rounded-full border-2 border-black" />
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.4 }}
                      className="absolute inset-1 rounded-full bg-black"
                    />
                  </div>

                  {/* Year */}
                  <div className="font-mono text-4xl md:text-5xl text-gray-light mb-4">
                    {item.year}
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl mb-3">{item.title}</h3>
                  <p className="text-gray font-light max-w-md">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Future Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.2 }}
              className="relative pl-16 md:pl-24 mt-16"
            >
              <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full border-2 border-dashed border-gray animate-pulse" />
              <div className="tech-label">
                L&apos;aventure continue...
              </div>
            </motion.div>
          </div>
        </div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-32 md:mt-48 text-center max-w-4xl mx-auto"
        >
          <blockquote className="font-display text-h2 md:text-h1 leading-[1.1]">
            &laquo; Nous ne cherchons pas
            <br />
            la perfection.
            <br />
            <span className="text-gray">Nous l&apos;exigeons. &raquo;</span>
          </blockquote>
          <cite className="block mt-8 tech-label not-italic">
            — Manifeste TOLEM, 2021
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
