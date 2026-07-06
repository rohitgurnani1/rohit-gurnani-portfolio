"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 8);
  });

  return (
    <header className="safe-top fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "transition-all duration-300 ease-out",
          scrolled ? "glass section-divider" : "bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-6 md:h-14">
          <Link
            href="/"
            className="text-[15px] font-semibold tracking-tight text-foreground"
            onClick={() => setMobileOpen(false)}
          >
            {siteConfig.name.split(" ")[0]}
          </Link>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const isActive =
                !link.external &&
                (link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href));

              if (link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-3 py-2 text-[13px] text-muted transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-[13px] transition-colors",
                    isActive
                      ? "font-medium text-foreground"
                      : "text-muted hover:text-foreground",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-lg md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1">
                <span
                  className={cn(
                    "block h-0.5 w-4 bg-foreground transition-transform",
                    mobileOpen && "translate-y-1.5 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-4 bg-foreground transition-opacity",
                    mobileOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-4 bg-foreground transition-transform",
                    mobileOpen && "-translate-y-1.5 -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="glass section-divider overflow-hidden md:hidden"
          >
            <div className="flex flex-col px-4 py-3">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg px-3 py-3 text-[15px] text-muted hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-lg px-3 py-3 text-[15px] text-muted hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ),
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
