"use client";

import { journey } from "@/constants/journey";

import JourneyCard from "./JourneyCard";
import JourneyLine from "./JourneyLine";
import JourneyYear from "./JourneyYear";

export default function JourneyTimeline() {
  return (
    <div
      className="
        relative
        mx-auto
        mt-24
        max-w-6xl
      "
    >
      <JourneyLine />

      <div className="space-y-24">

        {journey.map((item, index) => (
          <div
            key={item.title}
            className={`
              relative
              flex
              items-center
              ${
                index % 2 === 0
                  ? "lg:flex-row"
                  : "lg:flex-row-reverse"
              }
            `}
          >
            <JourneyYear year={item.year} />

            <div className="w-full lg:w-1/2">
              <JourneyCard
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