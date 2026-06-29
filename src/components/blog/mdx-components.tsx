import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mt-8 mb-4 text-3xl font-semibold tracking-tight" {...props} />
  ),
  h2: (props) => (
    <h2 className="mt-8 mb-4 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="mt-6 mb-3 text-xl font-semibold tracking-tight" {...props} />
  ),
  p: (props) => <p className="mb-5 leading-relaxed text-muted" {...props} />,
  a: ({ href, ...props }) => {
    const isExternal = href?.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent underline underline-offset-4"
          {...props}
        />
      );
    }
    return (
      <Link
        href={href ?? "#"}
        className="text-accent underline underline-offset-4"
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul className="mb-5 list-disc space-y-2 pl-6 text-muted" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-5 list-decimal space-y-2 pl-6 text-muted" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="my-6 border-l-4 border-accent pl-4 text-muted italic"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md bg-accent-soft px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="my-6 overflow-x-auto rounded-2xl border border-border bg-background/70 p-4 font-mono text-sm"
      {...props}
    />
  ),
};
