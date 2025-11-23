import { Link } from "react-router-dom";

const Navbar = ({ onNavClick }) => {
    console.log("onNavClick recibido:", onNavClick);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">


                <Link className="navbar-brand" to="/">🍕Pizzería MammaMia</Link>


                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto m-3 ">
                        <li className="nav-item p-2 " >
                            <Link to="/" className="text-white">Home</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link to="/register" className="text-white">Register</Link>
                        </li>
                        <li className="nav-item p-2 ">
                            <Link to="/login" className="text-white">Login</Link>
                        </li>
                        <li className="nav-item p-2 ">
                            <Link to="/profile" className="text-white">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/cart"
                                className="btn btn-success"
                            >
                                🛒 Total: $25.000
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar