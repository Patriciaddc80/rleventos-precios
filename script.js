/* ========================================
   UTILIDADES Y HELPERS
   ======================================== */

// Función helper para detectar modo desktop
const isDesktop = () => window.innerWidth >= 1024;

// Debounce function para optimizar eventos de resize
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Intersection Observer para lazy loading mejorado
const observeElements = (selector, callback) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, {
      rootMargin: '50px'
    });

    document.querySelectorAll(selector).forEach(el => observer.observe(el));
  }
};

/* ========================================
   CONTENIDO DE PÁGINAS DESKTOP
   ======================================== */
const pageContents = [
  {
    right: `
      <div class="page-content-wrapper">
        <h2 class="page-title">QUIENES SOMOS</h2>
        <div class="page-separator">
          <div class="separator-line"></div>
        </div>
        <div class="page-content-grid">
          <div class="page-content-text">
            <h3>Lo que nos hace diferentes</h3>
            <p>En el mundo de los eventos, nos dedicamos a crear experiencias inolvidables, capturando la esencia de cada momento para que perdure en el tiempo. Desde los rituales más significativos hasta las bodas más sofisticadas, cada celebración se convierte en una historia única.</p>
            <p>En el núcleo de nuestro trabajo se encuentra la pasión por los vínculos especiales, donde el amor brilla y nosotros, con esmero y profesionalismo, lo reflejamos en cada sonrisa y en cada detalle.</p>
            <p>Nos comprometemos a hacer realidad los sueños de quienes nos confían sus momentos más importantes, prestando atención a cada detalle con precisión y cuidado. Somos expertos en transformar ideas y expectativas en momentos excepcionales, buscando siempre la elegancia y la distinción.</p>
            <p>Cada evento que diseñamos se convierte en una celebración única, un tributo a la felicidad, donde la armonía y el espíritu festivo se mantienen vivos en los corazones de quienes lo viven.</p>
          </div>
          <div class="page-content-image">
            <img src="assets/img/image36.jpeg" alt="Evento elegante" loading="lazy" width="300" height="240">
          </div>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="services-page-content">
      <h2 class="page-title">NUESTROS SERVICIOS</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      <h3>Organización Integral</h3>
      <h4>Nos ocupamos de todo: búsqueda de espacios, coordinación de proveedores, planificación y supervisión del gran día. Vosotros solo disfrutáis.</h4>
      <div class="services-grid">
        <div class="service-card-inline">
          <h4>Diseño y Decoración</h4>
          <p>Creamos ambientes únicos y elegantes que reflejan vuestra personalidad y sorprenden a los invitados.</p>
        </div>
        <div class="service-card-inline">
          <h4>Coordinación del Día B</h4>
          <p>Controlamos tiempos, proveedores e imprevistos para que todo fluya con armonía.</p>
        </div>
        <div class="service-card-inline">
          <h4>Asesoría a Medida</h4>
          <p>Os ayudamos a definir el estilo, optimizar presupuesto y dar forma a los detalles más especiales.</p>
        </div>
      </div>
      
      <h4 style="text-align: center; margin-top: 30px; margin-bottom: 20px; font-size: 1.5rem; font-weight: bold; color: #000;">Servicios Extras</h4>
      <div class="services-extra-grid">
        <div class="service-extra-item">
          <img src="assets/img/wedding-invitation.png" alt="Invitaciones" loading="lazy" width="30" height="30">
          <span>Invitaciones y papelería personalizada</span>
        </div>
        <div class="service-extra-item">
          <img src="assets/img/luna-de-miel.png" alt="Luna de miel" loading="lazy" width="30" height="30">
          <span>Noche para novios Deluxe</span>
        </div>
        <div class="service-extra-item">
          <img src="assets/img/codigo-de-vestimenta.png" alt="Protocolo" loading="lazy" width="30" height="30">
          <span>Protocolo y etiqueta</span>
        </div>
      </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-content-wrapper">
        <h2 class="page-title">EL SERVICIO DE MONTAJE</h2>
        <div class="page-separator">
          <div class="separator-line"></div>
        </div>
        <div class="montaje-content">
          <p class="montaje-intro">Este servicio se centra en la colocación, distribución y montaje de elementos decorativos, detalles personalizados, centros de mesas, señalización, regalos y otros elementos decorativos en el lugar del evento.</p>
          
          <h4 class="montaje-subtitle">Características de este servicio</h4>
          
          <div class="montaje-feature">
            <h4>Foco exclusivo en montaje</h4>
            <p>La función principal es la colocación y montaje de todos los detalles y decoración en su lugar correspondiente días o horas antes del evento.</p>
          </div>
          
          <div class="montaje-feature">
            <h4>Responsabilidad en la logística</h4>
            <p>Se encarga de realizar la distribución correcta de los detalles, mesas, centros, señalización, rincón de invitados, etc., asegurando que todo quede en su sitio y con la estética deseada.</p>
          </div>
          
          <div class="montaje-feature">
            <h4>Supervisión durante la instalación</h4>
            <p>Supervisan y coordinan para que el montaje se realice en tiempo y forma, siguiendo las indicaciones y planos del diseño de decoración.</p>
          </div>
        </div>
        <div class="price-tag montaje-price">
          <strong>DESDE: 250€</strong>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="pricing-page-content">
      <h2 class="page-title">PRECIOS Y SERVICIOS</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      
      <div class="pricing-grid">
        <div class="pricing-card">
          <h3>¿POR QUÉ NECESITÁIS EL SERVICIO INTEGRAL?</h3>
          <ul>
            <li>Porque no tenéis tiempo de organizar vuestra boda.</li>
            <li>Queréis un servicio profesional completo.</li>
            <li>Deseáis una boda diferente y original.</li>
            <li>Queréis disfrutar del proceso sin estrés</li>
            <li>Necesitáis todo el asesoramiento y ayuda profesional.</li>
          </ul>
          <h4>¿CÓMO PODEMOS AYUDAROS?</h4>
          <ul>
            <li>Reunión previa</li>
            <li>Check list completo</li>
            <li>Calendario de tareas</li>
            <li>Control de presupuesto</li>
          </ul>
          <div class="price-tag">
            <strong>2000€</strong>
          </div>
        </div>
        
        <div class="pricing-card">
          <h3>ASESORAMIENTO Y COORDINACIÓN DEL DÍA B</h3>
          <ul>
            <li>Creación de concepto visual</li>
            <li>Moodboard y paleta de colores</li>
            <li>Montaje y desmontaje</li>
            <li>Atrezzo y elementos decorativos</li>
            <li>Mobiliario especial</li>
            <li>Flores y centros de mesa</li>
          </ul>

          <p class="pricing-card-dia-b-services"> Nuestro equipo se encarga de asesorar, organizar y coordinar la boda de manera integral. Diseñamos el lenguaje visual de su celebración y gestionamos todos los detalles logísticos, permitiéndoles centrarse en disfrutar de su día especial.

Con nuestro servicio, pueden delegar parte de las responsabilidades mientras los acompañamos en todo momento, tanto antes como durante la boda, coordinando y resolviendo cualquier eventualidad que pueda surgir.
Formaremos parte de su equipo durante todos estos meses, elaborando tanto la agenda como el protocolo desde el primer momento, para garantizar que todo salga a la perfección en su gran día.
          </p>
          
          <div class="price-tag">
            <strong>1200€</strong>
          </div>
        </div>

        <div class="pricing-card">
          <h3>COORDINACIÓN DEL DÍA B</h3>
          <ul>
            <li>Supervisión de proveedores</li>
            <li>Control de tiempos</li>
            <li>Gestión de imprevistos</li>
            <li>Protocolo y ceremonias</li>
          </ul>
          <h4>¿CÓMO PODEMOS AYUDAROS?</h4>
          <p class="pricing-card-dia-b"> <b>¡No te preocupes!</b> Estamos aquí para brindarte asistencia.

Nuestro servicio de coordinación para el gran día es un ballet de planificación y organización, asegurando que todo se desarrolle como un cuento de hadas.

A tres meses de la boda, comenzamos a poner en marcha todos los preparativos: Elaboramos un cronograma detallado para que cada momento sea verdaderamente mágico..</p>
          <div class="price-tag">
            <strong>850€</strong>
          </div>
        </div>
      </div>
      </div>
    `
  },
  {
    right: `
      <h2 class="page-title">RINCONES ESPECIALES</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      <h3 class="page-subtitle">Espacios únicos y personalizados para hacer de tu evento una experiencia inolvidable</h3>
      <div class="rincones-container">
        <div class="rincon-grid-inline">
          <div class="rincon-item-inline">
            <img src="assets/img/wedding-invitation.png" alt="Bienvenida" loading="lazy" width="50" height="50">
            <span>Bienvenida</span>
          </div>
          <div class="rincon-item-inline">
            <img src="assets/img/fotomaton.png" alt="Photocall" loading="lazy" width="50" height="50">
            <span>Photocall</span>
          </div>
          <div class="rincon-item-inline">
            <img src="assets/img/candy-bar.png" alt="Candy bar" loading="lazy" width="50" height="50">
            <span>Candy bar</span>
          </div>
          <div class="rincon-item-inline">
            <img src="assets/img/wedding-invitation.png" alt="Libro de firmas" loading="lazy" width="50" height="50">
            <span>Libro de firmas</span>
          </div>
          <div class="rincon-item-inline">
            <img src="assets/img/codigo-de-vestimenta.png" alt="Seating" loading="lazy" width="50" height="50">
            <span>Seating</span>
          </div>
          <div class="rincon-item-inline">
            <img src="assets/img/cockteleria.png" alt="Copa bienvenida" loading="lazy" width="50" height="50">
            <span>Copa bienvenida</span>
          </div>
          
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external">
      </div>
      <h2 class="page-title">NUESTROS PACKS</h2>
      <h3 class="page-subtitle">Packs especiales para hacer de tu evento una experiencia inolvidable</h3>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      <div class="packs-container-inline">
        <div class="pack-grid-inline">
          <div class="pack-card-inline">
            <h3>Pack Básico</h3>
            <ul>
              <li>Coordinación del día</li>
              <li>Supervisión de proveedores</li>
              <li>Control de tiempos</li>
            </ul>
            <div class="price-tag-inline">
              <strong>800€</strong>
            </div>
          </div>

          <div class="pack-card-inline">
            <h3>Pack Completo</h3>
            <ul>
              <li>Organización integral</li>
              <li>Diseño y decoración</li>
              <li>Coordinación del día</li>
              <li>2 Rincones especiales</li>
            </ul>
            <div class="price-tag-inline">
              <strong>3500€</strong>
            </div>
          </div>

          <div class="pack-card-inline pack-featured-inline">
            <div class="pack-badge-inline">Popular</div>
            <h3>Pack Premium</h3>
            <ul>
              <li>Todo el Pack Completo</li>
              <li>Invitaciones personalizadas</li>
              <li>Noche para novios Deluxe</li>
            </ul>
            <div class="price-tag-inline">
              <strong>5000€</strong>
            </div>
          </div>
        </div>
      </div>
        <p class="packs-disclaimer-inline">*Los precios son orientativos y pueden variar según invitados, localización y personalización.*</p>
    `
  },
  {
    right: `
      <div class="page-header-external"></div>
      <h2 class="page-title">TESTIMONIO 1</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      <div class="testimonial-single-container testimonial-1">
        <div class="testimonial-single-image">
          <img src="assets/img/testimonial1.jpeg" alt="Cosmina y Adrián" loading="lazy">
        </div>
        <div class="testimonial-single-content">
          <h3 class="testimonial-single-heading">Lo que dicen nuestros clientes</h3>
          <blockquote class="testimonial-single-quote">
            "Estoy muy orgullosa, por haber encontrado esta gran empresa. Transmiten confianza, te dan una cercanía, son inmejorables en su trabajo."
          </blockquote>
          <p class="testimonial-single-author">— Cosmina y Adrián, 31/05/2024</p>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external"></div>
      <h2 class="page-title">TESTIMONIO 2</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      <div class="testimonial-single-container testimonial-2">
        <div class="testimonial-single-image">
          <img src="assets/img/testimonial2.jpeg" alt="Patricia y Roberto" loading="lazy">
        </div>
        <div class="testimonial-single-content">
          <h3 class="testimonial-single-heading">Lo que dicen nuestros clientes</h3>
          <blockquote class="testimonial-single-quote">
            "Rocío transformó nuestra visión en una boda perfecta. Su atención al detalle, creatividad y profesionalidad hicieron que cada momento fuera mágico. No solo organizó nuestro día especial, sino que nos acompañó en cada paso del camino con cariño y dedicación."
          </blockquote>
          <p class="testimonial-single-author">— Patricia y Roberto, 15/06/2024</p>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external"></div>
      <h2 class="page-title">TESTIMONIO 3</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      <div class="testimonial-single-container testimonial-3">
        <div class="testimonial-single-image">
          <img src="assets/img/testimonial3.jpeg" alt="Ana Cristina" loading="lazy" width="150px">
        </div>
        <div class="testimonial-single-content">
          <h3 class="testimonial-single-heading">Lo que dicen nuestros clientes</h3>
          <blockquote class="testimonial-single-quote">
            "Desde el minuto cero me has ofrecido una mano que me ha guiado durante casi dos años para organizar una boda de ensueño. Gracias por tu dedicación e implicación."
          </blockquote>
          <p class="testimonial-single-author">— Ana Cristina, 06/09/2023</p>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external">
      </div>
      <h2 class="page-title">NUESTRO PROCESO</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      
      <div class="proceso-container">
        <div class="proceso-step-inline">
          <div class="proceso-number-inline">1</div>
          <div class="proceso-content-inline">
            <h3>Primera reunión</h3>
            <p>Nos conocemos, escuchamos vuestras ideas y definimos el concepto de vuestra boda.</p>
          </div>
        </div>

        <div class="proceso-step-inline">
          <div class="proceso-number-inline">2</div>
          <div class="proceso-content-inline">
            <h3>Planificación</h3>
            <p>Creamos un plan detallado con cronograma, presupuesto y selección de proveedores.</p>
          </div>
        </div>

        <div class="proceso-step-inline">
          <div class="proceso-number-inline">3</div>
          <div class="proceso-content-inline">
            <h3>Diseño</h3>
            <p>Desarrollamos el concepto visual, decoración y todos los detalles estéticos.</p>
          </div>
        </div>

        <div class="proceso-step-inline">
          <div class="proceso-number-inline">4</div>
          <div class="proceso-content-inline">
            <h3>Coordinación</h3>
            <p>Supervisamos cada aspecto el día de la boda para que todo sea perfecto.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external">
      </div>
      <h2 class="page-title">BODAS ELEGANTES</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      
      <div class="gallery-section">
        <h3 class="gallery-description">Cada imagen cuenta una historia única de amor, elegancia y perfección. Nuestro trabajo se centra en crear experiencias visuales que perduren para siempre en la memoria.</h3>
        
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="assets/material-img/619.jpg" alt="Boda Elegante 1" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/1521.jpg" alt="Boda Elegante 2" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/javier_julia-106.jpg" alt="Boda Elegante 3" loading="lazy">
          </div>
           <div class="gallery-item">
            <img src="assets/material-img/IMG_0452.JPG" alt="Boda Elegante 3" loading="lazy">
          </div>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external">
      </div>
      <h2 class="page-title">CELEBRACIONES ESPECIALES</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      
      <div class="gallery-section">
        <h3 class="gallery-description">Transformamos espacios ordinarios en escenarios extraordinarios. Cada celebración es única y merece ser recordada con la máxima calidad y atención al detalle.</h3>
        
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="assets/material-img/718.jpg" alt="Celebración Especial 1" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/IMG_2083.JPG" alt="Celebración Especial 2" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/IMG_2084.JPG" alt="Celebración Especial 3" loading="lazy">
          </div>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external">
      </div>
      <h2 class="page-title">MOMENTOS ÚNICOS</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      
      <div class="gallery-section">
        <h3 class="gallery-description">La magia está en los detalles que hacen especial cada celebración. Capturamos esos instantes únicos que se convierten en recuerdos eternos para nuestros clientes.</h3>
        
        <div class="gallery-grid">
          <div class="gallery-item">
            <img src="assets/material-img/javier_julia-866.jpg" alt="Momento Único 1" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/IMG_0446.JPG" alt="Momento Único 2" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/IMG_0445.JPG" alt="Momento Único 3" loading="lazy">
          </div>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external">
      </div>
      <h2 class="page-title">DETALLES DE LA CELEBRACIÓN</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      
      <div class="gallery-section">
        <p class="gallery-description">Cada detalle cuenta una historia única de amor, elegancia y perfección. Nuestro trabajo se centra en crear experiencias visuales que perduren para siempre en la memoria..</p>
          <div class="gallery-grid">
          <div class="gallery-item">
            <img src="assets/material-img/718.jpg" alt="Detalle Perfecto 1" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/javier_julia-1112.jpg" alt="Detalle Perfecto 2" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/javier_julia-765.jpg" alt="Detalle Perfecto 3" loading="lazy">
          </div>
        </div>
      </div>
    `
  },
  {
    right: `
      <div class="page-header-external">
      </div>
      <h2 class="page-title">DETALLES ÚNICOS</h2>
      <div class="page-separator">
        <div class="separator-line"></div>
      </div>
      
      <div class="gallery-section">
        <p class="gallery-description"> La excelencia se encuentra en los pequeños detalles que marcan la diferencia. Cada elemento está cuidadosamente seleccionado para crear una experiencia inolvidable y perfecta. </p>
          <div class="gallery-grid">
          <div class="gallery-item">
            <img src="assets/material-img/842.jpg" alt="Detalle Perfecto 1" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/1227.jpg" alt="Detalle Perfecto 2" loading="lazy">
          </div>
          <div class="gallery-item">
            <img src="assets/material-img/IMG_0447.JPG" alt="Detalle Perfecto 3" loading="lazy">
          </div>
        </div>
      </div>
    `
  },
];

