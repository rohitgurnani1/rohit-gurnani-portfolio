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
  variant?: "default" | "compact";
};

export function ProjectCard({
  project,
  className,
  variant = "default",
}: ProjectCardProps) {
  const compact = variant === "compact";

  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className={cn(
        "group surface-panel flex h-full flex-col overflow-hidden rounded-2xl transition-shadow duration-300 hover:shadow-[var(--shadow-hover)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative overflow-hidden bg-surface-alt",
          compact ? "aspect-[16/8]" : "aspect-[16/10]",
        )}
      >
        <Image
          src={project.image}
          alt=""
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {project.comingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-[2px]">
            <Badge variant="accent">Coming Soon</Badge>
          </div>
        )}
      </div>

      <div
        className={cn(
          "flex flex-1 flex-col",
          compact ? "p-5" : "p-7 md:p-8",
        )}
      >
        <h3
          className={cn(
            "font-semibold tracking-tight text-foreground",
            compact ? "text-lg" : "text-xl md:text-2xl",
          )}
        >
          {project.title}
        </h3>
        <p
          className={cn(
            "mt-2 flex-1 leading-relaxed text-muted",
            compact
              ? "line-clamp-3 text-sm"
              : "mt-3 text-[15px] md:text-base",
          )}
        >
          {project.description}
        </p>

        <div className={cn("flex flex-wrap gap-2", compact ? "mt-4" : "mt-5")}>
          {(compact ? project.techStack.slice(0, 4) : project.techStack).map(
            (tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ),
          )}
        </div>

        <div className={cn("flex flex-wrap gap-4", compact ? "mt-4" : "mt-6")}>
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-apple text-[15px] font-medium"
            >
              GitHub →
            </Link>
          )}
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="link-apple text-[15px] font-medium"
            >
              Live Demo →
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
