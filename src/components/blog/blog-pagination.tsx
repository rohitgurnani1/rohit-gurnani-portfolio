import Link from "next/link";
import { cn } from "@/lib/utils";

type BlogPaginationProps = {
  currentPage: number;
  totalPages: number;
  query?: string;
  category?: string;
  tag?: string;
};

function buildHref(
  page: number,
  query?: string,
  category?: string,
  tag?: string,
) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  if (category) params.set("category", category);
  if (tag) params.set("tag", tag);
  if (page > 1) params.set("page", String(page));
  const qs = params.toString();
  return qs ? `/blog?${qs}` : "/blog";
}

export function BlogPagination({
  currentPage,
  totalPages,
  query,
  category,
  tag,
}: BlogPaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-12 flex items-center justify-center gap-2"
    >
      <PaginationLink
        href={buildHref(currentPage - 1, query, category, tag)}
        disabled={currentPage <= 1}
        label="Previous"
      />

      {Array.from({ length: totalPages }, (_, index) => {
        const page = index + 1;
        return (
          <Link
            key={page}
            href={buildHref(page, query, category, tag)}
            aria-current={page === currentPage ? "page" : undefined}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full text-sm transition-colors",
              page === currentPage
                ? "bg-accent text-white"
                : "border border-border text-muted hover:text-foreground",
            )}
          >
            {page}
          </Link>
        );
      })}

      <PaginationLink
        href={buildHref(currentPage + 1, query, category, tag)}
        disabled={currentPage >= totalPages}
        label="Next"
      />
    </nav>
  );
}

function PaginationLink({
  href,
  disabled,
  label,
}: {
  href: string;
  disabled: boolean;
  label: string;
}) {
  if (disabled) {
    return (
      <span className="rounded-full border border-border px-4 py-2 text-sm text-muted/50">
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className="rounded-full border border-border px-4 py-2 text-sm text-muted transition-colors hover:text-foreground"
    >
      {label}
    </Link>
  );
}
