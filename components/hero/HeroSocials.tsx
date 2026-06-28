import Link from "next/link";
import { cn } from "@/lib/utils";

import { Icons } from "@/components/ui/icons";
import { portfolio } from "@/constants/portfolio";

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export default function SocialLinks({
  className,
  iconClassName,
}: SocialLinksProps) {
  const Github = Icons.github;
  const Linkedin = Icons.linkedin;
  const Mail = Icons.mail;

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Link
        href={portfolio.personal.github}
        target="_blank"
        aria-label="GitHub"
        className={cn(
          "rounded-full border p-3 transition-all duration-300",
          "hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground",
          iconClassName
        )}
      >
        <Github size={18} />
      </Link>

      <Link
        href={portfolio.personal.linkedin}
        target="_blank"
        aria-label="LinkedIn"
        className={cn(
          "rounded-full border p-3 transition-all duration-300",
          "hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground",
          iconClassName
        )}
      >
        <Linkedin size={18} />
      </Link>

      <Link
        href={`mailto:${portfolio.personal.email}`}
        aria-label="Email"
        className={cn(
          "rounded-full border p-3 transition-all duration-300",
          "hover:-translate-y-1 hover:border-primary hover:bg-primary hover:text-primary-foreground",
          iconClassName
        )}
      >
        <Mail size={18} />
      </Link>
    </div>
  );
}