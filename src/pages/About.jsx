import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import FinalCta from "../sections/FinalCta.jsx";
import { aboutPage } from "../data/about.js";
import { vydaHotels } from "../data/hotels.js";

export default function About() {
  const { hero, intro, whatWeOffer, stats, whyChoose, companyBackground, hotelsOverview, discovery } = aboutPage;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        sub={hero.sub}
        image={hero.image}
        imagePosition="center 30%"
      />

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="eyebrow mb-4">{intro.heading}</span>
            <p className="text-[1.08rem] text-ink/65 leading-relaxed">{intro.body}</p>
            <p className="mt-5 text-[1.05rem] text-ink/60 leading-relaxed">{intro.secondary}</p>
          </Reveal>
          <Reveal delay={0.1} className="arch-frame overflow-hidden">
            <img src={intro.image} alt="VYDA Hotels" className="w-full h-[420px] object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal className="arch-frame overflow-hidden lg:order-1">
            <img
              src={companyBackground.image}
              alt="VYDA Hotels hospitality"
              className="w-full h-[420px] object-cover"
              loading="lazy"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:order-2">
            <span className="eyebrow mb-4">{companyBackground.eyebrow}</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)] leading-snug">{companyBackground.heading}</h2>
            <p className="mt-5 text-[1.05rem] text-ink/65 leading-relaxed">{companyBackground.body}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(60px,8vw,100px)] bg-espresso text-ivory">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <Reveal key={s.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl text-champagne-light">{s.num}</div>
              <div className="mt-2 text-[0.72rem] uppercase tracking-wider text-ivory/60">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="What We Offer" heading="What We Offer" align="center" className="mb-16" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {whatWeOffer.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.1} className="grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-6 items-center">
                <img src={item.image} alt={item.title} className="w-full h-56 md:h-72 object-cover" loading="lazy" />
                <div>
                  <h3 className="text-2xl mb-3">{item.title}</h3>
                  <p className="text-[0.95rem] text-ink/65 leading-relaxed">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader
            eyebrow={whyChoose.eyebrow}
            heading={whyChoose.heading}
            body={whyChoose.sub}
            align="center"
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {whyChoose.points.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.05} className="bg-ivory p-8">
                <h4 className="text-lg mb-2">{p.title}</h4>
                <p className="text-[0.9rem] text-ink/65">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <Reveal>
            <span className="eyebrow mb-4">{hotelsOverview.eyebrow}</span>
            <h2 className="text-[clamp(1.8rem,3vw,2.6rem)]">{hotelsOverview.heading}</h2>
            <p className="mt-5 text-[1.05rem] text-ink/65 leading-relaxed">{hotelsOverview.body}</p>
            <div className="mt-8">
              <Button to="/hotels" variant="ghost" icon={false}>
                Explore VYDA Hotels
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="overflow-hidden">
            <img src={hotelsOverview.image} alt="VYDA Hotels collection" className="w-full h-[380px] object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader
            eyebrow={discovery.eyebrow}
            heading={discovery.heading}
            body={discovery.body}
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {vydaHotels.map((hotel, i) => (
              <Reveal key={hotel.id} delay={i * 0.08}>
                <article className="bg-ivory overflow-hidden h-full flex flex-col">
                  <img src={hotel.image} alt={hotel.name} className="w-full h-52 object-cover" loading="lazy" />
                  <div className="p-6 flex flex-col flex-1">
                    <span className="text-[0.7rem] uppercase tracking-wider text-champagne-text">
                      {hotel.city} · {hotel.area}
                    </span>
                    <h4 className="mt-1 text-xl">{hotel.name}</h4>
                    <p className="mt-2 text-sm text-ink/60">{hotel.roomCount}</p>
                    <p className="mt-3 text-[0.9rem] text-ink/65 leading-relaxed flex-1">{hotel.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {hotel.highlights.slice(0, 2).map((h) => (
                        <span key={h} className="text-xs text-ink/60 border border-ink/15 rounded-full px-3 py-1.5">
                          {h}
                        </span>
                      ))}
                    </div>
                    <div className="mt-5">
                      <Button to={hotel.exploreHref} variant="text">
                        Explore Hotel
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2} className="mt-12 text-center">
            <Button to="/#booking" variant="primary" icon={false}>
              {discovery.cta}
            </Button>
          </Reveal>
        </div>
      </section>

      <Testimonials />
      <FinalCta />
    </>
  );
}
