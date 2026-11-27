import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import Artists from "./ArtistsPage";
import Gallery from "./GalleryPage";
import Services from "./services/ServicesPage";
import Testimonials from "./TestimonialsPage";
import ContactPage from "./ContactPage";

import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";

import "./HeroPage.css";

const slides = [
  {
    eyebrow: "El arte que llevas en la piel",
    title: "Nace de lo que llevas en el alma.",
    image: "/modelo.png",
    imageAlt: "Descripción de la imagen",
  },
  {
    eyebrow: "Hay historias que merecen vivir",
    title: "Para siempre en la piel.",
    image: "/modelo_2.png",
    imageAlt: "Descripción de la imagen",
  },
];

const cta = "Reservar cita";
const INTERVAL = 7000;

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;

    const timer = setTimeout(() => {
      if (target === "#hero" || target === "#home" || target === "#inicio") {
        window.scrollTo({ top: 0, behavior: "auto" });
      } else {
        const id = target.replace(/^#/, "");
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "auto" });
      }
      window.history.replaceState({}, document.title);
    }, 50);

    return () => clearTimeout(timer);
  }, [location.state]);

  useEffect(() => {
    slides.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [current]);

  const slide = slides[current];

  return (
    <>
      <Navbar />
      <section id="hero" className="hero">
        <div className="container hero__inner">
          <div className="hero__content" key={`content-${current}`}>
            {slide.eyebrow && <p className="hero__eyebrow">{slide.eyebrow}</p>}
            <h1 className="hero__title">{slide.title}</h1>
            <a href="#reservar" className="btn btn--ghost hero__cta">
              {cta}
            </a>
          </div>

          <div className="hero__media" key={`media-${current}`}>
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className={`hero__image hero__image--${current + 1}`}
            />
          </div>
        </div>
      </section>
      <Gallery />
      <Artists />
      <Services />
      <Testimonials />
      <ContactPage />
      <Footer />
    </>
  );
}