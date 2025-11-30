/**
 * Genera una URL de WhatsApp con un mensaje predefinido
 * @param {string} mensaje - El mensaje a enviar (será codificado automáticamente)
 * @param {string} telefono - Número de teléfono (por defecto: 34657092014)
 * @returns {string} URL de WhatsApp con el mensaje codificado
 */
export const generarWhatsAppURL = (mensaje, telefono = '34657092014') => {
  const mensajeCodificado = encodeURIComponent(mensaje)
  return `https://wa.me/${telefono}?text=${mensajeCodificado}`
}

/**
 * Genera mensajes personalizados para diferentes tipos de consultas
 */
export const mensajesConsulta = {
  packBasico: () => generarWhatsAppURL(
    '¡Hola! Me interesa el *Pack Básico* de 800€, necesito recibir más información. 📋'
  ),
  packCompleto: () => generarWhatsAppURL(   
    '¡Hola! Me interesa el *Pack Completo* de 3500€, necesito recibir más información. 📋'
  ),
  packPremium: () => generarWhatsAppURL(
    '¡Hola! Me interesa el *Pack Premium* de 5000€, necesito recibir más información. 📋'
  ),
  servicioIntegral: () => generarWhatsAppURL(
    '¡Hola! Me interesa el *Servicio Integral* de 2000€, necesito recibir más información. 📋'
  ),
  asesoramientoCoordinacion: () => generarWhatsAppURL(
    '¡Hola! Me interesa el *Asesoramiento y Coordinación del Día B* de 1200€, necesito recibir más información. 📋'
  ),
  coordinacionDia: () => generarWhatsAppURL(
    '¡Hola! Me interesa la *Coordinación del Día B* de 850€, necesito recibir más información. 📋'
  ),
  decoracionFloral: () => generarWhatsAppURL(
    '¡Hola! Me interesa el servicio de *Decoración Floral* de 500€, necesito recibir más información. 📋'
  ),
  consultaGeneral: () => generarWhatsAppURL(
    '¡Hola! Me gustaría consultar sobre vuestros servicios para mi evento. ¿Podéis darme más información? 📋'
  )
}

