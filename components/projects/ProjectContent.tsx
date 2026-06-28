"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import {
  projects,
  projectsSection,
} from "@/constants/projects";

import { sectionReveal } from "@/lib/animations";

import SectionHeading from "@/components/shared/SectionHeading";

import ProjectFilter from "./ProjectFilter";
import ProjectGrid from "./ProjectGrid";

export default function ProjectContent() {
  const [activeFilter, setActiveFilter] =
    useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter(
      (project) =>
        project.category === activeFilter
    );
  }, [activeFilter]);

  return (
    <motion.div
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <SectionHeading
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.description}
      />

      <ProjectFilter
        active={activeFilter}
        setActive={setActiveFilter}
      />

      <ProjectGrid
        projects={filteredProjects}
      />
    </motion.div>
  );
}