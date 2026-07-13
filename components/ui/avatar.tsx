"use client";

import Image from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const avatarVariants = cva(
  "relative overflow-hidden border bg-card shadow-lg",
  {
    variants: {
      variant: {
        circle: "rounded-full",
        rounded: "rounded-3xl",
        square: "rounded-lg",
      },

      size: {
        sm: "h-12 w-12",
        md: "h-20 w-20",
        lg: "h-32 w-32",
        hero: "h-[480px] w-[360px]",
      },
    },

    defaultVariants: {
      variant: "circle",
      size: "md",
    },
  }
);

interface AvatarProps
  extends VariantProps<typeof avatarVariants> {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function Avatar({
  src,
  alt,
  variant,
  size,
  className,
  priority,
}: AvatarProps) {
  return (
    <div
      className={cn(
        avatarVariants({
          variant,
          size,
        }),
        className
      )}
    >
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, 360px"
      className="object-cover"
    />
    </div>
  );
}