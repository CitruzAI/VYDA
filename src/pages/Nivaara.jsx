import { useState } from "react";
import NivaaraHero from "../components/nivaara/NivaaraHero.jsx";
import NivaaraSubNav from "../components/nivaara/NivaaraSubNav.jsx";
import NivaaraGallerySection from "../components/nivaara/NivaaraGallery.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Accordion from "../components/Accordion.jsx";
import {
  nivaaraBrand,
  nivaaraOverview,
  nivaaraRooms,
  nivaaraDining,
  nivaaraBanquets,
  nivaaraFacilities,
  nivaaraTirumala,
  nivaaraContact,
} from "../data/nivaara/index.js";

export default function Nivaara() {
  return (
    <>
      <NivaaraHero hero={nivaaraOverview.hero} />
      <NivaaraSubNav />

      <OverviewSection />
      <RoomsSection />
      <DiningSection />
      <BanquetsSection />
      <NivaaraGallerySection />
      <FacilitiesSection />
      <TirumalaSection />
      <ContactSection />
    </>
  );
}

function OverviewSection() {
  const { intro, stats, highlights, connectivity, whyBookDirect, comforts, testimonials } = nivaaraOverview;

  return (
    <section id="overview" className="scroll-mt-28">
      <div className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="eyebrow mb-4">{intro.eyebrow}</span>
            <h2 className="text-[clamp(2rem,4vw,3.1rem)]">{intro.heading}</h2>
            <p className="mt-5 text-[1.08rem] text-ink/65 leading-relaxed">{intro.body}</p>
            <blockquote className="mt-8 border-l-2 border-champagne pl-6 text-[1.05rem] text-ink/60 italic leading-relaxed">
              {intro.quote}
            </blockquote>
          </Reveal>
          <Reveal delay={0.1} className="arch-frame overflow-hidden">
            <img
              src="/images/1L1A7490.jpg"
              alt="Grand lobby with crystal chandelier at Hotel Nivaara"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>

      <div className="py-[clamp(60px,8vw,100px)] bg-espresso text-ivory">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-champagne-light">{s.num}</div>
              <div className="mt-2 text-[0.72rem] uppercase tracking-wider text-ivory/60">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <article className="group">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <span className="eyebrow mb-3">{item.eyebrow}</span>
                  <h3 className="text-2xl mb-3">{item.title}</h3>
                  <p className="text-[0.95rem] text-ink/65 leading-relaxed mb-5">{item.body}</p>
                  <Button href={item.href} variant="text">
                    {item.cta}
                  </Button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader
            eyebrow={connectivity.eyebrow}
            heading={connectivity.heading}
            body={connectivity.body}
            className="mb-14"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
            {connectivity.points.map((p, i) => (
              <Reveal key={p.label} delay={i * 0.05} className="bg-ivory p-8">
                <div className="font-display text-2xl text-champagne-text">{p.distance}</div>
                <h4 className="mt-2 text-lg">{p.label}</h4>
                <p className="mt-2 text-sm text-ink/60">{p.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader
            eyebrow={whyBookDirect.eyebrow}
            heading={whyBookDirect.heading}
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
            {whyBookDirect.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="bg-ivory p-8 md:p-10">
                <h4 className="text-xl mb-3">{item.title}</h4>
                <p className="text-[0.92rem] text-ink/65 leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="py-[clamp(60px,8vw,100px)] border-y border-ink/10">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal className="text-center mb-10">
            <span className="eyebrow mb-4">Every Comfort</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">Quietly attended</h2>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-3">
            {comforts.map((c) => (
              <span key={c} className="text-sm text-ink/70 border border-ink/15 px-4 py-2">
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="py-[clamp(80px,10vw,140px)] bg-espresso text-ivory">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal className="text-center mb-14">
            <span className="eyebrow on-dark mb-4">Verified Reviews</span>
            <h2 className="text-ivory text-[clamp(2rem,4vw,3rem)]">Guest Stories</h2>
            <p className="mt-3 text-ivory/70">
              {nivaaraBrand.rating} · Google Reviews · {nivaaraBrand.reviewCount}
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.06} className="border border-white/10 p-8">
                <p className="text-ivory/85 leading-relaxed italic">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-5 text-sm text-champagne-light">
                  {t.name}
                  {t.location && ` · ${t.location}`}
                  {t.date && ` · ${t.date}`}
                </p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-10 text-center">
            <Button href={nivaaraBrand.googleReviews} variant="textDark">
              Read all on Google
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function RoomsSection() {
  return (
    <section id="rooms" className="py-[clamp(80px,10vw,140px)] scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeader
          eyebrow={nivaaraRooms.eyebrow}
          heading={nivaaraRooms.heading}
          body={nivaaraRooms.sub}
          className="mb-16"
        />

        <div className="flex flex-col gap-24">
          {nivaaraRooms.rooms.map((room, i) => (
            <Reveal
              key={room.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden relative">
                <img
                  src={room.image}
                  alt={room.imageAlt}
                  className="w-full h-[clamp(300px,40vw,520px)] object-cover"
                  loading="lazy"
                />
                <span className="absolute top-5 left-5 text-[0.65rem] uppercase tracking-wider text-ivory bg-espresso/70 px-3 py-1.5">
                  {room.size} · {room.rating}
                </span>
              </div>
              <div>
                <h3 className="text-[clamp(1.8rem,3vw,2.6rem)]">{room.name}</h3>
                <p className="mt-4 text-[0.95rem] text-ink/65 leading-relaxed">{room.description}</p>
                <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Size</dt>
                    <dd className="mt-1 text-ink/75">{room.size}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Bed</dt>
                    <dd className="mt-1 text-ink/75">{room.bed}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Single Occupancy</dt>
                    <dd className="mt-1 font-display text-lg text-champagne-text">{room.occupancy.single}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Double Occupancy</dt>
                    <dd className="mt-1 font-display text-lg text-champagne-text">{room.occupancy.double}</dd>
                  </div>
                </dl>
                <ul className="mt-6 grid gap-2">
                  {room.amenities.map((a) => (
                    <li key={a} className="flex gap-3 text-[0.92rem] text-ink/70">
                      <span className="text-champagne-text">—</span>
                      {a}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-ink/50">{nivaaraRooms.pricingNote}</p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button href={nivaaraBrand.bookingUrl} variant="primary" icon={false}>
                    Book Your Stay
                  </Button>
                  <Button href="#contact" variant="text">
                    Enquire
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20">
          <h3 className="text-2xl text-center mb-10">{nivaaraRooms.inRoomAmenities.heading}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/10">
            {nivaaraRooms.inRoomAmenities.items.map((item) => (
              <div key={item} className="bg-sand/40 p-5 text-[0.9rem] text-ink/70">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink/55">{nivaaraRooms.note}</p>
        </Reveal>
      </div>
    </section>
  );
}

function DiningSection() {
  return (
    <section id="dining" className="py-[clamp(80px,10vw,140px)] bg-sand scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeader
          eyebrow={nivaaraDining.eyebrow}
          heading={nivaaraDining.heading}
          body={nivaaraDining.sub}
          className="mb-16"
        />

        <div className="flex flex-col gap-20">
          {nivaaraDining.venues.map((venue, i) => (
            <Reveal
              key={venue.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <img
                src={venue.image}
                alt={venue.imageAlt}
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
              <div>
                <span className="eyebrow mb-3">{venue.tag}</span>
                <h3 className="text-[clamp(1.6rem,2.5vw,2.4rem)]">{venue.name}</h3>
                <p className="mt-4 text-[0.95rem] text-ink/65 leading-relaxed">{venue.description}</p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm text-ink/60">
                  <span>{venue.hours}</span>
                  <span>·</span>
                  <span>Capacity: {venue.capacity}</span>
                </div>
                <p className="mt-3 text-sm text-champagne-text">{venue.cuisine}</p>
                <ul className="mt-5 grid gap-2">
                  {venue.features.map((f) => (
                    <li key={f} className="flex gap-2 text-[0.9rem] text-ink/65">
                      <span className="text-champagne-text">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button href="#contact" variant="text">
                    Reserve Table
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20 text-center bg-ivory p-10 md:p-14">
          <h3 className="text-2xl">{nivaaraDining.privateDining.heading}</h3>
          <p className="mt-4 text-ink/65 max-w-[50ch] mx-auto">{nivaaraDining.privateDining.body}</p>
          <div className="mt-6">
            <Button href="#contact" variant="primary" icon={false}>
              {nivaaraDining.privateDining.cta}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BanquetsSection() {
  return (
    <section id="banquets" className="py-[clamp(80px,10vw,140px)] scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeader
          eyebrow={nivaaraBanquets.eyebrow}
          heading={nivaaraBanquets.heading}
          body={nivaaraBanquets.sub}
          className="mb-10"
        />

        <Reveal className="flex flex-wrap gap-3 mb-16">
          {nivaaraBanquets.features.map((f) => (
            <span key={f} className="text-xs uppercase tracking-wider border border-ink/15 px-4 py-2 text-ink/60">
              {f}
            </span>
          ))}
        </Reveal>

        <div className="flex flex-col gap-20">
          {nivaaraBanquets.venues.map((venue, i) => (
            <Reveal
              key={venue.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <img
                src={venue.image}
                alt={venue.imageAlt}
                className="w-full h-72 lg:h-96 object-cover"
                loading="lazy"
              />
              <div>
                <span className="eyebrow mb-3">{venue.tag}</span>
                <h3 className="text-[clamp(1.6rem,2.5vw,2.4rem)]">{venue.name}</h3>
                <p className="mt-4 text-[0.95rem] text-ink/65 leading-relaxed">{venue.description}</p>
                <dl className="mt-6 grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Capacity</dt>
                    <dd className="mt-1 font-display text-2xl text-champagne-text">{venue.capacity}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Area</dt>
                    <dd className="mt-1 font-display text-2xl text-champagne-text">{venue.area}</dd>
                  </div>
                </dl>
                <p className="mt-4 text-sm text-ink/60">{venue.use}</p>
                <div className="mt-6">
                  <Button href="#contact" variant="text">
                    Plan Your Event
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <img
            src={nivaaraBanquets.occasionImage}
            alt={nivaaraBanquets.occasionImageAlt}
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div>
            <h3 className="text-2xl mb-6">A venue for every occasion</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {nivaaraBanquets.occasions.map((o) => (
                <li key={o} className="flex gap-2 text-[0.92rem] text-ink/70">
                  <span className="text-champagne-text">✦</span>
                  {o}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href="#contact" variant="primary" icon={false}>
                Plan Your Event
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  const { darshanPackage } = nivaaraFacilities;

  return (
    <section id="facilities" className="py-[clamp(80px,10vw,140px)] scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeader
          eyebrow={nivaaraFacilities.eyebrow}
          heading={nivaaraFacilities.heading}
          body={nivaaraFacilities.sub}
          className="mb-6"
        />
        <Reveal className="max-w-[700px] mb-14">
          <h3 className="text-2xl">{nivaaraFacilities.intro.heading}</h3>
          <p className="mt-4 text-ink/65 leading-relaxed">{nivaaraFacilities.intro.body}</p>
        </Reveal>

        <div className="flex flex-col gap-16">
          {nivaaraFacilities.groups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.04}>
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-8 border-b border-ink/10 pb-4">
                <h3 className="text-xl">{group.title}</h3>
                <span className="text-[0.72rem] uppercase tracking-wider text-ink/50">{group.count}</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
                {group.items.map((item) => (
                  <div key={item.name} className="bg-ivory p-6 md:p-8">
                    <h4 className="text-base font-semibold mb-2">{item.name}</h4>
                    <p className="text-[0.9rem] text-ink/65 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-sand p-8 md:p-12">
          <img
            src={darshanPackage.image}
            alt={darshanPackage.imageAlt}
            className="w-full h-80 object-cover"
            loading="lazy"
          />
          <div>
            <span className="eyebrow mb-4">{darshanPackage.eyebrow}</span>
            <h3 className="text-2xl">{darshanPackage.heading}</h3>
            <p className="mt-4 text-ink/65 leading-relaxed">{darshanPackage.body}</p>
            <ul className="mt-6 grid gap-2">
              {darshanPackage.items.map((item) => (
                <li key={item} className="flex gap-2 text-[0.9rem] text-ink/70">
                  <span className="text-champagne-text">—</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contact" variant="primary" icon={false}>
                Request Darshan Assistance
              </Button>
              <Button href="#tirumala" variant="text">
                Explore Tirumala
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function TirumalaSection() {
  return (
    <section id="tirumala" className="py-[clamp(80px,10vw,140px)] bg-espresso text-ivory scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="text-center mb-14">
          <span className="eyebrow on-dark mb-4">{nivaaraTirumala.eyebrow}</span>
          <h2 className="text-ivory text-[clamp(2rem,4vw,3rem)]">{nivaaraTirumala.heading}</h2>
          <p className="mt-5 text-ivory/75 max-w-[60ch] mx-auto leading-relaxed">{nivaaraTirumala.sub}</p>
        </Reveal>

        <Reveal className="arch-frame overflow-hidden mb-16">
          <img
            src={nivaaraTirumala.heroImage}
            alt={nivaaraTirumala.heroImageAlt}
            className="w-full h-[clamp(280px,40vw,480px)] object-cover opacity-90"
            loading="lazy"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <Reveal>
            <h3 className="text-ivory text-2xl mb-4">{nivaaraTirumala.arjithaSevas.heading}</h3>
            <p className="text-ivory/75 leading-relaxed">{nivaaraTirumala.arjithaSevas.body}</p>
            <div className="mt-6">
              <Button href={nivaaraTirumala.arjithaSevas.link} variant="textDark">
                {nivaaraTirumala.arjithaSevas.linkLabel}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h3 className="text-ivory text-2xl mb-4">{nivaaraTirumala.contacts.heading}</h3>
            <p className="text-champagne-light text-sm uppercase tracking-wider mb-4">
              {nivaaraTirumala.contacts.subheading}
            </p>
            <dl className="grid gap-3">
              {nivaaraTirumala.contacts.items.map((c) => (
                <div key={c.label}>
                  <dt className="text-xs uppercase tracking-wider text-ivory/50">{c.label}</dt>
                  <dd className="text-ivory/85 mt-0.5">{c.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 flex flex-wrap gap-4">
              {nivaaraTirumala.contacts.resources.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-champagne-light border-b border-champagne-light/40 hover:text-ivory transition-colors"
                >
                  {r.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-ivory text-2xl mb-4">{nivaaraTirumala.about.heading}</h3>
            <p className="text-ivory/75 leading-relaxed">{nivaaraTirumala.about.body}</p>
            <p className="mt-5 text-sm text-ivory/60">{nivaaraTirumala.distanceNote}</p>
          </div>
          <img
            src={nivaaraTirumala.about.image}
            alt={nivaaraTirumala.about.imageAlt}
            className="w-full h-72 object-cover"
            loading="lazy"
          />
        </Reveal>

        <Reveal>
          <h3 className="text-ivory text-2xl mb-8 text-center">{nivaaraTirumala.sacredSites.heading}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {nivaaraTirumala.sacredSites.sites.map((site) => (
              <div key={site.name} className="bg-espresso-soft p-6 border border-white/5">
                <div className="font-display text-champagne-light">{site.distance}</div>
                <h4 className="mt-2 text-ivory">{site.name}</h4>
                <p className="mt-2 text-sm text-ivory/60">{site.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: "1",
    roomType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-[clamp(80px,10vw,140px)] bg-sand scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <SectionHeader
          eyebrow={nivaaraContact.eyebrow}
          heading={nivaaraContact.heading}
          body={nivaaraContact.intro.body}
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          <Reveal>
            <h3 className="text-2xl mb-6">{nivaaraContact.intro.heading}</h3>
            <dl className="grid gap-6">
              <div>
                <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Address</dt>
                <dd className="mt-2 text-ink/70 leading-relaxed">{nivaaraBrand.address}</dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Reservations</dt>
                <dd className="mt-2">
                  <a href={`tel:${nivaaraBrand.phoneTel}`} className="block text-ink/75 hover:text-champagne-text">
                    {nivaaraBrand.phone}
                  </a>
                  <a
                    href={`tel:${nivaaraBrand.phoneLandlineTel}`}
                    className="block text-ink/75 hover:text-champagne-text mt-1"
                  >
                    {nivaaraBrand.phoneLandline}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Email</dt>
                <dd className="mt-2">
                  <a href={`mailto:${nivaaraBrand.email}`} className="text-ink/75 hover:text-champagne-text">
                    {nivaaraBrand.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-[0.72rem] uppercase tracking-wider text-ink/50">Front Desk</dt>
                <dd className="mt-2 text-ink/75">{nivaaraBrand.frontDesk}</dd>
              </div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={nivaaraBrand.bookingUrl} variant="primary" icon={false}>
                Book Your Stay
              </Button>
              <Button href={nivaaraBrand.whatsapp} variant="ghost" icon={false}>
                WhatsApp
              </Button>
            </div>
            <div className="mt-10 aspect-video bg-ivory border border-ink/10 overflow-hidden">
              <iframe
                title="Hotel Nivaara location map"
                src={`https://maps.google.com/maps?q=${nivaaraBrand.mapQuery}&output=embed`}
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="bg-ivory p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl mb-3">Enquiry Received</h3>
                <p className="text-ink/65">
                  Thank you for your interest in Hotel Nivaara. Our reservations team will be in touch shortly.
                </p>
                <div className="mt-6">
                  <Button href={`tel:${nivaaraBrand.phoneTel}`} variant="text">
                    Call Reservations
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-xl mb-2">{nivaaraContact.form.heading}</h3>
                <p className="text-sm text-ink/55 mb-6">{nivaaraContact.form.note}</p>
                <div className="grid gap-5">
                  <NivaaraField label="Name">
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                    />
                  </NivaaraField>
                  <NivaaraField label="Phone">
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                    />
                  </NivaaraField>
                  <NivaaraField label="Email">
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                    />
                  </NivaaraField>
                  <div className="grid grid-cols-2 gap-4">
                    <NivaaraField label="Check-in">
                      <input
                        type="date"
                        value={form.checkIn}
                        onChange={(e) => setForm({ ...form, checkIn: e.target.value })}
                        className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                      />
                    </NivaaraField>
                    <NivaaraField label="Check-out">
                      <input
                        type="date"
                        value={form.checkOut}
                        onChange={(e) => setForm({ ...form, checkOut: e.target.value })}
                        className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                      />
                    </NivaaraField>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <NivaaraField label="Guests">
                      <select
                        value={form.guests}
                        onChange={(e) => setForm({ ...form, guests: e.target.value })}
                        className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                      >
                        {nivaaraContact.form.guestOptions.map((g) => (
                          <option key={g} value={g}>
                            {g}
                          </option>
                        ))}
                      </select>
                    </NivaaraField>
                    <NivaaraField label="Room Type">
                      <select
                        value={form.roomType}
                        onChange={(e) => setForm({ ...form, roomType: e.target.value })}
                        className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                      >
                        <option value="">Select</option>
                        {nivaaraContact.form.roomTypes.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </NivaaraField>
                  </div>
                  <NivaaraField label="Special Requests">
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne resize-none"
                    />
                  </NivaaraField>
                </div>
                <div className="mt-8">
                  <Button as="button" type="submit" variant="primary" icon={false}>
                    Send Enquiry
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>

        <Reveal>
          <h3 className="text-2xl text-center mb-10">Frequently asked questions</h3>
          <div className="max-w-[900px] mx-auto">
            <Accordion
              items={nivaaraContact.faq.map((item) => ({ title: item.title, body: item.body }))}
              defaultOpen={0}
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-20 text-center bg-espresso text-ivory p-10 md:p-14">
          <h3 className="text-ivory text-2xl">{nivaaraContact.reserve.heading}</h3>
          <p className="mt-4 text-ivory/75 max-w-[56ch] mx-auto">{nivaaraContact.reserve.body}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href={nivaaraBrand.bookingUrl} variant="ghostDark" icon={false}>
              Book Your Stay
            </Button>
            <Button href={`mailto:${nivaaraBrand.email}`} variant="textDark">
              Contact Nivaara
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NivaaraField({ label, children }) {
  return (
    <div>
      <label className="block text-[0.72rem] uppercase tracking-wider text-ink/55 mb-1.5">{label}</label>
      {children}
    </div>
  );
}
