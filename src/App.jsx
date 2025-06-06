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

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <NavHeader />
      <Cart />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/nosotros' element={<Nosotros />} />
        <Route path='/tienda' element={<Tienda />} />
        <Route path='*' element={<h1>404 Not Found</h1>} />
        <Route path='/login' element={<Login />} />
        <Route path='/producto/:id' element={<ProductoDetalle />} />
        <Route path='/admin' element={
          <ProtectedRoute>
            <Admin isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
