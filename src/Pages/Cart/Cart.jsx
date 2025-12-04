import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Cart() {
    const { cart, increase, decrease, total } = useContext(CartContext);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">🛒 Carrito</h2>

            {cart.length === 0 ? (
                <p className="text-center">Carrito vacío 😢</p>
            ) : (
                <div className="d-flex flex-column align-items-center">

                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="d-flex align-items-center justify-content-between shadow p-3 mb-3 rounded"
                            style={{
                                width: "70%",
                                backgroundColor: "#fff",
                                border: "1px solid #ddd",
                            }}
                        >

                            <img
                                src={item.img}
                                alt={item.name}
                                style={{
                                    width: "90px",
                                    height: "90px",
                                    objectFit: "cover",
                                    borderRadius: "10px",
                                    marginRight: "20px",
                                }}
                            />

                            <div style={{ flex: 1 }}>
                                <strong>{item.name}</strong>
                                <p className="m-0">
                                    ${item.price} × {item.quantity}
                                </p>
                            </div>

                            <div className="d-flex align-items-center">
                                <button
                                    className="btn btn-success btn-sm mx-2"
                                    onClick={() => increase(item.id)}
                                >
                                    +
                                </button>

                                <span style={{ fontSize: "18px", width: "25px", textAlign: "center" }}>
                                    {item.quantity}
                                </span>

                                <button
                                    className="btn btn-danger btn-sm mx-2"
                                    onClick={() => decrease(item.id)}
                                >
                                    -
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <hr className="mt-4" />

            <h2 className="text-center">
                Total: <strong>${total.toLocaleString()}</strong>
            </h2>

            {cart.length > 0 && (
                <div className="text-center">
                    <button className="btn btn-success mt-3 px-4">Pagar</button>
                </div>
            )}
        </div>
    );
}
