import React from "react";

const CardPizza = ({ name, price, ingredients, img }) => {
    return (

            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                    <img src={img} alt={name} className="card-img-top" />
                    <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <hr></hr>
                    <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
                    <hr></hr>
                        <p className="fw-bold">Precio: ${price}</p>
                    </div>
                </div>
            </div>
        );
    };
export default CardPizza;