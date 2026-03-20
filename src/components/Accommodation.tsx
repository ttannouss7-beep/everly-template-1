import { motion } from "framer-motion";
import { content } from "@/content/content";
import { contentAR } from "@/content/content";
import { useLang } from "@/context/LanguageContext";

export default function Accommodation() {
  const { lang } = useLang();
  const c = lang === "ar" ? contentAR.accommodation : content.accommodation;

  return (
    <section className="relative paper-bg section-padding" aria-label="Accommodation options">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="flex items-center gap-3 mb-10 max-w-xs mx-auto"
            aria-hidden="true"
          >
            <div className="flex-1 h-px bg-gold/35" />
            <svg viewBox="0 0 16 16" fill="currentColor" className="w-2 h-2 text-gold/55 flex-shrink-0">
              <polygon points="8,0 10,6 16,6 11,10 13,16 8,12 3,16 5,10 0,6 6,6" />
            </svg>
            <div className="flex-1 h-px bg-gold/35" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title mb-4"
          >
            {c.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-body italic text-sage/80 text-lg max-w-xl mx-auto leading-relaxed"
          >
            {c.subtitle}
          </motion.p>
        </div>

        {/* Hotel cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {content.accommodation.hotels.map((hotel, i) => (
            <motion.div
              key={hotel.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="card-light flex flex-col"
            >
              {/* Gold top accent bar */}
              <div className="h-px bg-gold/50 -mx-8 -mt-8 mb-6" aria-hidden="true" />

              {/* Hotel type */}
              <span className="font-body text-xs tracking-[0.22em] uppercase text-gold mb-3">
                {hotel.type}
              </span>

              {/* Hotel name */}
              <h3
                className="font-display text-forest leading-tight mb-3"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.4rem)" }}
              >
                {hotel.name}
              </h3>

              {/* Distance */}
              <div className="flex items-center gap-2 mb-3">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-gold/60" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
                </svg>
                <span className="font-body text-sm text-sage/80">{hotel.distance}</span>
              </div>

              {/* Note */}
              <p className="font-body italic text-sage/75 text-sm leading-relaxed mb-5 flex-1">
                {hotel.note}
              </p>

              {/* Booking details */}
              <div className="border-t border-gold/15 pt-4 space-y-2">
                <div className="flex items-start gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-gold/60 mt-0.5 flex-shrink-0" aria-hidden="true">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span className="font-body text-xs text-sage/80 break-all">{hotel.bookingContact}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 text-gold/60 flex-shrink-0" aria-hidden="true">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" />
                  </svg>
                  <span className="font-body text-xs font-semibold text-gold tracking-widest">{hotel.bookingCode}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
