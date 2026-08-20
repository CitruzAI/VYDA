import { amenities } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";

export default function Amenities() {
  return (
    <section className="py-[clamp(48px,6vw,80px)] bg-white-warm">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="text-center mb-12">
          <span className="eyebrow mb-4">Dedicated to Your Comfort</span>
          <h2 className="text-[clamp(2rem,4vw,3.1rem)]">World-class amenities to elevate your stay</h2>
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {amenities.map((a) => (
            <div key={a.label} className="flex flex-col items-center text-center gap-4">
              <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-ivory flex items-center justify-center">
                <img src={a.icon} alt="" className="w-14 h-14 md:w-16 md:h-16 object-contain" loading="lazy" />
              </div>
              <span className="text-base font-medium text-ink/70">{a.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
