import React from 'react'
import Product from './Product'
import './ProductList.css'

const ProductList = ({ products, addToCart }) => {

  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = products.filter((product) =>
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list-container">
      <input
        type="text"
        placeholder="Buscar productos..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
    <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <Product product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
