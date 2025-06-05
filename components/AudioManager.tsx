// dreamscape-generator/components/AudioManager.tsx
import { useEffect, useRef } from 'react';

type AudioManagerProps = {
  mood?: string; // e.g., "cosmic", "underwater", "ethereal"
};

const moodMap: Record<string, string> = {
  cosmic: '/audio/cosmic-echo.mp3',
  underwater: '/audio/underwater-hum.mp3',
  ethereal: '/audio/ethereal-winds.mp3',
  dystopian: '/audio/dystopian-rumble.mp3',
  default: '/audio/dreambase.mp3',
};

export default function AudioManager({ mood = 'default' }: AudioManagerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(moodMap[mood] || moodMap.default);
    audio.loop = true;
    audio.volume = 0.4;
    audio.play().catch(() => {
      // Browser blocked autoplay; fallback to manual trigger if needed
    });
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [mood]);

  return null; // Invisible sound layer
}
