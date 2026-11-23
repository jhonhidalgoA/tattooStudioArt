import { useState } from "react";
import { Phone, Mail, MapPin, Maximize2 } from "lucide-react";
import { footerData } from "../../data/footerData";
import FooterBottom from "../JAKvora/FooterBottom";
import GalleryLightbox from "../card/GalleryLightbox";
import "./Footer.css";

export default function Footer() {
  const { contact, gallery, hours } = footerData;
  const [openIndex, setOpenIndex] = useState(null);
  const cta = "Reservar cita";

  const lightboxItems = gallery.map((item) => ({
    id: item.image,
    src: item.image,
    alt: item.alt,
  }));

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <section>
          <h4>Sobre nosotros</h4>
          <p>
            "Cada trazo tiene un propósito, cada diseño una historia. Creemos en
            el tatuaje como una forma auténtica de expresión artística."
          </p>
          <div className="footer__left">
            <ul className="footer__contact">
              <li>
                <Phone size={28} aria-hidden="true" />
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </li>
              <li>
                <Mail size={28} aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <MapPin size={28} aria-hidden="true" />
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    `${contact.address}, ${contact.city}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Ver ubicación: ${contact.address}, ${contact.city}`}
                >
                  {contact.address}
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section>
          <h4>Galería</h4>
          <div className="footer__thumbs">
            {gallery.map((item, index) => (
              <button
                key={item.image}
                type="button"
                className="footer__thumb"
                aria-label={`Ampliar: ${item.alt}`}
                onClick={() => setOpenIndex(index)}
              >
                <img src={item.image} alt={item.alt} loading="lazy" />
                <span className="footer__thumb-zoom" aria-hidden="true">
                  <Maximize2 size={14} />
                </span>
              </button>
            ))}
          </div>
        </section>
        <section>
          <div className="footer__right">
            <h4>Horarios</h4>
            <p>Valoración presencial sin costo.</p>
            <ul className="footer__hours">
              {hours.map((row) => (
                <li
                  key={row.day}
                  className={row.closed ? "footer__hours-closed" : ""}
                >
                  <span>{row.day}</span>
                  <span>{row.time}</span>
                </li>
              ))}
            </ul>
            <div className="footer__buttom">
              <a href="#reservar" className="btn btn--ghost hero__cta">
                {cta}
              </a>
            </div>
          </div>
        </section>
      </div>
      <FooterBottom />
      <GalleryLightbox
        items={lightboxItems}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </footer>
  );
}
