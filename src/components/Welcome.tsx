import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";
import GalleryMarquee from "./GalleryMarquee";
import { OliveTree } from "./Illustrations";

export default function Welcome() {
  const { content, contentAR, lang } = useContent();
  const c = lang === "ar" ? contentAR.welcome : content.welcome;

  return (
    <section className="bg-ivory" aria-label="Welcome message">
      <div className="section-padding max-w-2xl mx-auto text-center">

        {/* Top gold ornament */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="flex items-center gap-3 mb-10 max-w-xs mx-auto"
          aria-hidden="true"
        >
          <div className="flex-1 h-px bg-gold/35" />
          <svg viewBox="0 0 16 16" fill="currentColor" className="w-2 h-2 text-gold/55 flex-shrink-0">
            <polygon points="8,0 10,6 16,6 11,10 13,16 8,12 3,16 5,10 0,6 6,6" />
          </svg>
          <div className="flex-1 h-px bg-gold/35" />
        </motion.div>

        {/* Pre-label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="section-subtitle mb-5"
        >
          {lang === "ar" ? contentAR.couple.fullNames : content.couple.fullNames}
        </motion.p>

        {/* Section title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="section-title mb-10"
        >
          {c.title}
        </motion.h2>

        {/* Body paragraphs */}
        <div className="space-y-6">
          {c.body.map((para, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.05 + i * 0.1 }}
              className="font-body italic text-sage/80 text-lg md:text-xl leading-[1.85]"
            >
              {para}
            </motion.p>
          ))}
        </div>

        {/* Thin divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-3 my-9 max-w-xs mx-auto"
          aria-hidden="true"
        >
          <div className="flex-1 h-px bg-gold/30" />
          <svg viewBox="0 0 12 12" fill="currentColor" className="w-1.5 h-1.5 text-gold/50">
            <circle cx="6" cy="6" r="6" />
          </svg>
          <div className="flex-1 h-px bg-gold/30" />
        </motion.div>

        {/* Signature */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-gold"
          style={{ fontSize: "clamp(1.6rem, 5vw, 2.4rem)" }}
        >
          {c.signature}
        </motion.p>

        {/* Olive tree illustration */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center mt-10"
          aria-hidden="true"
        >
          <OliveTree className="w-44 h-60 text-gold/30" />
        </motion.div>
      </div>

      {/* Gallery marquee strip */}
      <GalleryMarquee strip="strip1" />
    </section>
  );
}
