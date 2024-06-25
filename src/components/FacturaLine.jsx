import { GoTrash, GoPencil } from "react-icons/go";
import { useState } from "react";
import EditFactura from "./EditFactura";
import { useFactura } from "../hooks/useFactura";

function FacturaLine(props) {
  const { editFactura, delFacturaLine } = useFactura();
  const item = props.value[0];
  const index = props.value[1];

  const [edit, setEdit] = useState(false);

  const handleSubmit = (detailsLineFactura) => {
    editFactura(detailsLineFactura, index);

    setEdit(!edit);
  };
  return (
    <>
      <div className="grid grid-cols-4 h-[2em] items-center">
        {edit ? (
          <>
            <EditFactura value={[item, index]} onSubmit={handleSubmit} />
          </>
        ) : (
          <>
            <div className="w-[400px]">{item.description}</div>
            <div className="w-[100px]">
              {"\u20AC "}
              {parseFloat(item.amount).toFixed(2)}
            </div>
            <div className="">
              <div
                className="cursor-pointer bg-[#94EBDA] w-fit px-2 rounded-full"
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                Editar
              </div>
            </div>
          </>
        )}
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
      <hr />
    </>
  );
}

export default FacturaLine;
