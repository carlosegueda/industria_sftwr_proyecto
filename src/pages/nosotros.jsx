import Navbar from "../components/navbar";
import "../css/nosotros.css";

export default function PaginaNosotros() {
  return (
    <>
      <Navbar />
      <div className="nosotros">
        <div className="quienesomos">
          <div className="circulo1"> <img src="mas.png"/></div>
          <div className="qsinfo">
            <h1>Quiénes Somos</h1> <h2>Nuestra misión es crear una herramienta que sirva como un asistente para los pacientes que necesiten ayuda para gestionar sus tratamientos médicos. </h2>
          </div>
          <div className="circulo2"> <img src="mas.png"/></div>
        </div>


        <div className="valores">
          <h1>NOSOTROS</h1>
        </div>
        <div className="equipo">
          <h1>NOSOTROS</h1>
        </div>
      </div>
    </>
  );
}
