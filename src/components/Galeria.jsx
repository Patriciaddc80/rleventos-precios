import { useState, useEffect } from 'react'
import './Galeria.css'

const Galeria = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  const galerias = [
    {
      titulo: 'BODAS ELEGANTES',
      descripcion: 'Cada imagen cuenta una historia única de amor, elegancia y perfección. Nuestro trabajo se centra en crear experiencias visuales que perduren para siempre en la memoria.',
      imagenes: [
        '/assets/material-img/619.jpg',
        '/assets/material-img/1521.jpg',
        '/assets/material-img/javier_julia-106.jpg',
        '/assets/material-img/IMG_0452.JPG',
        '/assets/material-img/javier_julia-1217.jpg',
        '/assets/material-img/javier_julia-252.jpg'
      ]
    },
    {
      titulo: 'CELEBRACIONES ESPECIALES',
      descripcion: 'Transformamos espacios ordinarios en escenarios extraordinarios. Cada celebración es única y merece ser recordada con la máxima calidad y atención al detalle.',
      imagenes: [
        '/assets/material-img/718.jpg',
        '/assets/material-img/IMG_2083.JPG',
        '/assets/material-img/IMG_2084.JPG',
        '/assets/material-img/IMG_2082.JPG'
      ]
    },
    {
      titulo: 'MOMENTOS ÚNICOS',
      descripcion: 'La magia está en los detalles que hacen especial cada celebración. Capturamos esos instantes únicos que se convierten en recuerdos eternos para nuestros clientes.',
      imagenes: [
        '/assets/material-img/javier_julia-866.jpg',
        '/assets/material-img/IMG_0446.JPG',
        '/assets/material-img/IMG_0445.JPG',
        '/assets/material-img/IMG_0440.JPG'
      ]
    },
    {
      titulo: 'DETALLES DE LA CELEBRACIÓN',
      descripcion: 'Cada detalle cuenta una historia única de amor, elegancia y perfección. Nuestro trabajo se centra en crear experiencias visuales que perduren para siempre en la memoria.',
      imagenes: [
        '/assets/material-img/718.jpg',
        '/assets/material-img/javier_julia-1112.jpg',
        '/assets/material-img/javier_julia-765.jpg',
        '/assets/material-img/javier_julia-667.jpg'
      ]
    },
    {
      titulo: 'DETALLES ÚNICOS',
      descripcion: 'La excelencia se encuentra en los pequeños detalles que marcan la diferencia. Cada elemento está cuidadosamente seleccionado para crear una experiencia inolvidable y perfecta.',
      imagenes: [
        '/assets/material-img/842.jpg',
        '/assets/material-img/1227.jpg',
        '/assets/material-img/IMG_0447.JPG',
        '/assets/material-img/IMG_0442.JPG'
      ]
    }
  ]

  const todasLasImagenes = galerias.flatMap(galeria => 
    galeria.imagenes.map(img => ({ src: img, alt: galeria.titulo }))
  )

  // Preload agresivo de todas las imágenes de la galería
  useEffect(() => {
    todasLasImagenes.forEach((imgObj, index) => {
      // Preload las primeras 6 imágenes (visibles inicialmente)
      if (index < 6) {
        const img = new Image()
        img.src = imgObj.src
      } else {
        // Prefetch el resto
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'image'
        link.href = imgObj.src
        document.head.appendChild(link)
      }
    })
  }, [todasLasImagenes])

  const openLightbox = (index) => {
    setCurrentImage(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % todasLasImagenes.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + todasLasImagenes.length) % todasLasImagenes.length)
  }

  return (
    <section id="galeria" className="section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">GALERÍA</h2>
          <div className="section-divider"></div>
        </header>
        
        <div className="galerias-container">
          {galerias.map((galeria, galeriaIndex) => (
            <div key={galeriaIndex} className="gallery-section">
              <h3 className="gallery-section-title">{galeria.titulo}</h3>
              <p className="gallery-description">{galeria.descripcion}</p>
              <div className={`gallery-grid ${galeria.imagenes.length === 3 ? 'gallery-grid-3' : ''} ${galeria.imagenes.length === 4 ? 'gallery-grid-4' : ''} ${galeria.imagenes.length === 6 ? 'gallery-grid-6' : ''}`}>
                {galeria.imagenes.map((imagen, imgIndex) => {
                  const globalIndex = galerias
                    .slice(0, galeriaIndex)
                    .reduce((acc, g) => acc + g.imagenes.length, 0) + imgIndex
                  
                  return (
                    <div 
                      key={imgIndex} 
                      className="gallery-item"
                      onClick={() => openLightbox(globalIndex)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          openLightbox(globalIndex)
                        }
                      }}
                    >
                      <img 
                        src={imagen} 
                        alt={`${galeria.titulo} ${imgIndex + 1}`} 
                        loading="lazy"
                        decoding="async"
                        fetchpriority="low"
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="slideshow-overlay active"
          onClick={closeLightbox}
        >
          <button 
            className="slideshow-close"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24">
              <path fill="currentColor" d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854z"/>
            </svg>
          </button>
          <button 
            className="slideshow-btn slideshow-prev"
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            aria-label="Imagen anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24">
              <path fill="currentColor" fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
            </svg>
          </button>
          <img 
            src={todasLasImagenes[currentImage].src} 
            alt={todasLasImagenes[currentImage].alt}
            className="slideshow-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="slideshow-btn slideshow-next"
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            aria-label="Imagen siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="24" height="24">
              <path fill="currentColor" fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

export default Galeria

