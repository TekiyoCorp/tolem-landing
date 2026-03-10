"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import DecryptText from "./DecryptText";

const footerLinks = {
  collection: [
    { label: "TLM-01 Origine" },
    { label: "TLM-02 Voyageur" },
    { label: "TLM-03 Chronographe" },
  ],
  maison: [
    { label: "Notre Histoire" },
    { label: "L'Atelier" },
    { label: "Savoir-faire" },
  ],
  service: [
    { label: "Garantie" },
    { label: "Révision" },
    { label: "Contact" },
  ],
};

export default function Footer() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <footer
      ref={containerRef}
      className="relative bg-[#0A0A0A] overflow-hidden"
      style={{ padding: "80px 40px 300px" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Top Section */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#222]">
          {/* Logo & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-[48px] lg:text-[64px] text-white leading-[0.9] mb-6">
              <DecryptText text="Tolem" delay={100} speed={50} />
            </h2>
            <p className="text-[13px] text-[#666] leading-[1.8] max-w-[300px]">
              <DecryptText
                text="Nous ne cherchons pas la perfection. Nous l'exigeons."
                delay={200}
                speed={3}
              />
            </p>
          </motion.div>

          {/* Links */}
          <div className="lg:col-span-7 grid grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">
                <DecryptText text="Collection" delay={150} speed={30} />
              </h3>
              <ul className="space-y-3">
                {footerLinks.collection.map((link, i) => (
                  <li key={link.label}>
                    <span className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">
                      <DecryptText text={link.label} delay={200 + i * 50} speed={20} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">
                <DecryptText text="La Maison" delay={200} speed={30} />
              </h3>
              <ul className="space-y-3">
                {footerLinks.maison.map((link, i) => (
                  <li key={link.label}>
                    <span className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">
                      <DecryptText text={link.label} delay={250 + i * 50} speed={20} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-[11px] tracking-[0.15em] text-[#888] uppercase mb-6">
                <DecryptText text="Service" delay={250} speed={30} />
              </h3>
              <ul className="space-y-3">
                {footerLinks.service.map((link, i) => (
                  <li key={link.label}>
                    <span className="text-[13px] text-[#555] hover:text-white transition-colors cursor-pointer">
                      <DecryptText text={link.label} delay={300 + i * 50} speed={20} />
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <div className="flex flex-wrap items-center gap-6 lg:gap-10">
            <span className="text-[11px] tracking-[0.1em] text-[#444]">
              <DecryptText text="© 2026 TOLEM" delay={400} speed={30} />
            </span>
            <span className="text-[11px] tracking-[0.1em] text-[#444]">
              <DecryptText text="Besançon, France" delay={450} speed={30} />
            </span>
            <span className="text-[11px] tracking-[0.1em] text-[#444]">
              <DecryptText text="Horlogerie Française" delay={500} speed={30} />
            </span>
          </div>

          <div className="flex items-center gap-8">
            <span className="text-[11px] tracking-[0.1em] text-[#555] hover:text-white transition-colors cursor-pointer">
              <DecryptText text="Instagram" delay={500} speed={30} />
            </span>
            <span className="text-[11px] tracking-[0.1em] text-[#555] hover:text-white transition-colors cursor-pointer">
              <DecryptText text="LinkedIn" delay={550} speed={30} />
            </span>
            <span className="text-[11px] tracking-[0.1em] text-[#555] hover:text-white transition-colors cursor-pointer">
              <DecryptText text="Newsletter" delay={600} speed={30} />
            </span>
          </div>
        </motion.div>

        {/* Giant Watermark */}
        <div
          className="absolute left-0 right-0 overflow-hidden pointer-events-none"
          style={{ bottom: '-20px' }}
        >
          <span
            className="font-display text-white leading-[0.8] tracking-[-0.04em] block w-full text-center"
            style={{ fontSize: 'clamp(120px, 28vw, 400px)' }}
          >
            TOLEM
          </span>
        </div>
      </div>
    </footer>
  );
}
