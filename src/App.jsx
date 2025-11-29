import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import QuienesSomos from './components/QuienesSomos'
import Servicios from './components/Servicios'
import DecoracionFloral from './components/DecoracionFloral'
import Precios from './components/Precios'
import Rincones from './components/Rincones'
import Packs from './components/Packs'
import Testimonios from './components/Testimonios'
import Proceso from './components/Proceso'
import Galeria from './components/Galeria'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'
import './App.css'

function App() {
  // Las imágenes críticas ya están preloadadas en index.html
  // Solo prefetch de imágenes secundarias que no están en el HTML
  useEffect(() => {
    const prefetchImages = [
      '/assets/img/testimonial2.jpeg',
      '/assets/img/testimonial3.jpeg'
    ]

    // Prefetch después de un pequeño delay para no bloquear la carga crítica
    setTimeout(() => {
      prefetchImages.forEach(src => {
        const link = document.createElement('link')
        link.rel = 'prefetch'
        link.as = 'image'
        link.href = src
        document.head.appendChild(link)
      })
    }, 100)
  }, [])

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <main className="main-content">
        <QuienesSomos />
        <Servicios />
        <DecoracionFloral />
        <Precios />
        <Rincones />
        <Packs />
        <Testimonios />
        <Proceso />
        <Galeria />
      </main>
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App

