import React, { useEffect } from 'react'
import { useState } from 'react';
import FormularioProducto from '../components/FormularioProducto';
import '../components/ProductList.css'
import FormularioEdicion from '../components/FormularioEdicion';

const Admin = () => {
  const [productos, setProductos] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [seleccionado, setSeleccionado] = useState(null);
  const [openEditor, setOpenEditor] = useState(false);
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

  const cargarProductos = async () => {
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      setProductos(data);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  }

  const agregarProducto = async (producto) => {
    try {
      const respuesta = await fetch(apiUrl, {
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
      cargarProductos()
    } catch (error) {
      console.error(error.message);
    }
  }

  const actualizarProducto = async (producto) => {
    try {
      const respuesta = await fetch(`${apiUrl}/${producto.id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(producto)
        })
      if (!respuesta.ok) {
        throw new Error('Error al actualizar el producto');
      }
      const data = await respuesta.json();
      alert('Producto actualizado');
      setOpenEditor(false);
      setSeleccionado(null);
      cargarProductos()
    } catch (error) {
      console.error(error.message);
    }
  }

  const eliminarProducto = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar este producto?');
    if (confirmar) {
      try {
        const respuesta = await fetch(`${apiUrl}/${id}`, {
          method: 'DELETE'
        })
        if (!respuesta.ok) {
          throw new Error('Error al eliminar el producto')
        }
        alert('Producto eliminado correctamente');
        cargarProductos()
      } catch (error) {
        alert('Error al eliminar el producto:', error.message);
      }
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
                <button className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}>Eliminar</button>
                <button className="btn btn-primary" onClick={() => {
                  setOpenEditor(true)
                  setSeleccionado(producto)
                }}>Editar</button>
              </div>
            </div>
          ))}
        </ul>
      )}

      <button onClick={() => setOpen(!open)}>Añadir Producto</button>
      {open && (<FormularioProducto onAgregar={agregarProducto} />)}
      {openEditor && (
        <FormularioEdicion
          productoSeleccionado={seleccionado}
          onActualizar={actualizarProducto}
        />
      )}
    </div>
  )
}

export default Admin
