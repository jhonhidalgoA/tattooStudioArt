import { useState } from "react";
import Title from "../components/ui/title/Title";
import { getImagesByGroup } from "../components/data/imagesData";
import GalleryCard from "../components/ui/card/GalleryCard";
import GalleryLightbox from "../components/ui/card/GalleryLightbox";

import "./GalleryPage.css";

const galleryItems = getImagesByGroup("gallery").slice(0, 4);

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery__container">
        <Title page="gallery" />
        <div className="gallery__grid">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={item.id}
              {...item}
              onOpen={() => setOpenIndex(index)}
            />
          ))}
        </div>
      </div>
      <GalleryLightbox
        items={galleryItems}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onChange={setOpenIndex}
      />
    </section>
  );
}