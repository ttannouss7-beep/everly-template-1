import {
  createContext,
  useContext,
  useRef,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { content } from "@/content/content";

interface MusicContextValue {
  playing: boolean;
  startMusic: () => void;
  toggleMusic: () => void;
}

const MusicContext = createContext<MusicContextValue>({
  playing: false,
  startMusic: () => {},
  toggleMusic: () => {},
});

export function MusicProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const getAudio = useCallback(() => {
    if (!audioRef.current && content.musicSrc) {
      const audio = new Audio(content.musicSrc);
      audio.loop = true;
      audio.volume = 0.4;
      audioRef.current = audio;
    }
    return audioRef.current;
  }, []);

  const startMusic = useCallback(() => {
    if (!content.enableMusic || !content.musicSrc) return;
    const audio = getAudio();
    if (audio && !audio.currentTime) {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [getAudio]);

  const toggleMusic = useCallback(() => {
    if (!content.enableMusic || !content.musicSrc) return;
    const audio = getAudio();
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  }, [getAudio]);

  return (
    <MusicContext.Provider value={{ playing, startMusic, toggleMusic }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  return useContext(MusicContext);
}
