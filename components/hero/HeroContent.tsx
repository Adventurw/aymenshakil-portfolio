"use client";

import { motion } from "framer-motion";

import { portfolio } from "@/constants/portfolio";
import { fadeUp } from "@/lib/animations";

import AvailabilityBadge from "@/components/arcana/ArcanaBadge";
import HeroButtons from "./HeroButton";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";


const roles = [
  "Software Engineer",
  "Frontend Developer",
  "Quality Engineer",
  "Graphic Designer",
];

export default function HeroContent() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >

      {/* Motto */}

      <Heading className="mt-6 leading-tight">
        Aymen Shakil
        <br />
      </Heading>

      {/* Animated Roles */}

      <motion.div
        className="mt-8 space-y-2"
        initial="hidden"
        animate="visible"
      >
        {roles.map((role, index) => (
          <motion.h2
            key={role}
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.6 + index * 0.18,
              duration: 0.45,
            }}
            className="text-xl font-semibold text-primary md:text-2xl"
          >
            {role}
          </motion.h2>
        ))}
      </motion.div>

      {/* Description */}

      <Text className="mt-8 text-lg leading-8 text-muted-foreground">
        {portfolio.hero.description}
      </Text>
<div className="mt-10 flex flex-col gap-8">
      <HeroButtons />

      <HeroSocials />
</div>
<div className="mt-12">
      <HeroStats />
      </div>
    </motion.div>
  );
}