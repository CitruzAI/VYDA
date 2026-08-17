import { motion } from "framer-motion";

/**
 * Reveal
 * Fade-up-on-scroll wrapper. Used throughout instead of a scroll library —
 * keeps every section's entrance consistent and subtle (per the "no gimmicks"
 * animation direction).
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  className = "",
  as = "div",
  once = true,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
