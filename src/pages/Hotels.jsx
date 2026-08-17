import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import FinalCta from "../sections/FinalCta.jsx";
import { vydaHotels, promotedHotels, founderStory } from "../data/hotels.js";

export default function Hotels() {
  return (
    <>
      <PageHero
        eyebrow="VYDA Hotels"
        headline="Business-ready stays with style, service, and strategic locations."
        sub="VYDA Hotels are expertly managed by us, delivering exceptional hospitality experiences. We focus on seamless operations, personalized services, and tailored solutions, ensuring growth and success for every guest and partner."
        image="https://vydahotels.com/wp-content/uploads/2026/03/WhatsApp-Image-2026-03-13-at-11.37.34-AM-1.jpeg"
        imagePosition="center 40%"
      />

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader
            eyebrow="Our Collection"
            heading="VYDA Hotels in Bengaluru"
            body="Three distinct properties across Bengaluru's most strategic business corridors — each managed directly by VYDA."
            className="mb-16"
          />

          <div className="flex flex-col gap-24">
            {vydaHotels.map((hotel, i) => (
              <Reveal
                key={hotel.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <div className="overflow-hidden relative">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-[clamp(300px,40vw,520px)] object-cover" loading="lazy" />
                  <span className="absolute top-5 left-5 text-[0.65rem] uppercase tracking-wider text-ivory bg-espresso/70 px-3 py-1.5">
                    {hotel.tag}
                  </span>
                </div>
                <div>
                  <span className="eyebrow mb-4">
                    {hotel.city} · {hotel.area}
                  </span>
                  <h2 className="text-[clamp(1.8rem,3vw,2.8rem)]">{hotel.name}</h2>
                  <p className="mt-3 text-sm font-medium text-champagne-text">{hotel.roomCount}</p>
                  <p className="mt-4 text-[0.95rem] text-ink/65 leading-relaxed">{hotel.description}</p>
                  <p className="mt-3 text-sm text-ink/55">{hotel.address}</p>
                  <ul className="mt-6 grid gap-2">
                    {hotel.highlights.map((h) => (
                      <li key={h} className="flex gap-3 text-[0.92rem] text-ink/70">
                        <span className="text-champagne-text">—</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  {hotel.rooms && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {hotel.rooms.map((r) => (
                        <span key={r.name} className="text-xs border border-ink/15 rounded-full px-3 py-1.5 text-ink/60">
                          {r.name} · {r.meta}
                        </span>
                      ))}
                    </div>
                  )}
                  {hotel.amenities && (
                    <div className="mt-6">
                      <h4 className="text-[0.72rem] uppercase tracking-wider text-ink/50 mb-3">Amenities</h4>
                      <div className="flex flex-wrap gap-2">
                        {hotel.amenities.map((a) => (
                          <span key={a} className="text-xs bg-sand/60 text-ink/70 px-3 py-1.5">
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-8">
                    <Button to={hotel.exploreHref} variant="primary" icon={false}>
                      Explore Details
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader
            eyebrow="Promoted by VYDA"
            heading="Promoted Hotels by VYDA"
            body="These properties are promoted by VYDA Hotels — clearly separate from our primary VYDA-managed collection. They are not owned or operated by VYDA."
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {promotedHotels.map((hotel, i) => (
              <Reveal key={hotel.id} delay={i * 0.1} className="bg-ivory overflow-hidden flex flex-col">
                <div className="relative">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-64 object-cover" loading="lazy" />
                  <span className="absolute top-4 left-4 text-[0.65rem] uppercase tracking-wider bg-espresso/70 text-ivory px-3 py-1.5">
                    {hotel.tag}
                  </span>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="text-[0.7rem] uppercase tracking-wider text-champagne-text">
                    {hotel.city} · {hotel.area}
                  </span>
                  <h3 className="mt-2 text-2xl">{hotel.name}</h3>
                  <p className="mt-2 text-sm text-ink/55">{hotel.address}</p>
                  <ul className="mt-5 grid gap-2 flex-1">
                    {hotel.highlights.map((h) => (
                      <li key={h} className="text-[0.9rem] text-ink/65 flex gap-2">
                        <span className="text-champagne-text">✦</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button href={hotel.href} variant="text">
                      Learn More
                    </Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">{founderStory.heading}</h2>
            <p className="mt-6 text-[1.05rem] text-ink/65 leading-relaxed">{founderStory.body}</p>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
