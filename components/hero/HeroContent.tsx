"use client";

import { motion } from "framer-motion";

import { portfolio } from "@/constants/portfolio";
import { fadeUp } from "@/lib/animations";

import AvailabilityBadge from "@/components/shared/AvailabilityBadge";
import HeroButtons from "./HeroButton";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";

import Heading from "@/components/typography/Heading";
import Text from "@/components/typography/Text";

export default function HeroContent() {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >
      <AvailabilityBadge />

      <Heading className="mt-6 leading-tight">
        {portfolio.personal.fullName}
      </Heading>

      <h2 className="mt-4 text-2xl font-semibold text-primary md:text-3xl">
        {portfolio.personal.subtitle}
      </h2>

      <Text className="mt-6 text-lg leading-8 text-muted-foreground">
        {portfolio.hero.description}
      </Text>

      <HeroButtons />

      <HeroSocials />

      <HeroStats />
    </motion.div>
  );
}