/* ========================================
   CLASE DESKTOP BOOK - OPTIMIZADA
   ======================================== */
class DesktopBook {
  constructor() {
    this.currentPage = -1; // Comienza en portada
    this.isTransitioning = false;

    // Elementos del DOM
    this.views = {
      cover: document.getElementById('coverView'),
      book: document.getElementById('bookView'),
      backCover: document.getElementById('backCoverView')
    };

    this.rightPage = document.getElementById('rightPage');
    this.buttons = {
      prev: document.getElementById('prevBtn'),
      next: document.getElementById('nextBtn')
    };
    this.controls = document.querySelector('.controls');

    // Verificar que todos los elementos existen
    if (!this.validateElements()) {
      console.error('Error: No se encontraron todos los elementos necesarios');
      return;
    }
  }

  validateElements() {
    return this.views.cover && this.views.book && this.views.backCover &&
      this.rightPage && this.buttons.prev && this.buttons.next && this.controls;
  }

  init() {
    console.log('Inicializando DesktopBook...');

    // Mostrar portada inicial
    this.showView('cover');

    // Event listeners para botones con manejo de errores
    this.buttons.prev.addEventListener('click', () => {
      try {
        this.prevPage();
      } catch (error) {
        console.error('Error en prevPage:', error);
      }
    });

    this.buttons.next.addEventListener('click', () => {
      try {
        this.nextPage();
      } catch (error) {
        console.error('Error en nextPage:', error);
      }
    });

    // Navegación con teclado (flechas)
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        this.buttons.prev.click();
      } else if (e.key === 'ArrowRight') {
        this.buttons.next.click();
      }
    });

    // Inicializar eventos de hover para mostrar/ocultar botones
    this.initHoverControls();

    this.updateButtons();
    console.log('✅ DesktopBook inicializado correctamente');
  }

  showView(viewName) {
    try {
      // Ocultar todas las vistas
      Object.values(this.views).forEach(view => {
        if (view) view.classList.remove('active');
      });

      // Mostrar la vista actual
      if (this.views[viewName]) {
        this.views[viewName].classList.add('active');
      }
    } catch (error) {
      console.error('Error en showView:', error);
    }
  }

  initHoverControls() {
    // Función para mostrar los botones
    const showControls = () => {
      if (this.controls) {
        this.controls.classList.add('show');
      }
    };

    // Función para ocultar los botones
    const hideControls = () => {
      if (this.controls) {
        this.controls.classList.remove('show');
      }
    };

    // Agregar eventos de mouse a todas las vistas
    Object.values(this.views).forEach(view => {
      if (view) {
        view.addEventListener('mouseenter', showControls);
        view.addEventListener('mouseleave', hideControls);
      }
    });

    // También agregar eventos a los botones para mantenerlos visibles cuando se hace hover sobre ellos
    if (this.controls) {
      this.controls.addEventListener('mouseenter', showControls);
      this.controls.addEventListener('mouseleave', hideControls);
    }
  }

  updateButtons() {
    const isAtCover = this.currentPage === -1;
    const isAtEnd = this.currentPage >= pageContents.length;

    this.buttons.prev.disabled = isAtCover || this.isTransitioning;
    this.buttons.next.disabled = isAtEnd || this.isTransitioning;

    // Actualizar aria-label para accesibilidad
    if (this.buttons.prev) {
      this.buttons.prev.setAttribute('aria-disabled', isAtCover || this.isTransitioning);
    }
    if (this.buttons.next) {
      this.buttons.next.setAttribute('aria-disabled', isAtEnd || this.isTransitioning);
    }
  }

  loadPage(index) {
    if (index >= 0 && index < pageContents.length) {
      try {
        this.isTransitioning = true;
        this.updateButtons();

        // Cargar página con animación suave
        this.rightPage.style.opacity = '0';

        setTimeout(() => {
          this.rightPage.innerHTML = pageContents[index].right;
          this.rightPage.style.opacity = '1';

          // Aplicar clase especial para páginas de galerías
          const dossierContainer = document.querySelector('.dossier-container');
          if (index >= 5 && index <= 8) { // Páginas de galerías (índices 5-8)
            dossierContainer.classList.add('galleries-page');
          } else {
            dossierContainer.classList.remove('galleries-page');
          }

          // Reinicializar funcionalidad de página si es necesario
          this.isTransitioning = false;
          this.updateButtons();
        }, 100);
      } catch (error) {
        console.error('Error al cargar página:', error);
        this.isTransitioning = false;
        this.updateButtons();
      }
    }
  }

  nextPage() {
    if (this.isTransitioning) return;

    try {
      if (this.currentPage === -1) {
        // De portada a primera página
        this.currentPage = 0;
        this.showView('book');
        this.loadPage(0);
      } else if (this.currentPage < pageContents.length - 1) {
        // Siguiente página del libro
        this.currentPage++;
        this.loadPage(this.currentPage);
      } else if (this.currentPage === pageContents.length - 1) {
        // A contraportada
        this.currentPage = pageContents.length;
        this.showView('backCover');
        this.updateButtons();
      }
    } catch (error) {
      console.error('Error en nextPage:', error);
    }
  }

  prevPage() {
    if (this.isTransitioning) return;

    try {
      if (this.currentPage === 0) {
        // De primera página a portada
        this.currentPage = -1;
        this.showView('cover');
      } else if (this.currentPage === pageContents.length) {
        // De contraportada a última página
        this.currentPage = pageContents.length - 1;
        this.showView('book');
        this.loadPage(this.currentPage);
      } else if (this.currentPage > 0) {
        // Página anterior
        this.currentPage--;
        this.loadPage(this.currentPage);
      }
      this.updateButtons();
    } catch (error) {
      console.error('Error en prevPage:', error);
    }
  }
}

