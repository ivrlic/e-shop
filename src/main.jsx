import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./assets/styles/index.css"
import { CartProvider } from "./context/CartContext.jsx"
import { ActivePageProvider } from "./context/ActivePageContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <ActivePageProvider>
        <App />
      </ActivePageProvider>
    </CartProvider>
  </React.StrictMode>,
)
