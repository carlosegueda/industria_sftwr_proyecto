import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../css/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const [oculta, setOculta] = useState(false);
  const [ultimoScroll, setUltimoScroll] = useState(0);

  const irAContacto = () => {
    navigate("/contacto");
  };

  useEffect(() => {
    const manejarScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > ultimoScroll && scrollY > 50) {
        setOculta(true); // Scroll hacia abajo → ocultar navbar
      } else {
        setOculta(false); // Scroll hacia arriba → mostrar navbar
      }
      setUltimoScroll(scrollY);
    };

    window.addEventListener("scroll", manejarScroll);
    return () => window.removeEventListener("scroll", manejarScroll);
  }, [ultimoScroll]);

  return (
    <nav className={`navbar ${oculta ? "oculta" : ""}`}>
      
      <Link to="/" className="titulo"> <div class="logonavbar"> </div></Link>
      <Link to="/">Inicio</Link>
      <Link to="/acercadenosotros">Sobre Nosotros</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/precios">Precios</Link>
      <Link to="/descarga">Descarga</Link>
      <button className="boton" onClick={irAContacto}>
        Contáctanos
      </button>
    </nav>
  );
}
