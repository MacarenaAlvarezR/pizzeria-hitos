import React from "react";

const CardPizza = ({ name, price, ingredients, img, desc }) => {
    return (

            <div className="col-md-4 mb-4">
                <div className="card h-100 shadow-sm">
                    <img src={img} alt={name} className="card-img-top" />
                    <div className="card-body text-center">
                    <h5 className="card-title">{name}</h5>
                    <hr></hr>



                    <p className="fw-semibold">Ingredientes:</p>
                    <ul className="list-unstyled">
                        {ingredients.map((ingrediente, index) => (
                            <li key={index}>🍕 {ingrediente}</li>
                        ))}
                    </ul>

                    <p className="mt-3 text-justify" style={{ fontSize: "0.9rem" }}>
                        {desc}
                    </p>

                    <hr></hr>
                    <p className="fw-bold">Precio: ${price}</p>
                    <button className="btn btn-info ms-2 text-white fw-bold">Añadir 🛒</button>
                    </div>
                </div>
            </div>
        );
    };
export default CardPizza;