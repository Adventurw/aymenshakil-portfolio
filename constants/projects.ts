import {
  Project,
  ProjectsSection,
} from "@/types/projects";
export const projectsSection: ProjectsSection = {
  eyebrow: "The Deck",

  title: "Selected Work",

  description:
    "A collection of software engineering, frontend, quality assurance, networking, and information systems projects showcasing my technical skills and continuous learning journey.",
};
export const projectFilters = [
  "All",
  "Software Engineering",
  "Frontend",
  "Software QA",
  "Networking",
  "Cybersecurity",
  "Information Systems Audit",
] as const;
export const projects: Project[] = [
  {
    title: "Playwright Automation Framework",
    arcana: "THE ANALYST",
    numeral: "Ⅲ",
    quote:
    "Quality is engineered long before software reaches production.",


    description:
      "Reusable automation testing framework using Playwright, JavaScript, Page Object Model, Hooks, and Allure reporting.",

    image: "/images/projects/playwright.jpg",

    category: "Software QA",

    status: "Completed",

    featured: true,

    github:
      "https://github.com/Adventurw/playwright-automation-framework",

    icon: "bug",

    technologies: [
      "Playwright",
      "JavaScript",
      "POM",
      "Hooks",
      "Allure",
      "Automation Testing",
    ],
  },

  {
    title: "Academic Task Agent",
    arcana: "THE BUILDER",
    numeral: "Ⅰ",
    quote: "Complex systems become elegant through thoughtful engineering.",
    description:
      "Operating-system inspired academic scheduling application implementing MLFQ, EDF scheduling, and Google Calendar integration.",

    image: "/images/projects/academic-agent.jpg",

    category: "Software Engineering",

    status: "Completed",

    featured: true,

    github:
      "https://github.com/Adventurw/academic-task-agent",

    icon: "laptop",

    technologies: [
      "Python",
      "MLFQ",
      "EDF",
      "Scheduling",
      "Google Calendar",
    ],
  },

  {
    title: "Adactin Hotel Automation",
    arcana: "THE ANALYST",
    numeral: "Ⅲ",
    quote: "Every defect prevented is trust preserved.",
    description:
      "End-to-end UI automation suite built using Playwright to validate the Adactin Hotel web application.",

    image: "/images/projects/adactin.jpg",

    category: "Software QA",

    status: "Completed",

    featured: true,

    github:
      "https://github.com/Adventurw/adactin-hotel-tests",

    icon: "bug",

    technologies: [
      "Playwright",
      "JavaScript",
      "Automation",
      "Testing",
      "POM",
    ],
  },

  {
    title: "Advanced IP Subnet Calculator",
    arcana: "THE ARCHITECT",
    numeral: "Ⅱ",
    quote: "Networks reveal their beauty when complexity becomes predictable.",
    description:
      "Flask-based networking application supporting IPv4, IPv6, CIDR, and VLSM subnet calculations.",

    image: "/images/projects/ip-calculator.jpg",

    category: "Networking",

    status: "Completed",

    featured: true,

    github:
      "https://github.com/Adventurw/Advanced-IP-Subnet-Calculator",

    icon: "shield",

    technologies: [
      "Python",
      "Flask",
      "IPv4",
      "IPv6",
      "CIDR",
      "VLSM",
    ],
  },
];