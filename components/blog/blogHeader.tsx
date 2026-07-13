"use client";

import { motion } from "framer-motion";

export default function BlogHeader() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: .7,
      }}
      className="mx-auto max-w-3xl text-center"
    >
      <p className="uppercase tracking-[0.45em] text-primary/70 text-sm">
        THE CODEX
      </p>

      <h2 className="mt-6 font-serif text-5xl md:text-6xl font-bold text-primary">
        The Living Archive
      </h2>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
        Every project leaves behind more than code.
        Here I document my engineering decisions,
        research, design philosophy,
        software testing practices,
        and lessons learned throughout my journey.
      </p>

      <blockquote className="mt-10 italic text-primary/75">
        "Knowledge grows stronger when it is shared."
      </blockquote>
    </motion.div>
  );
}