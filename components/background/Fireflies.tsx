"use client";

import { motion } from "framer-motion";

import { fireflies } from "@/constants/fireflies";

export default function Fireflies() {
  return (
    <>
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly.id}
          initial={{
            opacity: 0,
            x: 0,
            y: 0,
            scale: 0.8,
          }}
          animate={{
            opacity: [0.15, 0.75, 0.25, 0.85, 0.2],
            x: [0, 18, -22, 14, 0],
            y: [0, -35, 30, -18, 0],
            scale: [1, 1.25, 0.95, 1.15, 1],
          }}
          transition={{
            duration: firefly.duration,
            delay: firefly.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: firefly.size,
            height: firefly.size,
            left: firefly.left,
            top: firefly.top,
          }}
          className="
            absolute
            rounded-full
            bg-[#F8E9A1]
            blur-[1px]
            shadow-[0_0_12px_4px_rgba(248,233,161,0.45)]
            will-change-transform
          "
        />
      ))}
    </>
  );
}