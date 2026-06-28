"use client";

import { motion } from "framer-motion";
import  Chip  from "@/components/ui/chip";
import { Icons } from "@/components/ui/icons";

interface TechBadgeProps {
  icon:
    | keyof typeof Icons;
  name: string;
  className?: string;
}

export default function TechBadge({
  icon,
  name,
  className,
}: TechBadgeProps) {
  const Icon = Icons[icon] as React.ElementType;

  return (
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
      }}
      className={`absolute ${className}`}
    >
      <Chip className="flex items-center gap-2 px-4 py-2 shadow-lg backdrop-blur">
        <Icon className="h-4 w-4" />
        {name}
      </Chip>
    </motion.div>
  );
}