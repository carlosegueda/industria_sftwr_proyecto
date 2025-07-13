import Navbar from "../components/navbar";
import '../css/precios.css'


export default function PaginaPrecios() {
  return (
    <>
        <Navbar/>
      <div className="precios-container">
        <h1>Precios</h1>
        
        <div className="planes-container">
          {/* Plan Básico */}
          <div className="plan-card">
            <h2>Basic</h2>
            <div className="plan-section">
              <h3>WORKSPACE</h3>
              <ul>
                <li><strong>Members:</strong> 1</li>
                <li><strong>Workspace roles:</strong> 0</li>
                <li><strong>Causes:</strong> 0</li>
                <li><strong>Live collaboration:</strong> 0</li>
                <li><strong>Integration of sub-bounds:</strong> 0</li>
                <li><strong>Access to standard templates:</strong> 0</li>
                <li><strong>Access to pre-templates:</strong> 0</li>
                <li><strong>Custom designed templates:</strong> 0</li>
                <li><strong>Asset library:</strong> 0</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>SUPPORT</h3>
              <ul>
                <li><strong>Dedicated account manager:</strong> 0</li>
                <li><strong>Priority support:</strong> 0</li>
                <li><strong>Access to help center:</strong> 0</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>MEDIA & ASSETS</h3>
              <ul>
                <li><strong>Import own templates:</strong> Basic only</li>
                <li><strong>Unlimited file size upload:</strong> Max. 25 MB</li>
                <li><strong>Video upload:</strong> Up to 3 per month</li>
                <li><strong>Asset storage:</strong> Up to 5 GB</li>
                <li><strong>Access to stock image library:</strong> 0</li>
                <li><strong>Access to stock award library:</strong> 0</li>
                <li><strong>Custom Fonts:</strong> Selection of 20 Fonts</li>
                <li><strong>Logo-variants:</strong> Up to 2</li>
                <li><strong>Cafers:</strong> Up to 5</li>
                <li><strong>Logo-slave:</strong> Basic only</li>
              </ul>
            </div>
          </div>

          {/* Plan Premium */}
          <div className="plan-card premium">
            <h2>Premium</h2>
            <div className="plan-section">
              <h3>WORKSPACE</h3>
              <ul>
                <li><strong>Members:</strong> Up to 3</li>
                <li><strong>Workspace roles:</strong> Admin only</li>
                <li><strong>Causes:</strong> ✓</li>
                <li><strong>Live collaboration:</strong> ✓</li>
                <li><strong>Integration of sub-bounds:</strong> ✓</li>
                <li><strong>Access to standard templates:</strong> ✓</li>
                <li><strong>Access to pre-templates:</strong> ✓</li>
                <li><strong>Custom designed templates:</strong> ✓</li>
                <li><strong>Asset library:</strong> ✓</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>SUPPORT</h3>
              <ul>
                <li><strong>Dedicated account manager:</strong> ✓</li>
                <li><strong>Priority support:</strong> ✓</li>
                <li><strong>Access to help center:</strong> ✓</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>MEDIA & ASSETS</h3>
              <ul>
                <li><strong>Import own templates:</strong> Basic & animated</li>
                <li><strong>Unlimited file size upload:</strong> Max. 100 MB</li>
                <li><strong>Video upload:</strong> Up to 10 per month</li>
                <li><strong>Asset storage:</strong> Up to JD GB</li>
                <li><strong>Access to stock image library:</strong> ✓</li>
                <li><strong>Access to stock award library:</strong> ✓</li>
                <li><strong>Custom Fonts:</strong> ✓</li>
                <li><strong>Logo-variants:</strong> Unlimited</li>
                <li><strong>Cafers:</strong> Unlimited</li>
                <li><strong>Logo-slave:</strong> Selection of 5 portions</li>
              </ul>
            </div>
          </div>

          {/* Plan Enterprise */}
          <div className="plan-card">
            <h2>Enterprise</h2>
            <div className="plan-section">
              <h3>WORKSPACE</h3>
              <ul>
                <li><strong>Members:</strong> Unlimited</li>
                <li><strong>Workspace roles:</strong> Admin & collaborate</li>
                <li><strong>Causes:</strong> ✓</li>
                <li><strong>Live collaboration:</strong> ✓</li>
                <li><strong>Integration of sub-bounds:</strong> ✓</li>
                <li><strong>Access to standard templates:</strong> ✓</li>
                <li><strong>Access to pre-templates:</strong> ✓</li>
                <li><strong>Custom designed templates:</strong> ✓</li>
                <li><strong>Asset library:</strong> ✓</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>SUPPORT</h3>
              <ul>
                <li><strong>Dedicated account manager:</strong> ✓</li>
                <li><strong>Priority support:</strong> ✓</li>
                <li><strong>Access to help center:</strong> ✓</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>MEDIA & ASSETS</h3>
              <ul>
                <li><strong>Import own templates:</strong> Basic & animated</li>
                <li><strong>Unlimited file size upload:</strong> Unlimited</li>
                <li><strong>Video upload:</strong> Unlimited</li>
                <li><strong>Asset storage:</strong> Unlimited</li>
                <li><strong>Access to stock image library:</strong> ✓</li>
                <li><strong>Access to stock award library:</strong> ✓</li>
                <li><strong>Custom Fonts:</strong> ✓</li>
                <li><strong>Logo-variants:</strong> Unlimited</li>
                <li><strong>Cafers:</strong> Unlimited</li>
                <li><strong>Logo-slave:</strong> Custom / LinkedIn import</li>
              </ul>
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