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
        variant === "default" && "bg-accent-soft text-foreground",
        variant === "accent" && "bg-accent text-white",
        variant === "outline" && "border border-border text-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}
