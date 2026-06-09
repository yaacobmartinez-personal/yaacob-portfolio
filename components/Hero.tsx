"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { containerVariants, heroItem, viewport } from "@/lib/motion";

/** Decorative code snippet — no real image needed */
const codeLines = [
  { indent: 0, text: "const yaacob = {",                    dim: false },
  { indent: 1, text: 'role:      "Full Stack Developer",',  dim: false },
  { indent: 1, text: 'location:  "Malolos, PH 🇵🇭",',      dim: false },
  { indent: 1, text: 'available:  true,',                   dim: false },
  { indent: 1, text: "stack: [",                            dim: false },
  { indent: 2, text: '"Next.js", "React", "Node.js",',      dim: true  },
  { indent: 2, text: '"PostgreSQL", "AWS", "Supabase",',    dim: true  },
  { indent: 2, text: '"TypeScript", "AI APIs",',            dim: true  },
  { indent: 1, text: "],",                                   dim: false },
  { indent: 1, text: 'passion: "clean, lasting software",', dim: false },
  { indent: 0, text: "};",                                   dim: false },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Fade at bottom */}
      <div
        className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg to-transparent pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-8xl mx-auto px-6 md:px-10 w-full py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-10 lg:gap-16 items-center">

          {/* Left: text — staggered on mount */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Available badge */}
            <motion.div variants={heroItem} className="flex items-center gap-2 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-available opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-available" />
              </span>
              <span className="text-xs font-medium text-ink-2 tracking-wide">
                Available for work
              </span>
            </motion.div>

            {/* Headline — name in H1 for personal-brand SEO */}
            <motion.h1
              variants={heroItem}
              className="font-display font-bold text-hero text-ink leading-[1.04] tracking-tight"
            >
              Hi, I&apos;m Yaacob Martinez
            </motion.h1>

            {/* Role tagline */}
            <motion.p
              variants={heroItem}
              className="mt-4 text-xl md:text-2xl text-accent font-medium tracking-tight"
            >
              {personalInfo.headline}
            </motion.p>

            {/* Sub */}
            <motion.p
              variants={heroItem}
              className="mt-5 max-w-xl text-base md:text-lg text-ink-2 leading-relaxed font-light"
            >
              I build scalable full-stack applications — from clean frontends to
              robust backends — for teams and businesses that care about quality.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={heroItem} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#works"
                className="inline-flex items-center gap-1.5 bg-ink text-bg font-medium text-sm px-6 py-3 rounded-full hover:bg-ink/80 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                See my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 border border-border text-ink font-medium text-sm px-6 py-3 rounded-full hover:bg-bg-3 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Contact me
              </a>
            </motion.div>

            {/* Meta row */}
            <motion.div
              variants={heroItem}
              className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-3"
            >
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true">📍</span>
                {personalInfo.location}
              </span>
              <span className="w-px h-3 bg-border" aria-hidden="true" />
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink transition-colors"
              >
                GitHub ↗
              </a>
              <span className="w-px h-3 bg-border" aria-hidden="true" />
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-ink transition-colors"
              >
                {personalInfo.email}
              </a>
            </motion.div>
          </motion.div>

          {/* Right: decorative code panel */}
          <motion.div
            className="self-center lg:self-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            aria-hidden="true"
          >
            <div className="relative w-full rounded-2xl overflow-hidden bg-bg-2 border border-border shadow-2xl">
              {/* Window chrome */}
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-bg-3">
                <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
                <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
                <span className="w-2.5 h-2.5 rounded-full bg-border-light" />
                <span className="ml-3 text-[10px] text-ink-3 font-mono">about.ts</span>
              </div>

              {/* Code */}
              <pre className="px-5 py-5 text-xs font-mono leading-6 overflow-x-auto">
                {codeLines.map((line, i) => (
                  <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
                    {line.dim ? (
                      <span className="text-ink-3">{line.text}</span>
                    ) : (
                      <span>
                        {line.text.startsWith('"') || line.text === "]," || line.text === "};" ? (
                          <span className="text-ink-2">{line.text}</span>
                        ) : line.text.includes(":") ? (
                          <>
                            <span className="text-accent">
                              {line.text.slice(0, line.text.indexOf(":"))}
                            </span>
                            <span className="text-ink-3">:</span>
                            <span className="text-ink-2">
                              {line.text.slice(line.text.indexOf(":") + 1)}
                            </span>
                          </>
                        ) : (
                          <span className="text-ink">{line.text}</span>
                        )}
                      </span>
                    )}
                  </div>
                ))}
              </pre>

              {/* Blinking cursor */}
              <div className="px-5 pb-5 font-mono text-xs">
                <span className="inline-block w-2 h-4 bg-accent animate-pulse align-middle" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
