import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  education,
  experience,
  resumeContact,
  resumeProjects,
  resumeSummary,
} from "@/lib/resume";
import { skillCategories } from "@/lib/skills";
import { siteConfig } from "@/lib/site";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Resume",
  description:
    "Resume of Rohit Gurnani — MCS candidate at Texas A&M, former Engineer 2 at Nordstrom, software engineer focused on AI and full-stack development.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 pt-32 pb-20 md:pt-40">
      <SectionHeading
        eyebrow="Resume"
        title={siteConfig.name}
        description="Software engineer · Master of Computer Science @ Texas A&M · Former Engineer 2 @ Nordstrom"
      />

      <FadeIn className="mt-4 text-sm text-muted">
        <p>{resumeContact.location}</p>
        <p className="mt-1">
          <a
            href={`mailto:${resumeContact.email}`}
            className="text-accent hover:underline"
          >
            {resumeContact.email}
          </a>
          {" · "}
          <a
            href={`tel:${resumeContact.phone.replace(/\D/g, "")}`}
            className="text-accent hover:underline"
          >
            {resumeContact.phone}
          </a>
        </p>
      </FadeIn>

      <FadeIn className="mt-8 flex flex-wrap gap-3">
        <Button href="/resume.pdf" external size="md">
          Download PDF
        </Button>
        <Button href={`mailto:${resumeContact.email}`} variant="secondary">
          Email
        </Button>
        <Button href={siteConfig.github} external variant="secondary">
          GitHub
        </Button>
        <Button href={siteConfig.linkedin} external variant="secondary">
          LinkedIn
        </Button>
      </FadeIn>

      <FadeIn className="mt-12 space-y-10">
        <section>
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">
            Summary
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {resumeSummary}
          </p>
        </section>

        <section>
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">
            Experience
          </h2>
          <div className="mt-4 space-y-6">
            {experience.map((role) => (
              <div
                key={role.id}
                className="rounded-3xl border border-border bg-background/70 p-6"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {role.title}
                  </h3>
                  <p className="text-sm text-muted">{role.period}</p>
                </div>
                <p className="mt-1 text-sm font-medium text-foreground/80">
                  {role.organization}
                  {role.location ? ` · ${role.location}` : ""}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {role.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">
            Education
          </h2>
          <div className="mt-4 space-y-4">
            {education.map((entry) => (
              <ResumeItem
                key={entry.id}
                title={entry.degree}
                org={`${entry.organization} · ${entry.location}`}
                period={entry.period}
                detail={entry.detail}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">
            Skills
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {skillCategories.map((category) => (
              <div
                key={category.name}
                className="rounded-3xl border border-border bg-background/70 p-5"
              >
                <h3 className="text-sm font-medium text-foreground">
                  {category.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-sm font-medium tracking-wide text-accent uppercase">
            Selected Projects
          </h2>
          <div className="mt-4 space-y-6">
            {resumeProjects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-border bg-background/70 p-6"
              >
                <h3 className="text-lg font-semibold text-foreground">
                  {project.title}
                </h3>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span aria-hidden className="text-accent">
                        —
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm">
            <Link href="/projects" className="text-accent hover:underline">
              View full project details
            </Link>
          </p>
        </section>
      </FadeIn>
    </div>
  );
}

function ResumeItem({
  title,
  org,
  period,
  detail,
}: {
  title: string;
  org: string;
  period: string;
  detail?: string;
}) {
  return (
    <div className="rounded-3xl border border-border bg-background/70 p-6">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted">{period}</p>
      </div>
      <p className="mt-1 text-sm font-medium text-foreground/80">{org}</p>
      {detail && (
        <p className="mt-3 text-sm leading-relaxed text-muted">{detail}</p>
      )}
    </div>
  );
}
