import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageProvider } from "@/context/LanguageContext";
import { MusicProvider } from "@/context/MusicContext";

// Fixed UI
import IntroScreen from "@/components/IntroScreen";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import MusicButton from "@/components/MusicButton";

// Page sections
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import Welcome from "@/components/Welcome";
import Venue from "@/components/Venue";
import Timeline from "@/components/Timeline";
import VenuePhoto from "@/components/VenuePhoto";
import Gifts from "@/components/Gifts";
import GalleryMarquee from "@/components/GalleryMarquee";
import RSVP from "@/components/RSVP";
import Footer from "@/components/Footer";

export default function App() {
  const [entered, setEntered] = useState(false);
  const mainRef = useRef<HTMLElement>(null);

  const handleEnter = () => {
    setEntered(true);
    setTimeout(() => mainRef.current?.focus(), 950);
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

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: entered ? 1 : 0 }}
            transition={{ duration: 0.6, delay: entered ? 0.1 : 0 }}
            aria-hidden={!entered}
          >
            <LanguageSwitcher />
            <MusicButton />

            <main id="main-content" ref={mainRef} tabIndex={-1} style={{ outline: "none" }}>
              <Hero />
              <Countdown />
              <Welcome />
              <Venue />
              <Timeline />
              <VenuePhoto />
              <Gifts />
              <div className="paper-bg py-4">
                <GalleryMarquee strip="strip2" reverse />
              </div>
              <RSVP />
              <Footer />
            </main>
          </motion.div>
        </div>
      </MusicProvider>
    </LanguageProvider>
  );
}
