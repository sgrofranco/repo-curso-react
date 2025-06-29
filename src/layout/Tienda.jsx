import React from 'react'
import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext'
import ProductList from '../components/ProductList'

const Tienda = () => {

  const { handleAddToCart } = useCart();

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('https://682502a60f0188d7e72bb76c.mockapi.io/productos-ecommerce/productos')
      .then((response) => response.json())
      .then((datos) => { setProductos(datos) })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  return (
    <div>
      <ProductList products={productos}
        addToCart={handleAddToCart} />
    </div>
  )
}

export default Tienda
