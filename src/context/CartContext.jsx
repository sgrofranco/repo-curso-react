import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
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
        <CartContext.Provider value={{
            cart,
            isCartOpen,
            toggleCart,
            handleAddToCart,
            handleRemoveFromCart,
            countItem: cart.length
        }}>
            {children}
        </CartContext.Provider>
    );
}