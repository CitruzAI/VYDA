import { vydaHotels } from "../data/hotels.js";
import Reveal from "../components/Reveal.jsx";
import StayCard from "../components/StayCard.jsx";
import Button from "../components/Button.jsx";

export default function FeaturedStays() {
  const [aurum, hello, forest] = vydaHotels;

  return (
    <section id="stays" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-10 mb-16">
          <div>
            <span className="eyebrow mb-4">VYDA Hotels</span>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)]">Luxury, Location &amp; Love — Reasons To Stay With Us</h2>
          </div>
          <p className="max-w-[46ch] text-[1.05rem] text-ink/60 leading-relaxed">
            VYDA Hotels are expertly managed by us, delivering exceptional hospitality experiences across Bengaluru's key IT corridors.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-20 lg:mb-28">
          <StayCard hotel={aurum} size="large" aspect="aspect-[4/5] lg:aspect-[16/11]" />
          <div className="lg:col-span-5 lg:mt-20">
            <StayCard hotel={forest} size="small" aspect="aspect-[4/5]" />
          </div>
        </Reveal>

        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
          <div className="lg:col-span-7 lg:mt-12">
            <StayCard hotel={hello} size="large" aspect="aspect-[4/5] lg:aspect-[16/11]" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 text-center">
          <Button to="/hotels" variant="ghost" icon={false}>
            View All VYDA Hotels
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
