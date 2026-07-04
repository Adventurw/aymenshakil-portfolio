"use client";

import { experience } from "@/constants/experience";

import ExperienceCard from "./ExperienceCard";

export default function ExperienceTimeline() {
  return (
    <div
      className="
        relative
        mx-auto
        mt-24
        max-w-6xl
      "
    >
      <div
        className="
          absolute
          left-1/2
          hidden
          h-full
          w-px
          -translate-x-1/2
          bg-gradient-to-b
          from-transparent
          via-[#C7A14A]/40
          to-transparent
          lg:block
        "
      />

      <div className="space-y-24">

        {experience.map((item, index) => (
          <div
            key={item.arcana}
            className={`
              flex
              items-center
              ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }
            `}
          >
            <div className="w-full lg:w-1/2">
              <ExperienceCard
                item={item}
                index={index}
              />
            </div>

            <div className="hidden lg:block lg:w-1/2" />
          </div>
        ))}

      </div>
    </div>
  );
}