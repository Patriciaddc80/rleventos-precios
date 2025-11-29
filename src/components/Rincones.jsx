import { useEffect } from 'react'
import './Rincones.css'

const rincones = [
  { icon: '/assets/img/wedding-invitation.png', label: 'Bienvenida' },
  { icon: '/assets/img/fotomaton.png', label: 'Photocall' },
  { icon: '/assets/img/candy-bar.png', label: 'Candy bar' },
  { icon: '/assets/img/wedding-invitation.png', label: 'Libro de firmas' },
  { icon: '/assets/img/codigo-de-vestimenta.png', label: 'Seating' },
  { icon: '/assets/img/cockteleria.png', label: 'Copa bienvenida' }
]

const Rincones = () => {
  // Preload de todos los iconos
  useEffect(() => {
    rincones.forEach(rincon => {
      const img = new Image()
      img.src = rincon.icon
    })
  }, [])

  return (
    <section id="rincones" className="section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">RINCONES ESPECIALES</h2>
          <div className="section-divider"></div>
          <h3 className="section-subtitle">
            Espacios únicos y personalizados para hacer de tu evento una experiencia inolvidable
          </h3>
        </header>
        
        <div className="rincones-container">
          <div className="rincon-grid-inline">
            {rincones.map((rincon, index) => (
              <div key={index} className="rincon-item-inline card">
                <img 
                  src={rincon.icon} 
                  alt={rincon.label} 
                  loading="lazy" 
                  width="50" 
                  height="50"
                  decoding="async"
                  // eslint-disable-next-line react/no-unknown-property
                  fetchpriority="low"
                />
                <span>{rincon.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Rincones

