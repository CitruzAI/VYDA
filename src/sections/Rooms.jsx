import { rooms } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";

export default function Rooms() {
  return (
    <section id="rooms" className="py-[clamp(80px,10vw,140px)] bg-sand">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-10 mb-14">
          <div>
            <span className="eyebrow mb-4">Rooms &amp; Suites</span>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)]">Considered comfort, in every typology</h2>
          </div>
          <p className="max-w-[46ch] text-[1.05rem] text-ink/60 leading-relaxed">
            A selection of rooms across our properties — swipe to explore.
          </p>
        </Reveal>

        <Reveal className="flex gap-6 overflow-x-auto no-scrollbar pb-3 -mx-5 px-5 md:mx-0 md:px-0">
          {rooms.map((r) => (
            <article
              key={`${r.hotel}-${r.name}`}
              className="flex-none w-[clamp(280px,32vw,380px)] bg-white-warm"
            >
              <img
                src={r.image}
                alt={`${r.name} at ${r.hotel}`}
                className="w-full h-64 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <span className="text-[0.7rem] uppercase tracking-wider text-champagne-text">
                  {r.hotel}
                </span>
                <h4 className="mt-1.5 text-xl">{r.name}</h4>
                <div className="mt-1.5 text-sm text-ink/55">{r.meta}</div>
                <p className="mt-3 text-[0.9rem] text-ink/65">{r.desc}</p>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
