"use client";

import { motion } from "framer-motion";

import { arcanaCards } from "@/constants/arcana";
import ArcanaBadge from "@/components/arcana/ArcanaBadge";
import { useState } from "react";



import {
  deckContainer,
  deckCard,
} from "@/lib/arcanaAnimations";

export default function Deck() {
  const [selectedCard, setSelectedCard] = useState<
  (typeof arcanaCards)[number] | null
  >(null);
  return (
    <section className="relative py-40">

      {/* Section Heading */}
      <div className="mx-auto mb-20 max-w-3xl text-center">

        <p className="uppercase tracking-[0.5em] text-primary/70 text-sm">
          THE ARCANA
        </p>

        <h2 className="mt-5 font-serif text-5xl md:text-6xl">
          The Deck
        </h2>

        <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
          Every engineer wears many hats.
          Every discipline tells a different story.
          These are the roles that define my journey.
        </p>

      </div>

      {/* Cards */}
      <motion.div
        variants={deckContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="
          mx-auto
          grid
          max-w-7xl
          grid-cols-1
          gap-10
          sm:grid-cols-2
          lg:grid-cols-4
          justify-items-center
        "
      >
        {arcanaCards.map((card) => (
          <motion.div
            key={card.title}
            variants={deckCard}
          >
            <div
              onClick={() => setSelectedCard(card)}
              className="cursor-pointer"
            >
              <ArcanaBadge
                numeral={card.numeral}
                title={card.title}
                icon={card.icon}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
      {/* Modal */}
      
    </section>
  );
}