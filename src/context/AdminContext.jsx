import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [seleccionado, setSeleccionado] = useState(null);
    const [openEditor, setOpenEditor] = useState(false);
    const apiUrl = 'https://682502a60f0188d7e72bb76c.mockapi.io/productos-ecommerce/productos';

    useEffect(() => {
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 2000);
            })
            .catch((error) => {
                console.error('Error al cargar los productos:', error);
                setLoading(false);
            });
    }, [])

    const cargarProductos = async () => {
        try {
            const res = await fetch(apiUrl);
            const data = await res.json();
            setProductos(data);
        } catch (error) {
            console.error('Error al cargar los productos:', error);
        }
    }

    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) {
                throw new Error('Error al agregar el producto');
            }
            const data = await respuesta.json();
            alert('Producto agregado:', data);
            cargarProductos()
        } catch (error) {
            console.error(error.message);
        }
    }

    const actualizarProducto = async (producto) => {
        try {
            const respuesta = await fetch(`${apiUrl}/${producto.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(producto)
                })
            if (!respuesta.ok) {
                throw new Error('Error al actualizar el producto');
            }
            const data = await respuesta.json();
            alert('Producto actualizado');
            setOpenEditor(false);
            setSeleccionado(null);
            cargarProductos()
        } catch (error) {
            console.error(error.message);
        }
    }

    const eliminarProducto = async (id) => {
        const confirmar = window.confirm('¿Estás seguro de eliminar este producto?');
        if (confirmar) {
            try {
                const respuesta = await fetch(`${apiUrl}/${id}`, {
                    method: 'DELETE'
                })
                if (!respuesta.ok) {
                    throw new Error('Error al eliminar el producto')
                }
                alert('Producto eliminado correctamente');
                cargarProductos()
            } catch (error) {
                alert('Error al eliminar el producto:', error.message);
            }
        }
    }


    return (
        <AdminContext.Provider value={{
            productos,
            loading,
            open,
            setOpen,
            seleccionado,
            setSeleccionado,
            agregarProducto,
            actualizarProducto,
            eliminarProducto,
            openEditor,
            setOpenEditor
        }}>
            {children}
        </AdminContext.Provider>
    )
}
