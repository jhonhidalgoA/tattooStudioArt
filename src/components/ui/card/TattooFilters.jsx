import "./TattooFilters.css";

export default function TattooFilters({ currentFilter, setFilter }) {
  const categories = [
    { id: "all", label: "Todos" },
    { id: "tattoos", label: "Tatuajes" },
    { id: "tribal", label: "Tribal & Blackwork" },
    { id: "process", label: "El Estudio" },
  ];

  return (
    <div className="tattoo__filters">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`tattoo__filter-btn ${currentFilter === cat.id ? "active" : ""}`}
          onClick={() => setFilter(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}