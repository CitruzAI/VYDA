import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-t border-ink/10">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.title} className="border-b border-ink/10">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="w-full flex items-center justify-between gap-4 py-5 text-left group"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg md:text-xl text-espresso group-hover:text-champagne-text transition-colors">
                {item.title}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-champagne-text shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                strokeWidth={1.5}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 pr-4">
                    {item.body && (
                      <p className="text-[0.95rem] text-ink/65 leading-relaxed max-w-[60ch]">{item.body}</p>
                    )}
                    {item.items && (
                      <ul className="grid gap-2.5 mt-1">
                        {item.items.map((line) => (
                          <li key={line} className="flex gap-3 text-[0.92rem] text-ink/65">
                            <span className="text-champagne-text shrink-0">✦</span>
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                    {item.subitems && (
                      <div className="grid gap-5 mt-2">
                        {item.subitems.map((sub) => (
                          <div key={sub.name}>
                            <h5 className="font-semibold text-sm mb-1">{sub.name}</h5>
                            <p className="text-[0.9rem] text-ink/65">{sub.body}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
