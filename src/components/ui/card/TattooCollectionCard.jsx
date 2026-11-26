import { Link } from "react-router-dom";
import "./TattooCollectionCard.css";

export default function TattooCollectionCard({ tattoo, onSelect }) {
  const { src, image, title, alt, link } = tattoo;

  const handleClick = (event) => {
    if (onSelect) {
      event.preventDefault();
      onSelect();
    }
  };

  return (
    <article className="tattoo-card">
      <Link
        to={link || "#"}
        className="tattoo-card__media"
        onClick={handleClick}
      >
        <img
          src={src || image}
          alt={alt || title || "Tatuaje de la galería"}
          className="tattoo-card__image"
          loading="lazy"
        />
      </Link>
    </article>
  );
}