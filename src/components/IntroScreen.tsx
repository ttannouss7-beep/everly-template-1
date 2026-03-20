import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMusic } from "@/context/MusicContext";
import { content } from "@/content/content";

interface Props {
  onEnter: () => void;
}

export default function IntroScreen({ onEnter }: Props) {
  const { startMusic } = useMusic();
  const [leaving, setLeaving] = useState(false);
  const [ready, setReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Wait until the video has buffered enough to play instantly
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onReady = () => setReady(true);
    v.addEventListener("canplay", onReady);
    return () => v.removeEventListener("canplay", onReady);
  }, []);

  const handleTap = () => {
    if (leaving || !ready) return;
    startMusic();
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = 0;
    const p = v.play();
    if (p) p.catch(() => { setLeaving(true); setTimeout(onEnter, 300); });
  };

  const enter = () => {
    if (leaving) return;
    setLeaving(true);
    setTimeout(onEnter, 900);
  };

  return (
    <AnimatePresence>
      {!leaving && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] cursor-pointer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          onClick={handleTap}
        >
          <video
            ref={videoRef}
            src={content.intro.videoSrc}
            muted
            playsInline
            preload="auto"
            onEnded={enter}
            onError={enter}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
