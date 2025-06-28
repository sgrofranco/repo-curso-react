import React, {useState} from 'react'

const FormularioProducto = ({onAgregar}) => {

    const [producto, setProducto] = useState({
        nombre: '',
        precio: '',
        descripcion: '',
        stock: '',
        image: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProducto({
            ...producto,
            [name]: value
        });
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!producto.nombre) {
            newErrors.nombre = 'El nombre es obligatorio';
        }
        if (!producto.precio || isNaN(producto.precio)) {
            newErrors.precio = 'El precio debe ser un número válido';
        }
        if (!producto.descripcion) {
            newErrors.descripcion = 'La descripción es obligatoria';
        }
        if (producto.stock && isNaN(producto.stock)) {
            newErrors.stock = 'El stock debe ser un número válido';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        onAgregar(producto);
        setProducto({ nombre: '', precio: '', descripcion: '' });
        setErrors({});
    }

  return (
    <form onSubmit={handleSubmit} className="formulario-producto">
        <h2>Agregar Producto</h2>
        <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
                type="text"
                id="nombre"
                name="nombre"
                value={producto.nombre}
                onChange={handleChange}
            />
            {errors.nombre && <p className="error">{errors.nombre}</p>}
        </div>
        <div>
            <label htmlFor="precio">Precio:</label>
            <input
                type="text"
                id="precio"
                name="precio"
                value={producto.precio}
                onChange={handleChange}
            />
            {errors.precio && <p className="error">{errors.precio}</p>}
        </div>
        <div>
            <label htmlFor="descripcion">Descripción:</label>
            <textarea
                id="descripcion"
                name="descripcion"
                value={producto.descripcion}
                onChange={handleChange}
            ></textarea>
            {errors.descripcion && <p className="error">{errors.descripcion}</p>}
        </div>
        <div>
            <label htmlFor='stock'>Stock:</label>
            <input
                type="number"
                id="stock"
                name="stock"
                value={producto.stock || ''}
                onChange={handleChange}
            />
        </div>
        <div>
            <label htmlFor='image'>Imagen URL:</label>
            <input
                type="text"
                id="image"
                name="image"
                value={producto.image}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Agregar Producto</button>
    </form>
  )
}

export default FormularioProducto
