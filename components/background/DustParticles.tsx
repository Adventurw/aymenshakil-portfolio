"use client";

import { motion } from "framer-motion";

const particles = [
  { id: 1, left: "8%", top: "18%", size: 2, duration: 34 },
  { id: 2, left: "24%", top: "72%", size: 3, duration: 42 },
  { id: 3, left: "41%", top: "32%", size: 2, duration: 37 },
  { id: 4, left: "58%", top: "64%", size: 3, duration: 46 },
  { id: 5, left: "73%", top: "21%", size: 2, duration: 39 },
  { id: 6, left: "84%", top: "81%", size: 3, duration: 48 },
  { id: 7, left: "92%", top: "43%", size: 2, duration: 44 },
  { id: 8, left: "15%", top: "52%", size: 2, duration: 36 },
  { id: 9, left: "67%", top: "12%", size: 3, duration: 41 },
  { id: 10, left: "36%", top: "88%", size: 2, duration: 45 },
];

export default function GoldenDust() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[2] overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#D8B86A]"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            opacity: 0.10,
            filter: "blur(.5px)",
            boxShadow: "0 0 10px rgba(215,180,80,.35)",
          }}
          animate={{
            y: [-8, 10, -6],
            x: [-4, 5, -3],
            opacity: [0.03, 0.10, 0.05],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}