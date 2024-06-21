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
    <tr>
      {edit ? (
        <>
          <EditFactura value={[item, index]} onSubmit={handleSubmit} />
        </>
      ) : (
        <>
          <td className="w-[400px]">{item.description}</td>
          <td className="w-[100px]">
            {"\u20AC "}
            {parseFloat(item.amount).toFixed(2)}
          </td>
          <td className="pl-5">
            <GoPencil
              className="cursor-pointer"
              onClick={() => {
                setEdit(!edit);
              }}
            />
          </td>
        </>
      )}
      <td className="flex justify-center">
        <GoTrash
          className="cursor-pointer"
          onClick={() => {
            delFacturaLine(item, index);
          }}
        />
      </td>
    </tr>
  );
}

export default FacturaLine;
