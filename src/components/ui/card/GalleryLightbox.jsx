import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./GalleryLightbox.css";

export default function GalleryLightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const total = items.length;
  const isOpen = index !== null;


  useEffect(() => {
    if (!isOpen) return;
    const previouslyFocused = document.activeElement;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
      previouslyFocused?.focus?.();
    };
  }, [isOpen]);

  
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onChange((index - 1 + total) % total);
      if (event.key === "ArrowRight") onChange((index + 1) % total);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, index, total, onClose, onChange]);

  if (!isOpen) return null;

  const item = items[index];
  const number = String(index + 1).padStart(2, "0");

  const goPrev = (event) => {
    event.stopPropagation();
    onChange((index - 1 + total) % total);
  };

  const goNext = (event) => {
    event.stopPropagation();
    onChange((index + 1) % total);
  };

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title || item.alt}
      onClick={onClose}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox__close"
        onClick={onClose}
        aria-label="Cerrar"
      >
        <X size={28} strokeWidth={1.5} />
      </button>

      <button
        type="button"
        className="lightbox__arrow lightbox__arrow--prev"
        onClick={goPrev}
        aria-label="Foto anterior"
      >
        <ChevronLeft size={48} strokeWidth={1} />
      </button>

      <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
        <img
          key={item.id}
          src={item.src}
          alt={item.alt}
          className="lightbox__image"
        />
        {(item.category || item.title) && (
          <figcaption className="lightbox__caption">
            {item.category && (
              <span className="lightbox__label">
                <span>{number}</span>
                <span className="lightbox__dash" aria-hidden="true"></span>
                {item.category}
              </span>
            )}
            {item.title && (
              <span className="lightbox__title">{item.title}</span>
            )}
          </figcaption>
        )}
      </figure>

      <button
        type="button"
        className="lightbox__arrow lightbox__arrow--next"
        onClick={goNext}
        aria-label="Foto siguiente"
      >
        <ChevronRight size={48} strokeWidth={1} />
      </button>

      <span className="lightbox__count" aria-live="polite">
        {index + 1} / {total}
      </span>
    </div>
  );
}