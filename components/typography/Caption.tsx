import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Caption({
  children,
  className,
}: Props) {
  return (
    <span
      className={cn(
        "text-sm uppercase tracking-[0.25em] text-primary",
        className
      )}
    >
      {children}
    </span>
  );
}