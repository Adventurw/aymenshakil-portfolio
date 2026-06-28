"use client";

import { motion } from "framer-motion";

import { skills } from "@/constants/skills";
import { staggerContainer } from "@/lib/animations";

import SkillCard from "./SkillCard";

export default function SkillsGrid() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="mt-16 grid gap-8 lg:grid-cols-2"
    >
      {skills.map((skill) => (
        <SkillCard
          key={skill.title}
          {...skill}
        />
      ))}
    </motion.div>
  );
}