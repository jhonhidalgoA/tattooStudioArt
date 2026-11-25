import Title from "../../components/ui/title/Title";
import { getImagesByGroup } from "../../components/data/imagesData";

import ServiceCard from "../../components/ui/card/ServiceCard";

import "./ServicesPage.css";

const services = getImagesByGroup("portada");

export default function ServicesPage() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <Title page="services" />
        <div className="services__grid">
          {services.map((item) => (
            <ServiceCard key={item.id} {...item} image={item.src} />
          ))}
        </div>
      </div>
    </section>
  );
}