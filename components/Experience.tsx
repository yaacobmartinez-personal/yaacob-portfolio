"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { containerVariants, fadeUp, viewport } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 px-6 md:px-10 border-t border-border">
      <div className="max-w-8xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-ink-3 mb-3">
          Experience
        </p>
        <h2 className="font-display font-bold text-display text-ink mb-12">
          Where I&apos;ve worked
        </h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="max-w-3xl space-y-0"
        >
          {experience.map((e) => (
            <motion.div
              key={`${e.company}-${e.period}`}
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4 sm:gap-8 py-6 border-t border-border"
            >
              {/* Date */}
              <div className="pt-1">
                <p className="text-xs text-ink-3 tabular-nums">{e.period}</p>
                {e.current && (
                  <span className="mt-2 inline-flex items-center gap-1.5 text-[10px] font-semibold text-available bg-available/10 border border-available/20 px-2.5 py-0.5 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-available animate-pulse" aria-hidden="true" />
                    Current
                  </span>
                )}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-display font-semibold text-base text-ink">{e.role}</h3>
                <p className="text-sm text-ink-2 mt-0.5 mb-3">{e.company}</p>
                <ul className="space-y-1.5">
                  {e.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="text-sm text-ink-3 pl-3 relative before:absolute before:left-0 before:top-[0.45rem] before:w-1 before:h-1 before:rounded-full before:bg-accent"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </motion.div>
      </div>
    </section>
  );
}
