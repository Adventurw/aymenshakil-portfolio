import {
  Hammer,
  Compass,
  Search,
  Shield,
  Sparkles,
  BookOpen,
  Cog,
  Crown,
} from "lucide-react";

export const arcanaCards = [
  {
    numeral: "Ⅰ",
    title: "THE BUILDER",
    role: "Frontend Development",
    icon: Hammer,
    accent: "blue",

    description:
      "The Builder transforms ideas into elegant digital experiences. Every interface begins here.",

    quote:
      "Every masterpiece begins with a single line of code.",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
    ],

    projects: [
      "Arcana Portfolio",
      "EvaCRM",
      "Bank Database",
    ],
  },

  {
    numeral: "Ⅱ",
    title: "THE ARCHITECT",
    role: "Backend Engineering",
    icon: Compass,
    accent: "gold",

    description:
      "Designs scalable systems and reliable architectures behind every application.",

    quote:
      "Strong foundations create timeless systems.",

    technologies: [
      "Node.js",
      "Express",
      "REST APIs",
      "Prisma",
      "PostgreSQL",
    ],

    projects: [
      "Bank Backend",
      "Authentication APIs",
    ],
  },

  {
    numeral: "Ⅲ",
    title: "THE ANALYST",
    role: "Software QA",
    icon: Search,
    accent: "silver",

    description:
      "Finds flaws before users do and ensures software behaves exactly as intended.",

    quote:
      "Quality is never accidental.",

    technologies: [
      "Testing",
      "Debugging",
      "Automation",
      "Documentation",
    ],

    projects: [
      "QA Test Suites",
      "Bug Reports",
    ],
  },

  {
    numeral: "Ⅳ",
    title: "THE AUDITOR",
    role: "Information Systems Audit",
    icon: Shield,
    accent: "crimson",

    description:
      "Protects systems through governance, compliance, and security.",

    quote:
      "Trust is built through verification.",

    technologies: [
      "Risk Assessment",
      "Compliance",
      "Controls",
    ],

    projects: [
      "Audit Reports",
      "Security Reviews",
    ],
  },

  {
    numeral: "Ⅴ",
    title: "THE CREATOR",
    role: "Artificial Intelligence",
    icon: Sparkles,
    accent: "purple",

    description:
      "Builds intelligent systems capable of learning, reasoning, and assisting humans.",

    quote:
      "The future belongs to intelligent machines.",

    technologies: [
      "OpenAI",
      "LangChain",
      "Python",
      "Agents",
      "RAG",
    ],

    projects: [
      "AI Assistants",
      "Prompt Engineering",
    ],
  },

  {
    numeral: "Ⅵ",
    title: "THE SCHOLAR",
    role: "Research",
    icon: BookOpen,
    accent: "emerald",

    description:
      "Always learning. Every project begins with curiosity and research.",

    quote:
      "Knowledge compounds forever.",

    technologies: [
      "Research",
      "Documentation",
      "System Design",
    ],

    projects: [
      "Technical Articles",
      "Case Studies",
    ],
  },

  {
    numeral: "Ⅶ",
    title: "THE ENGINEER",
    role: "Software Engineering",
    icon: Cog,
    accent: "gold",

    description:
      "Transforms concepts into reliable engineering solutions.",

    quote:
      "Engineering is organized creativity.",

    technologies: [
      "Java",
      "C#",
      "Databases",
      "Architecture",
    ],

    projects: [
      "Desktop Apps",
      "System Design",
    ],
  },

  {
    numeral: "Ⅷ",
    title: "THE STRATEGIST",
    role: "Leadership",
    icon: Crown,
    accent: "crimson",

    description:
      "Leads projects through planning, communication, and execution.",

    quote:
      "Vision without execution is only a dream.",

    technologies: [
      "Leadership",
      "Planning",
      "Communication",
    ],

    projects: [
      "Team Projects",
    ],
  },
];