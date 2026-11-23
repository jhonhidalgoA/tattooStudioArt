import { Phone, Mail, MapPin } from "lucide-react";
import { footerData } from "../../src/components/data/footerData";

import Title from "../components/ui/title/Title";

import Facebook from "../../src/assets/icons/facebook.png";
import Instagram from "../../src/assets/icons/instagram.png";
import Whatapp from "../../src/assets/icons/whatsapp.png";

import "./ContactPage.css";

export default function ContactPage() {
  const { contact } = footerData;
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <Title page="contact" />

        <div className="contact__grid">
          <div className="contact__info-col">
            <ul className="footer__contact contact__info">
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

            <div className="contact__hours-card">
              <h3>Horarios</h3>
              <ul>
                <li>
                  <span>Lunes a sábado</span>
                  <span>8:00 am – 8:00 pm</span>
                </li>
                <li className="contact__hours-closed">
                  <span>Domingo</span>
                  <span>Cerrado</span>
                </li>
              </ul>
            </div>

            <div className="contact__socials-row">
              <span>Síguenos:</span>
              <div className="contact__social-icons">
                <a href="#" aria-label="Facebook">
                  <img src={Facebook} alt="" />
                </a>
                <a href="#" aria-label="Instagram">
                  <img src={Instagram} alt="" />
                </a>
                <a href="#" aria-label="Whatapp">
                  <img src={Whatapp} alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="contact__form-card">
            <div className="contact__form-inner">
              <h2>Solicita tu cita</h2>
              <p className="contact__form-subtitle">
                Cuéntanos tu idea. Nuestro equipo te orientará.
              </p>

              <form onSubmit={handleSubmit} className="contact__form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="correo">Correo</label>
                    <input
                      type="email"
                      id="correo"
                      placeholder="tu@email.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="telefono">WhatsApp o teléfono</label>
                    <input
                      type="tel"
                      id="telefono"
                      placeholder="Tu número de contacto"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="servicio">Servicio</label>
                  <select id="servicio" defaultValue="" required>
                    <option value="" disabled>
                      Selecciona un servicio
                    </option>
                    <option value="diseno-personalizado">
                      Diseño personalizado
                    </option>
                    <option value="linea-fina-geometria">
                      Línea fina / Geometría sagrada
                    </option>
                    <option value="cover-up">Cover-up / Restauración</option>
                    <option value="asesoria-cita">Asesoría y cotización</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensaje">
                    Describe el tatuaje que quieres hacerte
                  </label>
                  <textarea
                    id="mensaje"
                    rows="3"
                    placeholder="Cuéntanos tu idea, tamaño y zona del cuerpo..."
                    required
                  ></textarea>
                </div>

                <label className="contact__checkbox">
                  <input type="checkbox" required />
                  <span>
                    Acepto el tratamiento de mis datos personales según la{" "}
                    <a href="#privacidad" className="contact__policy-link">
                      política de privacidad
                    </a>
                    .
                  </span>
                </label>

                <button type="submit" className="contact__submit-btn">
                  RESERVAR CITA
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}