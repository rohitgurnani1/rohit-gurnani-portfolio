"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { cn } from "@/lib/utils";

type BlogSearchProps = {
  defaultQuery?: string;
  categories: string[];
  tags: string[];
  defaultCategory?: string;
  defaultTag?: string;
};

export function BlogSearch({
  defaultQuery = "",
  categories,
  tags,
  defaultCategory = "",
  defaultTag = "",
}: BlogSearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(defaultQuery);

  function updateParams(updates: Record<string, string | undefined>) {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value) params.set(key, value);
      else params.delete(key);
    });

    params.delete("page");

    startTransition(() => {
      router.push(`/blog?${params.toString()}`);
    });
  }

  return (
    <div className="space-y-4">
      <label className="block">
        <span className="sr-only">Search blog posts</span>
        <input
          type="search"
          value={query}
          onChange={(event) => {
            const value = event.target.value;
            setQuery(value);
            updateParams({ q: value || undefined });
          }}
          placeholder="Search posts..."
          className={cn(
            "w-full rounded-2xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted focus:border-accent",
            isPending && "opacity-70",
          )}
        />
      </label>

      <div className="flex flex-wrap gap-2">
        <FilterChip
          label="All categories"
          active={!defaultCategory}
          onClick={() => updateParams({ category: undefined })}
        />
        {categories.map((category) => (
          <FilterChip
            key={category}
            label={category}
            active={defaultCategory === category}
            onClick={() =>
              updateParams({
                category: defaultCategory === category ? undefined : category,
              })
            }
          />
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <FilterChip
            key={tag}
            label={`#${tag}`}
            active={defaultTag === tag}
            onClick={() =>
              updateParams({
                tag: defaultTag === tag ? undefined : tag,
              })
            }
          />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
        active
          ? "border-accent bg-accent-soft text-foreground"
          : "border-border text-muted hover:text-foreground",
      )}
    >
      {label}
    </button>
  );
}
