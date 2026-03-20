import { motion } from "framer-motion";

interface Props {
  dark?: boolean;
  className?: string;
}

export default function SectionDivider({ dark = false, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`flex items-center justify-center py-6 px-6 ${dark ? "forest-bg" : "bg-ivory"} ${className}`}
      aria-hidden="true"
    >
      <div className="flex items-center gap-3 w-full max-w-xs">
        <div className={`flex-1 h-px ${dark ? "bg-gold/20" : "bg-gold/30"}`} />
        <svg
          viewBox="0 0 16 16"
          fill="currentColor"
          className={`w-2 h-2 flex-shrink-0 ${dark ? "text-gold/35" : "text-gold/50"}`}
        >
          <polygon points="8,0 10,6 16,6 11,10 13,16 8,12 3,16 5,10 0,6 6,6" />
        </svg>
        <div className={`flex-1 h-px ${dark ? "bg-gold/20" : "bg-gold/30"}`} />
      </div>
    </motion.div>
  );
}
