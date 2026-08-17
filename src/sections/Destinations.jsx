import { destinations } from "../data/hotels.js";
import Reveal from "../components/Reveal.jsx";

export default function Destinations() {
  return (
    <section id="destinations" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-10 mb-14">
          <div>
            <span className="eyebrow mb-4">Destinations</span>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)]">Where VYDA calls home</h2>
          </div>
          <p className="max-w-[46ch] text-[1.05rem] text-ink/60 leading-relaxed">
            A focused presence across Bengaluru — Marathahalli, Brookfield, and J.P. Nagar.
          </p>
        </Reveal>
      </div>

      <Reveal className="max-w-[900px] mx-auto">
        {destinations.map((d) => (
          <div key={d.name} className="relative aspect-[16/7] overflow-hidden bg-espresso group">
            <img
              src={d.image}
              alt={d.name}
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-75 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-espresso/10 to-espresso/85" />
            <div className="absolute left-5 right-5 bottom-5">
              <span className="block text-[0.62rem] uppercase tracking-wider text-champagne-light mb-1.5">
                {d.status}
              </span>
              <h4 className="font-display text-xl text-ivory">{d.name}</h4>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
