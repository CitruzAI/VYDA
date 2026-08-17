import { experience } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-24 items-center">
        <Reveal className="relative">
          <div className="arch-frame overflow-hidden">
            <img
              src={experience.image}
              alt="Interior of a VYDA Hotels property"
              className="w-full h-[clamp(340px,40vw,560px)] object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-7 -left-0 lg:-left-7 bg-espresso text-ivory px-7 py-6 min-w-[170px]">
            <div className="font-display text-3xl text-champagne-light">{experience.stat.num}</div>
            <div className="text-[0.7rem] uppercase tracking-wider text-ivory/70 mt-1">
              {experience.stat.label}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <span className="eyebrow mb-4">{experience.eyebrow}</span>
          <h2 className="text-[clamp(2rem,4vw,3.1rem)] leading-[1.08]">{experience.heading}</h2>
          <p className="mt-5 max-w-[52ch] text-[1.08rem] text-ink/65 leading-relaxed">
            {experience.body}
          </p>

          <div className="mt-9 grid gap-6">
            {experience.points.map((p, i) => (
              <Reveal key={p.title} delay={0.1 * i} className="flex gap-4 items-start">
                <span className="font-display text-champagne-text pt-0.5">0{i + 1}</span>
                <div>
                  <h4 className="font-body font-semibold text-base mb-1">{p.title}</h4>
                  <p className="text-[0.95rem] text-ink/65 max-w-[42ch]">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
