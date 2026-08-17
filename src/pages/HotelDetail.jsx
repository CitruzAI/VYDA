import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import Lightbox from "../components/nivaara/Lightbox.jsx";
import FinalCta from "../sections/FinalCta.jsx";
import { getHotelDetail } from "../data/hotels/index.js";
import { brand } from "../data/brand.js";

export default function HotelDetail() {
  const { slug } = useParams();
  const hotel = getHotelDetail(slug);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  if (!hotel) {
    return (
      <section className="py-32 text-center">
        <h1 className="text-3xl mb-4">Hotel not found</h1>
        <Button to="/hotels" variant="primary" icon={false}>
          Back to VYDA Hotels
        </Button>
      </section>
    );
  }

  const gallery = hotel.gallery ?? [];
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + gallery.length) % gallery.length));
  const nextImage = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % gallery.length));

  return (
    <>
      <PageHero
        eyebrow={`${hotel.city} · ${hotel.area}`}
        headline={hotel.hero.headline}
        sub={hotel.hero.sub}
        image={hotel.hero.image}
        imageAlt={hotel.name}
        imagePosition={hotel.hero.imagePosition}
      />

      <section className="py-[clamp(60px,8vw,100px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal>
            <Button to="/hotels" variant="text" className="mb-10">
              ← Back to VYDA Hotels
            </Button>
          </Reveal>

          <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <span className="eyebrow mb-4">{hotel.tag}</span>
              <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">{hotel.overview.heading}</h2>
              <div className="mt-6 grid gap-5">
                {hotel.overview.paragraphs.map((p) => (
                  <p key={p} className="text-[1.05rem] text-ink/65 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
            <div className="arch-frame overflow-hidden">
              <img
                src={hotel.hero.image}
                alt={hotel.name}
                className="w-full h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="Stay" heading="Rooms & Accommodation" className="mb-16" />
          <div className="flex flex-col gap-20">
            {hotel.roomTypes.map((room, i) => (
              <Reveal
                key={room.name}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <img src={room.image} alt={room.name} className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
                <div>
                  <h3 className="text-2xl">{room.name}</h3>
                  {room.price && <p className="mt-2 text-sm font-medium text-champagne-text">{room.price}</p>}
                  <dl className="mt-4 grid grid-cols-2 gap-3 text-sm">
                    <div>
                      <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Size</dt>
                      <dd className="mt-1 text-ink/75">{room.size}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Bed</dt>
                      <dd className="mt-1 text-ink/75">{room.bed}</dd>
                    </div>
                    <div>
                      <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Occupancy</dt>
                      <dd className="mt-1 text-ink/75">{room.occupancy}</dd>
                    </div>
                  </dl>
                  <p className="mt-5 text-[0.95rem] text-ink/65 leading-relaxed">{room.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {room.amenities.map((a) => (
                      <span key={a} className="text-xs border border-ink/15 px-3 py-1.5 text-ink/60">
                        {a}
                      </span>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="Comfort" heading="Amenities & Facilities" align="center" className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {hotel.amenities.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.04} className="bg-ivory p-8">
                <h4 className="text-lg mb-2">{item.title}</h4>
                <p className="text-[0.9rem] text-ink/65 leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {hotel.dining && (
        <section className="py-[clamp(80px,10vw,140px)] bg-sand">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <span className="eyebrow mb-4">Dining</span>
              <h2 className="text-[clamp(1.8rem,3vw,2.4rem)]">{hotel.dining.heading}</h2>
              <p className="mt-5 text-[1rem] text-ink/65 leading-relaxed">{hotel.dining.body}</p>
              <p className="mt-3 text-sm text-champagne-text">{hotel.dining.cuisine}</p>
              <ul className="mt-6 grid gap-2">
                {hotel.dining.features.map((f) => (
                  <li key={f} className="flex gap-2 text-[0.92rem] text-ink/70">
                    <span className="text-champagne-text">✦</span>
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.1} className="overflow-hidden">
              <img src={hotel.dining.image} alt={`Dining at ${hotel.name}`} className="w-full h-80 object-cover" loading="lazy" />
            </Reveal>
          </div>
        </section>
      )}

      {hotel.events && (
        <section className="py-[clamp(60px,8vw,100px)]">
          <div className="max-w-[900px] mx-auto px-5 md:px-10 text-center">
            <Reveal>
              <span className="eyebrow mb-4">MICE</span>
              <h2 className="text-2xl">{hotel.events.heading}</h2>
              <p className="mt-4 text-ink/65 leading-relaxed">{hotel.events.body}</p>
              <div className="mt-6">
                <Button to="/mice-events" variant="text">
                  Plan an Event
                </Button>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {gallery.length > 0 && (
        <section className="py-[clamp(80px,10vw,140px)]">
          <div className="max-w-[1400px] mx-auto px-5 md:px-10">
            <SectionHeader eyebrow="Gallery" heading={`Explore ${hotel.name}`} align="center" className="mb-12" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {gallery.map((img, i) => (
                <Reveal key={img.src} delay={(i % 4) * 0.04}>
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(i)}
                    className={`block w-full overflow-hidden bg-espresso focus-visible:outline-2 focus-visible:outline-champagne ${
                      i === 0 ? "md:col-span-2 md:row-span-2" : ""
                    }`}
                    aria-label={`View ${img.alt}`}
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      className={`w-full object-cover hover:scale-[1.03] transition-transform duration-500 ${
                        i === 0 ? "h-64 md:h-full min-h-[200px]" : "aspect-[4/3]"
                      }`}
                      loading="lazy"
                    />
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
          {lightboxIndex !== null && (
            <Lightbox images={gallery} index={lightboxIndex} onClose={closeLightbox} onPrev={prevImage} onNext={nextImage} />
          )}
        </section>
      )}

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="Location" heading="Where to find us" className="mb-12" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Reveal>
              <p className="text-[1rem] text-ink/65 leading-relaxed">{hotel.location.address}</p>
              {hotel.location.nearby && (
                <div className="mt-8">
                  <h4 className="text-sm uppercase tracking-wider text-ink/50 mb-4">Nearby</h4>
                  <ul className="grid gap-2">
                    {hotel.location.nearby.map((n) => (
                      <li key={n.name} className="flex justify-between gap-4 text-[0.92rem] text-ink/70 border-b border-ink/10 pb-2">
                        <span>{n.name}</span>
                        <span className="text-champagne-text shrink-0">{n.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {hotel.location.transport && (
                <div className="mt-8">
                  <h4 className="text-sm uppercase tracking-wider text-ink/50 mb-4">Transport</h4>
                  <ul className="grid gap-2">
                    {hotel.location.transport.map((n) => (
                      <li key={n.name} className="flex justify-between gap-4 text-[0.92rem] text-ink/70 border-b border-ink/10 pb-2">
                        <span>{n.name}</span>
                        <span className="text-champagne-text shrink-0">{n.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {hotel.location.attractions && (
                <div className="mt-8">
                  <h4 className="text-sm uppercase tracking-wider text-ink/50 mb-4">Attractions</h4>
                  <ul className="grid gap-2">
                    {hotel.location.attractions.map((n) => (
                      <li key={n.name} className="flex justify-between gap-4 text-[0.92rem] text-ink/70 border-b border-ink/10 pb-2">
                        <span>{n.name}</span>
                        <span className="text-champagne-text shrink-0">{n.distance}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>
            <Reveal delay={0.1} className="aspect-video bg-ivory border border-ink/10 overflow-hidden">
              <iframe
                title={`${hotel.name} location`}
                src={`https://maps.google.com/maps?q=${hotel.location.mapQuery}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-espresso text-ivory text-center">
        <div className="max-w-[700px] mx-auto px-5 md:px-10">
          <Reveal>
            <h2 className="text-ivory text-[clamp(2rem,4vw,3rem)]">Reserve your stay</h2>
            <p className="mt-4 text-ivory/75 leading-relaxed">
              Contact our reservations team to book your stay at {hotel.name}.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/#booking" variant="ghostDark" icon={false}>
                Book Your Stay
              </Button>
              {hotel.contact.phone && (
                <Button href={`tel:${hotel.contact.phoneTel}`} variant="textDark">
                  {hotel.contact.phone}
                </Button>
              )}
              <Button href={`mailto:${hotel.contact.email || brand.email}`} variant="textDark">
                {hotel.contact.email || brand.email}
              </Button>
            </div>
            <div className="mt-10">
              <Link to="/hotels" className="text-sm text-ivory/60 hover:text-ivory transition-colors">
                ← Back to VYDA Hotels
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