/* ========================================
   NAVEGACIÓN MÓVIL - OPTIMIZADA
   ======================================== */
class Navigation {
  constructor() {
    this.hamburger = document.getElementById('hamburger');
    this.navMenu = document.getElementById('navMenu');
    this.navLinks = document.querySelectorAll('.nav-link');

    if (!this.hamburger || !this.navMenu) {
      console.error('Error: Elementos de navegación no encontrados');
      return;
    }

    this.init();
  }

  init() {
    // Toggle menú
    this.hamburger.addEventListener('click', () => this.toggleMenu());

    // Cerrar al hacer click en links
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => {
        this.closeMenu();
        // Scroll suave al destino
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          const target = document.querySelector(targetId);
          if (target) {
            setTimeout(() => {
              target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 300);
          }
        }
      });
    });

    // Cerrar al hacer click fuera
    document.addEventListener('click', (e) => {
      if (this.navMenu.classList.contains('active') &&
        !this.navMenu.contains(e.target) &&
        !this.hamburger.contains(e.target)) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    const isActive = this.hamburger.classList.toggle('active');
    this.navMenu.classList.toggle('active');

    // Actualizar aria-expanded para accesibilidad
    this.hamburger.setAttribute('aria-expanded', isActive);
  }

  closeMenu() {
    this.hamburger.classList.remove('active');
    this.navMenu.classList.remove('active');
    this.hamburger.setAttribute('aria-expanded', 'false');
  }
}

