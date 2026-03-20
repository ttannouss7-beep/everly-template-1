import { motion } from "framer-motion";
import { content } from "@/content/content";
import { contentAR } from "@/content/content";
import { useLang } from "@/context/LanguageContext";
import { FloralSprigs } from "./Illustrations";

export default function InformalEvents() {
  const { lang } = useLang();
  const c = lang === "ar" ? contentAR.informalEvents : content.informalEvents;

  return (
    <section className="relative bg-gold section-padding" aria-label="Pre and post wedding events">
      <div className="relative max-w-4xl mx-auto text-center">

        {/* Floral sprigs illustration */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="flex justify-center mb-6"
          aria-hidden="true"
        >
          <FloralSprigs className="w-64 h-20 text-white/40" />
        </motion.div>

        {/* Script title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-display text-white leading-none mb-3"
          style={{ fontSize: "clamp(3.2rem, 10vw, 6rem)" }}
        >
          {c.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-cinzel text-white/70 mb-12 md:mb-16"
          style={{ fontSize: "0.65rem", letterSpacing: "0.38em" }}
        >
          {c.subtitle.toUpperCase()}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-left">
          {content.informalEvents.events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.12 + i * 0.15 }}
              className="bg-white rounded-2xl p-7 md:p-9 shadow-md"
            >
              <h3
                className="font-display text-forest leading-none mb-5"
                style={{ fontSize: "clamp(2rem, 6vw, 2.8rem)" }}
              >
                {event.title}
              </h3>

              <div className="h-px bg-gold/25 mb-5" aria-hidden="true" />

              <div className="space-y-3 mb-5">
                <div className="flex items-center gap-2.5">
                  <CalendarIcon />
                  <span className="font-body text-sage text-base">{event.date}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ClockIcon />
                  <span className="font-body text-sage text-base">{event.time}</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <PinIcon />
                  <span className="font-body text-sage text-base leading-snug">{event.location}</span>
                </div>
              </div>

              <p className="font-body italic text-sage/80 text-base leading-relaxed">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function ClockIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold flex-shrink-0" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
