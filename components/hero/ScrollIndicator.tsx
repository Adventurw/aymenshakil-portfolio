"use client";

import { motion } from "framer-motion";
import { Icons } from "@/components/ui/icons";

export default function ScrollIndicator() {
  const Chevron = Icons.chevronDown;

  return (
    <motion.div
      animate={{
        y: [0, 10, 0],
      }}
      transition={{
        repeat: Infinity,
        duration: 1.5,
      }}
      className="mt-20 flex justify-center"
    >
      <Chevron className="h-8 w-8 text-muted-foreground" />
    </motion.div>
  );
}