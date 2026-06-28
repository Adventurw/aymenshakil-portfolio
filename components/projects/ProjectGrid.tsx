"use client";

import { AnimatePresence, motion } from "framer-motion";

import { staggerContainer } from "@/lib/animations";

import { Project } from "@/types/projects";

import ProjectCard from "./ProjectCard";

interface ProjectGridProps {
  projects: Project[];
}

export default function ProjectGrid({
  projects,
}: ProjectGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      layout
      className="mt-16 grid gap-8 lg:grid-cols-2"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            layout
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: -20,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}