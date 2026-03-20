// React imported via JSX transform
import { motion } from "framer-motion";
import { useLang, type Language } from "@/context/LanguageContext";
import { content } from "@/content/content";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLang();

  if (!content.enableLanguageSwitcher) return null;

  const options: { code: Language; label: string }[] = [
    { code: "en", label: "EN" },
    { code: "ar", label: "AR" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.6 }}
      className="fixed top-4 right-4 z-50 flex items-center rounded-full bg-white/92 backdrop-blur-sm border border-gold/25 shadow-soft p-1 gap-0.5"
      role="group"
      aria-label="Language selector"
    >
      {options.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className={`relative w-9 h-9 rounded-full font-cinzel text-xs font-500 tracking-wide transition-all duration-300 ${
            lang === code
              ? "bg-[#3D2B1A] text-white shadow-sm"
              : "text-[#6B5744] hover:bg-gold/10"
          }`}
          style={{ fontSize: "0.68rem", letterSpacing: "0.06em" }}
          aria-pressed={lang === code}
          aria-label={`Switch to ${code === "en" ? "English" : "Arabic"}`}
        >
          {label}
        </button>
      ))}
    </motion.div>
  );
}
