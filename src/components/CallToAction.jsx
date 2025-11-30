import './CallToAction.css'
import { mensajesConsulta } from '../utils/whatsapp'

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">¿Listos para hacer realidad vuestro día perfecto?</h2>
          <p className="cta-text">
            Contacta con nosotros y déjanos ayudarte a crear el evento de vuestros sueños
          </p>
          <a 
            href={mensajesConsulta.consultaGeneral()} 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <strong>CONSULTAR AHORA</strong>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CallToAction

