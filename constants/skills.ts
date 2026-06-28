import {
  Skill,
  SkillsSection,
} from "@/types/skills";

// Section Heading
export const skillsSection: SkillsSection = {
  eyebrow: "Skills",

  title: "Technologies & Expertise",

  description:
    "A growing toolkit built through university, personal projects, internships, and continuous learning across software engineering, quality assurance, and information systems audit.",
};

// Skill Cards
export const skills: Skill[] = [
  {
    title: "Frontend Development",

    description:
      "Building responsive modern web applications.",

    icon: "react",

    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },

  {
    title: "Backend & Database",

    description:
      "Creating APIs and managing data.",

    icon: "node",

    technologies: [
      "Node.js",
      "Supabase",
      "PostgreSQL",
      "REST APIs",
      "Authentication",
    ],
  },

  {
    title: "Software Quality",

    description:
      "Ensuring software reliability through testing.",

    icon: "bug",

    technologies: [
      "Manual Testing",
      "Test Cases",
      "Bug Reporting",
      "Regression Testing",
      "SDLC",
    ],
  },

  {
    title: "Information Systems Audit",

    description:
      "Learning governance, controls and cybersecurity.",

    icon: "shield",

    technologies: [
      "COBIT",
      "ISO 27001",
      "Risk Assessment",
      "IT Controls",
      "CISA",
    ],
  },
];