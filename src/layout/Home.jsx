import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'

const Home = ({ handleAddToCart }) => {

  const [productos, setProductos] = useState([])

  useEffect(() => {
    fetch('https://682502a60f0188d7e72bb76c.mockapi.io/productos-ecommerce/productos')
      .then((response) => response.json())
      .then((datos) => { setProductos(datos) })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  return (
    <>
      <Main />
      <ProductList products={productos}
        addToCart={handleAddToCart} />
    </>
  )
}

export default Home
