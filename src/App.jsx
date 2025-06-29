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
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

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
            <Admin />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
