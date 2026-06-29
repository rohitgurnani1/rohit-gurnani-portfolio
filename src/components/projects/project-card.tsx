"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background/70 transition-shadow hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-black/20",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-accent-soft">
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {project.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[2px]">
            <Badge variant="accent">Coming Soon</Badge>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              GitHub
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground underline-offset-4 transition-colors hover:text-accent hover:underline"
            >
              Live Demo
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
