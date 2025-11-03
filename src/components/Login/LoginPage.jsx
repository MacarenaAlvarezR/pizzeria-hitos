import React, { useState } from "react";

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

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
        if (email === "macalvarez@gmail.com" && password === "pizza1") {
            setMensaje("✅ Inicio de sesión exitoso");
        } else {
            setMensaje("❌ Email o contraseña incorrectos.")
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

export default LoginPage;
