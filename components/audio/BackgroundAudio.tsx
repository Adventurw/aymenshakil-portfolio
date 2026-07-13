"use client";

import { useEffect, useRef } from "react";

interface BackgroundAudioProps {
  playing: boolean;
}

export default function BackgroundAudio({
  playing,
}: BackgroundAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Set volume once
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.volume = 0.25;
  }, []);

  // Play / Pause
  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    if (playing) {
      audio.play().catch((err) => {
        console.log("Audio playback prevented:", err);
      });
    } else {
      audio.pause();
      audio.currentTime = 0; // Optional: restart from beginning next time
    }
  }, [playing]);

  return (
    <audio
      ref={audioRef}
      loop
      preload="auto"
    >
      <source src="/noise.mp3" type="audio/mpeg" />
    </audio>
  );
}