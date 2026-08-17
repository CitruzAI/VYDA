import Reveal from "./Reveal.jsx";

export default function SectionHeader({ eyebrow, heading, body, align = "left", className = "" }) {
  const alignClass =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <Reveal className={`flex flex-col gap-4 max-w-[760px] ${alignClass} ${className}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      {heading && <h2 className="text-[clamp(2rem,4vw,3.1rem)] leading-[1.08]">{heading}</h2>}
      {body && <p className="text-[1.05rem] text-ink/60 leading-relaxed max-w-[56ch]">{body}</p>}
    </Reveal>
  );
}
