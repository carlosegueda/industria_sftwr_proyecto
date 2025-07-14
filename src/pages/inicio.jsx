import Navbar from "../components/navbar";
import "../css/inicio.css";

export default function PaginaInicio() {
  return (
    <>
      <Navbar />
      <div className="inicio">
        <div className="descarga">
          <div className="info">
            <h2>¡Estamos disponibles! ¡Prueba la app ahora!</h2>
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
      </div>
    </>
  );
}
