import { Routes, Route } from "react-router-dom";

import HeroPage from "./pages/HeroPage";
import TattooCollectionPage from "./pages/TattooCollectionPage";
import ArtistsProfilePage from "./pages/ArtistsProfilePage";
import TattoosPage from "./pages/services/TattoosPage";
import PiercingPage from "./pages/services/PiercingPage";

import TattooDesignPage from "./pages/services/TattooDesignPage";

import ScrollToTop from "./components/layouts/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HeroPage />} />
        <Route path="/tattooPage" element={<TattooCollectionPage />} />
        <Route path="/artistas/:slug" element={<ArtistsProfilePage />} />
        <Route path="/services/tattoos" element={<TattoosPage />} />
        <Route path="/services/piercing" element={<PiercingPage />} />        
        <Route path="/services/design" element={<TattooDesignPage />} />
      </Routes>
    </>
  );
}

export default App;