import { motion } from "framer-motion";
import { content } from "@/content/content";
import { contentAR } from "@/content/content";
import { useLang } from "@/context/LanguageContext";

export default function Footer() {
  const { lang } = useLang();
  const c = lang === "ar" ? contentAR.footer : content.footer;
  const groom = lang === "ar" ? contentAR.couple.groom : content.couple.groom;
  const bride = lang === "ar" ? contentAR.couple.bride : content.couple.bride;

  return (
    <footer className="relative paper-bg py-24 md:py-32 px-6 text-center overflow-hidden" role="contentinfo">

      <div className="relative max-w-2xl mx-auto">

        {/* Wedding rings SVG */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-12"
          aria-hidden="true"
        >
          <svg viewBox="0 0 210 140" fill="none" stroke="currentColor" className="w-48 h-32 text-gold/65" aria-hidden="true">
            {/*
              Two interlocking wedding bands — no clipPaths, arc-order technique.
              Ring A (left):  cx=80  cy=70  r_outer=48  r_inner=36
              Ring B (right): cx=130 cy=70  r_outer=48  r_inner=36
              Rings cross at x=105. Ring B in front at top; Ring A in front at bottom.
              Drawn as: A-back | B-full | paper-erase B-left | A-front
            */}

            {/* Ring A — back half (right arc, sits behind Ring B) */}
            <path d="M 105 29 A 48 48 0 0 1 105 111" strokeWidth="2" />
            <path d="M 105 44 A 36 36 0 0 1 105 96"  strokeWidth="1.2" />

            {/* Ring B — full circles */}
            <circle cx="130" cy="70" r="48" strokeWidth="2" />
            <circle cx="130" cy="70" r="36" strokeWidth="1.2" />

            {/* Erase Ring B strokes in the left-half overlap so Ring A can pass in front */}
            <path d="M 105 29 A 48 48 0 1 0 105 111" stroke="var(--color-paper,#F8F5EF)" strokeWidth="5" fill="none" />
            <path d="M 105 44 A 36 36 0 1 0 105 96"  stroke="var(--color-paper,#F8F5EF)" strokeWidth="4" fill="none" />

            {/* Ring A — front half (left arc, passes in front of Ring B) */}
            <path d="M 105 111 A 48 48 0 1 1 105 29" strokeWidth="2" />
            <path d="M 105 96  A 36 36 0 1 1 105 44"  strokeWidth="1.2" />
          </svg>
        </motion.div>

        {/* Couple names — single elegant line */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.05 }}
          className="font-display text-forest leading-none mb-6"
          style={{ fontSize: "clamp(3.2rem, 13vw, 7rem)" }}
        >
          {groom}
          <span
            className="font-body italic text-gold mx-3 md:mx-5"
            style={{ fontSize: "clamp(1.8rem, 6vw, 3.5rem)", verticalAlign: "middle" }}
            aria-hidden="true"
          >
            &amp;
          </span>
          {bride}
        </motion.h2>

        {/* Gold ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="flex items-center gap-3 max-w-[200px] mx-auto mb-6"
          aria-hidden="true"
        >
          <div className="flex-1 h-px bg-gold/35" />
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-2 h-2 text-gold/55 flex-shrink-0">
            <polygon points="8,0 10,6 16,6 11,10 13,16 8,12 3,16 5,10 0,6 6,6" />
          </svg>
          <div className="flex-1 h-px bg-gold/35" />
        </motion.div>

        {/* Wedding date — prominent */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-cinzel text-forest/80 mb-1"
          style={{ fontSize: "clamp(0.75rem, 2.2vw, 0.95rem)", letterSpacing: "0.35em" }}
        >
          {c.date.toUpperCase()}
        </motion.p>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="font-cinzel text-sage/70 mb-10"
          style={{ fontSize: "clamp(0.65rem, 1.8vw, 0.78rem)", letterSpacing: "0.28em" }}
        >
          {c.location.toUpperCase()}
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body italic text-sage/75 text-base mb-12"
        >
          {c.tagline}
        </motion.p>

        {/* Bottom divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="h-px bg-gold/20 max-w-[120px] mx-auto mb-8"
          aria-hidden="true"
        />

        {/* Made with love credit */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.52 }}
          className="font-body text-xs text-sage/55 tracking-widest"
        >
          Made with love &hearts; {new Date().getFullYear()}
        </motion.p>
      </div>
    </footer>
  );
}
