"use client";

import { Badge } from "@/components/ui/badge";

interface ProjectStatusBadgeProps {
  status: "Completed" | "In Progress";
}

export default function ProjectStatusBadge({
  status,
}: ProjectStatusBadgeProps) {
  const completed = status === "Completed";

  return (
    <Badge
      variant={completed ? "default" : "secondary"}
      className="rounded-full px-3 py-1"
    >
      {completed ? "Completed" : "Work in Progress"}
    </Badge>
  );
}