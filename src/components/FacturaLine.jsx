import { useState } from "react";
import EditFactura from "./EditFactura";
import { useFactura } from "../hooks/useFactura";
import Button from "../layoutComps/Button";

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
      <div className="grid grid-cols-4 h-fit items-center p-2  pl-4">
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
            <div className="col-span-2 p-2">{item.description}</div>
            <div>
              {"\u20AC "}
              {parseFloat(item.amount).toFixed(2)}
            </div>
            <div className=" flex gap-2 justify-end ">
              <Button
                className="border-[#5bae9e] text-[#5bae9e] w-fit"
                onChange={() => {
                  setEdit(!edit);
                }}
              >
                Editar
              </Button>
              <div className="flex">
                <Button
                  className="border-[#eb8d8d] text-[#eb8d8d] "
                  onChange={() => {
                    delFacturaLine(item, index);
                  }}
                >
                  Eliminar
                </Button>
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
