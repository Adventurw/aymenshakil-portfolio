"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";

import SkillCard from "@/components/skills/SkillCard";

import {
  fadeUp,
  staggerContainer,
} from "@/lib/animations";

import { skills } from "@/constants/skills";
import Reveal from "../common/Reveal";

export default function Skills() {
  return (
    <Section id="skills">
      <Container>
        <Reveal>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-primary">
            The Arsenal
          </p>

          <h2 className="text-4xl font-bold">
            Technologies & Expertise
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-muted-foreground">
            My toolkit spans modern frontend development,
            software engineering principles, quality assurance,
            and Information Systems Audit.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            grid
            gap-8
            md:grid-cols-2
            xl:grid-cols-3
          "
        >
          {skills.map((skill) => (
            <SkillCard
              key={skill.title}
              {...skill}
            />
          ))}
        </motion.div>
      </Reveal>
      </Container>
    </Section>
  );
}