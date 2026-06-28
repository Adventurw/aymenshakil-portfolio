"use client";

import { motion } from "framer-motion";

import { about } from "@/constants/about";
import { sectionReveal } from "@/lib/animations";

import AboutCard from "./AboutCard";

import SectionHeading from "@/components/shared/SectionHeading";

export default function AboutContent() {
  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
       <SectionHeading
        title={about.heading}
        description={about.description}
        eyebrow={about.title}
      />

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        {about.cards.map((card) => (
          <AboutCard
            key={card.title}
            {...card}
            icon={card.icon as any}
          />
        ))}
      </div>
    </motion.div>
  );
}