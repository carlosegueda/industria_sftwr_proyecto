import { Routes, Route } from "react-router-dom";

import PaginaInicio from "./inicio.jsx";
import PaginaNosotros from "./nosotros.jsx";
import PaginaServicios from "./servicios.jsx";
import PaginaPrecios from "./precios.jsx";
import PaginaDescarga from "./descarga.jsx";
import PaginaBlog from "./blog.jsx"
import PaginaContacto from "./contacto.jsx";
import ScrollToTop from '../components/ScrollToTop';



function App() {
  return (
    <>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/acercadenosotros" element={<PaginaNosotros />} />
        <Route path="/servicios" element={<PaginaServicios />} />
        <Route path="/precios" element={<PaginaPrecios />} />
        <Route path="/descarga" element={<PaginaDescarga />} />
        <Route path="/contacto" element={<PaginaContacto />} />
        <Route path="/blog" element={<PaginaBlog />} />
      </Routes>
    </>
  );
}

export default App;