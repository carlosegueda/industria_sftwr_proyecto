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

     <div className="testimonios">
      <h1>Testimonios de nuestros usuarios</h1>
      
      <div className="perspectivas">
        <div className="opinion">
          <div className="perfil-container">
            <img src="/mujer1.jpg" alt="María González" className="foto-perfil" />
            <div className="rating">
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
            </div>
          </div>
          <h2>María González</h2>
          <p className="cargo">Paciente con tratamiento crónico</p>
          <p>PillBuddy ha sido fundamental para organizar mi medicación diaria. Antes olvidaba tomar mis pastillas con frecuencia, pero ahora las notificaciones me mantienen al día. ¡Mi salud ha mejorado notablemente!</p>
          <p className="fecha">15 Mayo, 2023</p>
        </div>

        <div className="opinion">
          <div className="perfil-container">
            <img src="/hombre1.jpg" alt="Carlos Mendoza" className="foto-perfil" />
            <div className="rating">
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
            </div>
          </div>
          <h2>Carlos Mendoza</h2>
          <p className="cargo">Usuario desde 2022</p>
          <p>Después de usar la app por más de un año, puedo decir que ha transformado completamente cómo manejo mis medicamentos. La función de geolocalización me ha ayudado a encontrar farmacias con mis medicamentos cuando viajo.</p>
          <p className="fecha">22 Junio, 2023</p>
        </div>

        <div className="opinion">
          <div className="perfil-container">
            <img src="/enfermera.jpg" alt="Laura Jiménez" className="foto-perfil" />
            <div className="rating">
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella">★</span>
              <span className="estrella vacia">☆</span>
            </div>
          </div>
          <h2>Laura Jiménez</h2>
          <p className="cargo">Cuidadora de adulto mayor</p>
          <p>Como cuidadora de mi abuelo, PillBuddy me ha dado tranquilidad. Puedo monitorear su medicación remotamente y recibir alertas si hay algún problema. La interfaz es tan simple que hasta mi abuelo la puede usar.</p>
          <p className="fecha">3 Julio, 2023</p>
        </div>

        <div className="opinion">
              <div className="perfil-container">
                <img src="/estudiante.jpg" alt="Javier Ruiz" className="foto-perfil" />
                <div className="rating">
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella vacia">☆</span>
                </div>
              </div>
              <h2>Javier Ruiz</h2>
              <p className="cargo">Estudiante universitario</p>
              <p>Al principio pensé que no necesitaba una app para mis medicamentos, pero PillBuddy me sorprendió. La función de historial me ayuda a llevar control exacto de lo que tomo y cuándo, perfecto para mi vida ocupada.</p>
            </div>

            <div className="opinion">
              <div className="perfil-container">
                <img src="/mujer3.jpeg" alt="Ana Torres" className="foto-perfil" />
                <div className="rating">
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                </div>
              </div>
              <h2>Ana Torres</h2>
              <p className="cargo">Madre de familia</p>
              <p>Para mí como madre, gestionar las medicinas de toda la familia era un caos. Ahora con PillBuddy puedo tener todos los tratamientos organizados en un solo lugar, con recordatorios personalizados para cada miembro.</p>
            </div>

            <div className="opinion">
              <div className="perfil-container">
                <img src="/farmaceutico.jpeg" alt="Roberto Sánchez" className="foto-perfil" />
                <div className="rating">
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella">★</span>
                  <span className="estrella vacia">☆</span>
                </div>
              </div>
              <h2>Roberto Sánchez</h2>
              <p className="cargo">Farmacéutico asociado</p>
              <p>Desde el punto de vista profesional, PillBuddy ha mejorado nuestra relación con los pacientes. Podemos actualizar nuestro inventario y los clientes nos encuentran fácilmente cuando necesitan sus medicamentos.</p>
              <p className="fecha">18 Julio, 2023</p>
            </div>
          </div>
      </div>

        <div className="footer">
          <p>© PillBuddy Co. Todos los derechos reservados 2025</p>
        </div>
      </div>
    </>
  );
}
