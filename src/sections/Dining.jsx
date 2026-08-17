import { dining } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";

export default function Dining() {
  return (
    <section id="dining" className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-ink/10">
      <Reveal className="bg-ivory p-8 md:p-16 flex flex-col justify-center">
        <span className="eyebrow mb-4">{dining.eyebrow}</span>
        <h2 className="text-[clamp(2rem,4vw,3.1rem)]">{dining.heading}</h2>
        <p className="mt-5 max-w-[52ch] text-[1.05rem] text-ink/65 leading-relaxed">{dining.body}</p>
        <div className="flex flex-wrap gap-2.5 mt-7">
          {dining.cuisines.map((c) => (
            <span key={c} className="text-[0.78rem] border border-ink/15 px-4 py-2 text-ink/65">
              {c}
            </span>
          ))}
        </div>
      </Reveal>
      <div className="grid grid-rows-2 gap-px bg-ink/10 min-h-[380px]">
        <img src={dining.image} alt="Dining at VYDA Hotels" className="w-full h-full object-cover" loading="lazy" />
        <img
          src={dining.imageSecondary}
          alt="Restaurant at VYDA Hotels"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
}
