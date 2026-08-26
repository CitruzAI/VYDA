import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { brand } from "../data/brand.js";
import { nav } from "../data/navigation.js";
import Button from "./Button.jsx";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-vyda-blue transition-all duration-300 ${
          scrolled || open ? "py-3 border-b border-white/10 shadow-sm" : "py-4 border-b border-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-5 md:px-10 flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center shrink-0" aria-label={brand.fullName}>
            <img
              src={brand.logo}
              alt={brand.fullName}
              className="h-12 w-auto md:h-14"
              width={80}
              height={56}
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Primary">
            {nav.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[0.84rem] font-medium relative group transition-colors ${
                  pathname === item.href ? "text-champagne-light" : "text-ivory"
                }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 -bottom-1 h-px bg-champagne-light transition-all duration-300 ${
                    pathname === item.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center">
            <Button to="/#booking" variant="ghostDark" icon={false}>
              Book Your Stay
            </Button>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-1 text-ivory"
          >
            {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-ivory flex flex-col justify-center px-8 md:px-16"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className="font-display text-3xl md:text-4xl py-4 border-b border-ink/10 text-espresso block"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-10"
            >
              <Button to="/#booking" icon={false}>
                Book Your Stay
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
