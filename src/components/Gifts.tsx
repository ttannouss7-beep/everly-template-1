import { motion } from "framer-motion";
import { content } from "@/content/content";
import { GiftBow } from "./Illustrations";

export default function Gifts() {
  const { gifts } = content;

  return (
    <section className="bg-ivory section-padding" aria-label="Gift information">
      <div className="max-w-2xl mx-auto">

        {/* Divider */}
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

        {/* Gift bow illustration */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex justify-center mb-6"
          aria-hidden="true"
        >
          <GiftBow className="w-28 h-24 text-gold/35" />
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="section-title text-center mb-6"
        >
          {gifts.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-body italic text-sage/80 text-center text-lg leading-relaxed mb-12 max-w-md mx-auto"
        >
          {gifts.subtitle}
        </motion.p>

        {/* Bank account cards */}
        <div className="space-y-5">
          {gifts.accounts.map((account, i) => (
            <motion.div
              key={account.bank}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              className="card-light"
            >
              <div className="h-px bg-gold/50 -mx-8 -mt-8 mb-6" aria-hidden="true" />

              {/* Whish Money logo */}
              <div className="flex justify-center mb-4">
                <img
                  src="https://cdn.prod.website-files.com/6762f4acf0dd8a6b998dfa16/676d32a11708f11b333c681b_Whish%20Logo.svg"
                  alt="Whish Money"
                  className="h-6 w-auto"
                />
              </div>

              {/* Bank name */}
              <span className="font-body text-xs tracking-[0.22em] uppercase text-gold mb-2 block">
                {account.bank}
              </span>

              {/* Account holder */}
              <h3
                className="font-display text-forest leading-tight mb-5"
                style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)" }}
              >
                {account.name}
              </h3>

              {/* IBAN / BIC */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-body text-xs tracking-[0.18em] uppercase text-gold/70 w-20 flex-shrink-0">
                    IBAN
                  </span>
                  <span className="font-body text-forest/80 text-sm tracking-wider break-all">
                    {account.iban}
                  </span>
                </div>
                {account.bic && (
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="font-body text-xs tracking-[0.18em] uppercase text-gold/70 w-20 flex-shrink-0">
                      BIC/SWIFT
                    </span>
                    <span className="font-body text-forest/80 text-sm tracking-wider">
                      {account.bic}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
