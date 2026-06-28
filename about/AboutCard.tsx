"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";

interface AboutCardProps {
  icon: keyof typeof Icons;
  title: string;
  description: string;
}

export default function AboutCard({
  icon,
  title,
  description,
}: AboutCardProps) {
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
      <Card className="h-full p-6 transition-all duration-300 hover:border-primary">
        <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
          <Icon size={24} />
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-muted-foreground">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}