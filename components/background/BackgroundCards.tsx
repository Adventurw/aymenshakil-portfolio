"use client";

import { motion } from "framer-motion";

import ArcanaFrame from "@/components/arcana/ArcanaFrame";
import ArcanaDivider from "@/components/arcana/ArcanaDivider";

const cards = [
  {
    numeral: "Ⅰ",
    title: "THE BUILDER",
    width: 520,
    height: 760,
    left: "-18%",
    top: "-6%",
    rotate: -16,
    duration: 70,
  },
  {
    numeral: "Ⅱ",
    title: "THE ARCHITECT",
    width: 820,
    height: 1180,
    left: "18%",
    top: "-28%",
    rotate: 9,
    duration: 82,
  },
  {
    numeral: "Ⅲ",
    title: "THE ANALYST",
    width: 420,
    height: 640,
    right: "-10%",
    top: "14%",
    rotate: 15,
    duration: 65,
  },
  {
    numeral: "Ⅳ",
    title: "THE AUDITOR",
    width: 680,
    height: 980,
    right: "-22%",
    bottom: "-20%",
    rotate: -10,
    duration: 78,
  },
  {
    numeral: "Ⅴ",
    title: "THE CREATOR",
    width: 460,
    height: 700,
    left: "5%",
    bottom: "-28%",
    rotate: 12,
    duration: 72,
  },
  {
    numeral: "Ⅵ",
    title: "THE SCHOLAR",
    width: 350,
    height: 540,
    left: "72%",
    top: "48%",
    rotate: -8,
    duration: 68,
  },
  {
    numeral: "Ⅶ",
    title: "THE ENGINEER",
    width: 900,
    height: 1250,
    left: "54%",
    top: "-42%",
    rotate: -4,
    duration: 92,
  },
  {
    numeral: "Ⅷ",
    title: "THE STRATEGIST",
    width: 420,
    height: 620,
    left: "-10%",
    top: "58%",
    rotate: 18,
    duration: 74,
  },
];

export default function BackgroundCards() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {cards.map((card) => (
        <motion.div
          key={card.title}
          style={{
            width: card.width,
            height: card.height,
            left: card.left,
            right: card.right,
            top: card.top,
            bottom: card.bottom,
            position: "absolute",
          }}
          animate={{
            x: [-10, 8, -6],
            y: [-16, 12, -8],
            rotate: [
              card.rotate,
              card.rotate + 1.5,
              card.rotate - 1,
              card.rotate,
            ],
          }}
          transition={{
            duration: card.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* ONLY ONE FRAME (FIXED) */}
          <ArcanaFrame className="h-full w-full relative">

            {/* glow layer */}
            <div className="absolute inset-0 rounded-[48px] bg-[radial-gradient(circle_at_top,rgba(199,161,74,0.08 → 0.15),transparent_60%)]" />

            <div className="relative flex h-full flex-col items-center">

              {/* soft border glow */}
              <div className="absolute inset-0 rounded-[48px] border border-[#C7A14A]/30 shadow-[inset_0_0_60px_rgba(199,161,74,0.06)]" />

              {/* Roman Numeral */}
              <h1
                className="
                  mt-20
                  font-serif
                  text-[220px]
                  font-light
                  text-[#F7F3EA]/30
                  dark:text-primary
                  drop-shadow-[0_0_20px_rgba(199,161,74,0.12)]
                "
              >
                {card.numeral}
              </h1>

              <ArcanaDivider />

              {/* Arcana Name */}
              <h2
                className="
                  mt-10
                  uppercase
                  tracking-[0.75em]
                  text-sm
                  text-[#F7F3EA]/30
                  dark:text-[#D8C287]/35
                "
              >
                {card.title}
              </h2>

              {/* subtle orb */}
              <div className="mt-24 h-56 w-56 rounded-full border border-[#C7A14A]/20 bg-[#C7A14A]/5 blur-[0.5px]" />

              {/* divider glow */}
              <div
                className="
                  mt-10
                  h-px
                  w-64
                  bg-gradient-to-r
                  from-transparent
                  via-[#C7A14A]/30
                  to-transparent
                "
              />

            </div>

          </ArcanaFrame>
        </motion.div>
      ))}
    </div>
  );
}