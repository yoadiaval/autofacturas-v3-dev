import { useContext } from "react";
import ClientContext from "../context/ClientContext";

export const useClient = () => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error("useClient debe ser usado dentro de un ClientProvider");
  }
  return context;
};
