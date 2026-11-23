import "./FooterBottom.css";

import facebook from "../../../assets/icons/facebook.png";
import instagram from "../../../assets/icons/instagram.png";
import youtube from "../../../assets/icons/youtube.png";
import whatsapp from "../../../assets/icons/whatsapp.png";

const socialLinks = [
  { name: "Facebook", icon: facebook, url: "#" },
  { name: "Instagram", icon: instagram, url: "#" },
  { name: "Youtube", icon: youtube, url: "#" },
  { name: "Whatsapp", icon: whatsapp, url: "#" },
];

export default function FooterBottom() {
  return (
    <section  className="footerbottom">
      <div className="footer-bottom">
        <div className="footer-bottom__copyright">
          <a
            href="#home"
            className="footer-bottom__brand"
            aria-label="JAKVORA inicio"
          >
            <span>J</span>
          </a>
          <span>JAKVORA Software & Tecnología.</span>
          <span className="footer-bottom__separator">|</span>
          <a href="/politica-de-privacidad">Política de privacidad</a>
        </div>
        <div className="footer-bottom__social">
          <span>Síguenos:</span>
          <div className="footer-bottom__social-list">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="footer-bottom__social-link"
              >
                <img src={social.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
