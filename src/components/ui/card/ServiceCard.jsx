import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./ServiceCard.css";

export default function ServiceCard({ image, title, description, link }) {
  return (
    <article className="service-card">
      <div className="service-card__media">
        <img src={image} alt="" className="service-card__image" />
      </div>
      <div className="service-card__body">
        <span className="service-card__num" aria-hidden="true"></span>
        <h3 className="service-card__title">{title}</h3>
        <p className="service-card__description">{description}</p>
        <Link
          to={link}
          className="service-card__link"
          aria-label={`Leer más sobre ${title}`}
        >
          <span className="service-card__link-text">Leer más</span>
          <span className="service-card__go" aria-hidden="true">
            <ArrowUpRight size={20} />
          </span>
        </Link>
      </div>
    </article>
  );
}