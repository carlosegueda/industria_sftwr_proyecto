import Navbar from "../components/navbar";
import "../css/inicio.css";
import { Link } from 'react-router-dom';

export default function PaginaInicio() {
  return (
    <>
      <Navbar />
      <div className="inicio">
        <div className="descarga">
          <div className="info">
            <h2>¡Estamos disponibles! <br></br> ¡Prueba la app ahora!</h2>
            <a href="/descarga">🡺 Descarga aquí 🡸</a>
            <h2>
              Colaboramos contigo para brindar un cuidado de calidad y servicios
              especializados para su tratamiento.
            </h2>
          </div>
          <div className="mockup">
            <img src="./mockup1.png"/>
          </div>
        </div>

        <div className="informate">
          <img src="./pills.png"/>
          <h1>Informate sobre nuestra empresa</h1>
          <h2> En PillBuddy trabajamos para mejorar la salud y el bienestar de las personas mediante soluciones tecnológicas simples y efectivas. Somos un equipo universitario que detectó un problema común: el olvido en la toma de medicamentos y suplementos. </h2>
          <Link to="/acercadenosotros"><button className="botonAU"> Quiénes Somos</button></Link>

        </div>

        <div className="footer">
            <p>© PillBuddy Co. Todos los derechos reservados 2025</p>
          </div>
      </div>
    </>
  );
}
