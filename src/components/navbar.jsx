import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  const irAContacto = () => {
    navigate("/contacto");
  };

  return (
    <nav>
      <Link to="/">PILL BUDDY</Link>
      <Link to="/">Inicio</Link>
      <Link to="/acercadenosotros">Sobre Nosotros</Link>
      <Link to="/servicios">Servicios</Link>
      <Link to="/precios">Precios</Link>
      <Link to="/descarga">Descarga</Link>
      <button className="boton" onClick={irAContacto}>
        Contacto
      </button>
    </nav>
  );
}
