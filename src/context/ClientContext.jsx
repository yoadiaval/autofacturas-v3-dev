import { createContext, useState, useCallback } from "react";
import {
  collection,
  doc,
  getDocs,
  getDoc,
  addDoc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import {useNumReg} from "../hooks/useNumReg";


const ClientContext = createContext();

function ClientProvider({ children }) {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState([]);
  //const [registros, setRegistros] = useState([]);
 // const [activeDownload, setActiveDowload] = useState(false);
  //const [dataPDF, setDataPDF] = useState({});
  //const [A, setA] = useState(0);
 // const [B, setB] = useState(0);

  //const { factura, setFactura} = useFactura();
  const {setA, setB} = useNumReg();
  
  const getClientsFromFirebase = async () => {
    const querySnapshot = await getDocs(collection(db, "clients"));
    const clients = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setClients(clients);
  };

  
  const getClients = useCallback(async () => {
    
    await getClientsFromFirebase();

    //ACTUALIZAR DATOS DE numReg
    const docSnapA = await getDoc(doc(db, "numReg", "A"));
    const currentNumRegA = docSnapA.data().numRegA;
    setA(currentNumRegA);

    const docSnapB = await getDoc(doc(db, "numReg", "B"));
    const currentNumRegB = docSnapB.data().numRegB;
    setB(currentNumRegB);
  }, []);

  const delClient = async (id) => {
    try {
      await deleteDoc(doc(db, "clients", id));
      getClients();
    } catch (error) {
      alert(error.message);
    }
  };
  const editClient = async (client) => {
    console.log(client.id);
    try {
      await setDoc(doc(db, "clients", client.id), {
        name: client.name,
        lastName: client.lastName,
        cif: client.cif,
        street: client.street,
        number: client.number,
        cp: client.cp,
        city: client.city,
      });
      getClients();

      if (client.id == selectedClient.id) {
        const newCurrentClient = await getDoc(
          doc(db, "clients", selectedClient.id)
        );
        setSelectedClient(newCurrentClient.data());
      }
    } catch (error) {
      alert(error);
    }
  };

  const addClient = async (detailsClient) => {
    try {
      await addDoc(collection(db, "clients"), {
        ...detailsClient,
      });
    } catch (error) {
      alert(error);
    }
    getClients();
  };

 /* const addRegistro = (registro) => {
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

  const generateA = async () => {
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
  };
*/
  const currentClient = (client) => {
    setSelectedClient(client);
  };

const comprobarDNI = (cif) => {
  let letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
  ];
  const primerosOchoDigitos = parseInt(cif.substring(0, 8));
  const letra = cif.substring(8);
  const result =
    primerosOchoDigitos - Math.trunc(primerosOchoDigitos / 23) * 23;
  if (result <= 22 && result >= 0 && letras[result] == letra) {
    return true;
  } else {
    return false;
  }
};

  const valueToShare = {
    //A,
    // B,
    clients,
    //registros,
    //dataPDF,
    // activeDownload,
    selectedClient,
    getClients,
    addClient,
    editClient,
    /*addRegistro,
    setNumRegA,
    setNumRegB,
    resetNumRegistros,*/
    currentClient,
    delClient,
    //setActiveDowload,
    comprobarDNI,
    getClientsFromFirebase,
  };

  return (
    <ClientContext.Provider value={valueToShare}>
      {children}
    </ClientContext.Provider>
  );
}

export { ClientProvider };
export default ClientContext;
