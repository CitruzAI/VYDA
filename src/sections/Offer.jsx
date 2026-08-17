import { offer } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

export default function Offer() {
  return (
    <section className="pb-[clamp(80px,10vw,140px)]">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="border border-ink/12 bg-white-warm p-8 md:p-16 grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-8">
          <div>
            <span className="block text-[0.68rem] uppercase tracking-wider text-champagne-text mb-3.5">
              {offer.badge}
            </span>
            <h3 className="text-2xl md:text-3xl max-w-[26ch]">{offer.heading}</h3>
            <p className="mt-3 max-w-[56ch] text-[1.02rem] text-ink/60 leading-relaxed">{offer.body}</p>
          </div>
          <Button href="mailto:reserv@vydahotels.com" variant="ghost" icon={false}>
            {offer.cta}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
