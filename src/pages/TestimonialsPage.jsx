import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Title from "../components/ui/title/Title";
import { testimonialsData } from "../components/data/testimonialsData";

import "./TestimonialsPage.css";

export default function TestimonialsPage() {
  const [current, setCurrent] = useState(0);
  const total = testimonialsData.length;

  const goTo = (index) => setCurrent((index + total) % total);
  const prev = () => goTo(current - 1);
  const next = () => goTo(current + 1);

  const previous = testimonialsData[(current - 1 + total) % total];
  const active = testimonialsData[current];
  const following = testimonialsData[(current + 1) % total];

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
                aria-label={`Ver testimonio de ${previous.name}`}
              >
                <img src={previous.image} alt="" />
              </button>

              <div className="testimonials__avatar testimonials__avatar--active">
                <img key={active.id} src={active.image} alt={active.name} />
              </div>

              <button
                type="button"
                className="testimonials__avatar testimonials__avatar--side"
                onClick={next}
                aria-label={`Ver testimonio de ${following.name}`}
              >
                <img src={following.image} alt="" />
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
                <span className="testimonials__name">{active.name}</span>
                {active.service && (
                  <span className="testimonials__service">
                    {active.service}
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
