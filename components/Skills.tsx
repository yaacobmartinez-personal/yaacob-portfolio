"use client";

import { motion } from "framer-motion";
import { skills } from "@/lib/data";
import { containerVariants, fadeUp, viewport } from "@/lib/motion";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-10 border-t border-border bg-bg-2">
      <div className="max-w-8xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-ink-3 mb-3">
          Skills
        </p>
        <h2 className="font-display font-bold text-display text-ink mb-4">
          My tech stack
        </h2>
        <p className="text-sm text-ink-3 mb-12 max-w-md">
          Technologies I work with day-to-day, from client to cloud.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {skills.map((cat) => (
            <motion.div
              key={cat.category}
              variants={fadeUp}
              className="bg-bg-3 border border-border rounded-2xl p-5 hover:border-border-light transition-colors"
            >
              <h3 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs text-ink-3 bg-bg-2 border border-border px-2.5 py-1 rounded-full hover:text-ink hover:border-border-light transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
