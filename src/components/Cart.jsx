import React from 'react'
import './Cart.css'
import { useCart } from '../context/CartContext';

const Cart = () => {
  
  const { isCartOpen, toggleCart, cartItems, onRemove } = useCart();

  if (!isCartOpen) return null;
  
  return (
    <>
      <div className="cart-overlay" onClick={toggleCart}></div>
      <div className="cart-sidebar open">
        <button className="close-btn" onClick={toggleCart}>×</button>
        <h2>Carrito</h2>
        {cartItems.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} (x{item.quantity}) - ${item.price * item.quantity}
                <button onClick={() => onRemove(item.id)}>Eliminar</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Cart
