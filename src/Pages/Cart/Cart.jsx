import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";

export default function Cart() {
    const { cart, increase, decrease, total } = useContext(CartContext);
    const { token, checkout } = useContext(UserContext);
    const [mensaje, setMensaje] = useState("");

    const handlePagar = async () => {
        setMensaje("");
        if (!token) {
            setMensaje("Debes iniciar sesión para pagar");
            return;
        }

        const res = await checkout(cart);
        if (res.ok) {
            setMensaje("Compra realizada con éxito 🎉");
        } else {
            setMensaje("Error al procesar la compra: " + (res.message || ""));
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Carrito</h2>

            <div className="d-flex flex-column align-items-center">
                {cart.length === 0 && <p>Carrito vacío 😢</p>}

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
                            <button className="btn btn-success btn-sm mx-2" onClick={() => increase(item.id)}>
                                +
                            </button>

                            <span style={{ fontSize: "18px", width: "25px", textAlign: "center" }}>{item.quantity}</span>

                            <button className="btn btn-danger btn-sm mx-2" onClick={() => decrease(item.id)}>
                                -
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <hr />
            <h2 className="text-center mt-4">Total: ${total.toLocaleString()}</h2>

            <div className="text-center">
                <button className="btn btn-success mt-3 px-4" onClick={handlePagar} disabled={!cart.length}>
                    Pagar
                </button>
            </div>

            {mensaje && <p className="mt-3 text-center">{mensaje}</p>}
        </div>
    );
}
