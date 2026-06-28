import { cn } from "@/lib/utils";

interface TagProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export function Tag({
  className,
  children,
  ...props
}: TagProps) {
  return (
    <div
      className={cn(
        "rounded-lg bg-primary/10 px-4 py-2 text-sm font-medium text-primary",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}