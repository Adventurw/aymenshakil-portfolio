import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";

interface ProjectLinksProps {
  github: string;
  demo: string;
}

export default function ProjectLinks({
  github,
  demo,
}: ProjectLinksProps) {
  return (
    <div className="mt-8 flex gap-3">
      <Link
        href={github}
        target="_blank"
        className="
          flex
          items-center
          gap-2
          rounded-lg
          border
          px-4
          py-2
          text-sm
          transition-all
          hover:border-primary
          hover:bg-primary
          hover:text-primary-foreground
        "
      >
        <FaGithub className="h-4 w-4" />
        GitHub
      </Link>

      <Link
        href={demo}
        target="_blank"
        className="
          flex
          items-center
          gap-2
          rounded-lg
          bg-primary
          px-4
          py-2
          text-sm
          text-primary-foreground
          transition-all
          hover:opacity-90
        "
      >
        Live Demo
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}