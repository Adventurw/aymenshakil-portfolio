"use client";

import { motion } from "framer-motion";

import ArcanaCorner from "./ArcanaCorner";
import ArcanaGlow from "./ArcanaGlow";
import ArcanaTexture from "./ArcanaTexture";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ArcanaFrame({
  children,
  className = "",
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        rotate: 1.5,
        scale: 1.015,
      }}
      transition={{
        duration: .28,
      }}
      className={`
      relative
      overflow-hidden
      rounded-[40px]

      border
      border-primary/30

      bg-card/75

      backdrop-blur-xl

      shadow-[0_20px_60px_rgba(0,0,0,.25)]

      ${className}
    `}
    >
      <ArcanaGlow />

      <ArcanaTexture />

      {/* Inner engraved frame */}

      <div
        className="
        pointer-events-none
        absolute
        inset-5
        rounded-[32px]
        border
        border-primary/10
      "
      />

      {/* Corners */}

      <ArcanaCorner className="top-7 left-7" />

      <ArcanaCorner className="top-7 right-7 rotate-90" />

      <ArcanaCorner className="bottom-7 right-7 rotate-180" />

      <ArcanaCorner className="bottom-7 left-7 -rotate-90" />

      {/* Top ornament */}

      <div
        className="
        absolute
        left-1/2
        top-6
        h-3
        w-3
        -translate-x-1/2
        rotate-45
        border
        border-primary/30
      "
      />

      {/* Bottom ornament */}

      <div
        className="
        absolute
        bottom-6
        left-1/2
        h-3
        w-3
        -translate-x-1/2
        rotate-45
        border
        border-primary/30
      "
      />

      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}