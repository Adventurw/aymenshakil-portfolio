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

      <h2 className="font-serif text-6xl text-foreground">
        {numeral}
      </h2>

      <div className="h-px w-16 bg-[#C7A14A]/40" />

      {/* Title */}

      <p
        className="
          text-[11px]
          uppercase
          tracking-[0.42em]
          text-primary
          text-center
        "
      >
        {title}
      </p>

      {/* Icon */}

      <div className="text-6xl text-primary">
        {<Icon
          className="
            my-5
            h-9
            w-9
            text-primary
            stroke-[1.5]
          "
        />}
      </div>

      <div className="h-px w-16 bg-[#C7A14A]/30" />

      <p className="text-sm text-foreground">
        {status}
      </p>

    </ArcanaCardBase>
  );
}