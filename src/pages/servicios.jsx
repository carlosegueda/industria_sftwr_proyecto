import Navbar from "../components/navbar";
import "../css/servicios.css";
import React, { useState } from "react";



export default function PaginaServicios() {

  const [contenido, setContenido] = useState("Haz clic en un servicio para ver su información.");

  const infoServicios = {
    1: "Servicio 1. Este servicio hace lo siguiente bla bla bla",
    2: "Servicio 2. Este servicio hace lo siguiente bla bla bla",
    3: "Servicio 3. Este servicio hace lo siguiente bla bla bla",
    4: "Servicio 4. Este servicio hace lo siguiente bla bla bla",
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
            <div className="s1" onClick={() => mostrarInfo(1)}><h2>S1</h2></div> <div className="s1" onClick={() => mostrarInfo(2)}><h2>S2</h2></div>
            <div className="s1" onClick={() => mostrarInfo(3)}><h2>S3</h2></div> <div className="s1" onClick={() => mostrarInfo(4)}><h2>S4</h2></div>
          </div>
        </div>

        <div className="servicios-info">
          <div className="info">{contenido}</div>
          <div>INFO</div>
        </div>
      </div>
    </>
  );
}
