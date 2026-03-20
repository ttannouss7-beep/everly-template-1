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
  const videoRef = useRef<HTMLVideoElement>(null);

  // Force the browser to start downloading the video immediately
  useEffect(() => {
    videoRef.current?.load();
  }, []);

  const handleTap = () => {
    if (leaving) return;
    startMusic();
    const v = videoRef.current;
    if (!v) { setLeaving(true); setTimeout(onEnter, 300); return; }
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
          className="fixed inset-0 z-[100] cursor-pointer bg-black"
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
