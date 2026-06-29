import { Suspense } from "react";
import { FadeIn } from "@/components/animations/fade-in";
import { BlogCard } from "@/components/blog/blog-card";
import { BlogPagination } from "@/components/blog/blog-pagination";
import { BlogSearch } from "@/components/blog/blog-search";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  filterBlogPosts,
  getAllCategories,
  getAllTags,
} from "@/lib/blog";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Articles on AI engineering, product development, and lessons from building software.",
  path: "/blog",
});

type BlogPageProps = {
  searchParams: Promise<{
    q?: string;
    category?: string;
    tag?: string;
    page?: string;
  }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;
  const query = params.q ?? "";
  const category = params.category ?? "";
  const tag = params.tag ?? "";
  const page = Number(params.page ?? "1");

  const { posts, totalPages, currentPage, totalPosts } = filterBlogPosts({
    query,
    category: category || undefined,
    tag: tag || undefined,
    page,
  });

  const categories = getAllCategories();
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-6xl px-6 pt-32 pb-20 md:pt-40">
      <SectionHeading
        eyebrow="Blog"
        title="Writing & notes"
        description="Practical reflections on AI systems, developer experience, and building products that last."
      />

      <Suspense fallback={<div className="h-32 animate-pulse rounded-2xl bg-accent-soft" />}>
        <BlogSearch
          key={`${query}-${category}-${tag}`}
          defaultQuery={query}
          categories={categories}
          tags={tags}
          defaultCategory={category}
          defaultTag={tag}
        />
      </Suspense>

      <p className="mt-6 text-sm text-muted">
        {totalPosts} {totalPosts === 1 ? "post" : "posts"} found
      </p>

      {posts.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.04}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>
      ) : (
        <FadeIn className="mt-10 rounded-3xl border border-border p-8 text-center text-muted">
          No posts matched your filters. Try clearing search or choosing another
          category.
        </FadeIn>
      )}

      <BlogPagination
        currentPage={currentPage}
        totalPages={totalPages}
        query={query || undefined}
        category={category || undefined}
        tag={tag || undefined}
      />
    </div>
  );
}
