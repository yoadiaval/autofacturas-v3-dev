import { useState } from "react";
import { IoSaveOutline } from "react-icons/io5";
import { useFactura } from "../hooks/useFactura";

function EditFactura(props) {
  const {  delFacturaLine } = useFactura();
  const item = props.value[0];
  const index = props.value[1];

  const [detailsLineFactura, setDetailsLineFactura] = useState({
    description: item.description,
    amount: item.amount,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSubmit(detailsLineFactura);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetailsLineFactura((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="description"
          value={detailsLineFactura.description}
          placeholder={item.description}
          onChange={handleChange}
          className="focus:outline-none pl-3 rounded-full  "
        />
      </form>
      <form onSubmit={handleSubmit} className="col-start-3">
        <input
          type="number"
          name="amount"
          value={detailsLineFactura.amount}
          onChange={handleChange}
          className="focus:outline-none pl-3 rounded-full "
        />
      </form>
      <div className="grid grid-cols-2 w-[200px] ">
        <div
          className="cursor-pointer bg-[#94EBDA] w-fit px-2 rounded-full "
          onClick={handleSubmit}
        >
          Guardar
        </div>
        <div className="flex">
          <div
            className="cursor-pointer bg-[#eb8d8d] w-fit h-fit px-2 rounded-full"
            onClick={() => {
              delFacturaLine(item, index);
            }}
          >
            Eliminar
          </div>
        </div>
      </div>
    </>
  );
}
export default EditFactura;
