import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "promptguard",
    title: "PromptGuard",
    description:
      "An LLM security evaluation and defense framework that detects prompt injection and benchmarks model robustness across GPT-4o-mini, GPT-5-mini, and more.",
    longDescription:
      "Built to systematically test LLM vulnerabilities with 8+ adversarial attack scenarios — instruction override, data exfiltration, jailbreaks — and custom metrics like Semantic Deviation Score, Leakage Severity Score, and Defense Precision/Recall.",
    image: "/projects/promptguard.svg",
    techStack: ["Python", "LLMs", "Prompt Injection", "Evaluation", "OpenAI"],
    githubUrl: "https://github.com/rohitgurnani1/promptguard",
    liveUrl: "https://promptguard.dev",
    featured: true,
  },
  {
    slug: "mcpguard",
    title: "MCPGuard",
    description:
      "An AI agent tool-call security firewall that intercepts sensitive actions, evaluates YAML policy rules, assigns risk scores, and returns allow, block, or approval_required.",
    longDescription:
      "Before an agent reads files, runs shell commands, sends email, or queries a database, MCPGuard evaluates the request against declarative policies, logs every decision to an audit trail, and supports human-in-the-loop approval — with 11 preset attack simulations and an optional OpenAI agent mode.",
    image: "/projects/mcpguard.svg",
    techStack: ["Python", "FastAPI", "React", "YAML", "SQLite", "OpenAI"],
    githubUrl: "https://github.com/rohitgurnani1/mcpguard",
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