/* ========================================
   LIGHTBOX DE GALERÍA - OPTIMIZADO
   ======================================== */
class GalleryLightbox {
  constructor() {
    this.overlay = document.getElementById('slideshowOverlay');
    this.image = document.getElementById('slideshowImage');
    this.prevBtn = document.getElementById('slideshowPrev');
    this.nextBtn = document.getElementById('slideshowNext');
    this.closeBtn = document.getElementById('slideshowClose');
    this.images = [];
    this.currentIndex = 0;

    if (!this.overlay) {
      console.error('Error: Elementos de galería no encontrados');
      return;
    }
  }

  init() {
    const galleryItems = document.querySelectorAll('.gallery-item, .gallery-item-inline');
    if (galleryItems.length === 0) return;

    this.images = Array.from(galleryItems).map(item => {
      const img = item.querySelector('img');
      return img ? img.src : '';
    }).filter(src => src);

    galleryItems.forEach((item, index) => {
      item.addEventListener('click', () => this.open(index));
      item.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          this.open(index);
        }
      });
    });

    // Event listeners para botones
    if (this.prevBtn) this.prevBtn.addEventListener('click', () => this.prev());
    if (this.nextBtn) this.nextBtn.addEventListener('click', () => this.next());
    if (this.closeBtn) this.closeBtn.addEventListener('click', () => this.close());

    // Cerrar al hacer click en el overlay
    this.overlay.addEventListener('click', (e) => {
      if (e.target === this.overlay) this.close();
    });

    // Navegación con teclado
    document.addEventListener('keydown', (e) => {
      if (!this.overlay.classList.contains('active')) return;

      switch (e.key) {
        case 'ArrowLeft':
          this.prev();
          break;
        case 'ArrowRight':
          this.next();
          break;
        case 'Escape':
          this.close();
          break;
      }
    });
  }

  open(index) {
    if (index < 0 || index >= this.images.length) return;

    this.currentIndex = index;
    this.updateImage();
    this.overlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
  }

  close() {
    this.overlay.classList.remove('active');
    document.body.style.overflow = ''; // Restaurar scroll
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateImage();
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateImage();
  }

  updateImage() {
    if (this.image && this.images[this.currentIndex]) {
      this.image.src = this.images[this.currentIndex];
    }
  }
}

