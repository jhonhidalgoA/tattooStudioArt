import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./TattooFilters.css";

export default function TattooFilters({ currentFilter, setFilter }) {
  const categories = [
    { id: "all", label: "Todos" },
    { id: "realism", label: "Realismo" },
    { id: "sketch", label: "Boceto" },
    { id: "traditional", label: "Tradicional" },
    { id: "tribal", label: "Tribal" },
    { id: "watercolor", label: "Acuarela" }, 
  ];

  const containerRef = useRef(null);
  const btnRefs = useRef({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const [animate, setAnimate] = useState(false);

  // nuevo: envuelta en useCallback
  const updateIndicator = useCallback(() => {
    const btn = btnRefs.current[currentFilter];
    if (!btn) return;
    setIndicator({ left: btn.offsetLeft, width: btn.offsetWidth });
  }, [currentFilter]);

  // Posiciona la línea antes de pintar
  useLayoutEffect(() => {
    updateIndicator();
  }, [updateIndicator]); // antes: [currentFilter]

  // Activa la animación solo después de la primera posición
  useEffect(() => {
    const id = requestAnimationFrame(() => setAnimate(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Reajusta si cambia el tamaño de pantalla o se cargan las fuentes
  useEffect(() => {
    window.addEventListener("resize", updateIndicator);
    document.fonts?.ready.then(updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]); // antes: [currentFilter]

  const handleClick = (id) => {
    setFilter(id);
    // En móvil, centra el filtro elegido dentro de la fila con scroll
    const container = containerRef.current;
    const btn = btnRefs.current[id];
    if (container && btn) {
      container.scrollTo({
        left: btn.offsetLeft - (container.clientWidth - btn.offsetWidth) / 2,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className="tattoo__filters"
      ref={containerRef}
      role="group"
      aria-label="Filtrar por categoría"
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          ref={(el) => (btnRefs.current[cat.id] = el)}
          className={`tattoo__filter-btn ${currentFilter === cat.id ? "active" : ""}`}
          aria-pressed={currentFilter === cat.id}
          onClick={() => handleClick(cat.id)}
        >
          {cat.label}
        </button>
      ))}
      <span
        className={`tattoo__filter-indicator ${animate ? "is-animated" : ""}`}
        style={{ left: indicator.left, width: indicator.width }}
        aria-hidden="true"
      />
    </div>
  );
}