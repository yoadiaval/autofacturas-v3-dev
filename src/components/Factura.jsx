
import FacturaLine from "./FacturaLine";
import { useFactura } from "../hooks/useFactura";

function Factura() {
  const { factura } = useFactura();
  const rowList = factura.map((item, index) => {
    return <FacturaLine key={index} value={[item, index]} />;
  });

  const totalFactura = () => {
    let total = 0;
    factura.map((item) => {
      total = total + parseFloat(item.amount);
    });
    return (
      <div>
        {"\u20AC "} {parseFloat(total).toFixed(2)}
      </div>
    );
  };
  return (
    <div>
      <div className="grid grid-cols-4 rounded-full bg-[#f3f3f3] text-[#b5b5b5] h-[2em] pl-4 items-center">
        <div>Descripción</div>
        <div className="col-start-3">Cantidad</div>
      </div>
     
      {rowList}
      <div className="font-bold grid grid-cols-4 pl-4">
        <div className="col-start-1">Total: </div>
        <div className="col-start-3 ">{totalFactura()}</div>
      </div>
    </div>
  );
}

export default Factura;
