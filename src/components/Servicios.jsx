import { useEffect } from 'react'
import './Servicios.css'

const servicios = [
  {
    icon: '/assets/img/anillo-boda-preboda.png',
    title: 'Diseño y Decoración',
    description: 'Creamos ambientes únicos y elegantes que reflejan vuestra personalidad y sorprenden a los invitados.'
  },
  {
    icon: '/assets/img/codigo-de-vestimenta.png',
    title: 'Coordinación del Día B',
    description: 'Controlamos tiempos, proveedores e imprevistos para que todo fluya con armonía.'
  },
  {
    icon: '/assets/img/luna-de-miel.png',
    title: 'Asesoría a Medida',
    description: 'Os ayudamos a definir el estilo, optimizar presupuesto y dar forma a los detalles más especiales.'
  }
]

const serviciosExtra = [
  {
    icon: '/assets/img/wedding-invitation.png',
    text: 'Invitaciones y papelería personalizada'
  },
  {
    icon: '/assets/img/luna-de-miel.png',
    text: 'Noche para novios Deluxe'
  },
  {
    icon: '/assets/img/codigo-de-vestimenta.png',
    text: 'Protocolo y etiqueta'
  }
]

const Servicios = () => {

  // Preload de todos los iconos de servicios
  useEffect(() => {
    const allIcons = [
      ...servicios.map(s => s.icon),
      ...serviciosExtra.map(s => s.icon)
    ]
    
    allIcons.forEach(icon => {
      const img = new Image()
      img.src = icon
    })
  }, [])

  return (
    <section id="servicios" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Nuestros Servicios</h2>
          <div className="section-divider"></div>
        </header>
        <div className="service-grid">
          {servicios.map((servicio, index) => (
            <article key={index} className="service-card card">
              <div className="service-icon">
                <img 
                  src={servicio.icon} 
                  alt={servicio.title} 
                  loading="lazy"
                  decoding="async"
                  // eslint-disable-next-line react/no-unknown-property
                  fetchpriority="low"
                  width="60" 
                  height="60"
                />
              </div>
              <h3>{servicio.title}</h3>
              <p>{servicio.description}</p>
            </article>
          ))}
        </div>

        <div className="services-extra">
          <h4>Servicios Extra</h4>
          <div className="services-extra-grid">
            {serviciosExtra.map((item, index) => (
              <div key={index} className="service-extra-item card">
                <img 
                  src={item.icon} 
                  alt={item.text} 
                  loading="lazy"
                  width="40" 
                  height="40"
                />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicios

