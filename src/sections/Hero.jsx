import { motion } from "framer-motion";
import { hero } from "../data/home.js";
import Button from "../components/Button.jsx";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100svh] flex items-end overflow-hidden bg-espresso">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={hero.image}
          alt="VYDA Hotels hospitality lobby"
          className="w-full h-full object-cover"
          style={{ objectPosition: hero.imagePosition }}
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      </motion.div>

      <div className="absolute top-[150px] right-5 md:right-10 z-10 text-right hidden sm:block">
        <div className="text-[#F1E9D8] text-sm tracking-widest font-medium drop-shadow-[0_1px_3px_rgba(36,26,18,0.35)]">
          ★★★★★
        </div>
        <div className="text-xs mt-1 text-[#F1E9D8]/90 tracking-wide font-medium drop-shadow-[0_1px_2px_rgba(36,26,18,0.3)]">
          {hero.rating.score} · {hero.rating.note}
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 pb-[clamp(120px,18vw,200px)] pt-32 md:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="eyebrow hero-eyebrow mb-4 md:mb-5"
        >
          {hero.eyebrow}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="hero-heading text-[clamp(2.4rem,5.6vw,5rem)] leading-[1.02] max-w-[16ch]"
        >
          {hero.headline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65 }}
          className="hero-sub mt-5 md:mt-6 max-w-[46ch] text-base md:text-lg leading-relaxed"
        >
          {hero.sub}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-8 md:mt-9 flex items-center gap-6 md:gap-8 flex-wrap"
        >
          <Button to="/hotels" variant="primary" icon={false}>
            {hero.primaryCta}
          </Button>
          <Button to="/about" variant="textDark">
            {hero.secondaryCta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
