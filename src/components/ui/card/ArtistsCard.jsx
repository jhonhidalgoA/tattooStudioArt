import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import "./ArtistsCard.css";

export default function ArtistsCard({ artist }) {
  const number = String(artist.id).padStart(2, "0");

  return (
    <article className="artist-card">
      <div className="artist-card__img-wrapper">
        <img src={artist.image} alt={artist.name} />
        <div className="artist-card__socials">
          {Object.entries(artist.socials).map(([network, social]) => (
            <a
              key={network}
              href={social.url}
              aria-label={`${network} de ${artist.name}`}
            >
              <img src={social.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
      <div className="artist-card__info">
        <div className="artist-card__text">
          <p className="artist-card__tag">
            <span>{number}</span>
            <span className="artist-card__tag-line" aria-hidden="true"></span>
            <span>{artist.role}</span>
          </p>
          <h3 className="artist-card__name">
            {artist.link ? (
              <Link to={artist.link} className="artist-card__link">
                {artist.name}
              </Link>
            ) : (
              artist.name
            )}
          </h3>
        </div>
        {artist.link && (
          <span className="artist-card__profile" aria-hidden="true">
            <ArrowUpRight size={20} />
          </span>
        )}
      </div>
    </article>
  );
}
