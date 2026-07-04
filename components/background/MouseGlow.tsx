"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MouseGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 60,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 60,
    damping: 20,
  });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    }

    window.addEventListener("mousemove", handleMove);

    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="
        absolute
        h-125
        w-125
        rounded-full
        opacity-20
        blur-[140px]
      "
    >
      <div
        className="
          h-full
          w-full
          rounded-full
          bg-[radial-gradient(circle,rgba(86,124,141,.35)_0%,transparent_70%)]
        "
      />
    </motion.div>
  );
}