/* ========================================
   INICIALIZACIÓN OPTIMIZADA
   ======================================== */
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Inicializando aplicación...');
  console.log('Modo:', isDesktop() ? 'Desktop' : 'Móvil/Tablet');

  try {
    if (isDesktop()) {
      // Modo desktop
      const book = new DesktopBook();
      if (book.validateElements()) {
        book.init();
      }
    } else {
      // Modo móvil/tablet
      new Navigation();
    }

    // Inicializar galería en ambos modos
    const lightbox = new GalleryLightbox();
    lightbox.init();

    // Lazy loading para imágenes
    observeElements('img[loading="lazy"]', (img) => {
      if (img.dataset.src) {
        img.src = img.dataset.src;
      }
    });

    console.log('✅ Aplicación inicializada correctamente');
  } catch (error) {
    console.error('❌ Error durante la inicialización:', error);
  }
});

/* ========================================
   MANEJO DE RESIZE CON DEBOUNCE
   ======================================== */
let wasDesktop = isDesktop();

const handleResize = debounce(() => {
  const nowDesktop = isDesktop();

  if (wasDesktop !== nowDesktop) {
    console.log('Cambio de modo detectado, recargando...');
    location.reload();
  }

  wasDesktop = nowDesktop;
}, 250);

window.addEventListener('resize', handleResize);

