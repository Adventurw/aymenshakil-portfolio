"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import NoiseTexture from "@/components/background/NoiseTexture";

interface ArcanaCardBaseProps {
  children: React.ReactNode;
  className?: string;
  accent?: "gold" | "blue" | "silver" | "crimson" | "emerald";
}

export default function ArcanaCardBase({
  children,
  className,
}: ArcanaCardBaseProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        rotate: 1.5,
        transition: { duration: 0.25 },
      }}
      className={cn(
        "relative overflow-hidden rounded-[42px] border backdrop-blur-xl",
        "border-[#C7A14A]/20 bg-[#23364B]/60 shadow-[0_20px_60px_rgba(0,0,0,0.25)]",
        className
      )}
    >
      {/* glow layer */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(199,161,74,0.08),transparent_60%)]" />

      {/* noise texture */}
      <NoiseTexture />
      {/* inner content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}