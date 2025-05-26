import React from 'react'

const Product = ({ product, addToCart }) => {
  return (
    <div>
      <img src={product.image} alt={product.name} style={{ width: '200px', height: '200px' }} />
      <h3>{product.name}</h3>
      <p>Precio: ${product.price}</p>
      <p>Stock disponible: {product.stock}</p>
      <button onClick={() => addToCart(product)}>Agregar</button>
    </div>
  )
}

export default Product
