"use client";

import AuroraBackground from "./AuroraBackground";
import EngineeringGrid from "./EngineeringGrid";
import NoiseTexture from "./NoiseTexture";
import Fireflies from "./Fireflies";
import MouseGlow from "./MouseGlow";
import ScrollParallax from "./ScrollParallax";
import BackgroundCards from "./BackgroundCards";
import DustParticles from "./DustParticles";

export default function BackgroundEffects() {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        overflow-hidden
      "
      aria-hidden="true"
    >
      <ScrollParallax>
        <AuroraBackground />
        <EngineeringGrid />
      </ScrollParallax>
      <BackgroundCards />
      <NoiseTexture />
      <DustParticles />
      <Fireflies />

      <MouseGlow />
    </div>
  );
}