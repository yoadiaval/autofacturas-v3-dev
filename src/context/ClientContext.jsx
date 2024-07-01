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
    clients,
    selectedClient,
    setSelectedClient,
    getClients,
    addClient,
    editClient,
    currentClient,
    delClient,
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
