import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import Factura from "./Factura";
import { useFactura } from "../hooks/useFactura";

function TerminosPago() {
  const { addFactura, delFactura } = useFactura();
  const [detailsLineFactura, setDetailsLineFactura] = useState({
    description: "",
    amount: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    addFactura(detailsLineFactura);

    setDetailsLineFactura({
      description: "",
      amount: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetailsLineFactura((prev) => {
      return { ...prev, [name]: value };
    });
  };
  return (
    <>
      <div className="p-4 flex flex-col gap-6">
        <div>
          <h3 className="mb-2">Añadir término de Pago: </h3>
          <form
            onSubmit={handleSubmit}
            className="flex items-center flex-wrap gap-4"
          >
            <label className="flex items-center ">
              Descripción:
              <textarea
                type="text"
                value={detailsLineFactura.description}
                name="description"
                onChange={handleChange}
                className="py-1 px-2 ml-2 border rounded"
                required
              />
            </label>
            <label>
              Cantidad:
              <input
                type="text"
                pattern="[0-9]+([,\.][0-9]{2})?"
                value={detailsLineFactura.amount}
                name="amount"
                onChange={handleChange}
                className="py-1 px-2 ml-2"
                required
              />
            </label>
            <button type="submit">
              <IoIosAddCircleOutline size={25} />
            </button>
          </form>
        </div>
        <div>
          <div className="mb-2 flex items-center gap-3">
            <h3>Listado términos de pago</h3>{" "}
            <GrPowerReset
              onClick={() => {
                delFactura();
              }}
              size={15}
              className="cursor-pointer"
            />
          </div>
          <Factura />
        </div>
      </div>
    </>
  );
}
export default TerminosPago;
