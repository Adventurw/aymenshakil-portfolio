"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

import SkillChip from "./SkillChip";

interface SkillCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  technologies: string[];
}

export default function SkillCard({
  title,
  description,
  icon,
  technologies,
}: SkillCardProps) {
  const Icon = Icons[icon];

  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="h-full p-8">
        <div className="mb-6 inline-flex rounded-2xl bg-primary/10 p-4 text-primary">
          <Icon size={28} />
        </div>

        <h3 className="text-2xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 text-muted-foreground leading-7">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <SkillChip
              key={tech}
              label={tech}
            />
          ))}
        </div>
      </Card>
    </motion.div>
  );
}