import React, { useEffect } from 'react'
import { useState } from 'react';
import FormularioProducto from '../components/FormularioProducto';
import '../components/ProductList.css'

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const apiUrl = 'https://682502a60f0188d7e72bb76c.mockapi.io/productos-ecommerce/productos';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setProductos(data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error al cargar los productos:', error);
        setLoading(false);
      });
  }, [])

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
      <h1>Panel de Administración</h1>

      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ul className='product-list'>
          {productos.map((producto) => (
            <div key={producto.id} className="product-card">
              <img src={producto.image} style={{ width: '200px', height: '200px' }} />
              <p>{producto.nombre}</p>
              <p>${producto.precio}</p>
              <p>Stock: {producto.stock}</p>
              <p>{producto.descripcion}</p>
              <div>
                <button className="btn btn-danger">Eliminar</button>
                <button className="btn btn-primary">Editar</button>
              </div>
            </div>
          ))}
        </ul>
      )}

      <button onClick={() => setOpen(!open)}>Añadir Producto</button>
      {open && (<FormularioProducto onAgregar={agregarProducto} />)}
    </div>
  )
}

export default Admin
