import { vydaHotels } from "../data/hotels.js";
import Reveal from "../components/Reveal.jsx";
import StayCard from "../components/StayCard.jsx";
import Button from "../components/Button.jsx";

export default function FeaturedStays() {
  return (
    <section id="stays" className="py-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-10 mb-10 lg:mb-12">
          <div>
            <span className="eyebrow mb-4">VYDA Hotels</span>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)]">Luxury, Location &amp; Love — Reasons To Stay With Us</h2>
          </div>
          <p className="max-w-[46ch] text-[1.05rem] text-ink/60 leading-relaxed">
            VYDA Hotels are expertly managed by us, delivering exceptional hospitality experiences across Bengaluru's key IT corridors.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {vydaHotels.map((hotel) => (
            <StayCard key={hotel.id} hotel={hotel} layout="grid" aspect="aspect-[4/5]" />
          ))}
        </Reveal>

        <Reveal delay={0.1} className="mt-12 text-center">
          <Button to="/hotels" variant="ghost" icon={false}>
            View All VYDA Hotels
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
