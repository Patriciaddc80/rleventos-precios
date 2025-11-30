import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const handleLogoClick = (e) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer id="contacto" className="footer-modern">
      <div className="footer-container">
        <div className="footer-content">
          {/* Logo y nombre */}
          <div className="footer-brand">
            <button 
              className="footer-logo-wrapper"
              onClick={handleLogoClick}
              aria-label="Ir al inicio"
              type="button"
            >
              <img 
                src="/assets/img/logo.png" 
                alt="Logo Rocío López" 
                className="footer-logo"
                loading="lazy"
                decoding="async"
                fetchpriority="low"
              />
            </button>
            <h3 className="footer-brand-name">Rocío López</h3>
            <p className="footer-brand-tagline">Wedding Planner & Organización de Eventos</p>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h4 className="footer-section-title">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="#inicio" className="footer-link-button">Inicio</a></li>
              <li><a href="#quienes-somos" className="footer-link-button">Quiénes Somos</a></li>
              <li><a href="#servicios" className="footer-link-button">Servicios</a></li>
              <li><a href="#galeria" className="footer-link-button">Galería</a></li>
              <li><a href="#contacto" className="footer-link-button">Contacto</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4 className="footer-section-title">Contacto</h4>
            <ul className="footer-contact">
              <li>
                <a href="mailto:info@rociolopezeventos.com" className="footer-contact-button footer-web-link footer-email-link">
                  <svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M2 3h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"/>
                    <path d="M2 4l6 4 6-4"/>
                  </svg>
                  <span>rociolopez.eventos.toledo@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://www.rleventos.com/" 
                  className="footer-contact-button footer-web-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visita nuestra web"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15 3 21 3 21 9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                  <span>Visita nuestra web</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div className="footer-section">
            <h4 className="footer-section-title">Síguenos</h4>
            <div className="footer-social">
              <a 
                href="https://www.instagram.com/rl__eventos/" 
                className="footer-social-link footer-social-instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/34657092014" 
                className="footer-social-link footer-social-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.98 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="footer-divider"></div>

        {/* Copyright */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Rocío López. Todos los derechos reservados.
          </p>
          <p className="footer-credits">
            Diseñado con <span className="footer-heart">♥</span>{' '}
            <a 
              href="https://www.instagram.com/_patriciadiaz.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-credits-link"
            >
              PATRICIA DIAZ
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

