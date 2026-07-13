"use client";

import { useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

import BackgroundAudio from "./BackgroundAudio";

export default function SoundToggle() {
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <BackgroundAudio playing={playing} />

      <button
        onClick={() => setPlaying(!playing)}
        className="
          fixed
          bottom-8
          right-8
          z-[100]
          rounded-full
          border
          border-primary/30
          bg-card/80
          p-3
          backdrop-blur-xl
          transition
          hover:scale-105
        "
      >
        {playing ? (
          <Volume2 className="h-5 w-5 text-primary" />
        ) : (
          <VolumeX className="h-5 w-5 text-primary" />
        )}
      </button>
    </>
  );
}