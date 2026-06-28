import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SubHeading({
  children,
  className,
}: Props) {
  return (
    <h2
      className={cn(
        "text-3xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h2>
  );
}