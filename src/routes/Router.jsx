import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../layout/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import Details from "../pages/Details/Details";
import Footer from "../layout/Footer/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokedex" element={<PokedexPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="pokemon/:pokemonId" element={<Details />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
