"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { navLinks } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 24);
  });

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className={cn(
          "mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300 md:px-6",
          scrolled ? "glass mx-4 shadow-lg shadow-black/5 md:mx-auto" : "bg-transparent",
        )}
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="text-sm font-semibold tracking-tight text-foreground"
          onClick={() => setMobileOpen(false)}
        >
          RG
        </Link>

        <div className="hidden items-center gap-1 md:flex">
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
                  className="rounded-full px-3 py-2 text-sm text-muted transition-colors hover:text-foreground"
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
                  "relative rounded-full px-3 py-2 text-sm transition-colors",
                  isActive ? "text-foreground" : "text-muted hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent-soft"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-1">
              <span className={cn("block h-0.5 w-4 bg-foreground transition-transform", mobileOpen && "translate-y-1.5 rotate-45")} />
              <span className={cn("block h-0.5 w-4 bg-foreground transition-opacity", mobileOpen && "opacity-0")} />
              <span className={cn("block h-0.5 w-4 bg-foreground transition-transform", mobileOpen && "-translate-y-1.5 -rotate-45")} />
            </div>
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="glass mx-4 mt-2 rounded-2xl p-4 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl px-3 py-3 text-sm text-muted hover:bg-accent-soft hover:text-foreground"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-sm text-muted hover:bg-accent-soft hover:text-foreground"
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
