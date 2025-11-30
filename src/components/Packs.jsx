import './Packs.css'
import { mensajesConsulta } from '../utils/whatsapp'

const Packs = () => {
  const packs = [
    {
      title: 'Pack Básico',
      features: [
        'Coordinación del día',
        'Supervisión de proveedores',
        'Control de tiempos'
      ],
      featured: false,
      price: '800€',
      consultaWhatsApp: mensajesConsulta.packBasico()
    },
    {
      title: 'Pack Completo',
      features: [
        'Organización integral',
        'Diseño y decoración',
        'Coordinación del día',
        '2 Rincones especiales',
        'Decoración Floral'
      ],
      featured: false,
      price: '3500€',
      consultaWhatsApp: mensajesConsulta.packCompleto()
    },
    {
      title: 'Pack Premium',
      features: [
        'Todo el Pack Completo',
        'Invitaciones personalizadas',
        'Noche para novios Deluxe',
        'Decoración Floral'
      ],
      featured: true,
      price: '5000€',
      consultaWhatsApp: mensajesConsulta.packPremium()
    }
  ]

  return (
    <section id="packs" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">NUESTROS PACKS</h2>
          <div className="section-divider"></div>
          <h3 className="section-subtitle">
            Packs especiales para hacer de tu evento una experiencia inolvidable
          </h3>
        </header>
        
        <div className="packs-container-inline">
          <div className="pack-grid-inline">
            {packs.map((pack, index) => (
              <div 
                key={index} 
                className={`pack-card-inline ${pack.featured ? 'pack-featured-inline' : ''}`}
              >
                {pack.featured && (
                  <div className="pack-badge-inline">Popular</div>
                )}
                <h3>{pack.title}</h3>
                <ul className="pricing-card-list">
                  {pack.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a 
                  href={pack.consultaWhatsApp || mensajesConsulta.consultaGeneral()} 
                  className="btn-price btn-price-packs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <strong>{pack.price || 'CONSULTAR'}</strong>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Packs

