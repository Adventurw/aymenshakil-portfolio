"use client";

import { motion } from "framer-motion";

export default function ExperienceHeader() {
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
        Experience
      </p>

      <h2
        className="
          mt-6
          font-serif
          text-5xl
        "
      >
        Every Project
        <br />
        Built The Engineer.
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
        My professional journey has been driven by curiosity,
        building real-world software, improving quality through
        automation, and continuously exploring modern AI
        technologies.
      </p>
    </motion.div>
  );
}