"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig, socialLinks } from "@/lib/site";

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something thoughtful"
          description="Open to collaborations, interesting product ideas, and conversations about AI and developer tools."
          align="center"
        />

        <FadeIn className="mx-auto mt-10 max-w-2xl text-center">
          <motion.div
            whileHover={{ scale: 1.01 }}
            className="glass rounded-3xl p-8 md:p-10"
          >
            <p className="text-lg text-muted">
              The fastest way to reach me is by email. I try to respond within a
              couple of days.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button href={`mailto:${siteConfig.email}`} size="lg">
                {siteConfig.email}
              </Button>
              {socialLinks
                .filter((link) => link.label !== "Email")
                .map((link) => (
                  <Button
                    key={link.label}
                    href={link.href}
                    external={link.external}
                    variant="secondary"
                    size="lg"
                  >
                    {link.label}
                  </Button>
                ))}
            </div>
            <p className="mt-6 text-sm text-muted">
              Prefer async? Read my{" "}
              <Link href="/blog" className="text-accent hover:underline">
                blog
              </Link>{" "}
              or check out my{" "}
              <Link href="/projects" className="text-accent hover:underline">
                projects
              </Link>
              .
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
