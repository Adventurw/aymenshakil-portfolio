"use client";

import { motion } from "framer-motion";

interface JourneyYearProps {
  year: string;
}

export default function JourneyYear({
  year,
}: JourneyYearProps) {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      whileInView={{
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        absolute
        left-1/2
        top-8
        hidden
        h-16
        w-16
        -translate-x-1/2
        items-center
        justify-center
        rounded-full
        border
        border-[#C7A14A]/30
        bg-card
        shadow-[0_0_40px_rgba(199,161,74,.18)]
        lg:flex
      "
    >
      <span
        className="
          text-sm
          font-semibold
          text-primary
        "
      >
        {year}
      </span>
    </motion.div>
  );
}