export type ExperienceEntry = {
  id: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  highlights: string[];
};

export type EducationEntry = {
  id: string;
  degree: string;
  organization: string;
  location: string;
  period: string;
  detail?: string;
};

export type ResumeProjectEntry = {
  title: string;
  highlights: string[];
};

export const resumeContact = {
  email: "rohitgurnani233@gmail.com",
  phone: "+1 (864) 478-3053",
  location: "College Station, TX",
  linkedin: "https://www.linkedin.com/in/rohitgurnani/",
};

export const resumeSummary =
  "Software engineer with production experience building recommendation systems and microservices at Nordstrom. Currently pursuing a Master of Computer Science at Texas A&M, with hands-on work in LLM security, multi-agent AI workflows, and full-stack development.";

export const education: EducationEntry[] = [
  {
    id: "tamu-mcs",
    degree: "Master of Computer Science",
    organization: "Texas A&M University",
    location: "College Station, TX",
    period: "Aug 2025 — May 2027",
  },
  {
    id: "texas-tech-bs",
    degree: "BS Computer Science, Minor in Mathematics",
    organization: "Texas Tech University",
    location: "Lubbock, TX",
    period: "Aug 2018 — May 2022",
  },
];

export const experience: ExperienceEntry[] = [
  {
    id: "nordstrom-e2",
    title: "Engineer 2",
    organization: "Nordstrom",
    location: "Seattle, WA",
    period: "Apr 2024 — May 2025",
    highlights: [
      "Built and maintained recommendation APIs and microservices (Node.js, Python, AWS Lambda) powering personalization across web, mobile, and email.",
      "Led migration to API Gateway, improving service security and coordinating cross-team privacy and security reviews.",
      "Modernized backend infrastructure by upgrading runtimes, standardizing CI/CD pipelines, and automating deployments with Terraform.",
      "Improved observability and reliability using Splunk logging, New Relic dashboards, and alerting, reducing incident response time.",
      "Developed React-based recommendation components and implemented CTR tracking to enhance user engagement.",
      "Launched new features (e.g., size filtering, tray variants) and A/B tests via Optimizely, driving measurable conversion improvements.",
    ],
  },
  {
    id: "nordstrom-e1",
    title: "Engineer 1",
    organization: "Nordstrom",
    location: "Seattle, WA",
    period: "Jun 2022 — Apr 2024",
    highlights: [
      "Contributed to recommendation APIs and customer-facing services used across Nordstrom's digital platforms.",
      "Collaborated with cross-functional teams on feature delivery, testing, and production support.",
    ],
  },
  {
    id: "bayer-intern",
    title: "Software Developer Intern",
    organization: "Bayer U.S.",
    location: "Indianola, PA",
    period: "May 2021 — Dec 2021",
    highlights: [
      "Worked on the Bayer Digital Diagnostics Radiology Product Radimetrics 3.3 Release.",
      "Built components such as Peak Skin Dose, which creates a skin dose map of patients with metrics.",
      "Practiced Agile methodologies across the full software development life cycle.",
    ],
  },
  {
    id: "bayer-coop",
    title: "Software Developer Co-op",
    organization: "Bayer U.S.",
    location: "Indianola, PA",
    period: "Jun 2020 — Dec 2020",
    highlights: [
      "Worked on migrating Bayer Digital Diagnostics product Radimetrics from Flash to React.js.",
      "Used React.js for front-end development, Java for back-end development, and Mercurial for source control.",
      "Performed testing, debugging, and sprint tasks assigned through Jira.",
    ],
  },
];

export const resumeProjects: ResumeProjectEntry[] = [
  {
    title: "MCPGuard",
    highlights: [
      "Built an AI agent tool-call security firewall that intercepts sensitive actions — file reads, shell commands, email, database queries — before execution.",
      "Implemented a YAML policy engine with risk scoring (0–100) that returns allow, block, or approval_required, plus human-in-the-loop approval for high-risk actions.",
      "Shipped an audit dashboard with SQLite logging, 11 preset attack simulations, and optional OpenAI agent mode for real LLM-proposed tool calls.",
    ],
  },
  {
    title: "PromptGuard",
    highlights: [
      "Built an LLM security evaluation and defense framework to detect and mitigate prompt injection attacks across multiple models (GPT-4o-mini, GPT-5-mini).",
      "Designed and implemented 8+ adversarial attack scenarios, including instruction override, data exfiltration, and jailbreak-style prompts, to systematically benchmark model vulnerabilities.",
      "Developed custom evaluation metrics such as Semantic Deviation Score, Leakage Severity Score, and Defense Precision/Recall to quantify model robustness.",
      "Integrated multi-model testing pipelines and automated evaluation workflows to compare baseline vs. defended responses.",
    ],
  },
];
