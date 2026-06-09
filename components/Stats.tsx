"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { containerVariants, fadeUp, viewport } from "@/lib/motion";

export default function Stats() {
  return (
    <section className="py-20 md:py-28 px-6 md:px-10 border-t border-border bg-bg-2">
      <div className="max-w-8xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-2xl overflow-hidden"
        >
          {stats.map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="bg-bg-2 px-8 py-10 text-center"
            >
              <p className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] leading-none tracking-tight text-ink">
                {s.number}
              </p>
              <p className="mt-2 text-sm text-ink-3">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
