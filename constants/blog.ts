export type BlogStatus = "coming-soon" | "published";

export interface BlogPost {
  id: number;

  // Used for routing
  slug: string;

  // Card + Hero
  title: string;
  subtitle: string;

  category:
    | "Research"
    | "Engineering"
    | "Design"
    | "Testing";

  status: BlogStatus;

  readTime: string;

  excerpt: string;

  // Future article page
  publishedAt?: string;

  coverImage?: string;

  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,

    slug: "when-research-doesnt-reproduce",

    title: "When Research Doesn't Reproduce",

    subtitle: "Explainable AI & PCOS",

    category: "Research",

    status: "coming-soon",

    readTime: "10 min",

    excerpt:
      "Reproducing deep learning papers taught me that published results are only the beginning of real research.",

    publishedAt: "Coming Soon",

    coverImage: "/blog/research.jpg",

    content: "",
  },

  {
    id: 2,

    slug: "designing-an-illuminated-portfolio",

    title: "Designing an Illuminated Portfolio",

    subtitle: "Engineering × Design",

    category: "Design",

    status: "coming-soon",

    readTime: "8 min",

    excerpt:
      "Why I abandoned generic portfolio templates and designed a portfolio inspired by illuminated medieval manuscripts.",

    publishedAt: "Coming Soon",

    coverImage: "/blog/design.jpg",

    content: "",
  },

  {
    id: 3,

    slug: "building-better-systems",

    title: "Building Better Systems",

    subtitle: "Software Engineering",

    category: "Engineering",

    status: "coming-soon",

    readTime: "12 min",

    excerpt:
      "Lessons learned from building scalable software systems, ERPs and full-stack applications.",

    publishedAt: "Coming Soon",

    coverImage: "/blog/engineering.jpg",

    content: "",
  },

  {
    id: 4,

    slug: "finding-bugs-before-users-do",

    title: "Finding Bugs Before Users Do",

    subtitle: "Software Quality Assurance",

    category: "Testing",

    status: "coming-soon",

    readTime: "7 min",

    excerpt:
      "Quality isn't achieved by accident. It is engineered through thoughtful testing and disciplined software development.",

    publishedAt: "Coming Soon",

    coverImage: "/blog/testing.jpg",

    content: "",
  },
];