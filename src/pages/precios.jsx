import Navbar from "../components/navbar";
import '../css/precios.css'


export default function PaginaPrecios() {
  return (
    <>
      <Navbar/>
      <div className="precios-container">
        <h1>Planes y Tarifas</h1>
        
        <div className="planes-container">
          {/* Plan Básico */}
          <div className="plan-card">
            <h2>Plan Básico</h2>
            <div className="plan-section">
              <h3>FUNCIONALIDADES PRINCIPALES</h3>
              <ul>
                <li>Recordatorios de medicación ✔</li>
                <li>Control de inventario personal ✔ </li>
                <li><strong>Geolocalización:</strong> Farmacias cercanas ✔ </li>
                <li><strong>Sistema de compras:</strong> Visualización solamente ✔ </li>
                <li><strong>Historial de consumo:</strong> Básico (últimos 30 días) ✔ </li>
                <li>Múltiples perfiles de pacientes ✖</li>
                <li>Sincronización familiar ✖</li>
                <li>Estadísticas de consumo ✖</li>
                <li>Atención prioritaria ✖</li>
                <li>Personalización con IA ✖</li>
                
              </ul>
            </div>

            <div className="plan-section">
              <h3>SOPORTE</h3>
              <ul>
                <li>✔ Acceso al centro de ayuda</li>
                <li>✖ Soporte prioritario</li>
                <li>✖ Gestor de cuenta</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>SUSCRIPCIÓN</h3>
              <ul>
                <li>✔ Gratuito</li>
              </ul>
            </div>

          </div>

          {/* Plan Premium */}
          <div className="plan-card premium">
            <h2>Plan Premium</h2>
            <div className="plan-section">
              <h3>FUNCIONALIDADES AVANZADAS</h3>
              <ul>
                <li><strong>Todas las funciones básicas:</strong> ✓</li>
                <li><strong>Perfiles de pacientes:</strong> Hasta 5</li>
                <li><strong>Sincronización familiar completa:</strong> ✓</li>
                <li><strong>Control de inventario:</strong> Alertas con predicción</li>
                <li><strong>Atención prioritaria:</strong> ✓</li>
                <li><strong>Personalización con IA:</strong> ✓</li>
                <li><strong>Beneficios en farmacias afiliadas:</strong> ✓</li>
                <li><strong>Sistema de compras:</strong> Pedidos directos integrados ✓</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>SOPORTE</h3>
              <ul>
                <li><strong>Soporte 24/7:</strong> ✓</li>
                <li><strong>Soporte prioritario:</strong> ✓</li>
                <li><strong>Asesoramiento médico básico:</strong> ✓</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>SUSCRIPCIÓN</h3>
              <ul>
                <li>✔ $3.99/mes</li>
              </ul>
            </div>
          </div>

          {/* Plan Enterprise */}
          <div className="plan-card">
            <h2>Plan Corporativo</h2>
            <div className="plan-section">
              <h3>PARA FARMACIAS E INSTITUCIONES</h3>
              <ul>
                <li><strong>Cuentas administradoras:</strong> ✓</li>
                <li><strong>Módulo de inventario avanzado:</strong> ✓</li>
                <li><strong>Sistema de pedidos integrado:</strong> ✓</li>
                <li><strong>Estadísticas institucionales:</strong> ✓</li>
                <li><strong>Integración con sistemas de salud:</strong> ✓</li>
                <li><strong>API para desarrolladores:</strong> ✓</li>
                <li><strong>Integración con farmacias:</strong> Ecosistema completo</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>SOPORTE</h3>
              <ul>
                <li><strong>Gerente de cuenta dedicado:</strong> ✓</li>
                <li><strong>Soporte premium 24/7:</strong> ✓</li>
                <li><strong>Implementación personalizada:</strong> ✓</li>
                <li><strong>Capacitación para equipos:</strong> ✓</li>
              </ul>
            </div>

            <div className="plan-section">
              <h3>SUSCRIPCION</h3>
              <ul>
                <li>Personalizado</li>
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