import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { mdxComponents } from "@/components/blog/mdx-components";
import { getAdjacentPosts, getAllBlogPosts, getBlogPost } from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";
import { formatDate } from "@/lib/utils";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.date,
    tags: post.tags,
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) notFound();

  const { previous, next } = getAdjacentPosts(slug);

  return (
    <article className="mx-auto max-w-3xl px-6 pt-32 pb-20 md:pt-40">
      <Link
        href="/blog"
        className="text-sm text-muted transition-colors hover:text-accent"
      >
        ← Back to blog
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-2 text-sm text-muted">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span aria-hidden>·</span>
          <span>{post.readingTime}</span>
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
          {post.title}
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-muted">
          {post.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Badge variant="accent">{post.category}</Badge>
          {post.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </header>

      <div className="prose mt-12 max-w-none">
        <MDXRemote source={post.content} components={mdxComponents} />
      </div>

      <footer className="mt-16 grid gap-4 border-t border-border pt-8 md:grid-cols-2">
        {previous ? (
          <Link
            href={`/blog/${previous.slug}`}
            className="rounded-2xl border border-border p-4 transition-colors hover:bg-accent-soft"
          >
            <p className="text-xs text-muted">Previous</p>
            <p className="mt-1 font-medium text-foreground">{previous.title}</p>
          </Link>
        ) : (
          <div />
        )}
        {next && (
          <Link
            href={`/blog/${next.slug}`}
            className="rounded-2xl border border-border p-4 text-right transition-colors hover:bg-accent-soft md:col-start-2"
          >
            <p className="text-xs text-muted">Next</p>
            <p className="mt-1 font-medium text-foreground">{next.title}</p>
          </Link>
        )}
      </footer>
    </article>
  );
}
