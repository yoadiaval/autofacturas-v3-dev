import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ClientProvider } from "./context/ClientContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { FacturasProvider } from "./context/FacturasContext";
import { RegistroProvider } from "./context/RegistroContext.jsx";
import { NumRegProvider } from "./context/NumRegContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <FacturasProvider>
    <NumRegProvider>
      <ClientProvider>
        <RegistroProvider>
          <AuthProvider>
            <BrowserRouter>
              <React.StrictMode>
                <App />
              </React.StrictMode>
            </BrowserRouter>
          </AuthProvider>
        </RegistroProvider>
      </ClientProvider>
    </NumRegProvider>
  </FacturasProvider>
);
