import { motion } from "framer-motion";
import Button from "../Button.jsx";
import { nivaaraBrand } from "../../data/nivaara/index.js";

export default function NivaaraHero({ hero }) {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-espresso">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={hero.image}
          alt={hero.imageAlt}
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 40%" }}
          loading="eager"
        />
        <div className="absolute inset-0 hero-overlay" aria-hidden="true" />
      </motion.div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 md:px-10 pb-14 md:pb-20 pt-32 md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3 mb-4 md:mb-5"
        >
          <span className="eyebrow hero-eyebrow">{hero.eyebrow}</span>
          <span className="text-[0.72rem] text-[#F1E9D8] font-medium border border-white/25 px-3 py-1 drop-shadow-[0_1px_2px_rgba(36,26,18,0.28)]">
            {hero.rating} · {hero.reviewNote}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="hero-heading text-[clamp(2.2rem,5.5vw,4.6rem)] leading-[1.02] max-w-[16ch]"
        >
          {hero.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-sub mt-4 md:mt-5 max-w-[56ch] text-base md:text-lg leading-relaxed"
        >
          {hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="mt-7 md:mt-8 flex flex-wrap gap-4"
        >
          <Button href={nivaaraBrand.bookingUrl} variant="ghostDark" icon={false}>
            Book Your Stay
          </Button>
          <Button href="#rooms" variant="textDark">
            Explore Rooms
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
