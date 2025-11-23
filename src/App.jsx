import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from "./components/Footer/Footer.jsx"

import Home from "./Pages/Home/Home.jsx"
import Login from "./Pages/Login/Login.jsx"
import Register from './Pages/Register/Register.jsx'
import Cart from "./Pages/Cart/Cart.jsx"
import Pizza from './Pages/Pizza/Pizza.jsx'
import Profile from './Pages/Profile/Profile.jsx'
import NotFound from './Pages/NotFound/NotFound.jsx'
import "./App.css";


function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pizza/P001" element={<Pizza />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
