import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navbarData } from "../../data/navbarData";
import "./Navbar.css";

const studioName = "Tatoo Studio Art";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__brand" onClick={closeMenu}>
          {studioName}
        </a>

        <nav
          id="navbar-menu"
          className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul className="navbar__list">
            {navbarData.map((item) => (
              <li key={item.id} className="navbar__item">
                <a
                  href={item.href}
                  className={`navbar__link ${
                    item.id === "reservar" ? "navbar__link--cta" : ""
                  }`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsOpen((v) => !v)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}