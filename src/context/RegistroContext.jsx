import { createContext,useState } from "react";
import { useFactura } from "../hooks/useFactura";
import { useClient } from "../hooks/useClient";
import { useNumReg } from "../hooks/useNumReg";


export const RegistroContext = createContext();

function RegistroProvider({children}){
const [registros, setRegistros] = useState([]);
const [dataPDF, setDataPDF] = useState({});
const [activeDownload, setActiveDowload] = useState(false);
/*const [A, setA] = useState(0);
const [B, setB] = useState(0);*/

   const { factura, setFactura } = useFactura();
   const { selectedClient, setSelectedClient } = useClient();
   const { A,B, generateA, generateB} = useNumReg();

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

/*const generateA = async () => {
  try {
    const docSnap = await getDoc(doc(db, "numReg", "A"));
    const currentNumRegA = docSnap.data().numRegA;
    setNumRegA(currentNumRegA + 1);
  } catch (error) {
    alert(error);
  }
};

const generateB = async () => {
  try {
    const docSnap = await getDoc(doc(db, "numReg", "B"));
    const currentNumRegB = docSnap.data().numRegB;
    setNumRegB(currentNumRegB + 1);
  } catch (error) {
    alert(error);
  }
};

const setNumRegA = async (newValue) => {
  await setDoc(doc(db, "numReg", "A"), {
    numRegA: newValue,
  });
  setA(newValue);
};

const setNumRegB = async (newValue) => {
  await setDoc(doc(db, "numReg", "B"), {
    numRegB: newValue,
  });
  setB(newValue);
};

const resetNumRegistros = async () => {
  await setDoc(doc(db, "numReg", "A"), {
    numRegA: 1,
  });
  setA(1);
  await setDoc(doc(db, "numReg", "B"), {
    numRegB: 1,
  });
  setB(1);
};*/

   
    const valuesToShare = {
     /* A,
      B,*/
      registros,
      dataPDF,
      activeDownload,
      addRegistro,
     /* setNumRegA,
      setNumRegB,*/
     /* setA,
      setB,*/
     // resetNumRegistros,
      setActiveDowload
    };
   return <RegistroContext.Provider value={valuesToShare}>
    {children}
   </RegistroContext.Provider>;
}

export{RegistroProvider};
export default RegistroContext;