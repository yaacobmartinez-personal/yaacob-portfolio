"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/lib/data";
import { containerVariants, fadeUp, viewport } from "@/lib/motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
    setTimeout(() => setStatus("sent"), 600);
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-10 border-t border-border">
      <div className="max-w-8xl mx-auto">
        <p className="text-xs font-medium tracking-widest uppercase text-ink-3 mb-3">
          Get Started
        </p>
        <h2 className="font-display font-bold text-display text-ink mb-4 max-w-xl">
          Shoot me a message, let&apos;s discuss your next project
        </h2>
        <p className="text-sm text-ink-3 mb-12 max-w-md">
          Whether you want to send an email, drop a quick message, or hop on a call — I&apos;m here
          and excited to hear what you&apos;re working on.
        </p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
        >
          {/* Quick contact options */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="group flex items-center justify-between bg-bg-2 border border-border rounded-2xl px-6 py-5 hover:border-border-light transition-all"
            >
              <div>
                <p className="text-xs text-ink-3 mb-1">Email Me</p>
                <p className="font-display font-semibold text-ink group-hover:text-accent transition-colors">
                  {personalInfo.email}
                </p>
              </div>
              <span className="text-ink-3 group-hover:text-accent transition-colors text-xl" aria-hidden="true">→</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between bg-bg-2 border border-border rounded-2xl px-6 py-5 hover:border-border-light transition-all"
            >
              <div>
                <p className="text-xs text-ink-3 mb-1">GitHub</p>
                <p className="font-display font-semibold text-ink group-hover:text-accent transition-colors">
                  yaacobmartinez-personal
                </p>
              </div>
              <span className="text-ink-3 group-hover:text-accent transition-colors text-xl" aria-hidden="true">↗</span>
            </a>

            <p className="text-sm text-ink-3 leading-relaxed mt-2">
              Open to full-time roles, contract work, and freelance projects. Based in the Philippines
              and available for remote opportunities worldwide.
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={fadeUp}
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
            aria-label="Contact form"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-xs font-medium tracking-widest uppercase text-ink-3 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-bg-2 border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-border-light transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium tracking-widest uppercase text-ink-3 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-bg-2 border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-border-light transition-colors"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-xs font-medium tracking-widest uppercase text-ink-3 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full bg-bg-2 border border-border rounded-xl px-4 py-3 text-sm text-ink placeholder-ink-4 focus:outline-none focus:border-border-light transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="self-start bg-accent text-bg font-semibold text-sm px-7 py-3 rounded-full hover:bg-accent-dark transition-colors disabled:opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              {status === "idle"    && "Send Message →"}
              {status === "sending" && "Opening mail client…"}
              {status === "sent"    && "✓ Ready to send"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
