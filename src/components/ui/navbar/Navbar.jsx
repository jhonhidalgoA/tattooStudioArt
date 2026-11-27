import { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { navbarData } from "../../data/navbarData";
import "./Navbar.css";

const studioName = "Tatoo Studio Art";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeHref, setActiveHref] = useState(
    () => window.location.hash || ""
  );

  const location = useLocation();
  const navigate = useNavigate();

  const listRef = useRef(null);
  const indicatorRef = useRef(null);

  const isHome = location.pathname === "/";
  const effectiveActiveHref = isHome ? activeHref : "";

  const moveIndicatorTo = useCallback((target, animate = true) => {
    const list = listRef.current;
    const indicator = indicatorRef.current;
    if (!list || !indicator || !target) return;

    const listRect = list.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();

    indicator.classList.toggle("is-animated", animate);
    indicator.style.left = `${targetRect.left - listRect.left}px`;
    indicator.style.width = `${targetRect.width}px`;
    indicator.classList.add("is-visible");
  }, []);

  const syncToActive = useCallback(
    (animate = true) => {
      const indicator = indicatorRef.current;
      const list = listRef.current;
      if (!list || !indicator) return;

      if (!isHome) {
        indicator.classList.remove("is-visible");
        return;
      }

      const links = Array.from(
        list.querySelectorAll(".navbar__link:not(.navbar__link--cta)")
      );
      const activeLink = links.find(
        (el) => el.getAttribute("href") === effectiveActiveHref
      );

      if (activeLink) {
        moveIndicatorTo(activeLink, animate);
      } else {
        indicator.classList.remove("is-visible");
      }
    },
    [effectiveActiveHref, isHome, moveIndicatorTo]
  );

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

  useEffect(() => {
    syncToActive(false);
    const onResize = () => syncToActive(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [syncToActive]);

  const scrollToSection = (hash) => {
    if (!hash || hash === "#hero" || hash === "#home" || hash === "#inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const id = hash.replace(/^#/, "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavClick = (e, href, isCta = false) => {
    e.preventDefault();
    setIsOpen(false);

    if (!isCta) {
      setActiveHref(href);
    }

    if (isHome) {
      scrollToSection(href);
    } else {
      navigate("/", { state: { scrollTo: href } });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a
          href="/#hero"
          className="navbar__brand"
          onClick={(e) => handleNavClick(e, "#hero", true)}
        >
          {studioName}
        </a>

        <nav
          id="navbar-menu"
          className={`navbar__nav ${isOpen ? "navbar__nav--open" : ""}`}
          aria-label="Navegación principal"
        >
          <ul
            ref={listRef}
            className="navbar__list"
            onMouseLeave={() => syncToActive(true)}
          >
            {navbarData.map((item) => {
              const isCta = item.id === "reservar";
              const isActive = !isCta && effectiveActiveHref === item.href;

              return (
                <li key={item.id} className="navbar__item">
                  <a
                    href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`navbar__link ${isCta ? "navbar__link--cta" : ""} ${
                      isActive ? "active" : ""
                    }`}
                    onClick={(e) => handleNavClick(e, item.href, isCta)}
                    onMouseEnter={
                      isCta
                        ? undefined
                        : (e) => moveIndicatorTo(e.currentTarget, true)
                    }
                    onFocus={
                      isCta
                        ? undefined
                        : (e) => moveIndicatorTo(e.currentTarget, true)
                    }
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <span
              ref={indicatorRef}
              className="navbar__indicator"
              aria-hidden="true"
            />
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