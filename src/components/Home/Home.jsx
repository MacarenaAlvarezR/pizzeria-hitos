import React from 'react'
import Header from '../Header/Header'
import CardPizza from '../CardPizza/CardPizza'
import { pizzas } from "../pizzas"

const Home = () => (
    <>
        <Header />
        
        <main className="container mt-4">
            <h2 className="mb-4 text-center">Nuestras Pizzas🍕</h2>
            <div className="row">
                {pizzas.map((pizza) => (
                    <CardPizza
                        key={pizza.id}
                        name={pizza.name}
                        price={pizza.price}
                        ingredients={pizza.ingredients}
                        img={pizza.img}
                    />
                ))}
            </div>
        </main>
        
        
    </>
);


export default Home