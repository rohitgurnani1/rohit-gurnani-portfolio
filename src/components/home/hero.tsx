"use client";

import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="gradient-bg absolute inset-0 -z-10" />

      <div className="mx-auto max-w-6xl px-6 text-center md:text-left">
        <FadeIn>
          <p className="mb-5 text-sm font-medium text-muted">{siteConfig.now}</p>
        </FadeIn>

        <FadeIn delay={0.05}>
          <h1 className="hero-display mx-auto max-w-4xl text-5xl text-foreground sm:text-6xl md:mx-0 md:text-7xl lg:text-[5.5rem]">
            {siteConfig.name}
          </h1>
        </FadeIn>

        <FadeIn delay={0.1} className="mt-6">
          <p className="hero-subhead mx-auto max-w-3xl text-2xl text-muted sm:text-3xl md:mx-0 md:text-[2rem]">
            {siteConfig.headline.join(" ")}
          </p>
        </FadeIn>

        <FadeIn delay={0.18} className="mx-auto mt-8 max-w-2xl md:mx-0">
          <p className="text-lg leading-relaxed text-muted md:text-xl">
            {siteConfig.intro}
          </p>
        </FadeIn>

        <FadeIn
          delay={0.26}
          className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start"
        >
          <Button href="/projects" size="lg">
            View Projects
          </Button>
          <Button href="/blog" variant="secondary" size="lg">
            Read Blog
          </Button>
          <Button href="/resume" variant="ghost" size="lg">
            Resume →
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
