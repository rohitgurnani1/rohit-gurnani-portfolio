import type { TimelineEntry } from "@/types";

export const timeline: TimelineEntry[] = [
  {
    id: "texas-tech",
    period: "2018 — 2022",
    title: "BS Computer Science",
    organization: "Texas Tech University",
    description:
      "Computer Science with a minor in Mathematics. Built a strong foundation in software engineering, algorithms, and full-stack development.",
  },
  {
    id: "bayer",
    period: "2020 — 2021",
    title: "Software Developer Co-op & Intern",
    organization: "Bayer U.S.",
    description:
      "Migrated Radimetrics from Flash to React and shipped radiology diagnostics features including Peak Skin Dose mapping for the 3.3 release.",
  },
  {
    id: "nordstrom-i",
    period: "2022 — 2024",
    title: "Engineer 1",
    organization: "Nordstrom",
    description:
      "Shipped recommendation APIs and customer-facing services across Nordstrom's web and mobile platforms.",
  },
  {
    id: "nordstrom-ii",
    period: "2024 — 2025",
    title: "Engineer 2",
    organization: "Nordstrom",
    description:
      "Led API Gateway migration, Terraform-based deployments, and React recommendation features with A/B testing via Optimizely — serving millions of shoppers.",
    highlight: true,
  },
  {
    id: "tamu",
    period: "2025 — 2027",
    title: "Master of Computer Science",
    organization: "Texas A&M University",
    description:
      "Graduate study in computer science with a focus on AI systems, LLM security, and multi-agent workflows.",
    highlight: true,
  },
  {
    id: "future",
    period: "Next",
    title: "What's ahead",
    organization: "Future",
    description:
      "Continuing to build at the intersection of AI and product — shipping tools that are rigorous underneath and effortless to use on top.",
  },
];
