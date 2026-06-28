"use client";

import { motion } from "framer-motion";

interface SkillChipProps {
  label: string;
}

export default function SkillChip({
  label,
}: SkillChipProps) {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
      }}
      whileTap={{
        scale: 0.96,
      }}
      className="
        rounded-full
        border
        border-border
        bg-muted/50
        px-3
        py-1.5
        text-sm
        font-medium
        transition-colors
        hover:border-primary
        hover:bg-primary/10
      "
    >
      {label}
    </motion.span>
  );
}