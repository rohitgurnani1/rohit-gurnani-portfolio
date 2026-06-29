import Link from "next/link";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { getFeaturedProjects } from "@/lib/projects";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="Products and experiments where AI, design, and engineering meet."
            className="mb-0"
          />
          <Button href="/projects" variant="secondary">
            View all projects
          </Button>
        </div>

        <StaggerContainer className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <StaggerItem key={project.slug}>
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <p className="mt-8 text-sm text-muted">
          Want the full list?{" "}
          <Link href="/projects" className="text-accent hover:underline">
            Browse all projects
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
