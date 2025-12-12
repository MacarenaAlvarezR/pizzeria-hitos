import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";

const API_BASE = "http://localhost:5000/api";

export function UserProvider({ children }) {
    const [token, setToken] = useState(() => {
        return localStorage.getItem("token") || null;
    });

    const [user, setUser] = useState(() => {
        const u = localStorage.getItem("user");
        return u ? JSON.parse(u) : null;
    });

    const [email, setEmail] = useState(() => localStorage.getItem("email") || null);

    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
            if (email) localStorage.setItem("email", email);
            getProfile();

        } else {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            localStorage.removeItem("user");
        }
    }, [token]);

    const login = async (emailArg, password) => {
        try {
            const res = await fetch(`${API_BASE}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailArg, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                return { ok: false, message: data.message || data.error || "Credenciales incorrectas" };
            }

            const receivedToken = data.token ?? data.access_token ?? null;
            const receivedEmail = data.email ?? emailArg;

            if (!receivedToken) {
                return { ok: false, message: "No se recibió token del servidor" };
            }

            setToken(receivedToken);
            setEmail(receivedEmail);
            localStorage.setItem("token", receivedToken);
            localStorage.setItem("email", receivedEmail);

            await getProfile(receivedToken);

            return { ok: true };
        } catch  {
            return { ok: false, message: "Error de conexión" };
        }
    };


    const register = async (emailArg, password) => {
        try {
            const res = await fetch(`${API_BASE}/auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: emailArg, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                return { ok: false, message: data.message || data.error || "No se pudo registrar" };
            }

            const receivedToken = data.token ?? data.access_token ?? null;
            const receivedEmail = data.email ?? emailArg;

            if (!receivedToken) {
                return { ok: false, message: "No se recibió token del servidor" };
            }

            setToken(receivedToken);
            setEmail(receivedEmail);
            localStorage.setItem("token", receivedToken);
            localStorage.setItem("email", receivedEmail);

            await getProfile(receivedToken);

            return { ok: true };
        } catch  {
            return { ok: false, message: "Error de conexión" };
        }
    };

    const logout = () => {
        setToken(null);
        setUser(null);
        setEmail(null);
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("user");
    };

    const getProfile = async (tokenParam) => {
        const t = tokenParam ?? token;
        if (!t) return null;

        try {
            const res = await fetch(`${API_BASE}/auth/me`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${t}`,
                },
            });

            const data = await res.json();

            if (!res.ok) {
                return null;
            }

            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            return data;
        } catch  {
            return null;
        }
    };

    const checkout = async (cart) => {
        if (!token) return { ok: false, message: "Debes iniciar sesión" };

        try {
            const res = await fetch(`${API_BASE}/checkouts`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ cart }),
            });

            const data = await res.json();

            if (!res.ok) return { ok: false, message: data.message || "Error en checkout" };

            return { ok: true, data };
        } catch  {
            return { ok: false, message: "Error de conexión" };
        }
    };

    useEffect(() => {
        if (token && !user) {
            getProfile();
        }
    }, []);

    return (
        <UserContext.Provider value={{ user, email, token, login, register, logout, getProfile, checkout }}>
            {children}
        </UserContext.Provider>
    );
}
