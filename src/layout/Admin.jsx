import React, { useEffect } from 'react'
import { useState } from 'react';
import FormularioProducto from '../components/FormularioProducto';
import '../components/ProductList.css'
import FormularioEdicion from '../components/FormularioEdicion';
import { AdminContext } from '../context/AdminContext';

const Admin = () => {

  const { 
    productos,
    loading,
    open,
    setOpen,
    seleccionado,
    setSeleccionado,
    agregarProducto,
    actualizarProducto,
    eliminarProducto,
    openEditor,
    setOpenEditor

  } = React.useContext(AdminContext);

  return (
    <div>
      <h1 style={{marginTop: "50px",fontSize:"50px"}}>Panel de Administración</h1>

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

      <button onClick={() => setOpen(!open)} style={{backgroundColor:"#ff5722",marginBottom:"30px",color:"white"}}>Añadir Producto</button>
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
