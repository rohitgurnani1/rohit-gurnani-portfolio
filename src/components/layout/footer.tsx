import Link from "next/link";
import { siteConfig, socialLinks } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-divider bg-background">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-medium text-foreground">{siteConfig.name}</p>
            <p className="mt-1 text-xs text-muted">
              Designed with care. Built with Next.js.
            </p>
          </div>

          <div className="flex flex-wrap gap-5">
            {socialLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ),
            )}
          </div>
        </div>

        <p className="mt-8 text-xs text-muted">
          Copyright © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
