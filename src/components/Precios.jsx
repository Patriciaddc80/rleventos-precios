import './Precios.css'

const Precios = () => {
  return (
    <section id="precios" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">PRECIOS Y SERVICIOS</h2>
          <div className="section-divider"></div>
        </header>
        
        <div className="pricing-grid">
          <div className="pricing-card card">
            <h3>¿POR QUÉ NECESITÁIS EL SERVICIO INTEGRAL?</h3>
            <ul className="pricing-card-list">
              <li>Porque no tenéis tiempo de organizar vuestra boda.</li>
              <li>Queréis un servicio profesional completo.</li>
              <li>Deseáis una boda diferente y original.</li>
              <li>Queréis disfrutar del proceso sin estrés</li>
              <li>Necesitáis todo el asesoramiento y ayuda profesional.</li>
            </ul>
            <h4>¿CÓMO PODEMOS AYUDAROS?</h4>
            <ul className="pricing-card-list">
              <li>Reunión previa</li>
              <li>Check list completo</li>
              <li>Calendario de tareas</li>
              <li>Control de presupuesto</li>
            </ul>
            <a 
              href="https://wa.me/34657092014" 
              className="btn-price btn-price-precios" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <strong>2000€</strong>
            </a>
          </div>
          
          <div className="pricing-card card">
            <h3>ASESORAMIENTO Y COORDINACIÓN DEL DÍA B</h3>
            <ul className="pricing-card-list">
              <li>Creación de concepto visual</li>
              <li>Moodboard y paleta de colores</li>
              <li>Montaje y desmontaje</li>
              <li>Atrezzo y elementos decorativos</li>
              <li>Mobiliario especial</li>
              <li>Flores y centros de mesa</li>
            </ul>

            <p className="pricing-card-dia-b-services">
              Nuestro equipo se encarga de asesorar, organizar y coordinar la boda de manera integral. Diseñamos el lenguaje visual de su celebración y gestionamos todos los detalles logísticos, permitiéndoles centrarse en disfrutar de su día especial.
              <br /><br />
              Con nuestro servicio, pueden delegar parte de las responsabilidades mientras los acompañamos en todo momento, tanto antes como durante la boda, coordinando y resolviendo cualquier eventualidad que pueda surgir.
              <br /><br />
              Formaremos parte de su equipo durante todos estos meses, elaborando tanto la agenda como el protocolo desde el primer momento, para garantizar que todo salga a la perfección en su gran día.
            </p>
            
            <a 
              href="https://wa.me/34657092014" 
              className="btn-price btn-price-precios" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <strong>1200€</strong>
            </a>
          </div>

          <div className="pricing-card card">
            <h3>COORDINACIÓN DEL DÍA B</h3>
            <ul className="pricing-card-list">
              <li>Supervisión de proveedores</li>
              <li>Control de tiempos</li>
              <li>Gestión de imprevistos</li>
              <li>Protocolo y ceremonias</li>
            </ul>
            <h4>¿CÓMO PODEMOS AYUDAROS?</h4>
            <p className="pricing-card-dia-b">
              <strong>¡No te preocupes!</strong> Estamos aquí para brindarte asistencia.
              <br /><br />
              Nuestro servicio de coordinación para el gran día es un ballet de planificación y organización, asegurando que todo se desarrolle como un cuento de hadas.
              <br /><br />
              A tres meses de la boda, comenzamos a poner en marcha todos los preparativos: Elaboramos un cronograma detallado para que cada momento sea verdaderamente mágico.
            </p>
            <a 
              href="https://wa.me/34657092014" 
              className="btn-price btn-price-precios" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <strong>850€</strong>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Precios

