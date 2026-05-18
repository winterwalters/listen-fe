import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { Howl } from "howler";

export type TrackMeta = {
  title: string;
  artist: string;
  audioUrl: string;
};

type PlaybackContextValue = {
  track: Omit<TrackMeta, "audioUrl"> | null;
  activeAudioUrl: string | null;
  isPlaying: boolean;
  positionSec: number;
  durationSec: number;
  activateHowl: (howl: Howl, meta: TrackMeta) => void;
  detachHowl: (howl: Howl) => void;
  seekTo: (seconds: number) => void;
  togglePlayPause: () => void;
  skipBy: (deltaSec: number) => void;
};

const PlaybackContext = createContext<PlaybackContextValue | null>(null);

export function PlaybackProvider({ children }: { children: React.ReactNode }) {
  const activeHowlRef = useRef<Howl | null>(null);
  const [track, setTrack] = useState<Omit<TrackMeta, "audioUrl"> | null>(null);
  const [activeAudioUrl, setActiveAudioUrl] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [positionSec, setPositionSec] = useState(0);
  const [durationSec, setDurationSec] = useState(0);

  const activateHowl = useCallback((howl: Howl, meta: TrackMeta) => {
    if (activeHowlRef.current && activeHowlRef.current !== howl) {
      activeHowlRef.current.stop();
    }
    activeHowlRef.current = howl;
    setTrack({ title: meta.title, artist: meta.artist });
    setActiveAudioUrl(meta.audioUrl);
    const d = howl.duration();
    if (d && !Number.isNaN(d)) setDurationSec(d);
  }, []);

  const detachHowl = useCallback((howl: Howl) => {
    if (activeHowlRef.current !== howl) return;
    activeHowlRef.current = null;
    setTrack(null);
    setActiveAudioUrl(null);
    setIsPlaying(false);
    setPositionSec(0);
    setDurationSec(0);
  }, []);

  const seekTo = useCallback((seconds: number) => {
    const howl = activeHowlRef.current;
    if (!howl) return;
    const d = howl.duration();
    const upper = d > 0 && !Number.isNaN(d) ? d : Number.POSITIVE_INFINITY;
    const clamped = Math.min(Math.max(0, seconds), upper);
    howl.seek(clamped);
    setPositionSec(clamped);
  }, []);

  const togglePlayPause = useCallback(() => {
    const howl = activeHowlRef.current;
    if (!howl) return;
    if (howl.playing()) howl.pause();
    else howl.play();
  }, []);

  const skipBy = useCallback((deltaSec: number) => {
    const howl = activeHowlRef.current;
    if (!howl) return;
    const d = howl.duration();
    const cur = howl.seek() as number;
    const upper = d > 0 && !Number.isNaN(d) ? d : Number.POSITIVE_INFINITY;
    const next = Math.min(Math.max(0, cur + deltaSec), upper);
    howl.seek(next);
    setPositionSec(next);
  }, []);

  useEffect(() => {
    if (!activeAudioUrl) return;

    const tick = () => {
      const howl = activeHowlRef.current;
      if (!howl) return;
      setIsPlaying(howl.playing());
      const pos = howl.seek() as number;
      setPositionSec(pos);
      const dur = howl.duration();
      if (dur && !Number.isNaN(dur)) setDurationSec(dur);
    };

    tick();
    const id = window.setInterval(tick, 200);
    return () => window.clearInterval(id);
  }, [activeAudioUrl]);

  const value = useMemo(
    () =>
      ({
        track,
        activeAudioUrl,
        isPlaying,
        positionSec,
        durationSec,
        activateHowl,
        detachHowl,
        seekTo,
        togglePlayPause,
        skipBy,
      }) satisfies PlaybackContextValue,
    [
      track,
      activeAudioUrl,
      isPlaying,
      positionSec,
      durationSec,
      activateHowl,
      detachHowl,
      seekTo,
      togglePlayPause,
      skipBy,
    ],
  );

  return (
    <PlaybackContext.Provider value={value}>{children}</PlaybackContext.Provider>
  );
}

export function usePlayback() {
  const ctx = useContext(PlaybackContext);
  if (!ctx) {
    throw new Error("usePlayback must be used within PlaybackProvider");
  }
  return ctx;
}
