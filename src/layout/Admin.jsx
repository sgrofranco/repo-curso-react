import React from 'react'
import { useState } from 'react';
import FormularioProducto from '../components/FormularioProducto';

const Admin = () => {

  const [open, setOpen] = useState(false);

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch('https://682502a60f0188d7e72bb76c.mockapi.io/productos-ecommerce/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
      })
      if (!respuesta.ok) {
        throw new Error('Error al agregar el producto');
      }
      const data = await respuesta.json();
      alert('Producto agregado:', data);
    } catch (error) {
      console.error(error.message);
    }
  }
  return (
    <div>
      <h2>Panel de Administración</h2>

      <button onClick={() => setOpen(!open)}>Añadir Producto</button>
      {open && (<FormularioProducto onAgregar={agregarProducto} />)}
    </div>
  )
}

export default Admin
