import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";
import { useCountdown } from "@/hooks/useCountdown";

export default function Countdown() {
  const { content, contentAR, lang } = useContent();
  const c = lang === "ar" ? contentAR.countdown : content.countdown;
  const { days, hours, minutes, isPast } = useCountdown(content.weddingDate);

  const units = [
    { value: days,    label: c.labels.days },
    { value: hours,   label: c.labels.hours },
    { value: minutes, label: c.labels.minutes },
  ];

  return (
    <section
      id="countdown"
      className="relative paper-bg section-padding"
      aria-label="Countdown to the wedding"
    >
      <div className="relative max-w-2xl mx-auto text-center">

        {/* Script title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="section-title mb-3"
        >
          {c.title}
        </motion.h2>

        {/* "UNTIL DATE" subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="font-cinzel text-gold mb-14 md:mb-16"
          style={{ fontSize: "0.75rem", letterSpacing: "0.35em" }}
        >
          {c.subtitle.toUpperCase()}
        </motion.p>

        {isPast ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display text-forest text-4xl md:text-6xl"
            role="status" aria-live="polite"
          >
            {lang === "ar" ? "اليوم هو اليوم المنتظر!" : "Today is the day!"}
          </motion.div>
        ) : (
          <div
            className="flex items-start justify-center"
            role="timer"
            aria-label="Countdown timer"
          >
            {units.map((unit, i) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="flex items-start"
              >
                {/* Number + label */}
                <div className="text-center px-5 md:px-10">
                  <div
                    className="font-body italic text-forest/80 font-light leading-none"
                    style={{ fontSize: "clamp(3.5rem, 13vw, 6.5rem)" }}
                    aria-label={`${unit.value} ${unit.label}`}
                  >
                    {unit.value}
                  </div>
                  <div
                    className="font-cinzel text-gold mt-3"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.3em" }}
                  >
                    {unit.label.toUpperCase()}
                  </div>
                </div>

                {/* Pipe separator */}
                {i < units.length - 1 && (
                  <div
                    className="text-gold/35 select-none pt-2"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)" }}
                    aria-hidden="true"
                  >
                    |
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
