import { motion } from "framer-motion";
import { content } from "@/content/content";

export default function VenuePhoto() {
  return (
    <section
      className="relative min-h-[55vh] md:min-h-[65vh] flex items-center justify-center overflow-hidden"
      aria-label="Venue photo with quote"
    >
      {/* Full-bleed background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.venueQuote.image})` }}
        role="img" aria-label="Wedding venue"
      />

      {/* Gradient overlay — forest-tinted */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(18,36,36,0.70) 0%, rgba(18,36,36,0.60) 50%, rgba(18,36,36,0.75) 100%)" }}
        aria-hidden="true"
      />

      {/* Quote */}
      <div className="relative z-10 max-w-2xl mx-auto text-center px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          {/* Opening quote */}
          <div
            className="font-display text-gold/45 leading-none mb-4 select-none"
            style={{ fontSize: "clamp(4rem, 12vw, 7rem)" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <blockquote>
            <p className="font-body italic text-white/90 text-xl md:text-2xl lg:text-3xl leading-[1.7]">
              {content.venueQuote.quote}
            </p>
          </blockquote>

          {/* Gold line divider */}
          <div className="flex items-center gap-3 my-7 max-w-xs mx-auto" aria-hidden="true">
            <div className="flex-1 h-px bg-gold/40" />
            <svg viewBox="0 0 12 12" fill="currentColor" className="w-1.5 h-1.5 text-gold/60 flex-shrink-0">
              <circle cx="6" cy="6" r="6" />
            </svg>
            <div className="flex-1 h-px bg-gold/40" />
          </div>

          {/* Attribution */}
          <p className="font-body text-champagne/65 text-xs tracking-[0.34em] uppercase">
            &mdash;&nbsp;{content.venueQuote.attribution}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
