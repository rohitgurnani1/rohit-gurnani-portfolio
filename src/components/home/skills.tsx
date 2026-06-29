import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/stagger-container";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/lib/skills";

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for"
          description="A practical stack for building polished products across frontend, backend, cloud, and AI."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <StaggerItem key={category.name}>
              <div className="h-full rounded-3xl border border-border bg-background/70 p-6">
                <h3 className="text-sm font-medium tracking-wide text-accent uppercase">
                  {category.name}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
