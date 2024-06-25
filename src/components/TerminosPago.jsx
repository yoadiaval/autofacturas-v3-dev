import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import Factura from "./Factura";
import { useFactura } from "../hooks/useFactura";

function TerminosPago() {
  const { addFactura} = useFactura();
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
          <h3 className="mb-2">Añadir términos de Pago: </h3>
          <form
            onSubmit={handleSubmit}
            className="flex items-center flex-wrap gap-4"
          >
            <div className="flex gap-4">
              <div>
                <label className="block">Descripción:</label>
                <input
                  type="text"
                  value={detailsLineFactura.description}
                  name="description"
                  onChange={handleChange}
                  className="py-1 px-2 rounded-full bg-[#f3f3f3] focus:outline-none border-none w-96"
                  required
                />
              </div>
              <div>
                <label className="block">Cantidad:</label>
                <input
                  type="text"
                  pattern="[0-9]+([,\.][0-9]{2})?"
                  value={detailsLineFactura.amount}
                  name="amount"
                  onChange={handleChange}
                  className="py-1 px-2 rounded-full bg-[#f3f3f3] border-none focus:outline-none"
                  required
                />
              </div>

              <button type="submit">
                <IoIosAddCircleOutline size={25} />
              </button>
            </div>
          </form>
        </div>
        <div>
          <Factura />
        </div>
      </div>
    </>
  );
}
export default TerminosPago;
