import { createContext, useState } from "react";
import { useFactura } from "../hooks/useFactura";
import { useClient } from "../hooks/useClient";
import { useNumReg } from "../hooks/useNumReg";

export const RegistroContext = createContext();

function RegistroProvider({ children }) {
  const [registros, setRegistros] = useState([]);
  const [dataPDF, setDataPDF] = useState({});
  const [activeDownload, setActiveDowload] = useState(false);

  const { factura, setFactura } = useFactura();
  const { selectedClient, setSelectedClient } = useClient();
  const { A, B, generateA, generateB } = useNumReg();

  const addRegistro = (registro) => {
    if (
      !factura.length == 0 &&
      !(selectedClient.length == 0) &&
      !(registro.serie == "")
    ) {
      if (registro.serie == "A") {
        generateA();
      }

      if (registro.serie == "B") {
        generateB();
      }

      setRegistros([...registros, { registro }]);
      
      setDataPDF({
        numReg: registro.serie == "A" ? A : B,
        registro,
        selectedClient,
        factura,
      });

      setFactura([]);
      setActiveDowload(true);
      setSelectedClient([]);
    } else {
      alert("Faltan datos por indicar: términos de pago, serie o el cliente");
    }
  };

  const valuesToShare = {
    registros,
    dataPDF,
    activeDownload,
    addRegistro,
    setActiveDowload,
  };
  return (
    <RegistroContext.Provider value={valuesToShare}>
      {children}
    </RegistroContext.Provider>
  );
}

export { RegistroProvider };
export default RegistroContext;
