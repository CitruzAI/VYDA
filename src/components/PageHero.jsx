import { motion } from "framer-motion";

export default function PageHero({
  eyebrow,
  headline,
  sub,
  image,
  imageAlt = "",
  imagePosition = "center",
  size = "default",
}) {
  const height = size === "compact" ? "min-h-[52vh]" : "min-h-[68vh]";

  return (
    <section className={`relative ${height} flex items-end overflow-hidden bg-espresso`}>
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={image}
          alt={imageAlt}
          aria-hidden={!imageAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 pb-14 md:pb-20 pt-32 md:pt-36">
        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="eyebrow hero-eyebrow mb-4 md:mb-5"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hero-heading text-[clamp(2rem,5vw,4.2rem)] leading-[1.05] max-w-[22ch]"
        >
          {headline}
        </motion.h1>
        {sub && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hero-sub mt-4 md:mt-5 max-w-[56ch] text-base md:text-lg leading-relaxed"
          >
            {sub}
          </motion.p>
        )}
      </div>
    </section>
  );
}
