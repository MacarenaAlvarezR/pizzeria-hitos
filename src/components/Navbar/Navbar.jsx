import React from 'react'

const Navbar = ({ onNavClick }) => {
    console.log("onNavClick recibido:", onNavClick);

    const total = 25000;
    const token = false;

    const formatPrice = (value) => value.toLocaleString("es-CL");
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">🍕Pizzería MammaMia</a>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <button
                                className="nav-link btn btn-link text-white"
                                onClick={() => onNavClick("home")}
                            >
                                Home
                            </button>

                        </li>


                        {token ? (
                            <>
                                <li className="nav-item">
                                    <button
                                        className="nav-link btn btn-link text-white"
                                        onClick={() => onNavClick("profile")}
                                    >
                                        Profile
                                    </button>
                                </li>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <button
                                        className="nav-link btn btn-link text-white"
                                        onClick={() => onNavClick("login")}
                                    >
                                        Login
                                    </button>
                                </li>
                                <li className="nav-item">
                                    <button
                                        className="nav-link btn btn-link text-white"
                                        onClick={() => onNavClick("register")}
                                    >
                                        Register
                                    </button>
                                </li>
                            </>
                        )}
                        <li className="nav-item">
                            <button className="btn btn-info ms-2 text-white">🛒 Total: ${formatPrice(total)}</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar