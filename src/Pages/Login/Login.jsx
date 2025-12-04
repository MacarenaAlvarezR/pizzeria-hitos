import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setMensaje("❌ Todos los campos son obligatorios");
            return;
        }

        if (password.length < 6) {
            setMensaje("❌ La contraseña debe tener al menos 6 caracteres");
            return;
        }

        const result = login(email, password);

        if (result.ok) {
            setMensaje("✅ Inicio de sesión exitoso");
            navigate("/profile");
        } else {
            setMensaje(result.message);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Iniciar Sesión</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Email:</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-success w-100">
                    Ingresar
                </button>
            </form>

            {mensaje && <p className="mt-3 text-center">{mensaje}</p>}
        </div>
    );
}

export default Login;
