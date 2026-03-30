import { useLang } from "@/context/LanguageContext";
import { content, contentAR } from "@/content/content";

export function useContent() {
  const { lang } = useLang();
  return { content, contentAR, lang, isAR: lang === "ar" };
}
