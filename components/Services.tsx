"use client";

import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { containerVariants, fadeUp, viewport } from "@/lib/motion";

export default function Services() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-10 border-t border-border">
      <div className="max-w-8xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-ink-3 mb-3">
          Services
        </p>
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
          <h2 className="font-display font-bold text-display text-ink max-w-lg">
            Here&apos;s what I bring to the table for you
          </h2>
          <p className="text-sm text-ink-3 max-w-xs">
            An overview of the core areas I specialise in, no matter the project size.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeUp}
              className="bg-bg-2 border border-border rounded-2xl p-6 hover:border-border-light transition-colors duration-300"
            >
              <span className="text-2xl text-accent mb-4 block" aria-hidden="true">
                {s.icon}
              </span>
              <h3 className="font-display font-semibold text-base text-ink mb-4">
                {s.title}
              </h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-sm text-ink-3 flex items-start gap-2">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
