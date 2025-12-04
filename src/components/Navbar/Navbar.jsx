import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
    const { token, logout } = useContext(UserContext);
    const setActive = ({ isActive }) => (isActive ? "active" : "inactive");


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">🍕 Pizzería</Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav ms-auto m-3 ">

                        <li className="nav-item mx-2">
                            <NavLink className={setActive} to="/" >Home</NavLink>
                        </li>

                        <li className="nav-item mx-2">
                            <NavLink className={setActive} to="/cart">Carrito</NavLink>
                        </li>
                        {token ? (
                            <>
                                <li className="nav-item mx-2">
                                    <NavLink className={setActive} to="/profile">Profile</NavLink>
                                </li>

                                <button className="btn btn-danger ms-3" onClick={logout}>
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <li className="nav-item mx-2">
                                    <NavLink className={setActive} to="/login">Login</NavLink>
                                </li>

                                <li className="nav-item mx-2">
                                    <NavLink className={setActive} to="/register">Register</NavLink>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
