import { amenities } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";

export default function Amenities() {
  return (
    <section className="py-[clamp(60px,8vw,100px)] bg-white-warm">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="text-center mb-12">
          <span className="eyebrow mb-4">Dedicated to Your Comfort</span>
          <h2 className="text-[clamp(2rem,4vw,3.1rem)]">World-class amenities to elevate your stay</h2>
        </Reveal>
        <Reveal className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {amenities.map((a) => (
            <div key={a.label} className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-ivory flex items-center justify-center">
                <img src={a.icon} alt="" className="w-8 h-8 object-contain" loading="lazy" />
              </div>
              <span className="text-sm font-medium text-ink/70">{a.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
