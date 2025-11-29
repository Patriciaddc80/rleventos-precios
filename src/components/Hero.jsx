import { useEffect } from 'react'
import './Hero.css'

const Hero = () => {
  // Las imágenes ya están preloadadas en index.html, no necesitamos precargar de nuevo

  return (
    <section id="menu" className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-rings">
          <img 
            src="/assets/img/ring-wedding3.png" 
            alt="Anillos decorativos" 
            className="rings-img" 
            width="200"
            height="60"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <div className="hero-logo">
          <img 
            src="/assets/img/logo.png" 
            alt="Logo Rocío López" 
            className="logo-main" 
            width="200" 
            height="200"
            fetchpriority="high"
            decoding="async"
          />
        </div>
        <h1 className="hero-title">Dossier<br />Servicios</h1>
      </div>
    </section>
  )
}

export default Hero

