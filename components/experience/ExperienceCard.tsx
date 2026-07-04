"use client";

import { motion } from "framer-motion";

import ArcanaCard from "@/components/arcana/ArcanaCardBase";

import { Experience } from "@/types/experience";

import ExperienceDivider from "./ExperienceDivider";

interface ExperienceCardProps {
  item: Experience;
  index: number;
}

export default function ExperienceCard({
  item,
  index,
}: ExperienceCardProps) {
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
    >
      <ArcanaCard className="p-8">

        <p className="text-5xl font-serif text-primary">
          {item.numeral}
        </p>

        <p
          className="
            mt-4
            uppercase
            tracking-[0.4em]
            text-xs
            text-primary
          "
        >
          {item.arcana}
        </p>

        <ExperienceDivider />

        <h3 className="text-3xl font-bold">
          {item.role}
        </h3>

        <p className="mt-2 text-primary">
          {item.company}
        </p>

        <p className="mt-1 text-sm text-muted-foreground">
          {item.period}
        </p>

        <blockquote
          className="
            mt-8
            border-l-2
            border-primary/40
            pl-4
            italic
            text-muted-foreground
          "
        >
          "{item.quote}"
        </blockquote>

        <p className="mt-8 leading-8">
          {item.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="
                rounded-full
                border
                border-primary/20
                px-3
                py-1
                text-xs
                uppercase
                tracking-wider
              "
            >
              {tech}
            </span>
          ))}
        </div>

      </ArcanaCard>
    </motion.div>
  );
}