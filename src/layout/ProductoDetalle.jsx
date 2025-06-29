import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import './ProductoDetalle.css';
import { useCart } from '../context/CartContext';

const ProductoDetalle = () => {
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { handleAddToCart } = useCart();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const response = await fetch(`https://682502a60f0188d7e72bb76c.mockapi.io/productos-ecommerce/productos/${id}`);
        if (!response.ok) throw new Error("Error al obtener producto");
        const data = await response.json();
        setProducto(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <p>Cargando producto...</p>;
  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="detalle-container">
      <div className="detalle-content">
        <div className="detalle-imagen">
          <img src={producto.image} alt={producto.nombre} />
        </div>
        <div className="detalle-info">
          <h1 className="detalle-titulo">{producto.nombre}</h1>
          <p>{producto.descripcion}</p>
          <p>Stock disponible: {producto.stock}</p>
          <h3>${producto.precio.toLocaleString()}</h3>
          <button className="btn-agregar" onClick={() => handleAddToCart(producto)}>Agregar al carrito</button>
        </div>
      </div>
    </div>
  )
}

export default ProductoDetalle
