"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 250,
    damping: 28,
  });

  const y = useSpring(mouseY, {
    stiffness: 250,
    damping: 28,
  });

  useEffect(() => {
    function move(e: MouseEvent) {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    }

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
      pointer-events-none
      fixed
      z-[999]
      h-52
      w-52
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-[#C7A14A]/10
      blur-[90px]
      mix-blend-screen
      "
    />
  );
}