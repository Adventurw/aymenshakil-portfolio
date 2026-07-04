import { Variants } from "framer-motion";

export const deckContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
    },
  },
};

export const deckCard: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    rotate: -8,
    scale: 0.9,
  },

  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};