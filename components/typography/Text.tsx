import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  children,
  className,
}: Props) {
  return (
    <p
      className={cn(
        "text-lg leading-8 text-muted-foreground",
        className
      )}
    >
      {children}
    </p>
  );
}