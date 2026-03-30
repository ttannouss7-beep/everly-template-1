import { useState, useRef, useEffect, lazy, Suspense } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageProvider } from "@/context/LanguageContext";
import { MusicProvider } from "@/context/MusicContext";

import IntroScreen from "@/components/IntroScreen";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MusicButton from "@/components/MusicButton";

import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Welcome from "@/components/Welcome";
import Venue from "@/components/Venue";

const Timeline = lazy(() => import("@/components/Timeline"));
const VenuePhoto = lazy(() => import("@/components/VenuePhoto"));
const Gifts = lazy(() => import("@/components/Gifts"));
import GalleryMarquee from "@/components/GalleryMarquee";
const RSVP = lazy(() => import("@/components/RSVP"));
const Footer = lazy(() => import("@/components/Footer"));

export default function App() {
  const [entered, setEntered] = useState(false);
  const [fontsReady, setFontsReady] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.fonts.ready.then(() => setFontsReady(true));
    const fallback = setTimeout(() => setFontsReady(true), 3000);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (!entered) return;
    const id = setTimeout(() => mainRef.current?.focus(), 950);
    return () => clearTimeout(id);
  }, [entered]);

  const handleEnter = () => {
    setEntered(true);
  };

  return (
    <LanguageProvider>
      <MusicProvider>
        <div className="relative">
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:text-forest focus:font-body focus:text-sm focus:rounded focus:shadow-lg"
          >
            Skip to main content
          </a>

          <AnimatePresence>
            {!entered && (
              <IntroScreen onEnter={handleEnter} />
            )}
          </AnimatePresence>

          {entered && fontsReady && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <LanguageSwitcher />
              <MusicButton />

              <main id="main-content" ref={mainRef} tabIndex={-1} style={{ outline: "none" }}>
                <Hero />
                <Countdown />
                <Welcome />
                <Venue />
                <Suspense fallback={null}>
                  <Timeline />
                  <VenuePhoto />
                  <Gifts />
                  <div className="paper-bg py-4">
                    <GalleryMarquee strip="strip2" reverse />
                  </div>
                  <RSVP />
                  <Footer />
                </Suspense>
              </main>
            </motion.div>
          )}
        </div>
      </MusicProvider>
    </LanguageProvider>
  );
}
