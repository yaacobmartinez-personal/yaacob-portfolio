import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 md:px-10 py-10">
      <div className="max-w-8xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-lg text-ink tracking-tight">
          YM<span className="text-accent">.</span>
        </span>

        <p className="text-xs text-ink-3 text-center">
          © {year} Yaacob Martinez. All rights reserved.
        </p>

        <nav aria-label="Social links" className="flex items-center gap-5">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-ink-3 hover:text-ink transition-colors"
          >
            GitHub ↗
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-xs font-medium text-ink-3 hover:text-ink transition-colors"
          >
            Email ↗
          </a>
          {personalInfo.linkedin && (
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-ink-3 hover:text-ink transition-colors"
            >
              LinkedIn ↗
            </a>
          )}
        </nav>
      </div>
    </footer>
  );
}
