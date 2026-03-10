"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import DecryptText from "./DecryptText";

export default function Savoirfaire() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="savoirfaire"
      ref={containerRef}
      className="relative h-screen bg-[#F5F5F5]"
    >
      {/* Container with consistent margins */}
      <div
        className="h-full flex flex-col justify-between"
        style={{ padding: '40px', maxWidth: '1600px', margin: '0 auto' }}
      >

        {/* Top Section */}
        <div className="space-y-6 lg:space-y-10">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="text-[12px] lg:text-[14px] text-[#181818]">
              <DecryptText text="Savoir-faire" delay={100} speed={30} />
            </span>
            <span className="text-[10px] lg:text-[11px] text-[#888] align-super">
              <DecryptText text="(02)" delay={150} speed={30} />
            </span>
          </motion.div>

          {/* Big Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-medium text-[#181818] leading-[1.05] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(28px, 6vw, 72px)' }}
          >
            <DecryptText text="Précision Horlogère." delay={200} />
            <br />
            <DecryptText text="Excellence Française." delay={400} />
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[12px] lg:text-[14px] text-[#555] leading-[1.7] max-w-[340px]"
          >
            <DecryptText text="Chaque garde-temps TOLEM est assemblé à la main dans notre atelier de Besançon, perpétuant un savoir-faire horloger français séculaire." delay={500} speed={1} />
          </motion.p>
        </div>

        {/* Middle - Image Placeholder Area */}
        <div className="flex-1 flex items-center justify-center">
          {/* Placeholder for future image */}
        </div>

        {/* Bottom Section */}
        <div className="space-y-16">
          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border-t border-[#D8D8D8] pt-6"
          >
            <div className="flex flex-wrap items-end justify-between gap-8">
              <div className="flex flex-wrap gap-10 lg:gap-20">
                <div>
                  <div className="text-[10px] tracking-[0.12em] text-[#888] uppercase mb-1">
                    <DecryptText text="Composants" delay={600} speed={30} />
                  </div>
                  <div className="text-[15px] lg:text-[17px] text-[#181818]">
                    <DecryptText text="347" delay={700} speed={30} />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.12em] text-[#888] uppercase mb-1">
                    <DecryptText text="Assemblé à" delay={650} speed={30} />
                  </div>
                  <div className="text-[15px] lg:text-[17px] text-[#181818]">
                    <DecryptText text="Besançon" delay={750} speed={30} />
                  </div>
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.12em] text-[#888] uppercase mb-1">
                    <DecryptText text="Réserve de marche" delay={700} speed={30} />
                  </div>
                  <div className="text-[15px] lg:text-[17px] text-[#181818]">
                    <DecryptText text="72H" delay={800} speed={30} />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.12em] text-[#888] uppercase">
                  <DecryptText text="(Heure locale)" delay={750} speed={30} />
                </span>
                <span className="text-[20px] lg:text-[28px] text-[#181818] font-display tracking-[-0.02em]">
                  {time}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Bottom Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-[13px] lg:text-[15px] text-[#181818] leading-[1.9] max-w-[640px] text-left"
          >
            <DecryptText text="TOLEM incarne la convergence de deux héritages : l'excellence joaillière et l'ingénierie industrielle. Chaque mouvement est conçu, assemblé et contrôlé selon les standards les plus exigeants de l'horlogerie contemporaine." delay={900} speed={1} />
          </motion.p>
        </div>
      </div>
    </section>
  );
}
