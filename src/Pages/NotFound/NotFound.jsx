import { Link } from "react-router-dom";
import './NotF.css';

function NotFound () {
    return (
        <div className="imgnotf text-center text-white d-flex flex-column justify-content-center">
            <h1>404 ❌</h1>
            <p>La página que buscas no existe.</p>

            <Link to="/" className="btn btn-success">
                Volver al inicio
            </Link></div>
    )
}

export default NotFound