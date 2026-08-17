import { testimonials } from "../data/testimonials.js";
import Reveal from "../components/Reveal.jsx";

export default function Testimonials() {
  return (
    <section id="stories" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="mb-14">
          <span className="eyebrow mb-4">Guest Stories</span>
          <h2 className="text-[clamp(2rem,4vw,3.1rem)]">What our visitors say</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {testimonials.map((t, i) => {
            const initials = t.name
              .split(" ")
              .map((w) => w[0])
              .slice(0, 2)
              .join("");
            return (
              <Reveal key={t.name} delay={i * 0.06}>
                <p className="font-display text-[clamp(1.2rem,2vw,1.55rem)] leading-relaxed text-espresso">
                  <span className="text-champagne">&ldquo;</span>
                  {t.quote}
                  <span className="text-champagne">&rdquo;</span>
                </p>
                <div className="flex items-center gap-3.5 mt-6">
                  <div className="w-11 h-11 rounded-full bg-sand flex items-center justify-center font-display text-espresso">
                    {initials}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-[0.78rem] text-ink/55">
                      {t.date ? `${t.date} · ` : ""}
                      {t.source}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
