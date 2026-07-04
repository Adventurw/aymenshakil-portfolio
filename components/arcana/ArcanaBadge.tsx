"use client";

import ArcanaCardBase from "./ArcanaCardBase";
import { LucideIcon } from "lucide-react";

interface ArcanaBadgeProps {
  numeral: string;
  title: string;
  status?: string;
  icon: LucideIcon;
}

export default function ArcanaBadge({
  numeral,
  title,
  status = "Available",
  icon: Icon,
}: ArcanaBadgeProps) {
  return (
    <ArcanaCardBase
      className="
        w-[170px]
        h-[250px]
        p-6
        flex
        flex-col
        items-center
        justify-between
      "
    >
      {/* Roman Numeral */}

      <h2 className="font-serif text-6xl text-[#F7F3EA]">
        {numeral}
      </h2>

      <div className="h-px w-16 bg-[#C7A14A]/40" />

      {/* Title */}

      <p
        className="
          text-[11px]
          uppercase
          tracking-[0.42em]
          text-[#C7A14A]
          text-center
        "
      >
        {title}
      </p>

      {/* Icon */}

      <div className="text-6xl text-[#C7A14A]/80">
        {<Icon
          className="
            my-5
            h-9
            w-9
            text-[#C7A14A]
            stroke-[1.5]
          "
        />}
      </div>

      <div className="h-px w-16 bg-[#C7A14A]/30" />

      <p className="text-sm text-[#F7F3EA]/70">
        {status}
      </p>

    </ArcanaCardBase>
  );
}