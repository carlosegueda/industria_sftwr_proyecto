import Navbar from "../components/navbar";
import '../css/blog.css';

export default function PaginaBlog() {
   return(
      <>
         <Navbar/>
            <div className="blog-header">
               <div className="overlay">
                     <h1>Bienvenido al Blog de Salud</h1>
                     <p>Explora consejos, hábitos y recursos para llevar una vida más saludable y equilibrada.</p>
                  </div>
            </div>

          <div className="blog-container">
            <div className="blog-cards">
               <div className="blog-card">
                  <img src="../public/alimentacionSaludable.jpeg" alt="alimentacion" />
                  <h2>Alimentación saludable</h2>
                  <p>Descubre cómo una dieta balanceada puede mejorar tu salud y bienestar a largo plazo.</p>
                  <div className="tags">
                     <span className="tag">nutrición</span>
                     <span className="tag">bienestar</span>
                  </div>
                  <div className="footer">
                     <span>🩺 Salud</span>
                     <span>Jul 23, 2025</span>
                  </div>
               </div>

               <div className="blog-card">
                  <img src="../public/ejercicioFisico.jpg" alt="ejercicio" />
                  <h2>Importancia del ejercicio físico</h2>
                  <p>El movimiento es vida. Aprende cómo una rutina de ejercicios puede ayudarte física y mentalmente.</p>
                  <div className="tags">
                     <span className="tag">ejercicio</span>
                     <span className="tag">vida activa</span>
                  </div>
                  <div className="footer">
                     <span>🏃‍♂️ Salud</span>
                     <span>Jul 22, 2025</span>
                  </div>
               </div>

               <div className="blog-card">
                  <img src="../public/saludMental.jpg" alt="salud mental" />
                  <h2>Cuida tu salud mental</h2>
                  <p>Consejos y prácticas para mantener un equilibrio emocional en tu vida diaria.</p>
                  <div className="tags">
                     <span className="tag">mental</span>
                     <span className="tag">emociones</span>
                  </div>
                  <div className="footer">
                     <span>🧠 Salud</span>
                     <span>Jul 21, 2025</span>
                  </div>
               </div>

               <div className="blog-card">
                  <img src="../public/cuidadoMayor.jpg" alt="cuidado de adultos mayores" />
                  <h2>Cuidado para personas mayores</h2>
                  <p>Buenas prácticas para atender las necesidades físicas y emocionales de los adultos mayores.</p>
                  <div className="tags">
                     <span className="tag">tercera edad</span>
                     <span className="tag">cuidado</span>
                  </div>
                  <div className="footer">
                     <span>👵 Bienestar</span>
                     <span>Jul 22, 2025</span>
                  </div>
               </div>

               <div className="blog-card">
                  <img src="../public/medicacionSegura.jpg" alt="medicación segura" />
                  <h2>Uso seguro de medicamentos</h2>
                  <p>Guía práctica para administrar medicamentos en personas mayores de forma responsable.</p>
                  <div className="tags">
                     <span className="tag">medicación</span>
                     <span className="tag">seguridad</span>
                  </div>
                  <div className="footer">
                     <span>💊 Salud</span>
                     <span>Jul 22, 2025</span>
                  </div>
               </div>

               <div className="blog-card">
                  <img src="../public/consejosVida.png" alt="consejos de vida saludable" />
                  <h2>Consejos para una vida plena</h2>
                  <p>Recomendaciones para mantener la autonomía y el bienestar emocional en la tercera edad.</p>
                  <div className="tags">
                     <span className="tag">bienestar</span>
                     <span className="tag">vida</span>
                  </div>
                  <div className="footer">
                     <span>🌿 Consejos</span>
                     <span>Jul 22, 2025</span>
                  </div>
               </div>

               <div className="blog-card">
                  <img src="../public/recordatorioMedicacion.jpg" alt="recordatorio de medicación" />
                  <h2>Recordatorios de medicación</h2>
                  <p>Herramientas y consejos para no olvidar las tomas diarias de medicamentos importantes.</p>
                  <div className="tags">
                     <span className="tag">medicación</span>
                     <span className="tag">recordatorio</span>
                  </div>
                  <div className="footer">
                     <span>⏰ Salud</span>
                     <span>Jul 22, 2025</span>
                  </div>
               </div>

            </div>
         </div>
      </>
   )
}