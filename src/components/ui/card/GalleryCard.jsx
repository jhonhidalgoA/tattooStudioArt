import { Maximize2 } from "lucide-react";
import "./GalleryCard.css";

export default function GalleryCard({ src, alt, title, onOpen }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen();
    }
  };

  return (
    <article className="gallery-card">
      <div
        className="gallery-card__img-wrapper"
        role="button"
        tabIndex={0}
        aria-label={`Ampliar: ${title}`}
        onClick={onOpen}
        onKeyDown={handleKeyDown}
      >
        <img src={src} alt={alt} loading="lazy" />
        <span className="gallery-card__zoom" aria-hidden="true">
          <Maximize2 size={18} />
        </span>
      </div>
     
    </article>
  );
}