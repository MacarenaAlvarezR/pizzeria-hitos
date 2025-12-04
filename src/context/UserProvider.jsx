import { useState } from "react";
import { UserContext } from "./UserContext";

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);

    const login = (email, password) => {

        if (email === "macalvarez@gmail.com" && password === "pizza1") {

            const fakeToken = "123456ABCDEF";

            const userdata = {
                name: "Macarena Álvarez",
                email,
            };

            setUser(userdata);
            setToken(fakeToken);

            return { ok: true };
        }

        return { ok: false, message: "Credenciales incorrectas" };
    };

    const logout = () => {
        setUser(null);
        setToken(null);
    };

    return (
        <UserContext.Provider value={{ user, token, login, logout }}>
            {children}
        </UserContext.Provider>
    );
}
