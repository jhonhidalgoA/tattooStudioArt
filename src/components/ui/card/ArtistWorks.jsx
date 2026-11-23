import Title from "../title/Title";
import "./ArtistWorks.css";

export default function ArtistWorks({ artist }) {
  const { gallery = [] } = artist;

  if (gallery.length === 0) return null;

  return (
    <section className="artist__works" aria-label={`Trabajos de ${artist.name}`}>
      <header className="artist__works-header">
        <Title page="style" />
      </header>

      <ul className="artist__works-grid">
        {gallery.map((work, index) => (
          <li key={work.id} className="artist__works-item">
            <figure className="artist__works-figure">
              <div className="artist__works-frame">
                <span className="artist__works-badge" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <img
                  src={work.image}
                  alt={work.alt}
                  loading="lazy"
                  className="artist__works-image"
                />
              </div>

              <figcaption className="artist__works-caption">
                <p className="artist__works-label">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <span className="artist__works-line" aria-hidden="true" />
                  <span>{work.style}</span>
                </p>
                <p className="artist__works-text">
                  Tatuaje estilo {work.style}
                </p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}