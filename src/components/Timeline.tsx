import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";
import { WeddingCake } from "./Illustrations";

export default function Timeline() {
  const { content, contentAR, lang } = useContent();
  const c = lang === "ar" ? contentAR.timeline : content.timeline;

  return (
    <section className="relative paper-bg section-padding" aria-label="Day programme">
      <div className="relative max-w-xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title mb-3"
          >
            {c.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="font-body italic text-sage/80 text-lg"
          >
            {c.subtitle}
          </motion.p>

          {/* Wedding cake illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="flex justify-center mt-8"
            aria-hidden="true"
          >
            <WeddingCake className="w-24 h-32 text-gold/40" />
          </motion.div>
        </div>

        {/* Timeline — vertical line with stacked items */}
        <div style={{ position: "relative" }}>
          {/* Vertical line — anchored at left: 2rem */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: "2rem",
              top: 0,
              bottom: 0,
              width: "1px",
              background:
                "linear-gradient(to bottom, rgba(180,150,90,0.35), rgba(180,150,90,0.15), transparent)",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {("items" in c ? c.items : content.timeline.items).map((item: { time: string; label: string; description: string }, i: number) => (
              <motion.div
                key={item.time}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 + i * 0.08 }}
                style={{ position: "relative", paddingLeft: "3.5rem" }}
              >
                {/* Dot — centered exactly on the line (left: 2rem, shifted left by half its width) */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "2rem",
                    top: "0.45rem",
                    width: "0.5rem",
                    height: "0.5rem",
                    borderRadius: "50%",
                    backgroundColor: "rgba(180,150,90,0.6)",
                    transform: "translateX(-50%)",
                  }}
                />

                {/* Time */}
                <div
                  className="font-display italic text-forest/60"
                  style={{ fontSize: "1.1rem", marginBottom: "0.2rem" }}
                >
                  {item.time}
                </div>

                {/* Label */}
                <div
                  className="font-cinzel text-gold uppercase"
                  style={{ fontSize: "0.72rem", letterSpacing: "0.3em" }}
                >
                  {item.label}
                </div>

                {/* Description */}
                {item.description && (
                  <p
                    className="font-body italic text-sage/65"
                    style={{ fontSize: "0.875rem", marginTop: "0.25rem", lineHeight: 1.4 }}
                  >
                    {item.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
