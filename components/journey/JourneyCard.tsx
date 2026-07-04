"use client";

import { motion } from "framer-motion";

import { JourneyItem } from "@/types/journey";

import {
  FaGraduationCap,
  FaHammer,
  FaMagnifyingGlass,
  FaWandMagicSparkles,
  FaShieldHalved,
} from "react-icons/fa6";

interface JourneyCardProps {
  item: JourneyItem;

  index: number;
}

export default function JourneyCard({
  item,
  index,
}: JourneyCardProps) {
  const iconMap = {
  graduation: FaGraduationCap,

  builder: FaHammer,

  analyst: FaMagnifyingGlass,

  creator: FaWandMagicSparkles,

  auditor: FaShieldHalved,
};

  const Icon = iconMap[item.icon];

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: index % 2 === 0 ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      whileHover={{
        y: -8,
      }}
      className="
        rounded-3xl
        border
        border-primary/15
        bg-card/80
        backdrop-blur-xl
        p-8
        shadow-[0_15px_40px_rgba(0,0,0,.15)]
      "
    >
      <div className="flex items-center gap-4">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            bg-primary/10
          "
        >
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div>

          <p className="text-sm uppercase tracking-[0.3em] text-primary">
            {item.year}
          </p>

          <h3 className="mt-1 text-2xl font-bold">
            {item.title}
          </h3>

          <p className="mt-1 text-primary">
            {item.subtitle}
          </p>

        </div>

      </div>

      <p className="mt-6 leading-7 text-muted-foreground">
        {item.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">

        {item.technologies?.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              border
              border-primary/15
              px-3
              py-1
              text-sm
            "
          >
            {tech}
          </span>
        ))}

      </div>
    </motion.div>
  );
}