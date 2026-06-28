"use client";

import { cn } from "@/lib/utils";

interface ChipProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export default function Chip({
  children,
  active = false,
  className,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-md"
          : "border-border bg-card hover:-translate-y-1 hover:border-primary hover:bg-primary/10 hover:text-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}