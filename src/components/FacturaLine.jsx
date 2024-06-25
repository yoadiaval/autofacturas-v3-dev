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
      <div className="grid grid-cols-4 h-[2.8em] items-center p-2  pl-4">
        {edit ? (
          <>
            <EditFactura
              value={[item, index]}
              onSubmit={handleSubmit}
              onDel={delFacturaLine}
            />
          </>
        ) : (
          <>
            <div className="col-span-2">{item.description}</div>
            <div>
              {"\u20AC "}
              {parseFloat(item.amount).toFixed(2)}
            </div>
            <div className=" grid grid-cols-2 w-[200px] ">
              <div
                className="cursor-pointer bg-[#94EBDA] w-fit px-2 rounded-full"
                onClick={() => {
                  setEdit(!edit);
                }}
              >
                Editar
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
        )}
      </div>
      <hr />
    </>
  );
}

export default FacturaLine;
