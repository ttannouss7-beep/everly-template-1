import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";

export default function Venue() {
  const { content, contentAR, lang } = useContent();
  const c = lang === "ar" ? contentAR.venue : content.venue;

  return (
    <section
      className="relative bg-gold section-padding"
      aria-label="Wedding venue and events"
    >
      <div className="relative max-w-5xl mx-auto text-center">

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
          className="font-cinzel text-white/75 mb-12 md:mb-16"
          style={{ fontSize: "0.75rem", letterSpacing: "0.38em" }}
        >
          {c.subtitle.toUpperCase()}
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 text-left">
          {("events" in c ? c.events : content.venue.events).map((event: { id: string; title: string; date: string; time: string; location: string; address: string; mapLink: string; description: string }, i: number) => (
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

              <div className="space-y-3.5">
                <DetailRow icon={<CalendarIcon />} text={event.date} />
                {event.time && <DetailRow icon={<ClockIcon />} text={event.time} />}
                <DetailRow icon={<PinIcon />} text={`${event.location} — ${event.address}`} />
                {event.description && <DetailRow icon={<InfoIcon />} text={event.description} />}
              </div>

              <div className="mt-7 flex justify-center">
                <a
                  href={event.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-cinzel text-gold border border-gold/50 px-6 py-3 rounded-full hover:bg-gold/8 transition-colors duration-300"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.3em" }}
                  aria-label={`View ${event.location} on map`}
                >
                  <PinIcon />
                  {lang === "ar" ? "عرض الموقع" : "Location"}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DetailRow({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 text-gold flex-shrink-0">{icon}</span>
      <span className="font-body text-sage text-base leading-snug">{text}</span>
    </div>
  );
}

function CalendarIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>;
}
function ClockIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>;
}
function PinIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>;
}
function InfoIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>;
}
