import { FadeIn } from "@/components/animations/fade-in";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="About"
          title="Engineering with intent"
          description="I build software that feels refined, reliable, and genuinely useful."
        />

        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {siteConfig.about.map((paragraph) => (
              <FadeIn key={paragraph.slice(0, 24)}>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <div className="glass rounded-3xl p-6 md:p-8">
              <h3 className="text-sm font-medium tracking-wide text-accent uppercase">
                Currently
              </h3>
              <p className="mt-4 text-lg font-medium text-foreground">
                {siteConfig.education.current}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Previously {siteConfig.education.previous}. Former Engineer 2 at
                Nordstrom.
              </p>
              <div className="mt-6 space-y-2 text-sm text-muted">
                <p>Interests: AI, Apple technologies, developer tools, indie dev</p>
                <p>Location: {siteConfig.location}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
