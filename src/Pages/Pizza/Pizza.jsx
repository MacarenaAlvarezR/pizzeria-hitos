import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function Pizza() {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);

    useEffect(() => {
        const fetchPizza = async () => {
            const res = await fetch(`/api/pizzas/${id}`);
            const data = await res.json();
            setPizza(data);
        };

        fetchPizza();
    }, [id]);

    if (!pizza) return <p className="text-center mt-5">Cargando...</p>;

    return (
        <div className="container mt-5">
            <h2 className="text-capitalize">{pizza.name}</h2>

            <img src={pizza.img} alt={pizza.name} className="img-fluid rounded" />

            <p className="mt-3">{pizza.desc}</p>

            <h4 className="mt-3">Precio: ${pizza.price}</h4>

            <h5 className="mt-4">Ingredientes:</h5>
            <ul>
                {pizza.ingredients.map((i, index) => (
                    <li key={index}>🍕 {i}</li>
                ))}
            </ul>
        </div>
    );
}
