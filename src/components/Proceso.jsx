import './Proceso.css'

const Proceso = () => {
  const pasos = [
    {
      numero: 1,
      titulo: 'Primera reunión',
      descripcion: 'Nos conocemos, escuchamos vuestras ideas y definimos el concepto de vuestra boda.'
    },
    {
      numero: 2,
      titulo: 'Planificación',
      descripcion: 'Creamos un plan detallado con cronograma, presupuesto y selección de proveedores.'
    },
    {
      numero: 3,
      titulo: 'Diseño',
      descripcion: 'Desarrollamos el concepto visual, decoración y todos los detalles estéticos.'
    },
    {
      numero: 4,
      titulo: 'Coordinación',
      descripcion: 'Supervisamos cada aspecto el día de la boda para que todo sea perfecto.'
    }
  ]

  return (
    <section id="proceso" className="section section-alt">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">NUESTRO PROCESO</h2>
          <div className="section-divider"></div>
        </header>
        
        <div className="proceso-container">
          {pasos.map((paso) => (
            <div key={paso.numero} className="proceso-step card">
              <div className="proceso-number">{paso.numero}</div>
              <div className="proceso-content">
                <h3>{paso.titulo}</h3>
                <p>{paso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Proceso

