# Rohit Gurnani — Portfolio

A minimalist, animation-rich personal portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion**
- **MDX** blog posts via `next-mdx-remote`
- **next-themes** for dark mode
- **ESLint + Prettier**

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
src/
  app/              # Routes, SEO, RSS
  components/       # UI, layout, home sections, blog
  lib/              # Site config, blog, projects, metadata
  types/            # Shared TypeScript types
content/
  blog/             # MDX blog posts (auto-generated pages)
public/
  projects/         # Project cover images
```

## Editing content

- **Site copy & links:** `src/lib/site.ts`
- **Projects:** `src/lib/projects.ts`
- **Timeline:** `src/lib/timeline.ts`
- **Skills:** `src/lib/skills.ts`
- **Blog posts:** add `.mdx` files to `content/blog/`

## Deploy

Deploy to [Vercel](https://vercel.com):

```bash
npm run build
```

Update `siteConfig.url` in `src/lib/site.ts` with your production domain before launch.

## Scripts

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — ESLint
- `npm run format` — Prettier
