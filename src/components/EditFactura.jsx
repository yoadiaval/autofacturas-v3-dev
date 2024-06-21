import { useState, useContext } from "react";
import { IoSaveOutline } from "react-icons/io5";

function EditFactura(props) {
  const item = props.value[0];

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
      <td className="w-[400px] p-[2px]">
        <form onSubmit={handleSubmit}>
          <textarea
            name="description"
            value={detailsLineFactura.description}
            placeholder={item.description}
            onChange={handleChange}
            className="w-[80%] p-1 border rounded"
          />
        </form>
      </td>
      <td className="w-[100px]">
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            value={detailsLineFactura.amount}
            onChange={handleChange}
            placeholder={"\u20AC " + parseFloat(item.amount).toFixed(2)}
            className="w-[80%]"
            required
          />
        </form>
      </td>
      <td className="pl-5">
        <IoSaveOutline className="cursor-pointer" onClick={handleSubmit} />
      </td>
    </>
  );
}
export default EditFactura;
