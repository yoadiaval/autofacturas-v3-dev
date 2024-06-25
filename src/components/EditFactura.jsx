import { useState } from "react";
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
      <div className="">
        <form onSubmit={handleSubmit}>
          <textarea
            name="description"
            value={detailsLineFactura.description}
            placeholder={item.description}
            onChange={handleChange}
            
          />
        </form>
      </div>
      <div >
        <form onSubmit={handleSubmit}>
          <input
            type="number"
            name="amount"
            value={detailsLineFactura.amount}
            onChange={handleChange}
            placeholder={"\u20AC " + parseFloat(item.amount).toFixed(2)}
            required
          />
        </form>
      </div>
      <div className="">
        <IoSaveOutline className="cursor-pointer" onClick={handleSubmit} />
      </div>
    </>
  );
}
export default EditFactura;
