"use client";

import { useTheme } from "./ThemeProvider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative flex items-center justify-center w-9 h-9 rounded-full border border-border hover:border-border-light hover:bg-bg-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
    >
      {/* Sun icon — shown in dark mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-4 h-4 text-ink-2 absolute transition-all duration-300 ${
          isDark ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
        }`}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4" />
        <line x1="12" y1="2"  x2="12" y2="4"  />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="4.22"  y1="4.22"  x2="5.64"  y2="5.64"  />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="2"  y1="12" x2="4"  y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
        <line x1="4.22"  y1="19.78" x2="5.64"  y2="18.36" />
        <line x1="18.36" y1="5.64"  x2="19.78" y2="4.22"  />
      </svg>

      {/* Moon icon — shown in light mode */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-4 h-4 text-ink-2 absolute transition-all duration-300 ${
          isDark ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
        }`}
        aria-hidden="true"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
