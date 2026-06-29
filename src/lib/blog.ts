import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import type { BlogPost, BlogPostMeta } from "@/types";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

function parsePost(filename: string): BlogPost {
  const slug = filename.replace(/\.mdx$/, "");
  const filePath = path.join(BLOG_DIR, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const stats = readingTime(content);

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    tags: (data.tags as string[]) ?? [],
    category: (data.category as string) ?? "General",
    published: data.published !== false,
    readingTime: stats.text,
    content,
  };
}

export function getAllBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const post = parsePost(file);
      return {
        slug: post.slug,
        title: post.title,
        description: post.description,
        date: post.date,
        tags: post.tags,
        category: post.category,
        published: post.published,
        readingTime: post.readingTime,
      };
    })
    .filter((post) => post.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const post = parsePost(`${slug}.mdx`);
  if (!post.published) return null;
  return post;
}

export function getAllCategories(): string[] {
  const categories = getAllBlogPosts().map((post) => post.category);
  return [...new Set(categories)].sort();
}

export function getAllTags(): string[] {
  const tags = getAllBlogPosts().flatMap((post) => post.tags);
  return [...new Set(tags)].sort();
}

export type BlogFilters = {
  query?: string;
  category?: string;
  tag?: string;
  page?: number;
  perPage?: number;
};

export function filterBlogPosts(filters: BlogFilters = {}) {
  const { query, category, tag, page = 1, perPage = 6 } = filters;
  let posts = getAllBlogPosts();

  if (query) {
    const normalized = query.toLowerCase();
    posts = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(normalized) ||
        post.description.toLowerCase().includes(normalized) ||
        post.tags.some((t) => t.toLowerCase().includes(normalized)),
    );
  }

  if (category) {
    posts = posts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase(),
    );
  }

  if (tag) {
    posts = posts.filter((post) =>
      post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()),
    );
  }

  const totalPages = Math.max(1, Math.ceil(posts.length / perPage));
  const currentPage = Math.min(Math.max(page, 1), totalPages);
  const start = (currentPage - 1) * perPage;
  const paginatedPosts = posts.slice(start, start + perPage);

  return {
    posts: paginatedPosts,
    totalPosts: posts.length,
    totalPages,
    currentPage,
  };
}

export function getAdjacentPosts(slug: string) {
  const posts = getAllBlogPosts();
  const index = posts.findIndex((post) => post.slug === slug);

  return {
    previous: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}
