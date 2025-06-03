import React from 'react'
import './NavHeader.css'
import Header from './Header'
import { Link } from 'react-router-dom'

const NavHeader = () => {

  const { countItem, toggleCart } = useCart();

  return (
    <div className='header-nav'>
      <Header />
      <nav>
        <ul className="nav-links">
          <li><Link to="/"><span aria-label="inicio"></span> <strong>Inicio</strong></Link></li>
          <li><Link to="/tienda"><span aria-label="tienda"></span> <strong>Tienda</strong></Link></li>
          <li><Link to="/nosotros"><span aria-label="nosotros"></span> <strong>Nosotros</strong></Link></li>
          <li><Link to="/contacto"><span aria-label="contacto"></span> <strong>Contacto</strong></Link></li>
          <li onClick={toggleCart} className="cart-button">
            <span role="img" aria-label="carrito">🛒</span> <strong>Carrito ({countItem})</strong>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavHeader
