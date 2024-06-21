import { useContext } from "react";
import { FacturasContext } from "../context/FacturasContext";

export const useFactura = () => {
  const context = useContext(FacturasContext);
  if (!context) {
    throw new Error("useFacturas debe ser usado dentro de un FacturasProvider");
  }
  return context;
};
