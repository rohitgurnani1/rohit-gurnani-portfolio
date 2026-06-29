import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "C/C++", "Java", "SQL"],
  },
  {
    name: "Frontend",
    skills: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Gradio"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Java", "REST APIs", "Microservices", "Apache Kafka"],
  },
  {
    name: "Cloud",
    skills: [
      "AWS",
      "AWS Lambda",
      "Terraform",
      "GitLab CI/CD",
      "Apache Airflow",
      "Vercel",
    ],
  },
  {
    name: "AI",
    skills: [
      "LLMs",
      "Cursor",
      "GitHub Copilot",
      "Prompt Engineering",
      "MCP",
      "Multi-Agent Systems",
      "RAG",
    ],
  },
  {
    name: "Developer Tools",
    skills: [
      "Git",
      "Splunk",
      "New Relic",
      "Jira",
      "Optimizely",
      "VS Code",
    ],
  },
];
