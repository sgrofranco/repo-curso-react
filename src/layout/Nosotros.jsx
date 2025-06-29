import React from 'react'
import './Nosotros.css';
import FormularioDeContacto from '../components/FormularioDeContacto';


const Nosotros = () => {
  return (
     <div className="nosotros">
      {/* Hero con imagen de fondo */}
      <section className="nosotros-hero">
        <h1>Conocé al equipo</h1>
      </section>

      {/* Historia del equipo */}
      <section className="nosotros-historia">
        <div className="content">
          <h2>Nuestra historia</h2>
          <p>
            Technostore nació de una pasión compartida por la tecnología y el deseo de crear una tienda donde cada producto refleje calidad y confianza. 
            Comenzamos como un pequeño grupo de entusiastas y hoy somos un equipo consolidado con la misión de brindar lo mejor en tecnología a nuestros clientes.
          </p>
          <p>
            Desde el primer pedido hasta el desarrollo de esta plataforma, nuestra meta siempre fue la misma: hacerte sentir seguro al comprar.
          </p>
        </div>
      </section>

      {/* Imagen con texto al lado */}
      <section className="nosotros-imagen-texto">
        <img src="https://images.pexels.com/photos/3182763/pexels-photo-3182763.jpeg" alt="Nuestro equipo" />
        <div className="texto">
          <h2>Somos personas reales detrás de cada envío</h2>
          <p>
            Nos enorgullece ser un equipo comprometido, humano y accesible. Cuando hacés una compra en Technostore, sabés que hay alguien del otro lado asegurándose que todo salga bien.
            ¡Gracias por confiar en nosotros!
          </p>
        </div>
      </section>
      <FormularioDeContacto />
    </div>
  )
}

export default Nosotros
