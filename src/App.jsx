import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Home from "./components/Home/Home.jsx"
import Footer from "./components/Footer/Footer.jsx"
import LoginPage from "./components/Login/LoginPage.jsx"
import RegisterPage from './components/Register/RegisterPage.jsx'

import "./App.css";

function App() {

  const [paginaActual, setPaginaActual] = useState("home");
  const cambiarPagina = (pagina) => {
    setPaginaActual(pagina);
  };

  return (
    <>
      <Navbar onNavClick={cambiarPagina} />
      {paginaActual === "home" && <Home />}
      {paginaActual === "login" && <LoginPage />}
      {paginaActual === "register" && <RegisterPage />}
      <Footer />
    </>
  )
}

export default App
