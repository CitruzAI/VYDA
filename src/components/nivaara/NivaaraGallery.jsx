import { useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../Reveal.jsx";
import Lightbox from "./Lightbox.jsx";
import { nivaaraGallery, galleryCategories } from "../../data/nivaara/index.js";

export default function NivaaraGallerySection() {
  const [filter, setFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filtered =
    filter === "all"
      ? nivaaraGallery.images
      : nivaaraGallery.images.filter((img) => img.category === filter);

  const openLightbox = (index) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <section id="gallery" className="py-[clamp(80px,10vw,140px)] bg-sand scroll-mt-28">
      <div className="max-w-[1400px] mx-auto px-5 md:px-10">
        <Reveal className="text-center mb-10">
          <span className="eyebrow mb-4">{nivaaraGallery.eyebrow}</span>
          <h2 className="text-[clamp(2rem,4vw,3.1rem)]">{nivaaraGallery.heading}</h2>
          <p className="mt-4 text-ink/60 max-w-[50ch] mx-auto">{nivaaraGallery.sub}</p>
        </Reveal>

        <Reveal delay={0.05} className="flex flex-wrap justify-center gap-2 mb-12">
          {galleryCategories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setFilter(cat.id);
                setLightboxIndex(null);
              }}
              aria-pressed={filter === cat.id}
              className={`px-4 py-2 text-[0.72rem] uppercase tracking-wider font-semibold transition-colors ${
                filter === cat.id
                  ? "bg-espresso text-ivory"
                  : "bg-ivory text-ink/60 border border-ink/15 hover:border-espresso"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </Reveal>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <Reveal key={`${img.src}-${i}`} delay={(i % 6) * 0.04}>
              <button
                type="button"
                onClick={() => openLightbox(i)}
                className={`group relative block w-full overflow-hidden bg-espresso text-left focus-visible:outline-2 focus-visible:outline-champagne ${
                  img.span === "large" ? "sm:break-inside-avoid" : ""
                }`}
                aria-label={`View ${img.alt}`}
              >
                <motion.img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${
                    img.span === "large" ? "aspect-[4/5] sm:aspect-[3/4]" : "aspect-[4/3]"
                  }`}
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300" />
                <span className="absolute bottom-0 left-0 right-0 p-4 text-ivory text-sm opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300">
                  {img.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </section>
  );
}
