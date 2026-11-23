import { artistsData } from "../components/data/artistsData";
import ArtistsCard from "../components/ui/card/ArtistsCard";
import Title from "../components/ui/title/Title";
import "./ArtistsPage.css";

export default function ArtistsPage() {
  return (
    <section id="artists" className="artists">
      <div className="artists__container">
        <Title page="artists" />
        <div className="artists__grid">
          {artistsData.map((artist) => (
            <ArtistsCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </section>
  );
}