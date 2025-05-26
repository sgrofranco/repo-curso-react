import React from 'react'
import Product from './Product'
import './ProductList.css'

const ProductList = ({products,addToCart}) => {
  return (
    <div className="product-list">
    {products.map((product) => (
      <div key={product.id} className="product-card">
        <Product product={product} addToCart={addToCart} />
      </div>
    ))}
  </div>
  )
}

export default ProductList
