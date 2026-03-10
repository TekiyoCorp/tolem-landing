"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formState);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-32 md:py-48 bg-gray-light/30 overflow-hidden"
    >
      {/* Background Typography */}
      <div className="absolute bottom-0 right-0 pointer-events-none select-none overflow-hidden">
        <span className="text-[30vw] font-display font-medium text-white leading-none">
          &
        </span>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-[10px] text-gray tracking-wider">05</span>
              <div className="w-8 h-px bg-gray-light" />
              <span className="font-mono text-[10px] text-gray tracking-wider">CONTACT</span>
            </div>

            <h2 className="font-display text-h1 md:text-display leading-[0.95] mb-8">
              <span className="block">Commencez</span>
              <span className="block text-gray">l&apos;aventure</span>
            </h2>

            <p className="text-gray max-w-lg mb-12 font-light leading-relaxed">
              Que vous souhaitiez une consultation personnalisée, rejoindre
              notre cercle de collectionneurs, ou simplement en savoir plus
              sur nos garde-temps, nous accueillons votre correspondance.
            </p>

            {/* Contact Methods */}
            <div className="space-y-8">
              <div className="space-y-2">
                <div className="tech-label">Rendez-vous privé</div>
                <a
                  href="tel:+33381123456"
                  className="font-display text-xl md:text-2xl hover:text-gray transition-colors"
                >
                  +33 3 81 12 34 56
                </a>
              </div>

              <div className="space-y-2">
                <div className="tech-label">Correspondance</div>
                <a
                  href="mailto:atelier@tolem.fr"
                  className="font-display text-xl md:text-2xl hover:text-gray transition-colors"
                >
                  atelier@tolem.fr
                </a>
              </div>

              <div className="space-y-2">
                <div className="tech-label">Atelier & Showroom</div>
                <address className="not-italic font-light">
                  12 Rue de la Préfecture
                  <br />
                  25000 Besançon, France
                </address>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="mt-12 pt-8 border-t border-gray-light">
              <div className="tech-label mb-4">Sur rendez-vous</div>
              <div className="grid grid-cols-2 gap-4 text-sm font-light">
                <div>
                  <span className="text-gray">Lun – Ven</span>
                  <br />
                  10:00 – 19:00
                </div>
                <div>
                  <span className="text-gray">Samedi</span>
                  <br />
                  11:00 – 17:00
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name */}
              <div className="space-y-2">
                <label className="tech-label" htmlFor="name">
                  Votre nom
                </label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) =>
                    setFormState({ ...formState, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-light py-4 font-light focus:border-black outline-none transition-colors"
                  placeholder="Nom complet"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="tech-label" htmlFor="email">
                  Adresse email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-light py-4 font-light focus:border-black outline-none transition-colors"
                  placeholder="votre@email.com"
                  required
                />
              </div>

              {/* Interest */}
              <div className="space-y-2">
                <label className="tech-label" htmlFor="interest">
                  Centre d&apos;intérêt
                </label>
                <select
                  id="interest"
                  value={formState.interest}
                  onChange={(e) =>
                    setFormState({ ...formState, interest: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-gray-light py-4 font-light focus:border-black outline-none transition-colors appearance-none cursor-pointer"
                  required
                >
                  <option value="" disabled>
                    Sélectionnez votre intérêt
                  </option>
                  <option value="purchase">Demande d&apos;achat</option>
                  <option value="consultation">Consultation privée</option>
                  <option value="collectors">Cercle des collectionneurs</option>
                  <option value="kickstarter">Campagne Kickstarter</option>
                  <option value="press">Presse & Médias</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="tech-label" htmlFor="message">
                  Votre message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-transparent border-b border-gray-light py-4 font-light focus:border-black outline-none transition-colors resize-none"
                  placeholder="Parlez-nous de votre intérêt..."
                  required
                />
              </div>

              {/* Submit */}
              <div className="pt-4">
                <button
                  type="submit"
                  className="group w-full md:w-auto inline-flex items-center justify-center gap-4 px-10 py-4 bg-black text-white text-caption tracking-wider hover:bg-gray-dark transition-colors duration-300"
                >
                  <span>Envoyer</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>

              <p className="text-gray text-sm font-light">
                En soumettant ce formulaire, vous acceptez notre politique de
                confidentialité. Nous respectons votre temps comme nous respectons
                notre métier.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
