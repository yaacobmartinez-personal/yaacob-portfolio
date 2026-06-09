"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import type { Project } from "@/lib/data";
import { fadeUp, viewport } from "@/lib/motion";

interface Props {
  projects: Project[];
}

const langColors: Record<string, string> = {
  TypeScript: "#3178C6",
  JavaScript: "#F7DF1E",
};

const PROJECT_HIGHLIGHTS: Record<string, string[]> = {
  "Andy's Barber Shop": [
    "Interactive location map powered by Mapbox GL",
    "Contact & booking emails via Resend API",
    "Mobile-first responsive design with Tailwind CSS",
  ],
  Audy: [
    "Paste a YouTube link or upload an audio file",
    "Separates drums, bass, vocals, guitar & piano tracks",
    "Streaming download for each isolated stem",
  ],
  "EHFC Tracking": [
    "Real-time pin management on an interactive map",
    "Supabase Realtime for live location broadcasting",
    "Role-based access control for field operators",
  ],
  "Chapter Real Estate": [
    "Multi-page App Router site on Next.js 16",
    "Tailwind CSS v4 with custom property system",
    "SEO-optimised property listing & contact pages",
  ],
  "Barso Homes": [
    "Three distinct audiences: buyers, trades & investors",
    "Single Next.js app serving multi-audience content",
    "Clean section-based navigation with smooth scroll",
  ],
  "Email Sender": [
    "Bulk dispatch via Sender.net API",
    "Custom template variable substitution per recipient",
    "File attachment support & client-side validation",
  ],
};

const PROJECT_YEAR: Record<string, string> = {
  "Andy's Barber Shop":  "2024",
  Audy:                  "2024",
  "EHFC Tracking":       "2024",
  "Chapter Real Estate": "2025",
  "Barso Homes":         "2024",
  "Email Sender":        "2023",
};

// ─────────────────────────────────────────────────────────────────────────────
// Per-row component — needs its own ref so useScroll can target the row
// ─────────────────────────────────────────────────────────────────────────────
function ProjectRow({ project: p, index: i }: { project: Project; index: number }) {
  const isEven = i % 2 === 0;
  const highlights = PROJECT_HIGHLIGHTS[p.title] ?? [];
  const year = PROJECT_YEAR[p.title] ?? "";

  // Ref on the whole row — scroll progress tracks as it passes the viewport
  const rowRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: rowRef,
    offset: ["start end", "end start"],
  });

  // Raw parallax: image drifts 8% up as the row scrolls past
  const rawY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  // Spring-smooth the parallax so it feels weighted, not mechanical
  const imageY = useSpring(rawY, { stiffness: 60, damping: 20, mass: 0.8 });

  // Clip-path wipe: map scroll progress → a numeric inset value (18 → 0)
  const rawClipNum = useTransform(scrollYProgress, [0, 0.25], [18, 0]);
  const smoothClipNum = useSpring(rawClipNum, { stiffness: 80, damping: 22 });
  // Format the number as a clip-path string
  const clipPath = useTransform(
    smoothClipNum,
    (v) => `inset(${v}% 0 0 0 round 1rem)`
  );

  return (
    <div
      ref={rowRef}
      className="px-6 md:px-10 max-w-8xl mx-auto py-16 md:py-24"
    >
      {/* Row number */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={viewport}
        transition={{ duration: 0.4 }}
        className="text-xs font-mono text-ink-4 mb-8 md:mb-10"
      >
        {String(i + 1).padStart(2, "0")}
      </motion.p>

      {/* Two-column grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Image column ── */}
        {/* Outer wrapper: clip-path wipe reveal */}
        <motion.div
          style={{ clipPath }}
          className={`relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-bg-3 ${
            !isEven ? "lg:order-2" : ""
          }`}
        >
          {/* Inner image: parallax drift */}
          <motion.div
            style={{ y: imageY }}
            className="absolute inset-[-10%] w-[120%] h-[120%]"
          >
            <Image
              src={p.imageUrl}
              alt={`${p.title} — ${p.tags.slice(0, 2).join(" & ")} project by Yaacob Martinez`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              unoptimized={p.imageUrl.endsWith(".svg")}
            />
          </motion.div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/40 to-transparent pointer-events-none" />
        </motion.div>

        {/* ── Text column ── */}
        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className={`flex flex-col gap-6 ${!isEven ? "lg:order-1" : ""}`}
        >
          {/* Meta: language · year · tags */}
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
            <span className="flex items-center gap-1.5 text-xs text-ink-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: langColors[p.language] ?? "#888" }}
                aria-hidden="true"
              />
              {p.language}
            </span>
            {year && <span className="text-xs text-ink-4">· {year}</span>}
            <span className="flex-1" />
            {p.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs text-ink-3 bg-bg-3 border border-border px-2.5 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h3
            variants={fadeUp}
            className="font-display font-bold text-3xl md:text-4xl text-ink leading-tight"
          >
            {p.title}
          </motion.h3>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-base text-ink-2 leading-relaxed">
            {p.description}
          </motion.p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <motion.ul variants={fadeUp} className="flex flex-col gap-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-ink-3">
                  <span className="text-accent mt-0.5 flex-shrink-0">→</span>
                  {h}
                </li>
              ))}
            </motion.ul>
          )}

          {/* CTA links */}
          <motion.div variants={fadeUp} className="flex items-center gap-3 pt-2">
            <a
              href={p.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink border border-border px-5 py-2.5 rounded-full hover:border-border-light hover:bg-bg-2 transition-all duration-200"
            >
              Code ↗
            </a>
            {p.live_url && (
              <a
                href={p.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-bg bg-accent px-5 py-2.5 rounded-full hover:bg-accent-dark transition-colors duration-200"
              >
                Live site ↗
              </a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Section wrapper
// ─────────────────────────────────────────────────────────────────────────────
export default function FeaturedWork({ projects }: Props) {
  return (
    <section id="works" className="border-t border-border py-24 md:py-32">
      {/* Header */}
      <div className="px-6 md:px-10 max-w-8xl mx-auto mb-16 md:mb-20">
        <p className="text-xs font-medium tracking-widest uppercase text-ink-3 mb-3">Works</p>
        <div className="flex items-end justify-between flex-wrap gap-4">
          <h2 className="font-display font-bold text-display text-ink max-w-lg">
            Take a closer look at some of my works
          </h2>
          <a
            href="https://github.com/yaacobmartinez-personal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ink-3 border-b border-ink-3/30 hover:text-ink hover:border-ink pb-0.5 transition-all"
          >
            View all on GitHub ↗
          </a>
        </div>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border">
        {projects.map((p, i) => (
          <ProjectRow key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
