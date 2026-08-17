import { whyVyda } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";

export default function WhyVyda() {
  return (
    <section id="why-vyda" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="flex flex-col items-center text-center mb-14">
          <span className="eyebrow mb-4">{whyVyda.eyebrow}</span>
          <h2 className="text-[clamp(2rem,4vw,3.1rem)]">{whyVyda.heading}</h2>
        </Reveal>
      </div>

      <Reveal className="max-w-[1400px] mx-auto border-t border-b border-ink/10 grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
        {whyVyda.points.map((p, i) => (
          <div key={p.title} className="bg-ivory px-6 md:px-10 py-8 flex gap-6 items-start">
            <span className="font-display text-2xl text-sand-line shrink-0">0{i + 1}</span>
            <div>
              <h4 className="text-lg mb-1.5">{p.title}</h4>
              <p className="text-[0.9rem] text-ink/65">{p.body}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
