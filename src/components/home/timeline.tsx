"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { timeline } from "@/lib/timeline";
import { cn } from "@/lib/utils";

export function Timeline() {
  return (
    <section id="timeline" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Timeline"
          title="Where I've been"
          description="A path from computer science foundations to AI-focused product engineering."
        />

        <div className="relative mx-auto max-w-3xl">
          <div
            aria-hidden
            className="absolute top-0 left-[11px] h-full w-px bg-border md:left-1/2 md:-translate-x-1/2"
          />

          <div className="space-y-10">
            {timeline.map((entry, index) => (
              <FadeIn key={entry.id} delay={index * 0.05}>
                <div className="relative md:grid md:grid-cols-2 md:gap-10">
                  <div
                    className={cn(
                      "hidden md:block",
                      index % 2 === 0 ? "md:order-1 md:text-right" : "md:order-2",
                    )}
                  >
                    {index % 2 === 0 && (
                      <TimelineCard entry={entry} align="right" />
                    )}
                  </div>

                  <div className="absolute top-6 left-0 md:left-1/2 md:-translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.15 }}
                      className={cn(
                        "relative z-10 h-6 w-6 rounded-full border-4 border-background",
                        entry.highlight ? "bg-accent" : "bg-foreground/30",
                      )}
                    />
                  </div>

                  <div
                    className={cn(
                      "pl-10 md:pl-0",
                      index % 2 === 0 ? "md:order-2" : "md:order-1",
                    )}
                  >
                    <div className="md:hidden">
                      <TimelineCard entry={entry} />
                    </div>
                    <div className="hidden md:block">
                      {index % 2 !== 0 && (
                        <TimelineCard entry={entry} align="left" />
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({
  entry,
  align = "left",
}: {
  entry: (typeof timeline)[number];
  align?: "left" | "right";
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-background/70 p-6 transition-shadow hover:shadow-lg hover:shadow-black/5",
        align === "right" && "md:ml-auto md:text-right",
      )}
    >
      <p className="text-sm font-medium text-accent">{entry.period}</p>
      <h3 className="mt-2 text-lg font-semibold text-foreground">{entry.title}</h3>
      <p className="mt-1 text-sm font-medium text-foreground/80">
        {entry.organization}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{entry.description}</p>
    </div>
  );
}
