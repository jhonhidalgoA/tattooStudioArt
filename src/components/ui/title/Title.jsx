import { Link } from "react-router-dom";

import { titleData } from "../../data/titleData.js";
import "./Title.css";

export default function Title({ page }) {
  const data = titleData[page];
  if (!data) return null;

  const { cta } = data;

  return (
    <div className="title">
      <h2>{data.title}</h2>
      <span className="title__line" aria-hidden="true" />
      <p>{data.description}</p>
      {cta && (
         <Link to={cta.to} className="btn btn--ghost title__cta">
          {cta.label}
        </Link>
      )}
    </div>
  );
}