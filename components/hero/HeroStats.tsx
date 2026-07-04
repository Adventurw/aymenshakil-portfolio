"use client";

import { motion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { heroStats } from "@/constants/stats";

export default function HeroStats() {
  return (
    <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
      {heroStats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.7 + index * 0.15,
          }}
        >
          <Card className="p-6 text-center">
            <h3 className="text-3xl font-bold text-primary">
              {stat.value}
              {stat.suffix}
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              {stat.label}
            </p>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}