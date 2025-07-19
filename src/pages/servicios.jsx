import Navbar from "../components/navbar";
import "../css/servicios.css";

export default function PaginaServicios() {
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
            <div className="s1"><h2>S1</h2></div> <div className="s1"><h2>S2</h2></div>
            <div className="s1"><h2>S3</h2></div> <div className="s1"><h2>S4</h2></div>
          </div>
        </div>
      </div>
    </>
  );
}
