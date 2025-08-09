import Navbar from "../components/navbar";
import '../css/descargas.css';

export default function PaginaDescarga() {
  return (
    <>
        <Navbar/>
          <div className="descargas-container">
            <h1>Descarga nuestra app!</h1>
          
            <div className="download-section">
              <h2>Consigue PillBuddy</h2>
              <p>Una vez te resgistres te mandaremos un correo de verificación.</p>
              
              <div className="download-form-and-image">
                <div className="download-form">
                  <div className="input-group">
                    <label>Teléfono</label>
                    <input type="tel" placeholder="Tu número de teléfono" />
                  </div>
                  <div className="input-group">
                    <label>Correo</label>
                    <input type="email" placeholder="Tu correo" />
                  </div>
                  <button className="share-button">Comparte la App</button>
                </div>

                <div className="app-image-container">
                  <img src="./app.png" alt="PillBuddy App Preview" className="app-image" />
                </div>
              </div>


              <div className="store-buttons">
                <h3>Plataformas de descarga</h3>
                <div className="stores">
                  <button className="store-button" onClick={() => window.open("https://play.google.com/store", "_blank")}>
                    <img src="./playstore.png" alt="Google Play" />
                    <span>Google Play</span>
                  </button>
                  <button className="store-button" onClick={() => window.open("https://www.apple.com/la/app-store/", "_blank")}>
                    <img src="./apple-conFondo.png" alt="Apple Store" />
                    <span>Apple Store</span>
                  </button>
                </div>
              </div>
          </div>
          
          <div className="faq-section">
            <h2>Preguntas Frecuentes</h2>
            
            <div className="faq-item">
              <h3>¿Cuál plan debería de elegir?</h3>
            </div>
            
            <div className="faq-item">
              <h3>¿En qué se basan los precios de su aplicación?</h3>
            </div>
            
            <div className="faq-item">
              <h3>¿Cómo puedo cancelar un plan?</h3>
            </div>
            
            <div className="faq-item">
              <h3>¿Ofrecen descuentos?</h3>
            </div>
            
            <div className="faq-item">
              <h3>¿Qué métodos de pago ofrecen?</h3>
            </div>
            
            <div className="faq-item">
              <h3>¿Cuáles farmacias están afiliadas a la aplicación?</h3>
            </div>
            
            <div className="faq-item">
              <h3>¿Qué pasa si no me registro?</h3>
            </div>
            
            <div className="faq-item">
              <h3>¿Puedo cambiar de plan en algún momento?</h3>
            </div>
          </div>
          
          <div className="footer">
            <p>© PillBuddy Co. Todos los derechos reservados 2025</p>
          </div>
        </div>
    </>
  );
}