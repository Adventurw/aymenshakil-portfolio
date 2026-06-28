import { Icons } from "@/components/ui/icons";

export interface Skill {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  technologies: string[];
}

export interface SkillsSection {
  eyebrow: string;
  title: string;
  description: string;
}