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
  };

  const handleCancel = () => {
    onClose();
  };
  return (
    <div className="bg-white p-8 rounded-3xl mt-20">
      <h2 className="bg-[#5bae9e] rounded-full text-white pl-4 py-1  ">
        AÑADIR NUEVO CLIENTE
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col ">
        <div className="flex flex-col gap-2 ">
          <input
            className="px-1 w-[100%] rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
            placeholder="Nombre *"
            type="text"
            name="name"
            value={detailsClient.name}
            onChange={handleChange}
            required
          />
          <input
            className="px-1 w-[100%] rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
            placeholder="Apellidos"
            type="text"
            name="lastName"
            value={detailsClient.lastName}
            onChange={handleChange}
          />

          <input
            className="px-1 w-[100%] rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
            placeholder="NIF/CIF *"
            type="text"
            name="cif"
            value={detailsClient.cif.toUpperCase()}
            onChange={handleChange}
            required
          />

          <input
            className="px-1 w-[100%] rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
            placeholder="Calle"
            type="text"
            name="street"
            value={detailsClient.street}
            onChange={handleChange}
          />
          <div className="flex flex-wrap gap-2 rounded-full  ">
            <input
              className="px-1 rounded-full bg-[#f8f8f8] border-none focus:outline-none py-1"
              placeholder="Número"
              type="text"
              name="number"
              value={detailsClient.number}
              onChange={handleChange}
            />

            <input
              className="px-1 rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
              placeholder="CP"
              type="text"
              name="cp"
              value={detailsClient.cp}
              onChange={handleChange}
            />

            <input
              className="px-1 rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
              placeholder="Ciudad"
              type="text"
              name="city"
              value={detailsClient.city}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-end gap-4 ">
          {" "}
          <button className="bg-[#5bae9e]  text-[white] px-2 py-1  mt-4 hover:bg-[#3f796e]  rounded-full ">
            Guardar
          </button>
          <button
            onClick={handleCancel}
            className="bg-[#eb8d8d] text-[white] border hover:bg-[#a46161] px-2 py-1  mt-4  rounded-full"
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateClient;
