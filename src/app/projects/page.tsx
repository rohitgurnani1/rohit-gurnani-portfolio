import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";
import { FadeIn } from "@/components/animations/fade-in";
import { ProjectCard } from "@/components/projects/project-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { createMetadata } from "@/lib/metadata";
import { projects } from "@/lib/projects";

export const metadata = createMetadata({
  title: "Projects",
  description:
    "Selected projects by Rohit Gurnani — AI tools, research assistants, document readers, and indie products.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-40">
      <SectionHeading
        eyebrow="Projects"
        title="Work I'm proud of"
        description="A collection of products, experiments, and tools built with attention to detail."
      />

      <StaggerContainer className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <StaggerItem key={project.slug}>
            <ProjectCard project={project} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      <FadeIn className="mt-12 rounded-3xl border border-border bg-background/70 p-6 text-sm text-muted">
        Some repositories and demos are private or in active development. Reach
        out if you would like a walkthrough of any project.
      </FadeIn>
    </div>
  );
}
