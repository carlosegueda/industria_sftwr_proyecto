import Navbar from "../components/navbar";
import '../css/contactus.css'


export default function PaginaContacto() {
  return (
    <>
        <Navbar/>
        <div className="contact-container">
        <h1>Contáctanos</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Contacta a nuestro equipo de soporte</h2>
            <p>No dudes en contactarnos si tienes dudas o reclamos. Estamos para servirle!</p>
            
            <div className="info-card">
              <h3>Honduras</h3>
              <p>San Buenaventura, Cortés</p>
              <p>(504) 1234-56789</p>
              <p>equipo.rocket@gmail.com</p>
            </div>
            
            <div className="business-hours">
              <h3>Horario de atención</h3>
              <ul>
                <li><span>Lunes</span> <span>7:30 am - 5:00 pm</span></li>
                <li><span>Martes</span> <span>7:30 am - 5:00 pm</span></li>
                <li><span>Miércoles</span> <span>7:30 am - 5:00 pm</span></li>
                <li><span>Jueves</span> <span>7:30 am - 5:00 pm</span></li>
                <li><span>Viernes</span> <span>7:30 am - 5:00 pm</span></li>
                <li><span>Sábado</span> <span>7:30 am - 12:00 pm</span></li>
                <li><span>Domingo</span> <span>Cerrado</span></li>
              </ul>
            </div>
          </div>
          
          <div className="contact-form">
            <h2>Dejanos un comentario</h2>
            <form>
              <div className="form-group">
                <input type="text" placeholder="Nombre" required />
              </div>
              
              <div className="form-group">
                <input type="email" placeholder="Email" required />
              </div>
              
              <div className="form-group">
                <input type="tel" placeholder="Teléfono" />
              </div>
              
              <div className="form-group">
                <select>
                  <option value="">Selecciona un reporte</option>
                  <option value="servicio1">Errores</option>
                  <option value="servicio2">Dudas</option>
                  <option value="servicio3">Quejas</option>
                </select>
              </div>
              
              <div className="form-group">
                <textarea placeholder="Comentario" rows="5" required></textarea>
              </div>
              
              <button type="submit" className="submit-btn">Enviar</button>
            </form>
          </div>
        </div>
        
        <div className="footer">
          <p>© PillBuddy Co. Todos los derechos reservados 2025</p>
        </div>
    </div>
    </>
  );
}