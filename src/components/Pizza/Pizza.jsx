import React, { useState, useEffect } from "react";

const Pizza = () => {
    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPizza = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/pizzas/p001");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setPizza(data);
            } catch (err) {
                console.error("Error al obtener la pizza:", err);
                setError("No se pudo cargar la pizza.");
            } finally {
                setLoading(false);
            }
        };

        fetchPizza();
    }, []);

    if (loading) return <p className="text-center mt-5">Cargando pizza...</p>;
    if (error) return <p className="text-center mt-5 text-danger">{error}</p>;
    if (!pizza) return <p className="text-center mt-5">Pizza no encontrada.</p>;

    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: 720 }}>
                <img src={pizza.img} alt={pizza.name} className="card-img-top" />
                <div className="card-body">
                    <h1 className="card-title">{pizza.name}</h1>
                    <p className="card-text">{pizza.desc}</p>
                    <h5>Ingredientes:</h5>
                    <ul>
                        {pizza.ingredients.map((ing, i) => (
                            <li key={i}>{ing}</li>
                        ))}
                    </ul>
                    <h3 className="mt-3">Precio: ${pizza.price}</h3>
                    <button className="btn btn-success mt-3">Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default Pizza;
