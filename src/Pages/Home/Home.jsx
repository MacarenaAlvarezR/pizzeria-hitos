import { useContext } from "react";
import Header from "../../components/Header/Header";
import { CartContext } from "../../context/CartContext";
import { PizzaContext } from "../../context/PizzaContext";
import { Link } from "react-router-dom";

export default function Home() {
    const { pizzas } = useContext(PizzaContext);
    const { addToCart } = useContext(CartContext);

    return (
        <>
        
        <Header/>
        <div className="container mt-5">
            <div className="row g-4">
                {pizzas.map((pizza) => (
                    <div key={pizza.id} className="col-md-4">
                        <div className="card shadow-sm">

                            <img
                                src={pizza.img}
                                alt={pizza.name}
                                className="card-img-top"
                                style={{ height: "250px", objectFit: "cover" }}
                            />

                            <div className="card-body text-center">

                                <h4 className="text-capitalize">{pizza.name}</h4>
                                <hr />

                                <h6><strong>Ingredientes:</strong></h6>
                                <ul className="list-unstyled">
                                    {pizza.ingredients.map((ing, i) => (
                                        <li key={i}>🍕 {ing}</li>
                                    ))}
                                </ul>

                                <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                                    {pizza.desc}
                                </p>

                                <h5 className="mt-3">
                                    <strong>Precio: ${pizza.price}</strong>
                                </h5>

                                <div className="d-flex justify-content-between mt-3">
                                    <Link
                                        to={`/pizza/${pizza.id}`}
                                        className="btn btn-outline-primary w-50 me-2"
                                    >
                                        Ver más
                                    </Link>

                                    <button
                                        className="btn btn-success w-50"
                                        onClick={() => addToCart(pizza)}
                                    >
                                        Añadir al carrito
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </>
    );
}
