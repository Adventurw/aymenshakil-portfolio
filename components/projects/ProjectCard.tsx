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
      className="[perspective:1500px]"
      whileHover={{
        y: -10,
        rotateX: 4,
        rotateY: -3,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
    >
      <Card
        className="
          overflow-hidden
          border-primary/20
          bg-card/80
          backdrop-blur-xl
          shadow-[0_15px_40px_rgba(0,0,0,.25)]
          transition-all
          duration-300
          group
        "
      >
        {/* Arcana Header */}
        <div className="p-6 pb-0">
          <p
            className="
              text-5xl
              font-light
              leading-none
              text-primary/70
            "
          >
            {project.numeral}
          </p>

          <p
            className="
              mt-3
              uppercase
              tracking-[0.35em]
              text-xs
              text-primary
            "
          >
            {project.arcana}
          </p>

          <div
            className="
              mt-5
              mb-2
              h-px
              bg-gradient-to-r
              from-transparent
              via-primary/50
              to-transparent
            "
          />
        </div>

        {/* Project Image */}
        <div
          className="
            relative
            mx-6
            mt-4
            overflow-hidden
            rounded-2xl
            border
            border-primary/15
          "
        >
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={500}
            className="
              h-60
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-110
            "
          />
        </div>

        {/* Card Content */}
        <div className="p-6">

          {/* Quote */}
          <blockquote
            className="
              mt-2
              max-w-[90%]
              border-l-2
              border-primary/40
              pl-5
              italic
              leading-7
              text-muted-foreground
            "
          >
            "{project.quote}"
          </blockquote>

          {/* Badges */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
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

          {/* Collectible Footer */}
          <div
            className="
              mt-10
              flex
              items-center
              justify-between
              border-t
              border-primary/10
              pt-5
            "
          >
            <span
              className="
                uppercase
                tracking-[0.35em]
                text-xs
                text-primary/60
              "
            >
              Collectible
            </span>

            <span
              className="
                text-xl
                text-primary/70
              "
            >
              ⚙
            </span>
          </div>

        </div>
      </Card>
    </motion.div>
  );
}