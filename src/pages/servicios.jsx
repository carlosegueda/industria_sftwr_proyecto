import Navbar from "../components/navbar";
import "../css/servicios.css";
import React, { useState } from "react";



export default function PaginaServicios() {

  const [contenido, setContenido] = useState("Haz clic en un servicio para ver su información.");

  const infoServicios = {
    1: "Control inteligente de inventario personal de medicamentos.",
    2: "Geolocalización y mapeo de farmacias cercanas.",
    3: "Alertas o avisos de consumo y vencimiento.",
    4: "Historial detallado de consumo para seguimiento médico.",
    5: "Motor de recomendaciones y publicidad segmentada."
  };

  const mostrarInfo = (id) => {
    setContenido(infoServicios[id]);
  };


  return (
    <>
      <Navbar />
      <div className="titulo">
        <h1>Nuestros Servicios</h1>
      </div>

      <div className="servicios">
        <div className="servicios-servicios">
          <h1>Contamos con una amplia variedad de servicios.</h1>
          <div className="listaservicios">
            <div className="s1" onClick={() => mostrarInfo(1)}> <img src="s1.png"/></div> <div className="s2" onClick={() => mostrarInfo(2)}><img src="s2.png"/></div>
            <div className="s3" onClick={() => mostrarInfo(3)}><img src="s3.png"/></div> <div className="s4" onClick={() => mostrarInfo(4)}><img src="s4.png"/></div>
            <div className="s5" onClick={() => mostrarInfo(5)}><img src="s5.png"/></div>
          </div>
        </div>

        <div className="servicios-info">
          <div className="info"> <h3>{contenido}</h3></div>
        </div>
        <div className="footer">
            <p>© PillBuddy Co. Todos los derechos reservados 2025</p>
          </div>
      </div>
    </>
  );
}
