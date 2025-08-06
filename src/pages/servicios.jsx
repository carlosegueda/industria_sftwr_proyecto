import Navbar from "../components/navbar";
import "../css/servicios.css";
import React, { useState } from "react";



export default function PaginaServicios() {

  const [contenido, setContenido] = useState("Haz clic en un servicio para ver su información.");
  const [imagenSeleccionada, setImagenSeleccionada] = useState("default.png");


  const infoServicios = {
  1: "Control inteligente de inventario personal de medicamentos, con categorización por tipo, dosis y horario de administración, así como funciones de escaneo de código de barras para agregar productos fácilmente.",
  2: "Geolocalización y mapeo de farmacias cercanas, incluyendo filtros por disponibilidad de medicamentos, horarios de atención y opciones de entrega a domicilio en tiempo real.",
  3: "Alertas o avisos de consumo y vencimiento, personalizables por el usuario, con notificaciones automáticas, recordatorios recurrentes y alertas críticas para medicamentos vitales.",
  4: "Historial detallado de consumo para seguimiento médico, con generación de reportes descargables y opción de compartir con profesionales de salud mediante enlace seguro.",
  5: "Motor de recomendaciones y publicidad segmentada, basado en el perfil médico del usuario y hábitos de consumo, con sugerencias de productos complementarios, descuentos personalizados y contenido educativo relevante."
};

  const imagenesServicios = {
    1: "inventario.png",
    2: "geoloc.png",
    3: "alertas.png",
    4: "historial.png",
    5: "recom.jpg"
  };

  const mostrarInfo = (id) => {
    setContenido(infoServicios[id]);
    setImagenSeleccionada(imagenesServicios[id]);
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
          <div className="imagen-servicio"> <img src={imagenSeleccionada}  /></div>
        </div>
        <div className="footer">
            <p>© PillBuddy Co. Todos los derechos reservados 2025</p>
          </div>
      </div>
    </>
  );
}
