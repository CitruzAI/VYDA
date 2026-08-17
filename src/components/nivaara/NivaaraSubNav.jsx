import { useEffect, useState } from "react";
import { nivaaraSections } from "../../data/nivaara/index.js";

export default function NivaaraSubNav() {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const ids = nivaaraSections.map((s) => s.id);
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <nav
      aria-label="Nivaara sections"
      className="sticky top-[60px] md:top-[68px] z-30 bg-ivory/95 backdrop-blur-md border-b border-ink/10"
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <ul className="flex gap-1 md:gap-2 overflow-x-auto no-scrollbar py-3">
          {nivaaraSections.map((section) => (
            <li key={section.id} className="shrink-0">
              <a
                href={`#${section.id}`}
                className={`block px-3 md:px-4 py-2 text-[0.72rem] md:text-[0.78rem] font-semibold uppercase tracking-wider whitespace-nowrap transition-colors ${
                  active === section.id
                    ? "text-champagne-text border-b-2 border-champagne"
                    : "text-ink/55 hover:text-espresso"
                }`}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
