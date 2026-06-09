import type { Variants } from "framer-motion";

/** Easing matched to existing CSS cubic-bezier(0.16,1,0.3,1) */
const ease = [0.16, 1, 0.3, 1] as const;

/** Container: staggers children */
export const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

/** Generic fade-up item */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.55, ease } },
};

/** Hero-specific: slightly slower, more dramatic */
export const heroItem: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.65, ease } },
};

/** Viewport settings reused across sections */
export const viewport = { once: true, margin: "-80px" } as const;
