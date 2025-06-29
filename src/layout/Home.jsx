import React, { useEffect, useState } from 'react'
import Main from '../components/Main'
import ProductList from '../components/ProductList'
import Cart from '../components/Cart'
import { useCart } from '../context/CartContext'
import './Home.css'
import { Link } from 'react-router-dom'
import FormularioDeContacto from '../components/FormularioDeContacto'

const Home = () => {

  const { handleAddToCart } = useCart();


  return (
    <div className="home">
      <Main />

      <section className="info-section">
        <div className="info-image">
          <img src="https://png.pngtree.com/png-vector/20250512/ourmid/pngtree-modern-desktop-computer-png-image_16222921.png" alt="Computadora" />
        </div>
        <div className="info-text">
          <h2>Tecnología en la que podés confiar</h2>
          <p>Descubrí productos pensados para vos.</p>
        </div>
      </section>

      <section className="cta-section">
        <div className='cta-content'>
          <h2>Encontrá lo que estás buscando</h2>
          <p>Explorá nuestra tienda y descubrí productos que se adaptan a tu vida.</p>
          <Link to="/tienda" className="cta-button">
            Ir a la tienda
          </Link>
        </div>
      </section>
      <section>
        <FormularioDeContacto />
      </section>
    </div>
  )
}

export default Home
