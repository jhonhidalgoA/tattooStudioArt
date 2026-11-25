import { useState } from "react";
import { Plus } from "lucide-react";

import { serviceDetailData } from "../../components/data/serviceDetailData";
import { servicesData } from "../../components/data/servicesData";
import { galleryData } from "../../components/data/galleryData";
import { footerData } from "../../components/data/footerData";

import Navbar from "../../components/ui/navbar/Navbar";
import Footer from "../../components/ui/footer/Footer";
import ServiceSectionTitle from "../../components/ui/title/ServiceSectionTitle";

const BOOKING_LINK = `tel:${footerData.contact.phoneHref}`;

export default function PiercingPage() {
  const [activeFaq, setActiveFaq] = useState(0);
  const service = serviceDetailData.piercing;

  const base = servicesData.find((item) => item.link === "/services/piercing");
  const number = String(base?.id ?? 2).padStart(2, "0");

  return (
    <>
      <Navbar />
      <main className="service-detail">
        <div className="service-detail__container">
          {/* 1. Hero */}
          <section className="service-detail__hero">
            <div className="service-detail__hero-text">
              <p className="service-detail__tag">
                <span>{number}</span>
                <span
                  className="service-detail__tag-line"
                  aria-hidden="true"
                ></span>
                <span>{service.category}</span>
              </p>
              <h1 className="service-detail__title">{service.title}</h1>
              <p className="service-detail__hook">{service.hook}</p>
              <p className="service-detail__description">
                {service.description}
              </p>
              <a href={BOOKING_LINK} className="btn btn--primary">
                {service.cta}
              </a>
            </div>
            <div className="service-detail__hero-media service-detail__hero-media--piercing">
              {service.images.map((src, index) => (
                <img
                  key={`${src}-${index}`}
                  src={src}
                  alt={index === 0 ? service.title : ""}
                  className={`service-detail__hero-img service-detail__hero-img--${index + 1}`}
                />
              ))}
            </div>
          </section>

          {/* 2 + 3. Proceso y Ficha rápida */}
          <section className="service-detail__two">
            <ServiceSectionTitle
              eyebrow="Proceso"
              title="¿Cómo es el procedimiento?"
            />
            <div className="service__detail-overview">
              <ol className="service__detail-steps">
                {service.process.map((step, index) => (
                  <li key={step.title} className="service__detail-step">
                    <span
                      className="service__detail-step-num"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="service__detail-step-body">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <aside
                className="service__detail-facts-box"
                aria-label="Ficha rápida"
              >
                <dl className="service__detail-facts">
                  {service.quickFacts.map((fact) => (
                    <div key={fact.label} className="service__detail-fact">
                      <dt>{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </aside>
            </div>
          </section>

          {/* 4. Cuidados */}
          <section className="service-detail__care">
            <div>
              <h3 className="service-detail__care-title">Antes de tu cita</h3>
              <ul className="service-detail__list">
                {service.care.before.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="service-detail__care-title">
                Cuidados posteriores
              </h3>
              <ul className="service-detail__list">
                {service.care.after.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>         

          {/* 6. Preguntas frecuentes */}
          <section className="service-detail__section">
            <ServiceSectionTitle
              eyebrow="Estamos para ayudarte"
              title="Queremos que tengas toda la información."
            />
            <div className="service-detail__faqs">
              <div
                className="service-detail__faq-tabs"
                role="tablist"
                aria-label="Categorías de preguntas"
              >
                {service.faqs.map((group, index) => (
                  <button
                    key={group.label}
                    type="button"
                    role="tab"
                    id={`faq-tab-${index}`}
                    aria-selected={activeFaq === index}
                    aria-controls="faq-panel"
                    className={`service-detail__faq-tab${
                      activeFaq === index ? " is-active" : ""
                    }`}
                    onClick={() => setActiveFaq(index)}
                  >
                    <span className="service-detail__faq-tab-num">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{group.label}</span>
                  </button>
                ))}
              </div>
              <div
                key={activeFaq}
                id="faq-panel"
                className="service-detail__faq-panel"
                role="tabpanel"
                aria-labelledby={`faq-tab-${activeFaq}`}
              >
                <h3 className="service-detail__faq-subtitle">
                  {service.faqs[activeFaq].subtitle}
                </h3>
                {service.faqs[activeFaq].questions.map((faq, index) => (
                  <details
                    key={faq.question}
                    className="service-detail__faq"
                    open={index === 0}
                  >
                    <summary>
                      <span>{faq.question}</span>
                      <Plus size={20} aria-hidden="true" />
                    </summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
          {/* 5. Ejemplos reales */}
          <section className="service-detail__section">
            <ServiceSectionTitle eyebrow="Arte en cada detalle." title="Precisión y estilo en cada perforación" />
            <div className="service-detail__gallery">
              {(service.gallery ?? galleryData).map((item) => (
                <figure key={item.id} className="service-detail__work">
                  <img src={item.src} alt={item.alt || item.title} />
                  <figcaption>{item.title}</figcaption>
                </figure>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
