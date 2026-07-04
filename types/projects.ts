import { Icons } from "@/components/ui/icons";

export type ProjectCategory =
  | "Software Engineering"
  | "Frontend"
  | "Software QA"
  | "Networking"
  | "Cybersecurity"
  | "Information Systems Audit";

export type ProjectStatus =
  | "Completed"
  | "In Progress";

export interface Project {
  title: string;
  arcana: string;
  numeral: string;
  quote: string;
  description: string;

  image: string;

  category: ProjectCategory;

  status: ProjectStatus;

  featured: boolean;

  github: string;

  live?: string;

  caseStudy?: string;

  icon: keyof typeof Icons;

  technologies: string[];
}

export interface ProjectsSection {
  eyebrow: string;
  title: string;
  description: string;
}