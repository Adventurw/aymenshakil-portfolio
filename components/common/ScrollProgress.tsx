"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <>
      {/* Gold progress line */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed
          left-0
          top-0
          z-[9999]

          h-[3px]
          w-full
          origin-left

          bg-gradient-to-r
          from-[#C7A14A]
          via-[#E4C76B]
          to-[#C7A14A]

          shadow-[0_0_20px_rgba(199,161,74,.7)]
        "
      />

      {/* Subtle glow underneath */}
      <motion.div
        style={{ scaleX }}
        className="
          fixed
          left-0
          top-0
          z-[9998]

          h-[8px]
          w-full
          origin-left

          bg-[#C7A14A]/20

          blur-md
        "
      />
    </>
  );
}