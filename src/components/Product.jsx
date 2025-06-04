import React from 'react'
import { Link } from 'react-router-dom';

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <img src={product.image} alt={product.nombre} style={{ width: '200px', height: '200px' }} />
      <h3>{product.nombre}</h3>
      <p>Precio: ${product.precio}</p>
      <p>Stock disponible: {product.stock}</p>
      <button onClick={() => addToCart(product)}>Agregar</button>

      <br />
      <Link to={`/producto/${product.id}`}>
        <button>Ver detalles</button>
      </Link>
    </div>
  )
}

export default Product
