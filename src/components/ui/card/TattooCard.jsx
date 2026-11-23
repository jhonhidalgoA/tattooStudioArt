import { Link } from "react-router-dom";
import "./TattooCard.css";

export default function TattooCard({ tattoo }) {
  const { image, title, link } = tattoo;

  return (
    <article className="tattoo-card">
      <Link to={link || "#"} className="tattoo-card__media">
        <img src={image} alt={title || "Tatuaje de la galería"} className="tattoo-card__image" loading="lazy" />
        {title && (
          <div className="tattoo-card__overlay">
            <span>{title}</span>
          </div>
        )}
      </Link>
    </article>
  );
}