// ========================================
// FUNCIONALIDAD DE GALERÍA CON LIGHTBOX
// ========================================

class GalleryModal {
  constructor() {
    this.modal = null;
    this.modalImage = null;
    this.modalCaption = null;
    this.modalClose = null;
    this.modalPrev = null;
    this.modalNext = null;
    this.currentIndex = 0;
    this.images = [];
    this.init();
  }

  init() {
    // Esperar a que el DOM esté listo
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => this.setupGallery());
    } else {
      this.setupGallery();
    }
  }

  setupGallery() {
    // Buscar elementos de la galería
    const galleryItems = document.querySelectorAll('.gallery-item-inline');

    if (galleryItems.length === 0) return;

    // Recopilar información de las imágenes
    this.images = Array.from(galleryItems).map(item => ({
      src: item.dataset.image,
      alt: item.dataset.alt
    }));

    // Agregar event listeners a cada imagen para hover
    galleryItems.forEach((item, index) => {
      // Evento de hover para abrir modal
      item.addEventListener('mouseenter', () => this.openModalOnHover(index));

      // Evento de click como alternativa
      item.addEventListener('click', () => this.openModal(index));

      // Evento de mouseleave para cerrar modal si está abierto por hover
      item.addEventListener('mouseleave', () => this.closeModalOnHover());
    });

    // Crear elementos del modal si no existen
    this.createModal();
  }

  createModal() {
    // Verificar si el modal ya existe
    this.modal = document.getElementById('galleryModal');
    if (!this.modal) return;

    this.modalImage = document.getElementById('galleryModalImage');
    this.modalCaption = document.querySelector('.gallery-modal-caption');
    this.modalClose = document.querySelector('.gallery-modal-close');
    this.modalPrev = document.getElementById('galleryModalPrev');
    this.modalNext = document.getElementById('galleryModalNext');

    // Event listeners para el modal
    this.modalClose.addEventListener('click', () => this.closeModal());
    this.modalPrev.addEventListener('click', () => this.prevImage());
    this.modalNext.addEventListener('click', () => this.nextImage());

    // Cerrar modal al hacer click fuera de la imagen (solo si no es hover)
    this.modal.addEventListener('click', (e) => {
      if (e.target === this.modal && !this.modal.classList.contains('hover-mode')) {
        this.closeModal();
      }
    });

    // Navegación con teclado (solo si no es hover)
    document.addEventListener('keydown', (e) => {
      if (this.modal.style.display === 'block' && !this.modal.classList.contains('hover-mode')) {
        switch (e.key) {
          case 'Escape':
            this.closeModal();
            break;
          case 'ArrowLeft':
            this.prevImage();
            break;
          case 'ArrowRight':
            this.nextImage();
            break;
        }
      }
    });

    // Variables para controlar el hover
    this.hoverTimeout = null;
    this.isHovering = false;
  }

  openModal(index) {
    this.currentIndex = index;
    this.updateModalImage();
    this.modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevenir scroll del body
  }

  closeModal() {
    this.modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restaurar scroll del body
  }

  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateModalImage();
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateModalImage();
  }

  updateModalImage() {
    const currentImage = this.images[this.currentIndex];
    this.modalImage.src = currentImage.src;
    this.modalImage.alt = currentImage.alt;
    this.modalCaption.textContent = currentImage.alt;
  }

  // Nuevas funciones para hover
  openModalOnHover(index) {
    // Solo abrir si el modal no está ya abierto por click
    if (this.modal.style.display !== 'block') {
      this.isHovering = true;
      this.currentIndex = index;
      this.updateModalImage();
      this.modal.style.display = 'block';
      this.modal.classList.add('hover-mode');
      document.body.style.overflow = 'hidden';

      // Limpiar timeout anterior si existe
      if (this.hoverTimeout) {
        clearTimeout(this.hoverTimeout);
      }
    }
  }

  closeModalOnHover() {
    // Solo cerrar si fue abierto por hover
    if (this.modal.classList.contains('hover-mode') && this.isHovering) {
      this.isHovering = false;

      // Delay para evitar cerrar inmediatamente al mover el mouse
      this.hoverTimeout = setTimeout(() => {
        if (!this.isHovering && this.modal.classList.contains('hover-mode')) {
          this.closeModal();
        }
      }, 200);
    }
  }

  openModal(index) {
    this.currentIndex = index;
    this.updateModalImage();
    this.modal.style.display = 'block';
    this.modal.classList.remove('hover-mode'); // Marcar como abierto por click
    this.isHovering = false; // Resetear estado de hover
    document.body.style.overflow = 'hidden';

    // Limpiar timeout de hover si existe
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = null;
    }
  }

  closeModal() {
    this.modal.style.display = 'none';
    this.modal.classList.remove('hover-mode'); // Limpiar marca de hover
    this.isHovering = false; // Resetear estado de hover
    document.body.style.overflow = 'auto';

    // Limpiar timeout de hover si existe
    if (this.hoverTimeout) {
      clearTimeout(this.hoverTimeout);
      this.hoverTimeout = null;
    }
  }
}

// Añadir estilos para animación de carga del botón
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
