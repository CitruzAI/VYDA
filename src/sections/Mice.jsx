import { motion } from "framer-motion";
import { micePage } from "../data/mice.js";
import { homeMice } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

export default function Mice() {
  const preview = micePage.categories.slice(0, 4);

  return (
    <section id="mice" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-10 mb-14">
          <div>
            <span className="eyebrow mb-4">{homeMice.eyebrow}</span>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)] max-w-[18ch]">{homeMice.heading}</h2>
          </div>
          <p className="max-w-[46ch] text-[1.05rem] text-ink/60 leading-relaxed">{homeMice.body}</p>
        </Reveal>

        <Reveal className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-ink/10">
          {preview.map((c, i) => (
            <div key={c.title} className="relative bg-ivory group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <motion.img
                  src={c.image}
                  alt={c.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
                <span className="absolute top-4 left-4 font-display text-ivory/90 text-lg">
                  0{i + 1}
                </span>
              </div>
              <div className="p-6">
                <h4 className="text-lg mb-2">{c.title}</h4>
                <p className="text-[0.88rem] text-ink/65">
                  {c.items.map((item) => item.name).join(" · ")}
                </p>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-12 flex flex-wrap gap-4">
          <Button to={homeMice.href} variant="primary" icon={false}>
            {homeMice.cta}
          </Button>
          <Button href="mailto:mice@vydahotels.com" variant="ghost" icon={false}>
            mice@vydahotels.com
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
