import React from "react";
import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";

const TRANSPORT_ICONS: Record<string, React.ReactNode> = {
  car:   <CarIcon />,
  train: <TrainIcon />,
  taxi:  <TaxiIcon />,
  bus:   <BusIcon />,
};

export default function Location() {
  const { content, contentAR, lang } = useContent();
  const c = lang === "ar" ? contentAR.location : content.location;

  return (
    <section className="bg-ivory section-padding" aria-label="Location and transport information">
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

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-subtitle mb-5"
          >
            {content.location.venueName}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-title mb-4"
          >
            {c.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body italic text-sage/65 text-lg mb-8"
          >
            {content.location.address}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={content.location.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold"
              aria-label="View venue on Google Maps"
            >
              <MapPinIcon className="w-3.5 h-3.5" />
              {lang === "ar" ? "عرض على الخريطة" : "View on Map"}
            </a>
          </motion.div>
        </div>

        {/* Transport grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {content.location.transport.map((item, i) => (
            <motion.div
              key={item.mode}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
              className="card-light flex gap-4"
            >
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gold/15 flex items-center justify-center text-gold">
                {TRANSPORT_ICONS[item.icon] ?? <MapPinIcon className="w-4 h-4" />}
              </div>
              <div>
                <h3 className="font-body font-semibold text-forest text-base mb-1 tracking-wide">
                  {item.mode}
                </h3>
                <p className="font-body text-forest/75 text-sm leading-relaxed">
                  {item.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2" />
      <circle cx="7" cy="17" r="2" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  );
}

function TrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <rect x="4" y="2" width="16" height="17" rx="2" />
      <path d="M9 21l3-4 3 4" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <circle cx="8.5" cy="17" r="1" />
      <circle cx="15.5" cy="17" r="1" />
    </svg>
  );
}

function TaxiIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M14 16H9m10 0h3v-3.15a8 8 0 0 0-2.24-5.61l-1.58-1.61a2 2 0 0 0-1.44-.62H7.84a2 2 0 0 0-1.44.62l-1.58 1.61A8 8 0 0 0 2.5 12.85V16h3" />
      <circle cx="6.5" cy="16.5" r="2.5" />
      <circle cx="16.5" cy="16.5" r="2.5" />
    </svg>
  );
}

function BusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
      <path d="M8 6v6M15 6v6M2 12h19.6M18 18h3s.5-1.7.8-3.8c.3-2.2.2-4.2.2-4.2H2S2 12.5 2.2 14.2C2.5 16.3 3 18 3 18h3" />
      <circle cx="6.5" cy="18.5" r="2.5" />
      <circle cx="16.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
