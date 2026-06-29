import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-medium text-foreground">{siteConfig.name}</p>
          <p className="mt-1 text-sm text-muted">
            Built with Next.js, Tailwind, and Framer Motion.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          {socialLinks.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ),
          )}
        </div>

        <p className="text-sm text-muted">© {year} {siteConfig.name}</p>
      </div>
    </footer>
  );
}
