import "./ServiceSectionTitle.css";

export default function ServiceSectionTitle({ eyebrow, title }) {
  return (
    <header className="service-section-title">
      <p className="service-section-title__eyebrow">{eyebrow}</p>
      <h2 className="service-section-title__title">{title}</h2>
    </header>
  );
}