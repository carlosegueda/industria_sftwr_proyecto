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
            <h1>Nuestros Valores</h1> <img src="viejo-pastilla.png" />
          </div>
          <div className="derecha">
            <h1>Innovación</h1>
            <h2>
              Impulsamos el desarrollo de soluciones digitales que transformen
              la manera en que las personas gestionan su salud y acceden a
              medicamentos.
            </h2>
            <h1>Accesibilidad</h1>
            <h2>
              Creamos tecnología inclusiva y fácil de usar, pensada para llegar
              a todas las personas, sin importar su edad, ubicación o nivel de
              familiaridad digital.
            </h2>
            <h1>Confiabilidad</h1>
            <h2>
              Garantizamos la seguridad, precisión y transparencia en todos
              nuestros procesos, generando confianza en cada interacción dentro
              de la app
            </h2>
            <h1>Compromiso Social</h1>
            <h2>
              Trabajamos con responsabilidad y propósito, buscando cerrar
              brechas en el acceso a la salud y generar un impacto positivo en
              las comunidades más necesitadas.
            </h2>
          </div>
        </div>

        <div className="equipo">
          <h1>Miembros del Equipo</h1>
          <div className="team">
            <div className="miembro"> 1</div>
            <div className="miembro">2 </div>
            <div className="miembro"> 3</div>
            <div className="miembro">4 </div>
          </div>
        </div>

        <div className="footer">
          <p>© PillBuddy Co. Todos los derechos reservados 2025</p>
        </div>
      </div>
    </>
  );
}
