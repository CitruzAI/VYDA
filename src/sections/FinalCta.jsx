import { finalCta } from "../data/home.js";
import Reveal from "../components/Reveal.jsx";
import Button from "../components/Button.jsx";

export default function FinalCta() {
  return (
    <section className="relative py-[clamp(90px,14vw,180px)] text-center overflow-hidden bg-espresso">
      <Reveal className="relative z-10 max-w-[700px] mx-auto px-6">
        <h2 className="!text-white text-[clamp(2.2rem,5vw,3.6rem)]">{finalCta.heading}</h2>
        <p className="mt-5 mx-auto max-w-[52ch] text-ivory/75 text-lg leading-relaxed">{finalCta.body}</p>
        <div className="mt-9">
          <Button to="/#booking" variant="ghostDark" icon={false}>
            {finalCta.cta}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
