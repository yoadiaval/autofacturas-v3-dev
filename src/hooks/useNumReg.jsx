import { useContext } from "react";
import  NumRegContext  from "../context/NumRegContext";

export const useNumReg = () => {
  const context = useContext(NumRegContext);
  if (!context) {
    throw new Error("useNumReg debe ser usado dentro de un useNumReg");
  }
  return context;
};
