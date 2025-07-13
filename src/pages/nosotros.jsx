import Navbar from "../components/navbar";
import "../css/nosotros.css";

export default function PaginaNosotros() {
  return (
    <>
      <Navbar />
      <div className="nosotros">
        <div className="quienesomos">
          <div className="circulo1">
            {" "}
            <img src="pill-buddy.png" />
          </div>
          <div className="qsinfo">
            <h1>Quiénes Somos</h1>{" "}
            <h2>
              Nuestra misión es crear una herramienta que sirva como un
              asistente para los pacientes que necesiten ayuda para gestionar
              sus tratamientos médicos.{" "}
            </h2>
          </div>
        </div>

        <div className="valores">
          <div className="izquierda">
            <h1>Nuestros Valores</h1> <img src="monoejemplo.jpg" />
          </div>
          <div className="derecha">
            <h1>Ser siempre Transparentes</h1>
            <h2>Creemos en la honestidad como base de todas nuestras relaciones. Mantenemos una comunicación clara, abierta y sin agendas ocultas con nuestros clientes, colaboradores y aliados.</h2>
            <h1>Trabajar con compasión</h1>
            <h2>Entendemos que detrás de cada decisión hay personas. Nos esforzamos por actuar con empatía, respeto y humanidad, dentro y fuera de la empresa.</h2>
            <h1>Sentir orgullo por nuestra comunidad</h1>
            <h2>Celebramos nuestras raíces y trabajamos para construir un entorno del que todos podamos sentirnos parte. Cada logro es colectivo, y cada paso lo damos juntos.</h2>
          </div>
        </div>



        <div className="equipo">
          <h1>Miembros del Equipo</h1>
          <div className="team"><div className="miembro"> 1</div>
          <div className="miembro">2 </div>
          <div className="miembro"> 3</div>
          <div className="miembro">4 </div></div>
          
        </div>
      </div>
    </>
  );
}
