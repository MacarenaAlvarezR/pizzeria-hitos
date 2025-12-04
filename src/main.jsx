import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App'

import { CartProvider } from "./context/CartContext"
import { PizzaProvider } from "./context/PizzaContext"
import { UserProvider } from "./context/UserProvider"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <UserProvider>
        <PizzaProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </PizzaProvider>
      </UserProvider>
    </BrowserRouter>
  </StrictMode>
);
