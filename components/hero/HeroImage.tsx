"use client";

import { motion } from "framer-motion";
import { Avatar } from "@/components/ui/avatar";
import { portfolio } from "@/constants/portfolio";

import TechBadge from "./TechBadge";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto w-fit"
    >
      <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-3xl" />

      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      >
        <Avatar
          src={portfolio.personal.image}
          alt={portfolio.personal.fullName}
          variant="rounded"
          size="hero"
          priority
        />
      </motion.div>

      <TechBadge
        icon="react"
        name="React"
        className="-left-12 top-10"
      />

      <TechBadge
        icon="next"
        name="Next.js"
        className="-right-12 top-20"
      />

      <TechBadge
        icon="typescript"
        name="TypeScript"
        className="-left-10 bottom-24"
      />

      <TechBadge
        icon="supabase"
        name="Supabase"
        className="-right-10 bottom-8"
      />
    </motion.div>
  );
}