import type { NavLink } from "@/types";

export const siteConfig = {
  name: "Rohit Gurnani",
  title: "Rohit Gurnani — AI Engineer & Software Developer",
  description:
    "AI Engineer and Software Developer building thoughtful products at the intersection of machine learning, developer tools, and human-centered design.",
  url: "https://rohitgurnani.dev",
  email: "rohitgurnani233@gmail.com",
  phone: "+1 (864) 478-3053",
  github: "https://github.com/rohitgurnani1",
  linkedin: "https://www.linkedin.com/in/rohitgurnani/",
  location: "College Station, Texas",
  headline: [
    "AI Engineer.",
    "Software Developer.",
    "Building products that solve real problems.",
  ],
  intro:
    "I design and ship software that blends practical engineering with modern AI — from recommendation systems at Nordstrom to LLM security and multi-agent tools. Currently pursuing a Master of Computer Science at Texas A&M.",
  about: [
    "I'm an engineer who cares as much about craft as capability. I like products that feel fast, intentional, and quietly powerful — the kind of software where the details disappear because everything just works.",
    "At Nordstrom, I spent three years as Engineer 1 and Engineer 2 building recommendation APIs, microservices, and React components used across web, mobile, and email — including API Gateway migrations, Terraform deployments, and A/B tests that moved conversion metrics.",
    "Today I'm pursuing an MCS at Texas A&M while building AI projects like PromptGuard and MCPGuard — an agent tool-call security firewall. I'm especially interested in LLM security, developer tools like Cursor, and indie products built with care.",
  ],
  education: {
    current: "Master of Computer Science — Texas A&M University",
    previous: "BS Computer Science, Minor in Mathematics — Texas Tech University",
  },
} as const;

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "GitHub", href: siteConfig.github, external: true },
  { label: "LinkedIn", href: siteConfig.linkedin, external: true },
];

export const socialLinks: NavLink[] = [
  { label: "Email", href: `mailto:${siteConfig.email}` },
  { label: "GitHub", href: siteConfig.github, external: true },
  { label: "LinkedIn", href: siteConfig.linkedin, external: true },
];
