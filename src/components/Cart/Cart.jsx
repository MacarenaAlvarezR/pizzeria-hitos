import { useState } from "react";
import { pizzaCart } from "../pizzas"; 

const Cart = () => {
    const [cart, setCart] = useState(pizzaCart);

    const increase = (id) => {
        const updatedCart = cart.map((pizza) =>
            pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza
        );
        setCart(updatedCart);
    };

    const decrease = (id) => {
        const updatedCart = cart
            .map((pizza) =>
                pizza.id === id ? { ...pizza, count: pizza.count - 1 } : pizza
            )
            .filter((pizza) => pizza.count > 0);
        setCart(updatedCart);
    };

    const total = cart.reduce(
        (sum, pizza) => sum + pizza.price * pizza.count,
        0
    );

    return (
        <div className="cart container-fluid m-4">
            <h1>🛒 Carrito de compras</h1>

            {cart.map((pizza) => (
                <div key={pizza.id} className="cart-item" style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                    <img src={pizza.img} alt={pizza.name} width="100" />
                    <div>
                        <h2>{pizza.name}</h2>
                        <p>${pizza.price.toLocaleString()}</p>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <button onClick={() => decrease(pizza.id)}>-</button>
                            <span>{pizza.count}</span>
                            <button onClick={() => increase(pizza.id)}>+</button>
                        </div>
                    </div>
                    <strong style={{ marginLeft: "auto" }}>
                        Subtotal: ${(pizza.price * pizza.count).toLocaleString()}
                    </strong>
                </div>
            ))}

            <hr />
            <h2>Total: ${total.toLocaleString()}</h2>
            <button className=" text-black border-2 border-success rounded-pill">Pagar</button>
        </div>
    );
};

export default Cart;
