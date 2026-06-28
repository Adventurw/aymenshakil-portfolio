"use client";

import { motion } from "framer-motion";

import { sectionReveal } from "@/lib/animations";
import { skillsSection } from "@/constants/skills";

import SectionHeading from "@/components/shared/SectionHeading";

import SkillsGrid from "./SkillsGrid";

export default function SkillsContent() {
  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow={skillsSection.eyebrow}
        title={skillsSection.title}
        description={skillsSection.description}
      />

      <SkillsGrid />
    </motion.div>
  );
}