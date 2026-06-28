import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground",

        secondary:
          "bg-secondary text-secondary-foreground",

        outline:
          "border border-border bg-background",

        success:
          "bg-green-500/15 text-green-600 border border-green-500/30",

        warning:
          "bg-yellow-500/15 text-yellow-600 border border-yellow-500/30",

        destructive:
          "bg-red-500/15 text-red-600 border border-red-500/30",
      },
    },

    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className
      )}
      {...props}
    />
  );
}