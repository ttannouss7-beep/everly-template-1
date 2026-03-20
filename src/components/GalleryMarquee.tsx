// React imported via JSX transform
import { motion } from "framer-motion";
import { content } from "@/content/content";

interface Props {
  strip?: "strip1" | "strip2";
  reverse?: boolean;
  className?: string;
}

export default function GalleryMarquee({ strip = "strip1", reverse = false, className = "" }: Props) {
  const images = content.gallery[strip];
  // Duplicate for seamless loop
  const doubled = [...images, ...images];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`overflow-hidden ${className}`}
      aria-label="Wedding photo gallery"
    >
      <div
        className="marquee-wrapper flex gap-3"
        style={{ cursor: "default" }}
        onMouseEnter={(e) => {
          const track = e.currentTarget.querySelector<HTMLElement>(".marquee-track");
          if (track) track.style.animationPlayState = "paused";
        }}
        onMouseLeave={(e) => {
          const track = e.currentTarget.querySelector<HTMLElement>(".marquee-track");
          if (track) track.style.animationPlayState = "running";
        }}
      >
        <div
          className={`marquee-track ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        >
          {doubled.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden rounded-sm"
              style={{ width: "240px", height: "340px" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                width={240}
                height={340}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
