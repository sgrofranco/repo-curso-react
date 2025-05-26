import React from 'react'
import { useParams } from 'react-router-dom';

const ProductoDetalle = () => {

    const { id } = useParams();

  return (
    <div>
      <h2>Detalles del Producto</h2>
      <p>ID del Producto: {id}</p>
    </div>
  )
}

export default ProductoDetalle
