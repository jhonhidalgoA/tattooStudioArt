import { useEffect } from "react";
import { useParams } from "react-router-dom";

import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";

import ArtistsProfileCard from "../components/ui/card/ArtistsProfileCard";
import ArtistWorks from "../components/ui/card/ArtistWorks";
import ArtistNav from "../components/ui/card/ArtistNav";
import { artistsData } from "../components/data/artistsData";

import "./ArtistsProfilePage.css";

export default function ArtistsProfilePage() {
  const { slug } = useParams();

  const selectedArtist = artistsData.find((artist) => artist.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <>
      <Navbar />
      <main id="artistsProfile" className="artistsProfile">
        <div className="artistsProfile__container">
          {selectedArtist ? (
            <>
              <ArtistsProfileCard artist={selectedArtist} />
              <ArtistWorks artist={selectedArtist} />
              <ArtistNav currentSlug={selectedArtist.slug} />
            </>
          ) : (
            <div className="artistsProfile__not-found">
              <p>Artista no encontrado.</p>
              <a href="/#artists">Volver a los artistas</a>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
