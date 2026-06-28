import { cn } from "@/lib/utils";

interface HeadingProps {
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  children,
  className,
}: HeadingProps) {
  return (
    <h1
      className={cn(
        "text-5xl font-bold tracking-tight sm:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
}