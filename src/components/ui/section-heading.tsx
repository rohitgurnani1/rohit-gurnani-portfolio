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
    <FadeIn className={cn("mb-12 md:mb-16", className)}>
      <div
        className={cn(
          "max-w-2xl",
          align === "center" && "mx-auto text-center",
        )}
      >
        {eyebrow && (
          <p className="mb-3 text-sm font-medium tracking-wide text-accent uppercase">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        )}
      </div>
    </FadeIn>
  );
}
