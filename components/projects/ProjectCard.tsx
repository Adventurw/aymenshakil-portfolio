"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { Project } from "@/types/projects";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";

import FeaturedBadge from "./FeaturedBadge";
import ProjectStatusBadge from "./ProjectStatusBadge";
import ProjectTechStack from "./ProjectTechStack";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  const Github = Icons.github;
  const Arrow = Icons.arrowUpRight;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <Card className="overflow-hidden p-0">

        {/* Project Image */}
        <div className="relative overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Card Content */}
        <div className="p-6">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2">
            {project.featured && <FeaturedBadge />}

            <ProjectStatusBadge
              status={project.status}
            />
          </div>

          {/* Title */}
          <h3 className="mt-6 text-2xl font-bold">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-4 leading-7 text-muted-foreground">
            {project.description}
          </p>

          {/* Technologies */}
          <ProjectTechStack
            technologies={project.technologies}
          />

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">

            <Button asChild>
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Link>
            </Button>

            {project.live ? (
              <Button
                variant="outline"
                asChild
              >
                <Link
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                  <Arrow className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            ) : (
              <Button
                variant="outline"
                disabled
              >
                Coming Soon
              </Button>
            )}

          </div>
        </div>

      </Card>
    </motion.div>
  );
}