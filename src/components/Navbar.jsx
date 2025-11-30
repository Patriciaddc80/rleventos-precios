import { useState, useEffect } from 'react'
import './Navbar.css'

const menuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'decoracion-floral', label: 'Decoración Floral' },
  { id: 'precios', label: 'Precios' },
  { id: 'rincones', label: 'Rincones' },
  { id: 'packs', label: 'Packs' },
  { id: 'testimonios', label: 'Testimonios' },
  { id: 'proceso', label: 'Proceso' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' }
]

// Enlaces permitidos solo en el menú hamburguesa móvil
const mobileMenuItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'quienes-somos', label: 'Quiénes Somos' },
  { id: 'servicios', label: 'Servicios' },
  { id: 'precios', label: 'Precios' },
  { id: 'packs', label: 'Packs' },
  { id: 'galeria', label: 'Galería' },
  { id: 'contacto', label: 'Contacto' }
]

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isVerticalPanelOpen, setIsVerticalPanelOpen] = useState(false)
  const [hamburgerColor, setHamburgerColor] = useState('white') // 'white' o 'brown'

  // Función para detectar si el fondo es blanco o muy claro
  const detectWhiteBackground = () => {
    // Solo funciona en mobile
    if (window.innerWidth > 767) {
      return false
    }

    const navbar = document.querySelector('.navbar')
    if (!navbar) return false

    const rect = navbar.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Obtener el elemento en la posición justo debajo del navbar
    const element = document.elementFromPoint(centerX, centerY + 50)
    if (!element) return false

    // Obtener el color de fondo del elemento
    const style = window.getComputedStyle(element)
    let bgColor = style.backgroundColor

    // Si el fondo es transparente, buscar en elementos padre
    if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
      let parent = element.parentElement
      while (parent && parent !== document.body) {
        const parentStyle = window.getComputedStyle(parent)
        const parentBg = parentStyle.backgroundColor
        if (parentBg !== 'rgba(0, 0, 0, 0)' && parentBg !== 'transparent') {
          bgColor = parentBg
          break
        }
        parent = parent.parentElement
      }
    }

    // Verificar si el color es blanco o muy claro
    if (!bgColor || bgColor === 'transparent' || bgColor === 'rgba(0, 0, 0, 0)') {
      return false
    }

    // Extraer valores RGB
    const rgbMatch = bgColor.match(/\d+/g)
    if (!rgbMatch || rgbMatch.length < 3) return false

    const [r, g, b] = rgbMatch.map(Number)
    
    // Considerar blanco si todos los valores RGB son mayores a 240 (muy claro)
    // o si es exactamente rgb(255, 255, 255)
    const isWhite = (r >= 240 && g >= 240 && b >= 240) || (r === 255 && g === 255 && b === 255)
    
    return isWhite
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id)
          break
        }
      }

      // Detectar si el fondo es blanco y cambiar el color del hamburger
      if (detectWhiteBackground()) {
        setHamburgerColor('brown')
      } else {
        setHamburgerColor('white')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Llamar una vez al montar
    
    // También detectar en resize
    window.addEventListener('resize', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleNavClick = (id) => {
    setIsMenuOpen(false)
    
    // Si es contacto, hacer scroll al footer
    if (id === 'contacto') {
      const footer = document.querySelector('footer')
      if (footer) {
        const offset = 70
        const footerPosition = footer.getBoundingClientRect().top
        const offsetPosition = footerPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
        return
      }
    }
    
    const element = document.getElementById(id)
    if (element) {
      const offset = 70
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    } else {
      // Si la sección no existe, hacer scroll al inicio
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <nav 
        className="navbar mobile-only" 
        role="navigation" 
        aria-label="Navegación principal"
      >
        <div className="nav-brand">
          <a 
            href="#inicio" 
            className="nav-logo-link" 
            aria-label="Ir al inicio"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('inicio')
            }}
          >
            <img 
              src="/assets/img/logo.png" 
              alt="Logo Rocío López" 
              className="nav-logo" 
              width="50" 
              height="50"
              fetchpriority="high"
              decoding="async"
            />
          </a>
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''} ${hamburgerColor === 'brown' ? 'hamburger-brown' : ''}`}
          id="hamburger"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div 
          className={`nav-menu-overlay ${isMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => {
            if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
              setIsMenuOpen(false)
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Cerrar menú"
        ></div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="navMenu" role="menu">
          {/* Logo */}
          <li className="nav-menu-logo-item">
            <div className="nav-menu-logo-wrapper">
              <img 
                src="/assets/img/logo.png" 
                alt="Logo Rocío López" 
                className="nav-menu-logo"
                width="80"
                height="80"
              />
            </div>
          </li>
          
          {/* Enlaces del menú */}
          {mobileMenuItems.map((item) => (
            <li key={item.id} role="menuitem">
              <a
                href={`#${item.id}`}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(item.id)
                  setIsMenuOpen(false)
                }}
              >
                <span className="nav-link-text">{item.label}</span>
              </a>
            </li>
          ))}
          
          {/* Botón Visita nuestra web */}
          <li className="nav-menu-web-item">
            <a 
              href="https://www.rleventos.com/" 
              className="nav-menu-web-link"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              <span>Visita nuestra web</span>
            </a>
          </li>
          
          {/* Redes sociales */}
          <li className="nav-menu-social-item">
            <div className="nav-menu-social">
              <a 
                href="https://www.instagram.com/rl__eventos/" 
                className="nav-menu-social-link nav-menu-social-instagram"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/34657092014" 
                className="nav-menu-social-link nav-menu-social-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>
          </li>
        </ul>
      </nav>

      {/* Header vertical con pestañas en el lado derecho */}
      <aside className="vertical-header desktop-only" role="navigation" aria-label="Navegación vertical">
        {/* Botón Inicio para abrir panel */}
        <button
          className={`vertical-header-toggle ${isVerticalPanelOpen ? 'active' : ''}`}
          onClick={() => setIsVerticalPanelOpen(!isVerticalPanelOpen)}
          aria-label={isVerticalPanelOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isVerticalPanelOpen}
        >
          <span className="vertical-header-toggle-text">INICIO</span>
          <span className={`vertical-header-toggle-icon ${isVerticalPanelOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Panel con enlaces */}
        <div className={`vertical-nav-panel ${isVerticalPanelOpen ? 'open' : ''}`}>
          <ul className="vertical-nav-tabs">
            {menuItems.map((item) => (
              <li key={item.id} className="vertical-nav-tab">
                <a
                  href={`#${item.id}`}
                  className={`vertical-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(item.id)
                    setIsVerticalPanelOpen(false)
                  }}
                  aria-label={`Ir a ${item.label}`}
                >
                  <span className="vertical-nav-label">{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  )
}

export default Navbar

