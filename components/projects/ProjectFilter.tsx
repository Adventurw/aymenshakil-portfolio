"use client";

import { projectFilters } from "@/constants/projects";
import Chip from "@/components/ui/chip";

interface Props {
  active: string;
  setActive: (value: string) => void;
}

export default function ProjectFilter({
  active,
  setActive,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap justify-center gap-3">
      {projectFilters.map((filter) => (
        <Chip
          key={filter}
          active={active === filter}
          onClick={() => setActive(filter)}
        >
          {filter}
        </Chip>
      ))}
    </div>
  );
}