import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "./Button.jsx";

export default function StayCard({ hotel, size = "large", aspect = "aspect-[4/5]", layout = "default" }) {
  const isLarge = size === "large";
  const detailPath = hotel.exploreHref || `/hotels/${hotel.id}`;
  const colSpan = layout === "grid" ? "" : isLarge ? "lg:col-span-7" : "lg:col-span-5";

  return (
    <div className={`group ${colSpan}`}>
      <Link to={detailPath} className={`block overflow-hidden relative ${aspect}`}>
        <motion.img
          src={hotel.image}
          alt={`${hotel.name}, ${hotel.city}`}
          className="w-full h-full object-cover"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          loading="lazy"
        />
        <span className="absolute top-5 left-5 text-[0.65rem] uppercase tracking-wider text-ivory bg-espresso/55 backdrop-blur-sm px-3 py-1.5">
          {hotel.tag}
        </span>
        <span className="absolute bottom-5 left-5 font-display text-6xl text-ivory/90 leading-none drop-shadow-md">
          {hotel.index}
        </span>
      </Link>
      <div className="mt-6">
        <span className="text-[0.72rem] uppercase tracking-wider text-champagne-text">
          {hotel.city} · {hotel.area}
        </span>
        <h3 className="mt-2 text-[clamp(1.4rem,2vw,1.9rem)]">{hotel.name}</h3>
        <p className="mt-3 text-[0.95rem] text-ink/65 max-w-[48ch]">{hotel.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {(hotel.highlights || hotel.attrs || []).slice(0, 3).map((a) => (
            <span key={a} className="text-xs text-ink/60 border border-ink/15 rounded-full px-3 py-1.5">
              {a}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <Button to={detailPath} variant="text">
            Explore Stay
          </Button>
        </div>
      </div>
    </div>
  );
}
