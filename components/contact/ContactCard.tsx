import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function ContactCard({
  children,
  className,
}: Props) {
  return (
    <Card className={cn("p-6", className)}>
      {children}
    </Card>
  );
}