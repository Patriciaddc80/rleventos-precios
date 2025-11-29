import { useState, useEffect, useRef } from 'react'
import './Testimonios.css'

const testimonios = [
  {
    image: '/assets/img/testimonial1.jpeg',
    alt: 'Boda de Cosmina y Adrián',
    quote: (
      <>
        <strong>INMEJORABLES!</strong>
        {' '}
        Estoy muy orgullosa, por haber encontrado esta gran empresa. Transmiten confianza, te dan una cercanía, son inmejorables en su trabajo.
      </>
    ),
    author: 'Cosmina y Adrián',
    date: '31/05/2024'
  },
  {
    image: '/assets/img/testimonial2.jpeg',
    alt: 'Boda de Patricia y Roberto',
    quote: (
      <>
        <strong>MÁGICO!</strong>
        {' '}
        Rocío transformó nuestra visión en una boda perfecta. Su atención al detalle, creatividad y profesionalidad hicieron que cada momento fuera mágico. No solo organizó nuestro día especial, sino que nos acompañó en cada paso del camino con cariño y dedicación.
      </>
    ),
    author: 'Patricia y Roberto',
    date: '15/06/2024'
  },
  {
    image: '/assets/img/testimonial3.jpeg',
      alt: 'Boda de Ana Cristina',
    quote: (
      <>
        <strong>ENSUEÑO!</strong>
        {' '}
        Desde el minuto cero me has ofrecido una mano que me ha guiado durante casi dos años para organizar una boda de ensueño. Gracias por tu dedicación e implicación.
      </>
    ),
    author: 'Ana Cristina',
    date: '06/09/2023'
  }, 
  {
    image: '/assets/img/image-azucena-1001.webp',
    alt: 'Boda de Azucena',
    quote: (
      <>
        <strong>EXCELENCIA!</strong>
        {' '}
        Fue el regalo de los hermanos de la novia a los novios y la verdad es que fue la idea mejor que pudimos tener ya que así los novios disfrutaron más de su día. Todo salió perfecto y el equipo de Rocio y Rocio estuvieron perfectos. Gracias
      </>
    ),
    author: 'Azucena',
    date: '28/10/2024'
  },
  {
    image: '/assets/img/image-ana-cristina-1002.webp',
    alt: 'Boda de Ana Cristina',
    quote: (
      <>
        <strong>INSUPERABLES!!</strong>
        {' '}
        Estoy muy orgullosa, por haber encontrado esta gran empresa. Y sobre todo después de haberlos tratado puedo decir que es una gran empresa que ahora ya forman parte de nuestras vidas. Transmiten confianza, te dan una cercanía, son inmejorables en su trabajo. Bueno ahora ya digo bien alto que rocio y su empresa son la familia que llegue a contrastar siendo empresa y se fue siendo más que familia. Gracias .
      </>
    ),
    author: 'Ana Cristina',
    date: '6/09/2023'
  }
]

