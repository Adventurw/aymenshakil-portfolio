import {
  Project,
  ProjectsSection,
} from "@/types/projects";
export const projectsSection: ProjectsSection = {
  eyebrow: "Projects",

  title: "Featured Work",

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