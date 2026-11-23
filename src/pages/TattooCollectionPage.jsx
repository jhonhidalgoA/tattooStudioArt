import { useState } from "react";

import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer"
import Title from "../components/ui/title/Title";
import TattooCard from "../components/ui/card/TattooCard";
import TattooFilters from "../components/ui/card/TattooFilters";
import { tattooData } from "../../src/components/data/tattooData";

import "./TattooCollectionPage.css";

export default function TattooCollectionPage() {
  const [currentFilter, setFilter] = useState("all");

  const filteredTattoos = tattooData.filter((item) => {
    if (currentFilter === "all") return true;
    return item.category === currentFilter;
  });

  return (
    <>
      <Navbar />
      <section id="tattooPage" className="tattooPage">
        <div className="tattooPage__container">
          <Title page="tattooPage" />
          <TattooFilters currentFilter={currentFilter} setFilter={setFilter} />
          <div className="tattooPage__grid">
            {filteredTattoos.map((item) => (
              <TattooCard key={item.id} tattoo={item} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
