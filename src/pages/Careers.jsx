import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";
import { careersPage } from "../data/careers.js";
import { brand } from "../data/brand.js";

export default function Careers() {
  const { hero, intro, learnCraft, different, lookingFor, cta, positions } = careersPage;
  const [form, setForm] = useState({ name: "", phone: "", position: "", resume: null });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (!form.position) next.position = "Please select a position";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <>
      <PageHero headline={hero.headline} sub={hero.sub} image={hero.image} imagePosition="center 30%" />

      <section className="py-[clamp(60px,8vw,100px)]">
        <div className="max-w-[800px] mx-auto px-5 md:px-10 text-center">
          <Reveal>
            <p className="text-[1.05rem] text-ink/65 leading-relaxed">{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow mb-4">{learnCraft.eyebrow}</span>
            <h2 className="text-[clamp(2rem,3.5vw,2.8rem)]">{learnCraft.heading}</h2>
            <p className="mt-5 text-[1rem] text-ink/65 leading-relaxed">{learnCraft.body}</p>
            <ul className="mt-6 grid gap-2.5">
              {learnCraft.areas.map((area) => (
                <li key={area} className="flex gap-3 text-[0.92rem] text-ink/70">
                  <span className="text-champagne-text">—</span>
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-[0.9rem] text-ink/55">{learnCraft.note}</p>
          </Reveal>
          <Reveal delay={0.1} className="arch-frame overflow-hidden">
            <img src={learnCraft.image} alt="Careers at VYDA" className="w-full h-[420px] object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-sand">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal className="arch-frame overflow-hidden lg:order-1">
            <img src={different.image} alt="What makes VYDA different" className="w-full h-[380px] object-cover" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1} className="lg:order-2">
            <h2 className="text-[clamp(2rem,3.5vw,2.6rem)]">{different.heading}</h2>
            <ul className="mt-6 grid gap-4">
              {different.items.map((item) => (
                <li key={item} className="flex gap-3 text-[0.95rem] text-ink/70">
                  <span className="text-champagne-text shrink-0">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)]">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <span className="eyebrow mb-4">{lookingFor.eyebrow}</span>
            <h2 className="text-[clamp(2rem,3.5vw,2.6rem)]">{lookingFor.heading}</h2>
            <p className="mt-5 text-[1rem] text-ink/65 leading-relaxed">{lookingFor.body}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={lookingFor.image} alt="Who we're looking for" className="w-full h-80 object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="py-[clamp(80px,10vw,140px)] bg-espresso text-ivory">
        <div className="max-w-[1400px] mx-auto px-5 md:px-10">
          <Reveal className="text-center mb-12">
            <span className="eyebrow on-dark mb-4">Open Positions</span>
            <h2 className="!text-white text-[clamp(2rem,4vw,3rem)]">Available Positions</h2>
            <p className="mt-4 text-ivory/75 max-w-[56ch] mx-auto">
              We are always on the lookout for young, passionate individuals ready to learn, lead, and make an impact.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 max-w-[900px] mx-auto mb-16">
            {positions.map((position, i) => (
              <Reveal key={position} delay={i * 0.04} className="text-center border border-white/15 px-4 py-5">
                <span className="text-[0.85rem] text-ivory/90">{position}</span>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mb-12">
            <h2 className="!text-white text-[clamp(2rem,4vw,3rem)]">{cta.heading}</h2>
            <p className="mt-4 text-ivory/75 max-w-[56ch] mx-auto">{cta.body}</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              {cta.actions.map((action) => (
                <span key={action} className="text-[0.75rem] uppercase tracking-wider border border-white/20 px-4 py-2">
                  {action}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="max-w-[640px] mx-auto bg-ivory text-ink p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-8">
                <h3 className="text-2xl mb-3">Application Received</h3>
                <p className="text-ink/65">
                  Thank you for your interest in VYDA Hotels. Our team will review your application and be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3 className="text-xl mb-6">Apply Now</h3>
                <div className="grid gap-5">
                  <Field label="Name" error={errors.name}>
                    <input
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                    />
                  </Field>
                  <Field label="Phone / Mobile" error={errors.phone}>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                    />
                  </Field>
                  <Field label="Position Applying For" error={errors.position}>
                    <select
                      value={form.position}
                      onChange={(e) => setForm({ ...form, position: e.target.value })}
                      className="w-full border-b border-ink/20 py-2 bg-transparent focus:outline-none focus:border-champagne"
                    >
                      <option value="">Select a position</option>
                      {positions.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Upload Your Resume">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setForm({ ...form, resume: e.target.files?.[0] || null })}
                      className="w-full text-sm text-ink/65"
                    />
                  </Field>
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Button as="button" type="submit" variant="primary" icon={false}>
                    Submit Application
                  </Button>
                  <Button href={`mailto:${brand.careersEmail}`} variant="ghost" icon={false}>
                    Talk to Our Team
                  </Button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, error, children }) {
  return (
    <div>
      <label className="block text-[0.72rem] uppercase tracking-wider text-ink/55 mb-1.5">{label}</label>
      {children}
      {error && <p className="mt-1 text-xs text-red-700">{error}</p>}
    </div>
  );
}
