import { useEffect } from 'react'
import './QuienesSomos.css'

const QuienesSomos = () => {
  // Preload de la imagen crítica
  useEffect(() => {
    const img = new Image()
    img.src = '/assets/img/image36.jpeg'
  }, [])

  return (
    <section id="quienes-somos" className="section">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Quiénes Somos</h2>
          <div className="section-divider"></div>
        </header>
        <div className="two-col-layout">
          <div className="img-col">
            <img 
              src="/assets/img/image36.jpeg" 
              alt="Evento elegante organizado por Rocío López"
              className="featured-img" 
              loading="lazy" 
              width="350" 
              height="280"
              decoding="async"
              fetchpriority="low"
            />
          </div>
          <div className="text-col">
            <h3>"Lo que nos hace diferentes"</h3>
            <div className="section-text">
              <p>
                En el mundo de los eventos, nos dedicamos a crear experiencias inolvidables, capturando
                la esencia de cada momento para que perdure en el tiempo. Desde los rituales más
                significativos hasta las bodas más sofisticadas, cada celebración se convierte en una
                historia única.
              </p>
              <p>
                En el núcleo de nuestro trabajo se encuentra la pasión por los vínculos especiales, donde
                el amor brilla y nosotros, con esmero y profesionalismo, lo reflejamos en cada sonrisa y
                en cada detalle.
              </p>
              <p>
                Nos comprometemos a hacer realidad los sueños de quienes nos confían sus momentos más
                importantes, prestando atención a cada detalle con precisión y cuidado. Somos expertos
                en transformar ideas y expectativas en momentos excepcionales, buscando siempre la
                elegancia y la distinción.
              </p>
              <p>
                Cada evento que diseñamos se convierte en una celebración única, un tributo a la
                felicidad, donde la armonía y el espíritu festivo se mantienen vivos en los corazones de
                quienes lo viven.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default QuienesSomos

