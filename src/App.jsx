import { useState } from 'react'
import './App.css'
import Home from './layout/Home'
import Footer from './components/Footer';
import NavHeader from './components/NavHeader';
import { Routes, Route } from 'react-router-dom';
import Contacto from './layout/Contacto';
import Nosotros from './layout/Nosotros';
import Tienda from './layout/Tienda';
import Cart from './components/Cart';
import Admin from './layout/Admin';
import Login from './layout/Login';
import ProtectedRoute from './layout/ProtectedRoute';
import ProductoDetalle from './layout/ProductoDetalle';

function App() {

  const [cart, setCart] = useState([])

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((item) => item.id === product.id);
      const quantityInCart = itemInCart ? itemInCart.quantity : 0;

      if (quantityInCart >= product.stock) {
        alert("No hay más stock disponible de este producto.");
        return prevCart;
      }

      if (itemInCart) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  }

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  const countItem = cart.length;

  return (
    <>
      <NavHeader countItem={countItem} toggleCart={toggleCart} />
      <Cart
        cartItems={cart}
        onRemove={handleRemoveFromCart}
        isCartOpen={isCartOpen}
        toggleCart={toggleCart} />
      <Routes>
        <Route path='/' element={
          <Home
            handleAddToCart={handleAddToCart}
          />
        } />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/producto/:id' element={<ProductoDetalle />} />
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
