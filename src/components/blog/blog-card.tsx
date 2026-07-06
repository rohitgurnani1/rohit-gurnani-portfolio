import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import type { BlogPostMeta } from "@/types";
import { formatDate } from "@/lib/utils";

type BlogCardProps = {
  post: BlogPostMeta;
};

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group surface-panel flex h-full flex-col rounded-2xl p-6 transition-shadow duration-300 hover:shadow-[var(--shadow-hover)] md:p-7">
      <div className="flex flex-wrap items-center gap-2 text-xs text-muted">
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingTime}</span>
      </div>

      <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
        <Link
          href={`/blog/${post.slug}`}
          className="transition-colors group-hover:text-accent"
        >
          {post.title}
        </Link>
      </h3>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
        {post.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-2">
        <Badge variant="outline">{post.category}</Badge>
        {post.tags.slice(0, 2).map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </article>
  );
}
