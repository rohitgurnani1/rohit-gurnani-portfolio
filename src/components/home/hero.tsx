"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="gradient-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <p className="mb-4 text-sm font-medium tracking-wide text-accent uppercase">
            Portfolio
          </p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            {siteConfig.name}
          </h1>
        </FadeIn>

        <div className="mt-8 space-y-2">
          {siteConfig.headline.map((line, index) => (
            <FadeIn key={line} delay={0.1 + index * 0.05}>
              <p className="text-2xl font-medium tracking-tight text-foreground/90 sm:text-3xl md:text-4xl">
                {line}
              </p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.25} className="mt-8 max-w-2xl">
          <p className="text-base leading-relaxed text-muted md:text-lg">
            {siteConfig.intro}
          </p>
        </FadeIn>

        <FadeIn delay={0.35} className="mt-10 flex flex-wrap gap-3">
          <Button href="/projects" size="lg">
            View Projects
          </Button>
          <Button href="/blog" variant="secondary" size="lg">
            Read Blog
          </Button>
          <Button href="/resume" variant="secondary" size="lg">
            Resume
          </Button>
        </FadeIn>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-24 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </section>
  );
}
