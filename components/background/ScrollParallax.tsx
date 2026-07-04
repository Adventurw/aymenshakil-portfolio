"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function ScrollParallax({
  children,
}: Props) {
  const { scrollY } = useScroll();

  const y = useTransform(
    scrollY,
    [0, 4000],
    [0, -180]
  );

  return (
    <motion.div
      style={{ y }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}