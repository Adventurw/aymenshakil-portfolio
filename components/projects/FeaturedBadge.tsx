"use client";

import { Badge } from "@/components/ui/badge";
import { Icons } from "@/components/ui/icons";

export default function FeaturedBadge() {
  const Star = Icons.star;

  return (
    <Badge
      variant="default"
      className="gap-1 rounded-full px-3 py-1"
    >
      <Star size={14} />
      Featured
    </Badge>
  );
}