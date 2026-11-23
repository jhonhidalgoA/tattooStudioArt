import { Routes, Route } from "react-router-dom";

import HeroPage from "./pages/HeroPage";
import TattooCollectionPage from "./pages/TattooCollectionPage";
import ArtistsProfilePage from "./pages/ArtistsProfilePage";
import TattoosPage from "./pages/TattoosPage";

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
        <Route path="/servicios/:slug" element={<TattoosPage />} />
      </Routes>
    </>
  );
}

export default App;
