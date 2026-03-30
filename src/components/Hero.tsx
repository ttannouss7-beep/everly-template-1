import { useRef } from "react";
import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";

export default function Hero() {
  const { content, contentAR, lang } = useContent();
  const videoRef = useRef<HTMLVideoElement>(null);
  const c = lang === "ar" ? contentAR.hero : content.hero;

  const scrollDown = () => {
    document.getElementById("countdown")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative h-dvh min-h-[600px] flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {content.hero.videoSrc && (
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay muted playsInline loop
          poster={content.hero.fallbackImage}
          aria-hidden="true"
        >
          <source src={content.hero.videoSrc} type="video/mp4" />
        </video>
      )}

      {!content.hero.videoSrc && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${content.hero.fallbackImage})` }}
          role="img" aria-label="Wedding venue"
        />
      )}

      {/* Overlay — dark tint so text is readable */}
      <div
        className="absolute inset-0"
        style={{ background: "rgba(20,14,6,0.60)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-end text-center px-6 pb-8 h-full">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-cinzel text-white/90 tracking-[0.44em] uppercase mb-8 md:mb-10"
          style={{ fontSize: "0.72rem" }}
        >
          {c.preTitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-white leading-[0.88]"
          style={{ fontSize: "clamp(3.2rem, 14vw, 8rem)" }}
        >
          <span className="block">
            {lang === "ar" ? contentAR.couple.groom : content.couple.groom}
          </span>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-center justify-center gap-4 my-4 md:my-5"
            aria-hidden="true"
          >
            <span className="h-px w-12 md:w-20 bg-gold/45 block" />
            <span
              className="font-body italic text-gold/75"
              style={{ fontSize: "clamp(1rem, 3vw, 1.6rem)", letterSpacing: "0.4em" }}
            >
              &amp;
            </span>
            <span className="h-px w-12 md:w-20 bg-gold/45 block" />
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55 }}
            className="block"
          >
            {lang === "ar" ? contentAR.couple.bride : content.couple.bride}
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex items-center gap-3 mt-8 mb-5 w-40 md:w-64"
          aria-hidden="true"
        >
          <div className="flex-1 h-px bg-gold/38" />
          <svg viewBox="0 0 10 10" fill="currentColor" className="w-1.5 h-1.5 text-gold/55 flex-shrink-0">
            <circle cx="5" cy="5" r="5" />
          </svg>
          <div className="flex-1 h-px bg-gold/38" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-cinzel text-champagne/65 tracking-[0.28em] uppercase"
          style={{ fontSize: "0.78rem" }}
        >
          {c.date}&nbsp;&nbsp;·&nbsp;&nbsp;{c.location}
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={scrollDown}
          className="mt-12 md:mt-16 flex flex-col items-center gap-2 cursor-pointer group"
          aria-label="Scroll down"
        >
          <span className="font-body text-champagne/45 text-xs tracking-[0.4em] uppercase group-hover:text-champagne/75 transition-colors duration-300">
            {c.ctaLabel}
          </span>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="text-champagne/38 group-hover:text-champagne/65 transition-colors duration-300"
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
