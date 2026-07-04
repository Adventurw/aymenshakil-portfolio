"use client";

import { motion } from "framer-motion";

const ribbons = [
  {
    width: 900,
    height: 340,
    top: "8%",
    left: "-10%",
    color: "rgba(86,124,141,.18)",
    duration: 42,
  },
  {
    width: 1100,
    height: 420,
    top: "38%",
    right: "-20%",
    color: "rgba(200,217,230,.10)",
    duration: 55,
  },
  {
    width: 800,
    height: 300,
    bottom: "-8%",
    left: "18%",
    color: "rgba(245,239,235,.08)",
    duration: 48,
  },
];

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {ribbons.map((ribbon, index) => (
        <motion.div
          key={index}
          animate={{
            rotate: [-8, 8, -8],
            x: [-50, 70, -40],
            y: [-20, 35, -20],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: ribbon.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            width: ribbon.width,
            height: ribbon.height,
            top: ribbon.top,
            left: ribbon.left,
            right: ribbon.right,
            bottom: ribbon.bottom,
            background: ribbon.color,
          }}
          className="
            absolute
            rounded-full
            blur-[160px]
          "
        />
      ))}
    </div>
  );
}