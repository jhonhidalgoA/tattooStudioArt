import { useState } from "react";

import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";
import TattooCollectionCard from "../components/ui/card/TattooCollectionCard";
import TattooFilters from "../components/ui/card/TattooFilters";
import CardModal from "../components/ui/modal/Modal";
import { getImagesByGroup } from "../components/data/imagesData";

import "./TattooCollectionPage.css";

export default function TattooCollectionPage() {
  const [currentFilter, setFilter] = useState("all");
  const [modalIndex, setModalIndex] = useState(null);

  const tattoos = getImagesByGroup("gallery");

  const filteredTattoos = tattoos.filter((item) => {
    if (currentFilter === "all") return true;
    return item.category === currentFilter;
  });

  const handleSelectFilter = (nextFilter) => {
    setFilter(nextFilter);
    setModalIndex(null);
  };

  return (
    <>
      <Navbar />
      <section id="tattooPage" className="tattooPage">
        <div className="tattooPage__container">
          <TattooFilters
            currentFilter={currentFilter}
            setFilter={handleSelectFilter}
          />
          <div className="tattooPage__grid">
            {filteredTattoos.map((item, idx) => (
              <TattooCollectionCard
                key={item.id}
                tattoo={item}
                onSelect={() => setModalIndex(idx)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />

      <CardModal
        items={filteredTattoos}
        index={modalIndex}
        onClose={() => setModalIndex(null)}
        onChange={(nextIndex) => setModalIndex(nextIndex)}
      />
    </>
  );
}