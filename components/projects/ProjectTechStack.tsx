"use client";

import Chip from "@/components/ui/chip";

interface Props {
  technologies: string[];
}

export default function ProjectTechStack({
  technologies,
}: Props) {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <Chip
          key={tech}
        >
          {tech}
        </Chip>
      ))}
    </div>
  );
}