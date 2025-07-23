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
            </div>
         </div>
      </>
   )
}