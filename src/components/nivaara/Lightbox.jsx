import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const image = images[index];

  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={image.alt}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-espresso/95 flex items-center justify-center p-4 md:p-8"
        onClick={onClose}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="absolute top-4 right-4 md:top-6 md:right-6 w-11 h-11 rounded-full bg-ivory/10 text-ivory flex items-center justify-center hover:bg-ivory/20 transition-colors"
        >
          <X className="w-5 h-5" strokeWidth={1.5} />
        </button>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory/10 text-ivory flex items-center justify-center hover:bg-ivory/20 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-ivory/10 text-ivory flex items-center justify-center hover:bg-ivory/20 transition-colors"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </>
        )}

        <motion.figure
          initial={{ scale: 0.96, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.96, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-[1200px] w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full max-h-[80vh] object-contain"
          />
          <figcaption className="mt-4 text-center text-ivory/75 text-sm">{image.alt}</figcaption>
          <p className="mt-2 text-center text-ivory/50 text-xs">
            {index + 1} / {images.length}
          </p>
        </motion.figure>
      </motion.div>
    </AnimatePresence>
  );
}
