import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header.jsx";
import CardPizza from "../CardPizza/CardPizza.jsx";

const Home = () => {
    const [pizzas, setPizzas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPizzas = async () => {
            try {
                const res = await fetch("https://tests-deploy-back.onrender.com/api/pizzas");
                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data = await res.json();
                setPizzas(data);
            } catch (err) {
                console.error("Error al obtener pizzas:", err);
                setError("No se pudieron cargar las pizzas.");
            } finally {
                setLoading(false);
            }
        };

        fetchPizzas();
    }, []);

    if (loading) return <p className="text-center mt-5">Cargando pizzas...</p>;
    if (error) return <p className="text-center mt-5 text-danger">{error}</p>;

    return (
        <>
            <Header />
            <main className="container mt-4">
                <h2 className="mb-4 text-center">Nuestras Pizzas 🍕</h2>
                <div className="row">
                    {pizzas.map((pizza) => (
                        <CardPizza
                            key={pizza.id}
                            id={pizza.id}
                            name={pizza.name}
                            price={pizza.price}
                            ingredients={pizza.ingredients}
                            img={pizza.img}
                            desc={pizza.desc}
                        />
                    ))}
                </div>
            </main>
        </>
    );
};

export default Home;
