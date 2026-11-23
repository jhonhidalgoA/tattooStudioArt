import "./ArtistsProfileCard.css";

const socialLabels = {
  facebook: "Facebook",
  instagram: "Instagram",
  whatsapp: "WhatsApp",
};

export default function ArtistsProfileCard({ artist }) {
  const {
    id,
    name,
    profileRole,
    image,
    specialty,
    styles = [],
    availability,
    socials = {},
    intro,
    bio = [],
    quote,
  } = artist;

  const firstName = name.split(" ")[0];
  const [roleEn, roleEs] = profileRole.split(" · ");
  const number = String(id).padStart(2, "0");

  return (
    <section className="artist__profile" aria-label={`Perfil de ${name}`}>
      <div className="artist__profile-top">
        <div className="artist__profile-info">
          <p className="artist__profile-eyebrow">
            <span>{number}</span>
            <span className="artist__profile-line" aria-hidden="true" />
            <span>{roleEn}</span>
          </p>

          <h1 className="artist__profile-name">{name}</h1>
          {roleEs && <p className="artist__profile-role">{roleEs}</p>}

          {quote && (
            <blockquote className="artist__profile-quote">{quote}</blockquote>
          )}

          <div className="artist__profile-actions">
            <a href="/#contact" className="artist__profile-cta">
              Agendar con {firstName}
            </a>

            <ul
              className="artist__profile-socials"
              aria-label={`Redes de ${name}`}
            >
              {Object.entries(socials).map(([key, { url, icon }]) => {
                const isExternal = url.startsWith("http");

                return (
                  <li key={key}>
                    <a
                      href={url}
                      className="artist__profile-social"
                      aria-label={`${socialLabels[key] ?? key} de ${name}`}
                      {...(isExternal && {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      })}
                    >
                      <img src={icon} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <aside className="artist__profile-side">
          <div className="artist__profile-photo-frame">
            <img
              src={image}
              alt={`Retrato de ${name}`}
              className="artist__profile-photo"
            />
          </div>
        </aside>
      </div>
      <dl className="artist__profile-facts">
        <div className="artist__profile-fact">
          <dt>Especialidad</dt>
          <dd>{specialty}</dd>
        </div>
        <div className="artist__profile-fact">
          <dt>Estilos</dt>
          <dd className="artist__profile-styles">
            {styles.length > 0 ? (
              styles.join(" · ")
            ) : (
              <span className="artist__profile-chip">Personalizado</span>
            )}
          </dd>
        </div>
        <div className="artist__profile-fact">
          <dt>Disponibilidad</dt>
          <dd>{availability}</dd>
        </div>
      </dl>
      <div className="artist__profile-story">
        <div className="artist__profile-story-head">
          <p className="artist__profile-story-kicker">
            <span className="artist__profile-line" aria-hidden="true" />
            <span>Sobre {firstName}</span>
          </p>
          <h2 className="artist__profile-story-title">Su historia</h2>
        </div>

        <div className="artist__profile-bio">
          {intro && <p className="artist__profile-intro">{intro}</p>}
          {bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}