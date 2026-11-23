import { Link } from "react-router-dom";
import { artistsData } from "../../data/artistsData";
import "./ArtistNav.css";

export default function ArtistNav({ currentSlug }) {
  const index = artistsData.findIndex((artist) => artist.slug === currentSlug);
  if (index === -1) return null;

  const total = artistsData.length;
  const prev = artistsData[(index - 1 + total) % total];
  const next = artistsData[(index + 1) % total];

  return (
    <nav className="artist-nav" aria-label="Navegación entre artistas">
      <Link to={prev.link} className="artist-nav__link artist-nav__link--prev">
        <span className="artist-nav__arrow" aria-hidden="true">
          ←
        </span>
        <span className="artist-nav__text">
          <span className="artist-nav__label">Anterior</span>
          <span className="artist-nav__name">{prev.name}</span>
        </span>
      </Link>

      <a href="/#artists" className="artist-nav__all">
        Todos los artistas
      </a>

      <Link to={next.link} className="artist-nav__link artist-nav__link--next">
        <span className="artist-nav__text">
          <span className="artist-nav__label">Siguiente</span>
          <span className="artist-nav__name">{next.name}</span>
        </span>
        <span className="artist-nav__arrow" aria-hidden="true">
          →
        </span>
      </Link>
    </nav>
  );
}