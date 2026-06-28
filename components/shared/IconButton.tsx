import Link from "next/link";
import { ReactNode } from "react";

interface IconButtonProps {
  href: string;
  children: ReactNode;
}

export default function IconButton({
  href,
  children,
}: IconButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="
      flex
      h-11
      w-11
      items-center
      justify-center
      rounded-full
      border
      transition-all
      hover:scale-110
      hover:bg-primary
      hover:text-primary-foreground
      "
    >
      {children}
    </Link>
  );
}