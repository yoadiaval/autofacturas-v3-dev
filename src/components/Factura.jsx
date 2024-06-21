
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
      <td>
        {"\u20AC "} {parseFloat(total).toFixed(2)}
      </td>
    );
  };
  return (
    <table className="max-w-[700px]">
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Cantidad</th>
          <th>Editar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        {rowList}
        <tr className="font-bold border">
          <td>Total: </td>
          <td colSpan={3}>{totalFactura()}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Factura;
