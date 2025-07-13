import Navbar from "../components/navbar";
import '../css/descargas.css';

export default function PaginaDescarga() {
  return (
    <>
        <Navbar/>
          <div className="descargas-container">
          <h1>Descarga la app</h1>
          
          <div className="download-section">
            <h2>Get PillBuddy App</h2>
            <p>We will send you a link, open it on your phone to download the app.</p>
            
            <div className="download-form">
              <div className="input-group">
                <label>Phone</label>
                <input type="tel" placeholder="Your Phone Number" />
              </div>
              
              <div className="input-group">
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>
              
              <button className="share-button">Share App Link</button>
            </div>
            
            <div className="store-buttons">
              <h3>Download App From</h3>
              <div className="stores">
                <button className="store-button">
                  <img src="./playstore.png" alt="Google Play" />
                  <span>Google Play</span>
                </button>
                <button className="store-button">
                  <img src="./public/apple-conFondo.png" alt="Apple Store" />
                  <span>Apple Store</span>
                </button>
              </div>
            </div>
          </div>
          
          <div className="faq-section">
            <h2>Frequently Asked Questions</h2>
            
            <div className="faq-item">
              <h3>Which pricing plan is right for me?</h3>
              <p>We understand that each organization is unique, requiring specific features to support its workforce and projects.</p>
            </div>
            
            <div className="faq-item">
              <h3>How does our pricing work?</h3>
            </div>
            
            <div className="faq-item">
              <h3>What if I change my mind?</h3>
            </div>
            
            <div className="faq-item">
              <h3>Do you offer any discounted plans?</h3>
            </div>
            
            <div className="faq-item">
              <h3>What payment methods do you accept?</h3>
            </div>
            
            <div className="faq-item">
              <h3>Does Venture offer plans to nonprofits and NGOs?</h3>
            </div>
            
            <div className="faq-item">
              <h3>How can I manage my billing?</h3>
            </div>
            
            <div className="faq-item">
              <h3>Can I change my plan?</h3>
            </div>
          </div>
          
          <div className="footer">
            <p>© PillBuddy Co. Todos los derechos reservados 2025</p>
          </div>
        </div>
    </>
  );
}