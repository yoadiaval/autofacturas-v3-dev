import { useState} from "react";
import { useClient } from "../hooks/useClient";


function CreateClient({ onClose }) {
  const [detailsClient, setDetailsClient] = useState({
    name: "",
    lastName: "",
    cif: "",
    street: "",
    number: "",
    cp: "",
    city: "",
  });
  const { addClient, comprobarDNI } = useClient();
  const handleChange = (event) => {
    const { name, value } = event.target;
    setDetailsClient((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!detailsClient.lastName == "") {
      const isCorrectDNI = comprobarDNI(detailsClient.cif);
      if (isCorrectDNI) {
        addClient(detailsClient);
        setDetailsClient({
          name: "",
          lastName: "",
          cif: "",
          street: "",
          number: "",
          cp: "",
          city: "",
        });
      } else {
        alert("El DNI insertado no es correcto");
      }
    } else {
      addClient(detailsClient);
     setDetailsClient({
       name: "",
       lastName: "",
       cif: "",
       street: "",
       number: "",
       cp: "",
       city: "",
     });
    }

    //onChange();
  };

  const handleCancel = () => {
    onClose();
  };
  return (
    <div className="bg-white p-8 rounded mt-20">
      <h2 className="bg-[#373a5a] text-white px-2 py-1 rounded ">
        AÑADIR NUEVO CLIENTE
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col ">
        <div className="flex flex-col gap-2 ">
          <input
            className="px-1 w-[100%]"
            placeholder="Nombre *"
            type="text"
            name="name"
            value={detailsClient.name}
            onChange={handleChange}
            required
          />
          <input
            className="px-1 w-[100%]"
            placeholder="Apellidos"
            type="text"
            name="lastName"
            value={detailsClient.lastName}
            onChange={handleChange}
          />

          <input
            className="px-1 w-[100%]"
            placeholder="NIF/CIF *"
            type="text"
            name="cif"
            value={detailsClient.cif.toUpperCase()}
            onChange={handleChange}
            required
          />

          <input
            className="px-1 w-[100%]"
            placeholder="Calle"
            type="text"
            name="street"
            value={detailsClient.street}
            onChange={handleChange}
          />
          <div className="flex flex-wrap gap-2">
            <input
              className="px-1"
              placeholder="Número"
              type="text"
              name="number"
              value={detailsClient.number}
              onChange={handleChange}
            />

            <input
              className="px-1"
              placeholder="CP"
              type="text"
              name="cp"
              value={detailsClient.cp}
              onChange={handleChange}
            />

            <input
              className="px-1"
              placeholder="Ciudad"
              type="text"
              name="city"
              value={detailsClient.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end gap-4">
          {" "}
          <button className="bg-[#989bb6] px-2 py-1 rounded mt-4 hover:bg-[#373a5a] hover:text-white">
            Guardar
          </button>
          <button
            onClick={handleCancel}
            className="bg-[#989bb6] px-2 py-1 rounded mt-4 hover:bg-[#373a5a] hover:text-white"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateClient;
