"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextValue {
  theme: Theme;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggle: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

function persistTheme(theme: Theme): void {
  try {
    localStorage.setItem("theme", theme);
  } catch (err) {
    // localStorage unavailable (private browsing, storage quota) — non-fatal
    if (process.env.NODE_ENV === "development") {
      console.warn("ThemeProvider: could not persist theme to localStorage", err);
    }
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  // Sync from data-theme set by the FOUC-prevention inline script in layout
  useEffect(() => {
    const saved = document.documentElement.getAttribute("data-theme") as Theme | null;
    if (saved === "light" || saved === "dark") setTheme(saved);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      persistTheme(next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
