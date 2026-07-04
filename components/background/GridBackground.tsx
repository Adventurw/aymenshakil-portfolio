"use client";

import { motion } from "framer-motion";

export default function GridBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),
          linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)]
          bg-size-[48px_48px]
          opacity-20
        "
      />

      {/* Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute left-1/2 top-1/3
          h-125 w-125
          -translate-x-1/2
          rounded-full
          bg-primary/15
          blur-3xl
        "
      />
    </div>
  );
}