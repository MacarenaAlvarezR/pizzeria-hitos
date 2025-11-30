import { createContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (pizza) => {
        setCart((prev) => {
            const exists = prev.find(item => item.id === pizza.id);
            if (exists) {
                return prev.map(item =>
                    item.id === pizza.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { ...pizza, quantity: 1 }];
        });
    };

    const increase = (id) => {
        setCart(prev =>
            prev.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decrease = (id) => {
        setCart(prev =>
            prev
                .map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter(item => item.quantity > 0)
        );
    };

    const total = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

    return (
        <CartContext.Provider value={{ cart, addToCart, increase, decrease, total }}>
            {children}
        </CartContext.Provider>
    );
}
