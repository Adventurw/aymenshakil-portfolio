import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaBug,
  FaShieldAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaStar,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiJavascript,
  SiPostgresql,
  SiFramer,
  SiWordpress,
  SiWoocommerce,
  SiDocker,
} from "react-icons/si";

import {
  ArrowRight,
  ArrowUpRight,
  Download,
  Menu,
  X,
  Moon,
  Sun,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";

export const Icons = {
  // Social
  github: FaGithub,
  linkedin: FaLinkedin,
  mail: Mail,

  // UI
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  download: Download,
  menu: Menu,
  close: X,
  sun: Sun,
  moon: Moon,
  chevronDown: ChevronDown,
  phone: Phone,
  mapPin: MapPin,

  // Tech
  react: FaReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  supabase: SiSupabase,
  postgres: SiPostgresql,
  node: FaNodeJs,
  docker: SiDocker,
  git: FaGitAlt,
  framer: SiFramer,
  wordpress: SiWordpress,
  woocommerce: SiWoocommerce,

  // Portfolio
  bug: FaBug,
  shield: FaShieldAlt,
  graduate: FaGraduationCap,
  laptop: FaLaptopCode,
  star: FaStar,
};