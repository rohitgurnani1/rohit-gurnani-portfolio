import { FadeIn } from "@/components/animations/fade-in";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <FadeIn className={cn("mb-14 md:mb-16", className)}>
      <div
        className={cn(
          "max-w-2xl",
          align === "center" && "mx-auto text-center",
        )}
      >
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold tracking-[0.08em] text-muted uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="hero-display text-3xl text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-lg leading-relaxed text-muted md:text-xl">
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
