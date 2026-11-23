import Title from "../../components/ui/title/Title";
import { servicesData } from "../../components/data/servicesData";

import ServiceCard from "../../components/ui/card/ServiceCard";


import "./ServicesPage.css";

export default function ServicesPage() {
  return (
    <section id="services" className="services">
      <div className="services__container">
        <Title page="services" />
        <div className="services__grid">
          {servicesData.map((item) => (
            <ServiceCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}