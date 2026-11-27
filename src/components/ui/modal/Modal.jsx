import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  User,
} from "lucide-react";
import "./Modal.css";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Pendiente: destino del botón (formulario de contacto o WhatsApp)
const BOOKING_LINK = "#";

export default function CardModal({
  items = [],
  index,
  onClose,
  onChange,
  note = "Cada diseño es una creación única, esta imagen es solo una referencia de inspiración.",
}) {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchStartX = useRef(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const [prevIndex, setPrevIndex] = useState(index);

  if (index !== prevIndex) {
    setPrevIndex(index);
    setIsZoomed(false);
  }

  const isOpen =
    typeof index === "number" && index >= 0 && Boolean(items[index]);
  const current = isOpen ? items[index] : null;
  const total = items.length;

  const hasPrev = isOpen && index > 0;
  const hasNext = isOpen && index < total - 1;

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (isZoomed) setIsZoomed(false);
        else onClose?.();
        return;
      }
      if (event.key === "ArrowLeft" && hasPrev) onChange?.(index - 1);
      if (event.key === "ArrowRight" && hasNext) onChange?.(index + 1);

      if (event.key === "Tab" && dialogRef.current) {
        const nodes = dialogRef.current.querySelectorAll(FOCUSABLE);
        if (nodes.length === 0) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, index, hasPrev, hasNext, isZoomed, onClose, onChange]);

  if (!current) return null;

  const formattedIndex = String(index + 1).padStart(2, "0");
  const formattedTotal = String(total).padStart(2, "0");
  const { artist, tags = [] } = current;

  const handleZoomMove = (event) => {
    if (!isZoomed) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    event.currentTarget.style.setProperty("--zoom-x", `${x}%`);
    event.currentTarget.style.setProperty("--zoom-y", `${y}%`);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event) => {
    if (touchStartX.current === null || isZoomed) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;
    if (Math.abs(deltaX) < 50) return;
    if (deltaX < 0 && hasNext) onChange?.(index + 1);
    if (deltaX > 0 && hasPrev) onChange?.(index - 1);
  };

  const labelProps = current.title
    ? { "aria-labelledby": "card-modal-title" }
    : { "aria-label": current.alt || "Detalle de la obra" };

  const artistContent = artist && (
    <>
      <span className="card-modal__avatar" aria-hidden="true">
        {artist.photo ? <img src={artist.photo} alt="" /> : <User size={24} />}
      </span>
      <span className="card-modal__artist-name">{artist.name}</span>
    </>
  );

  return (
    <div className="card-modal" onClick={onClose}>
      <div
        ref={dialogRef}
        className="card-modal__dialog"
        role="dialog"
        aria-modal="true"
        {...labelProps}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          className="card-modal__close"
          aria-label="Cerrar modal"
          onClick={onClose}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div
          className="card-modal__media"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={current.src}
            alt=""
            aria-hidden="true"
            className="card-modal__backdrop"
          />

          <button
            type="button"
            className={`card-modal__stage ${
              isZoomed ? "card-modal__stage--zoomed" : ""
            }`}
            aria-label={isZoomed ? "Reducir imagen" : "Ampliar imagen"}
            onClick={() => setIsZoomed((value) => !value)}
            onMouseMove={handleZoomMove}
          >
            <img
              src={current.src}
              alt={current.alt || current.title || ""}
              className="card-modal__img"
            />
          </button>

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

          <button
            type="button"
            className="card-modal__zoom"
            aria-label={isZoomed ? "Reducir imagen" : "Ampliar imagen"}
            onClick={() => setIsZoomed((value) => !value)}
          >
            {isZoomed ? (
              <ZoomOut size={18} aria-hidden="true" />
            ) : (
              <ZoomIn size={18} aria-hidden="true" />
            )}
          </button>

          {total > 1 && (
            <ul className="card-modal__thumbs" aria-label="Fotos">
              {items.map((item, i) => (
                <li key={item.id ?? i}>
                  <button
                    type="button"
                    className={`card-modal__thumb ${
                      i === index ? "card-modal__thumb--active" : ""
                    }`}
                    aria-label={`Ver foto ${i + 1} de ${total}`}
                    aria-current={i === index}
                    onClick={() => onChange?.(i)}
                  >
                    <img src={item.thumb ?? item.src} alt="" loading="lazy" />
                  </button>
                </li>
              ))}
            </ul>
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
              <h2 id="card-modal-title" className="card-modal__title">
                {current.title}
              </h2>
            )}

            {current.description && (
              <p className="card-modal__description">{current.description}</p>
            )}

            {artist &&
              (artist.href ? (
                <Link
                  to={artist.href}
                  className="card-modal__artist card-modal__artist--link"
                  aria-label={`Ver perfil de ${artist.name}`}
                  onClick={onClose}
                >
                  {artistContent}
                </Link>
              ) : (
                <div className="card-modal__artist">{artistContent}</div>
              ))}

            <a
              href={BOOKING_LINK}
              className="btn btn--primary card-modal__cta"
            >
              Quiero algo así
            </a>

            {tags.length > 0 && (
              <ul className="card-modal__tags">
                {tags.map((tag) => (
                  <li key={tag} className="card-modal__chip">
                    {tag}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="card-modal__footer">
            {note && <p className="card-modal__note">{note}</p>}

            <div className="card-modal__meta">
              <span>
                {formattedIndex} / {formattedTotal}
              </span>
              <span className="card-modal__esc">ESC PARA CERRAR</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}