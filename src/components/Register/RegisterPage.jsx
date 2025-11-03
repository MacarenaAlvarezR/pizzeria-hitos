import React, { useState } from "react";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [mensaje, setMensaje] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setMensaje("❌ Todos los campos son obligatorios");
        } else if (password.length < 6) {
            setMensaje("❌ La contraseña debe tener al menos 6 caracteres");
        } else if (password !== confirmPassword) {
            setMensaje("❌ Las contraseñas no coinciden");
        } else {
            setMensaje("✅ Registro exitoso");
        }
    };

    return (
        <div className="container mt-5">
            <h2>Formulario de Registro</h2>

            <form onSubmit={manejarEnvio}>
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

                <div className="mb-3">
                    <label>Confirmar contraseña:</label>
                    <input
                        type="password"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                    Registrarse
                </button>
            </form>

            {mensaje && <p className="mt-3 text-center">{mensaje}</p>}
        </div>
    );
}

export default RegisterPage;
