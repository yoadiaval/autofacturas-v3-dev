import { createContext, useState } from "react";

export const FacturasContext = createContext();

function FacturasProvider({children}){
   const [factura, setFactura] = useState([]);

  const addFactura = (detailsLineFactura) => {
    setFactura([...factura, detailsLineFactura]);
  };

  const editFactura = (detailsLineFactura, index) => {
    const updatedFacturas = factura.map((item, i) => {
      if (index === i) {
        return {
          ...item,
          description: detailsLineFactura.description,
          amount: detailsLineFactura.amount,
        };
      }
      return item;
    });

    setFactura(updatedFacturas);
  };

  const delFacturaLine = (detailsLineFactura, index) => {
    const updatedFacturas = factura.filter((item, i) => i !== index);
    setFactura(updatedFacturas);
  };

  const delFactura = () => {
    setFactura([]);
  };

   const valueToShare = {
     factura,
     addFactura,
     editFactura,
     delFacturaLine,
     delFactura,
   };
    return (
      <FacturasContext.Provider value={valueToShare}>
        {children}
      </FacturasContext.Provider>
    );
}

export {FacturasProvider}
export default FacturasContext;