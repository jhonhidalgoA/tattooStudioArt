import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import "./Modal.css";

export default function CardModal({
  items = [],
  index,
  onClose,
  onChange,
  ctaLabel = "Quiero algo así",
  ctaHref = "#contacto",
  onCtaClick,
}) {
  const isOpen = typeof index === "number" && index >= 0 && items[index];
  const current = isOpen ? items[index] : null;
  const total = items.length;

  const hasPrev = isOpen && index > 0;
  const hasNext = isOpen && index < total - 1;

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose?.();
      if (event.key === "ArrowLeft" && hasPrev) onChange?.(index - 1);
      if (event.key === "ArrowRight" && hasNext) onChange?.(index + 1);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, index, hasPrev, hasNext, onClose, onChange]);

  if (!current) return null;

  const formattedIndex = String(index + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");

  return (
    <div
      className="card-modal"
      role="dialog"
      aria-modal="true"
      aria-label={current.title || current.alt || "Detalle de la obra"}
      onClick={onClose}
    >
      <div
        className="card-modal__dialog"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="card-modal__close"
          aria-label="Cerrar modal"
          onClick={onClose}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="card-modal__media">
          {hasPrev && (
            <button
              type="button"
              className="card-modal__nav card-modal__nav--prev"
              aria-label="Anterior"
              onClick={() => onChange?.(index - 1)}
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
          )}

          <img
            src={current.src}
            alt={current.alt || current.title || ""}
            className="card-modal__img"
          />

          {hasNext && (
            <button
              type="button"
              className="card-modal__nav card-modal__nav--next"
              aria-label="Siguiente"
              onClick={() => onChange?.(index + 1)}
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          )}
        </div>

        <div className="card-modal__info">
          <div className="card-modal__body">
            <p className="card-modal__tag">
              <span>{formattedIndex}</span>
              {current.category && (
                <>
                  <span className="card-modal__tag-line" aria-hidden="true" />
                  <span>{current.category}</span>
                </>
              )}
            </p>

            {current.title && (
              <h2 className="card-modal__title">{current.title}</h2>
            )}

            {current.description && (
              <p className="card-modal__description">{current.description}</p>
            )}
          </div>

          <div className="card-modal__footer">
            {onCtaClick ? (
              <button
                type="button"
                className="btn btn--primary card-modal__cta"
                onClick={() => onCtaClick(current)}
              >
                {ctaLabel}
              </button>
            ) : (
              <a
                href={ctaHref}
                className="btn btn--primary card-modal__cta"
                onClick={onClose}
              >
                {ctaLabel}
              </a>
            )}

            <div className="card-modal__meta">
              <span>
                {formattedIndex} / {formattedTotal}
              </span>
              <span>ESC PARA CERRAR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}