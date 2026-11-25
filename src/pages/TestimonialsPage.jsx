import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Title from "../components/ui/title/Title";
import { getImagesByGroup } from "../components/data/imagesData";

import "./TestimonialsPage.css";

const testimonials = getImagesByGroup("testimonios");

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const goTo = (index) => setCurrent((index + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const previous = testimonials[(current - 1 + total) % total];
  const active = testimonials[current];
  const following = testimonials[(current + 1) % total];

  const number = String(current + 1).padStart(2, "0");
  const count = String(total).padStart(2, "0");

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials__container">
        <Title page="testimonials" />

        <div className="testimonials__card">
          <div className="testimonials__stage">
            <button
              type="button"
              className="testimonials__arrow"
              onClick={prev}
              aria-label="Testimonio anterior"
            >
              <ChevronLeft size={20} strokeWidth={2} aria-hidden="true" />
            </button>

            <div className="testimonials__avatars">
              <button
                type="button"
                className="testimonials__avatar testimonials__avatar--side"
                onClick={prev}
                aria-label={`Ver testimonio de ${previous.title}`}
              >
                <img src={previous.src} alt="" />
              </button>

              <div className="testimonials__avatar testimonials__avatar--active">
                <img key={active.id} src={active.src} alt={active.alt} />
              </div>

              <button
                type="button"
                className="testimonials__avatar testimonials__avatar--side"
                onClick={next}
                aria-label={`Ver testimonio de ${following.title}`}
              >
                <img src={following.src} alt="" />
              </button>
            </div>

            <button
              type="button"
              className="testimonials__arrow"
              onClick={next}
              aria-label="Testimonio siguiente"
            >
              <ChevronRight size={20} strokeWidth={2} aria-hidden="true" />
            </button>
          </div>

          <div className="testimonials__text" aria-live="polite">
            <blockquote key={active.id} className="testimonials__quote">
              <p>{active.quote}</p>
              <footer>
                <span className="testimonials__name">{active.title}</span>
                {active.category && (
                  <span className="testimonials__service">
                    {active.category}
                  </span>
                )}
              </footer>
            </blockquote>
          </div>

          <p className="testimonials__counter" aria-hidden="true">
            {number} / {count}
          </p>
        </div>
      </div>
    </section>
  );
}