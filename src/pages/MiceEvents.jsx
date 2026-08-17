import PageHero from "../components/PageHero.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import Accordion from "../components/Accordion.jsx";
import VideoBlock from "../components/VideoBlock.jsx";
import { micePage } from "../data/mice.js";
import { brand } from "../data/brand.js";

export default function MiceEvents() {
  const { hero, intro, videos, categories, whyChoose, cta } = micePage;

  return (
    <>
      <PageHero
        eyebrow={hero.eyebrow}
        headline={hero.headline}
        sub={hero.sub}
        image={hero.image}
        imagePosition="center 35%"
      />

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[900px] mx-auto px-5 md:px-10 text-center">
          {intro.map((p, i) => (
            <Reveal key={p} delay={i * 0.08}>
              <p className={`text-[1.05rem] text-ink/65 leading-relaxed ${i > 0 ? "mt-5" : ""}`}>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-[clamp(40px,6vw,80px)] bg-espresso">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal className="text-center mb-10">
            <span className="eyebrow on-dark mb-4">Event Highlights</span>
            <h2 className="text-ivory text-[clamp(1.6rem,3vw,2.4rem)]">See VYDA MICE in action</h2>
          </Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videos.map((video, i) => (
              <Reveal key={video.title} delay={i * 0.1}>
                <VideoBlock title={video.title} src={video.src} poster={video.poster} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <SectionHeader
            eyebrow="Event Categories"
            heading="Tailored solutions for every occasion"
            align="center"
            className="mb-16"
          />

          <div className="flex flex-col gap-20">
            {categories.map((cat, i) => (
              <Reveal
                key={cat.title}
                delay={i * 0.05}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ${i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
              >
                <img src={cat.image} alt={cat.title} className="w-full h-72 lg:h-96 object-cover" loading="lazy" />
                <div>
                  <h3 className="text-2xl md:text-3xl mb-6">{cat.title}</h3>
                  <div className="grid gap-5">
                    {cat.items.map((item) => (
                      <div key={item.name}>
                        <h4 className="font-semibold text-base mb-1">{item.name}</h4>
                        <p className="text-[0.92rem] text-ink/65">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[900px] mx-auto px-5 md:px-10">
          <SectionHeader heading={whyChoose.heading} align="center" className="mb-10" />
          <Accordion
            items={whyChoose.points.map((p) => ({
              title: p.title,
              items: p.items,
            }))}
          />
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-espresso text-ivory text-center">
        <div className="max-w-[700px] mx-auto px-5 md:px-10">
          <Reveal>
            <h2 className="text-ivory text-[clamp(2rem,4vw,3rem)]">{cta.heading}</h2>
            <p className="mt-5 text-ivory/75 leading-relaxed">{cta.body}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button href={`mailto:${brand.miceEmail}`} variant="ghostDark" icon={false}>
                {cta.cta}
              </Button>
              <Button href={`tel:${brand.micePhone.replace(/\s/g, "")}`} variant="textDark">
                {brand.micePhone}
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
