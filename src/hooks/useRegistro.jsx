import { useContext } from "react";
import { RegistroContext } from "../context/RegistroContext";

export const useRegistro = () => {
  const context = useContext(RegistroContext);
  if (!context) {
    throw new Error("useRegiostro debe ser usado dentro de un RegistroProvider");
  }
  return context;
};
