"use client";

import { motion } from "framer-motion";

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Node",
  "SQL",
  "AI",
  "Docker",
  "Git",
  "Tailwind",
];

export default function FloatingTech() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {tech.map((item, index) => (
        <motion.div
          key={item}
          className="
            absolute
            text-sm
            tracking-widest
            uppercase
            text-primary/20
            font-medium
          "
          style={{
            left: `${10 + index * 10}%`,
            top: `${15 + (index % 4) * 18}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            rotate: [-2, 2, -2],
          }}
          transition={{
            duration: 8 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {item}
        </motion.div>
      ))}
    </div>
  );
}