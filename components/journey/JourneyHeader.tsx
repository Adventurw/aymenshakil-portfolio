"use client";

import { motion } from "framer-motion";

export default function JourneyHeader() {
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
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="text-center"
    >
      <p
        className="
          uppercase
          tracking-[0.45em]
          text-primary
        "
      >
        The Journey
      </p>

      <h2
        className="
          mt-6
          text-5xl
          font-serif
        "
      >
        Every Engineer
        <br />
        Leaves A Trail.
      </h2>

      <p
        className="
          mx-auto
          mt-8
          max-w-3xl
          leading-8
          text-muted-foreground
        "
      >
        Every project, every challenge, and every lesson has
        shaped my path—from discovering software engineering
        to building AI systems and pursuing Information Systems
        Auditing.
      </p>
    </motion.div>
  );
}