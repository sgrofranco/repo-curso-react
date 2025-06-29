import React from 'react'
import './NavHeader.css'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext.jsx'
import { useAuth } from '../context/AuthContext.jsx'

const NavHeader = () => {

  const { isAuthenticated, logout } = useAuth();
  const { countItem, toggleCart } = useCart();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  }

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

          {isAuthenticated ? (
            <>
              <li>
                <Link to="/admin" title="Admin">
                  <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Admin" className="user-icon" style={{ width: '25px', height: '25px' }} />
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-button">
                  <img src="https://www.iconpacks.net/icons/2/free-exit-logout-icon-2857-thumb.png" alt="Admin" className="user-icon" />
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login" className="login-button">
                <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt="Admin" className="user-icon" style={{ width: '25px', height: '25px' }} />
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default NavHeader
