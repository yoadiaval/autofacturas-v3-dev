import { createContext } from "react";
import { useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const NumRegContext = createContext();

function NumRegProvider({ children }) {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);


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


  const valuesToShare = {
    A,
    B,
    setA,
    setB,
    setNumRegA,
    setNumRegB,
    resetNumRegistros,
    generateA,
    generateB
  };

  return (
    <NumRegContext.Provider value={valuesToShare}>
      {children}
    </NumRegContext.Provider>
  );
}

export { NumRegProvider };
export default NumRegContext;