const Testimonios = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [expandedTestimonials, setExpandedTestimonials] = useState({})
  const intervalRef = useRef(null)

  // Función para extraer el texto del quote (sin el strong)
  const getTextFromQuote = (quote) => {
    if (typeof quote === 'string') return quote
    if (quote?.props?.children) {
      const children = Array.isArray(quote.props.children) ? quote.props.children : [quote.props.children]
      return children
        .filter(child => {
          if (typeof child === 'string') return true
          if (child?.type === 'strong') return false
          if (child?.type === 'br') return false
          return false
        })
        .map(child => typeof child === 'string' ? child : '')
        .join(' ')
        .trim()
    }
    return ''
  }

  // Función para determinar si un testimonio necesita el botón de expandir
  const needsExpandButton = (quote) => {
    const text = getTextFromQuote(quote)
    // Aproximadamente 3 líneas = ~150 caracteres (considerando line-height 1.75 y font-size 0.875rem)
    return text.length > 150
  }

  // Función para truncar el texto manteniendo el strong
  const truncateQuote = (quote, maxLength = 150) => {
    if (typeof quote === 'string') {
      const truncated = quote.substring(0, maxLength)
      const lastSpace = truncated.lastIndexOf(' ')
      return quote.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...'
    }
    
    if (quote?.props?.children) {
      const children = Array.isArray(quote.props.children) ? quote.props.children : [quote.props.children]
      const strongElement = children.find(child => child?.type === 'strong')
      const textChildren = children.filter(child => {
        if (typeof child === 'string') return true
        if (child?.type === 'strong') return false
        if (child?.type === 'br') return false
        return false
      })
      
      const fullText = textChildren
        .map(child => typeof child === 'string' ? child : '')
        .join(' ')
        .trim()
      
      const truncatedText = fullText.substring(0, maxLength)
      const lastSpace = truncatedText.lastIndexOf(' ')
      const finalText = fullText.substring(0, lastSpace > 0 ? lastSpace : maxLength) + '...'
      
      return (
        <>
          {strongElement}
          {' '}
          {finalText}
        </>
      )
    }
    
    return quote
  }

  // Preload agresivo de todas las imágenes de testimonios
  useEffect(() => {
    testimonios.forEach((testimonio, index) => {
      const img = new Image()
      img.src = testimonio.image
      
      if (index === 0) {
        // Preload link para la primera (más crítica)
        const link = document.createElement('link')
        link.rel = 'preload'
        link.as = 'image'
        link.href = testimonio.image
        link.setAttribute('fetchpriority', 'high')
        document.head.appendChild(link)
      }
    })
  }, [])

  useEffect(() => {
    if (isAutoPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonios.length)
      }, 7000)
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonios.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonios.length) % testimonios.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  return (
    <section id="testimonios" className="testimonios-new-section">
      <div className="testimonios-container">
        <div className="testimonios-header">
          <h2 className="testimonios-title">TESTIMONIOS</h2>
          <div className="testimonios-divider"></div>
          <h3 className="testimonios-subtitle">Lo que dicen nuestros clientes</h3>
        </div>

        <div className="testimonios-carousel">
          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonios.map((testimonio, index) => {
                const getImageClass = () => {
                  if (index === 0) return 'testimonial-cosmina-adrian'
                  if (index === 2) return 'testimonial-ana-cristina'
                  return ''
                }
                
                return (
                <div 
                  key={index} 
                  className={`testimonial-item ${index === currentIndex ? 'active' : ''}`}
                >
                  <div className="testimonial-box">
                    <div className={`testimonial-image-section ${getImageClass()}`}>
                      <div className="image-container">
                        <img 
                          src={testimonio.image} 
                          alt={testimonio.alt} 
                          loading="lazy"
                          decoding="async"
                          fetchPriority={index === 0 ? "auto" : "low"}
                        />
                        <div className="image-overlay"></div>
                      </div>
                    </div>
                    
                    <div className="testimonial-text-section">
                      <div className="quote-decoration">
                        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" fill="currentColor" opacity="0.1"/>
                        </svg>
                      </div>
                      
                      <blockquote className="testimonial-quote">
                        {needsExpandButton(testimonio.quote) ? (
                          <>
                            {expandedTestimonials[index] ? (
                              <>
                                {testimonio.quote}
                                <button 
                                  className="expand-text-btn"
                                  onClick={() => setExpandedTestimonials({...expandedTestimonials, [index]: false})}
                                  aria-label="Contraer texto"
                                >
                                  −
                                </button>
                              </>
                            ) : (
                              <>
                                {truncateQuote(testimonio.quote)}
                                <button 
                                  className="expand-text-btn"
                                  onClick={() => setExpandedTestimonials({...expandedTestimonials, [index]: true})}
                                  aria-label="Expandir texto"
                                >
                                  +
                                </button>
                              </>
                            )}
                          </>
                        ) : (
                          testimonio.quote
                        )}
                      </blockquote>
                      
                      <div className="testimonial-meta">
                        <div className="author-badge">
                          <span className="author-name">{testimonio.author}</span>
                          <span className="author-date">{testimonio.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                )
              })}
            </div>
          </div>

          {/* Navegación */}
          <div className="carousel-navigation">
            <button 
              className="nav-button prev-button"
              onClick={prevSlide}
              aria-label="Anterior"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>
            
            <div className="carousel-indicators">
              {testimonios.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Testimonio ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              className="nav-button next-button"
              onClick={nextSlide}
              aria-label="Siguiente"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonios
