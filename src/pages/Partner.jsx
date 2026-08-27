import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { partnerPage } from "../data/partner.js";
import { brand } from "../data/brand.js";

export default function Partner() {
  const { hero, tagline, expertise, revenue, marketing, whyVyda, cta } = partnerPage;

  return (
    <>
      <PageHero
        headline={hero.headline}
        sub={hero.sub}
        image={hero.image}
        imagePosition="center 40%"
        size="compact"
      />

      <section className="py-[clamp(60px,8vw,100px)]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <p className="font-display text-[clamp(1.4rem,2.5vw,2rem)] text-espresso leading-snug">{tagline}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader eyebrow="Our Expertise" heading={expertise.heading} body={expertise.intro} className="mb-14" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10">
            {expertise.items.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06} className="bg-ivory p-8 md:p-10">
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-[0.92rem] text-ink/65 leading-relaxed">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow mb-4">Built for Growth</span>
            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)]">{revenue.heading}</h2>
            <p className="mt-5 text-[1rem] text-ink/65 leading-relaxed">{revenue.intro}</p>
            <ul className="mt-8 grid gap-3">
              {revenue.items.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] text-ink/70">
                  <span className="text-champagne-text">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.92rem] text-ink/55 italic">{revenue.footer}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img
              src="https://vydahotels.com/wp-content/uploads/2026/02/vyda-banners-1.png"
              alt="VYDA partner services"
              className="w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-espresso text-ivory">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal className="max-w-[700px] mb-12">
            <h2 className="!text-white text-[clamp(2rem,3.5vw,2.8rem)]">{marketing.heading}</h2>
            <p className="mt-5 text-ivory/75 leading-relaxed">{marketing.intro}</p>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
            {marketing.items.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 0.05}
                className={`bg-espresso-soft p-8 border border-white/5 ${
                  i === marketing.items.length - 1 && marketing.items.length % 2 !== 0
                    ? "sm:col-span-2 sm:max-w-md sm:mx-auto sm:w-full"
                    : ""
                }`}
              >
                <h4 className="text-lg !text-ivory">{item}</h4>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <SectionHeader heading={whyVyda.heading} align="center" className="mb-12" />
          <div className="grid gap-5">
            {whyVyda.items.map((item, i) => (
              <Reveal key={item} delay={i * 0.06} className="flex gap-4 items-start border-b border-ink/10 pb-5">
                <span className="font-display text-champagne-text text-xl">0{i + 1}</span>
                <p className="text-[1rem] text-ink/70">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand text-center">
        <div className="max-w-[700px] mx-auto px-5 md:px-10">
          <Reveal>
            <h2 className="text-[clamp(2rem,4vw,3rem)]">{cta.heading}</h2>
            <p className="mt-5 text-ink/65 leading-relaxed">{cta.body}</p>
            <div className="mt-8">
              <Button href={`mailto:${brand.email}`} variant="primary" icon={false}>
                {cta.cta}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
