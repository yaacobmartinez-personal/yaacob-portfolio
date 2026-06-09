"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { label: "Works",      href: "#works"      },
  { label: "Experience", href: "#experience" },
  { label: "Skills",     href: "#skills"     },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-8xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="font-display font-bold text-sm tracking-tight text-ink hover:text-accent transition-colors"
        >
          Yaacob Martinez
        </Link>

        <nav className="hidden md:flex items-center gap-7" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-2 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="mailto:martinezyaacob@gmail.com"
            className="text-sm font-medium bg-accent text-bg px-4 py-2 rounded-full hover:bg-accent-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
