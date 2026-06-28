import { Icons } from "@/components/ui/icons";

export interface ContactInfoItem {
  icon: keyof typeof Icons;
  title: string;
  value: string;
  href?: string;
}

export interface ContactSection {
  eyebrow: string;
  title: string;
  description: string;
}

export interface ContactFormFields {
  name: string;
  email: string;
  subject: string;
  message: string;
}