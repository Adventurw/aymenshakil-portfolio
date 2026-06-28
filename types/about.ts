import { Icons } from "@/components/ui/icons";

export interface AboutCard {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

export interface AboutSection {
  title: string;
  heading: string;
  description: string;
  cards: AboutCard[];
}