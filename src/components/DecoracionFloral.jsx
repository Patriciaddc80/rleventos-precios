import { useState, useEffect, useRef, useCallback } from 'react'
import './DecoracionFloral.css'
import { mensajesConsulta } from '../utils/whatsapp'

const floralImages = [
  '/assets/deco-florales/1130.webp',
  '/assets/deco-florales/1150.webp',
  '/assets/deco-florales/12755.webp',
  '/assets/deco-florales/12760.webp',
  '/assets/deco-florales/12762.webp',
  '/assets/deco-florales/12765.webp',
  '/assets/deco-florales/12766.webp',
  '/assets/deco-florales/12767.webp',
  '/assets/deco-florales/12769.webp',
  '/assets/deco-florales/12771.webp',
  '/assets/deco-florales/1540_heicx.com_convert.webp',
  '/assets/deco-florales/169.webp',
  '/assets/deco-florales/1780_heicx.com_convert.webp',
  '/assets/deco-florales/1899_heicx.com_convert.webp',
  '/assets/deco-florales/1927238a-844d-4332-b326-dc496df3a371-1_all_2034.webp',
  '/assets/deco-florales/2045_heicx.com_convert.webp',
  '/assets/deco-florales/2074.webp',
  '/assets/deco-florales/2091.webp',
  '/assets/deco-florales/2227_heicx.com_convert.webp',
  '/assets/deco-florales/2258_heicx.com_convert.webp',
  '/assets/deco-florales/2266.webp',
  '/assets/deco-florales/261.webp',
  '/assets/deco-florales/371_heicx.com_convert.webp',
  '/assets/deco-florales/459.webp',
  '/assets/deco-florales/659_heicx.com_convert.webp',
  '/assets/deco-florales/695_heicx.com_convert.webp',
  '/assets/deco-florales/696.webp',
  '/assets/deco-florales/7217.webp',
  '/assets/deco-florales/7219.webp',
  '/assets/deco-florales/731_heicx.com_convert.webp'
]

const DecoracionFloral = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef(null)

  // Preload agresivo de TODAS las imágenes del slider para carga instantánea
  useEffect(() => {
    // Imágenes que ya están preloadadas en index.html (no duplicar)
    const alreadyPreloaded = new Set([
      '/assets/deco-florales/1130.webp',
      '/assets/deco-florales/1150.webp'
    ])
    
    // Preload inmediato de todas las imágenes usando Image constructor (más rápido)
    floralImages.forEach((src, index) => {
      const img = new Image()
      img.src = src
      
      // Solo crear preload links para imágenes que no están ya preloadadas en HTML
      if (index < 5 && !alreadyPreloaded.has(src)) {
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = src
        link.setAttribute('fetchpriority', index === 0 ? 'high' : 'auto')
        document.head.appendChild(link)
      } else if (index >= 5) {
        // Para el resto, usar prefetch
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      }
    })
  }, [])

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % floralImages.length)
    }, 5000)

    return () => clearInterval(intervalRef.current)
  }, [])

  // Prefetch agresivo: precargar las siguientes 3 imágenes
  useEffect(() => {
    for (let i = 1; i <= 3; i++) {
      const nextIndex = (currentIndex + i) % floralImages.length
      const nextImg = new Image()
      nextImg.src = floralImages[nextIndex]
    }
  }, [currentIndex])

  const nextImage = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % floralImages.length)
  }, [])

  const prevImage = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + floralImages.length) % floralImages.length)
  }, [])

  const goToImage = (index) => {
    setCurrentIndex(index)
  }

  return (
    <section id="decoracion-floral" className="section decoracion-floral-section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">DECORACIÓN FLORAL</h2>
          <div className="section-divider"></div>
        </header>
        
        <div className="decoracion-floral-content">
          <div className="decoracion-floral-intro">
            <p className="decoracion-floral-text">
              Nuestro departamento de decoración floral crea centros de mesa exclusivos que realzan cada mesa con armonía, color y elegancia, personalizados según el estilo de vuestra boda. También diseñamos rincones especiales para ceremonias civiles y religiosas, aportando detalles florales que enriquecen el ambiente y hacen únicos esos momentos tan especiales. Cada elemento floral está pensado para complementar el espacio y emocionar a todos los invitados.
            </p>
          </div>
          
          {/* Slider mejorado */}
          <div className="floral-slider-enhanced" id="floralSliderContainer">
            <div className="floral-slider-wrapper">
              {/* Controles de navegación - fuera de la imagen */}
              <button 
                className="floral-nav-btn floral-nav-prev"
                onClick={prevImage}
                aria-label="Imagen anterior"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
              </button>
              
              <div className="floral-main-image-container">
                <img 
                  src={floralImages[currentIndex]} 
                  alt={`Decoración floral ${currentIndex + 1}`}
                  className="floral-main-image fade-in"
                  // eslint-disable-next-line react/no-unknown-property
                  fetchpriority={currentIndex === 0 ? 'high' : 'auto'}
                  decoding="async"
                  loading={currentIndex === 0 ? 'eager' : 'lazy'}
                />
              </div>
              
              <button 
                className="floral-nav-btn floral-nav-next"
                onClick={nextImage}
                aria-label="Imagen siguiente"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
              </button>
            </div>

            {/* Barra de progreso */}
            <div className="floral-progress-bar">
              <div 
                className="floral-progress-fill"
                style={{
                  width: '100%',
                  transition: 'width 5s linear'
                }}
              ></div>
            </div>

            {/* Thumbnails */}
            <div className="floral-thumbnails-container">
              <div className="floral-thumbnails-wrapper">
                <div className="floral-thumbnails-track">
                  {floralImages.map((img, index) => (
                    <button
                      key={index}
                      type="button"
                      className={`floral-thumbnail-item ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToImage(index)}
                      aria-label={`Ver imagen ${index + 1}`}
                    >
                      <img 
                        src={img} 
                        alt={`Miniatura ${index + 1}`} 
                        loading="lazy"
                        decoding="async"
                        // eslint-disable-next-line react/no-unknown-property
                        fetchpriority="low"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Dots para móvil */}
            <div className="floral-dots">
              {floralImages.map((_, index) => (
                <button
                  key={index}
                  className={`floral-dot ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToImage(index)}
                  aria-label={`Ir a imagen ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* Botón de precio */}
          <a 
            href={mensajesConsulta.decoracionFloral()} 
            className="btn-price btn-price-decoracion" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <strong>500€</strong>
          </a>
        </div>
      </div>

    </section>
  )
}

export default DecoracionFloral

