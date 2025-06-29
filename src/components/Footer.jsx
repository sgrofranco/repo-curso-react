import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2 className="footer-logo">TECHNOSTORE</h2>

        <nav className="footer-nav">
          <Link to="/">Inicio</Link>
          <Link to="/tienda">Tienda</Link>
          <Link to="/contacto">Contacto</Link>
          <Link to="/nosotros">Nosotros</Link>
        </nav>

        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 TECHNOSTORE. Todos los derechos reservados.</p>
        <p>Desarrollado por Franco Sgro</p>
      </div>
    </footer>
  )
}

export default Footer
