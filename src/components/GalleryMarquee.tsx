import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { content } from "@/content/content";

interface Props {
  strip?: "strip1" | "strip2";
  reverse?: boolean;
  className?: string;
}

export default function GalleryMarquee({ strip = "strip1", reverse = false, className = "" }: Props) {
  const images = content.gallery[strip];
  const doubled = [...images, ...images];
  const scrollRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setPaused(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
    setScrollLeft(scrollRef.current?.scrollLeft ?? 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    scrollRef.current.scrollLeft = scrollLeft - (x - startX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setPaused(false);
  };

  const handleTouchStart = () => setPaused(true);
  const handleTouchEnd = () => setPaused(false);

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
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide"
        style={{
          cursor: isDragging ? "grabbing" : "grab",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
          style={{ animationPlayState: paused ? "paused" : "running" }}
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
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
