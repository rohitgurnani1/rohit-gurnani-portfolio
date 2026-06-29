import Link from "next/link";
import { FadeIn } from "@/components/animations/fade-in";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { BlogCard } from "@/components/blog/blog-card";
import { getAllBlogPosts } from "@/lib/blog";

export function BlogPreview() {
  const posts = getAllBlogPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Blog"
            title="Writing & notes"
            description="Thoughts on AI engineering, product craft, and lessons from building software."
            className="mb-0"
          />
          <Button href="/blog" variant="secondary">
            View all posts
          </Button>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post, index) => (
            <FadeIn key={post.slug} delay={index * 0.05}>
              <BlogCard post={post} />
            </FadeIn>
          ))}
        </div>

        <p className="mt-8 text-sm text-muted">
          New posts are published on the blog.{" "}
          <Link href="/blog" className="text-accent hover:underline">
            Explore the archive
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
