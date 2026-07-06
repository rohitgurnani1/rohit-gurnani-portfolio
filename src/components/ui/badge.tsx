import { cn } from "@/lib/utils";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "accent" | "outline";
};

export function Badge({
  children,
  className,
  variant = "default",
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-surface-alt text-muted",
        variant === "accent" && "bg-accent text-white",
        variant === "outline" && "bg-surface-alt/80 text-muted ring-1 ring-border ring-inset",
        className,
      )}
    >
      {children}
    </span>
  );
}
