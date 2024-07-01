import { useState } from "react";
import { useClient } from "../hooks/useClient";

function EditClient(props) {
  const { editClient, comprobarDNI } = useClient();
  const client = props.value;

  const [editedClient, setEditedClient] = useState({
    name: client.name,
    lastName: client.lastName,
    cif: client.cif,
    street: client.street,
    number: client.number,
    cp: client.cp,
    city: client.city,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedClient((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    event.preventDefault();
    if (!editedClient.lastName == "") {
      const isCorrectDNI = comprobarDNI(editedClient.cif);
      if (isCorrectDNI) {
        //Agregar id al cliente modificado
        const newEditedClient = editedClient;
        newEditedClient.id = client.id;
        setEditedClient(newEditedClient);
        const keys = Object.keys(editedClient);

        //verifica si se modificó algo comparando los objetos
        const areEqual = keys.every((key) => client[key] === editedClient[key]);

        if (!areEqual) {
          editClient(editedClient);
          props.onChange();
        } else {
          alert("No ha realizado ningún cambio");
        }
      } else {
        alert("El DNI insertado no es correcto");
      }
    } else {
      //Agregar id al cliente modificado
      const newEditedClient = editedClient;
      newEditedClient.id = client.id;
      setEditedClient(newEditedClient);
      const keys = Object.keys(editedClient);

      //verifica si se modificó algo comparando los objetos
      const areEqual = keys.every((key) => client[key] === editedClient[key]);

      if (!areEqual) {
        editClient(editedClient);
        props.onChange();
      } else {
        alert("No ha realizado ningún cambio");
      }
    }
  };

  const handleCancel = () => {
    props.onClose();
  };

  return (
    <div className="bg-white p-8 rounded-3xl mt-20">
      <h2 className="bg-[#5bae9e] text-white pl-4 py-1 rounded-full  ">
        MODIFICAR CLIENTE
      </h2>
      <form onSubmit={handleSubmit} className="mt-4 flex flex-col">
        <div className="flex flex-col gap-2 ">
          <input
            className="px-1 w-[100%] rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
            placeholder="Nombre *"
            type="text"
            name="name"
            value={editedClient.name}
            onChange={handleChange}
            required
          />
          <input
            className="px-1 w-[100%] rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
            placeholder="Apellidos"
            type="text"
            name="lastName"
            value={editedClient.lastName}
            onChange={handleChange}
          />

          <input
            className="px-1 w-[100%] rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
            placeholder="NIF/CIF *"
            type="text"
            name="cif"
            value={editedClient.cif.toUpperCase()}
            onChange={handleChange}
            required
          />

          <input
            className="px-1 w-[100%] rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
            placeholder="Calle"
            type="text"
            name="street"
            value={editedClient.street}
            onChange={handleChange}
          />
          <div className="flex flex-wrap gap-2">
            <input
              className="px-1 rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
              placeholder="Número"
              type="text"
              name="number"
              value={editedClient.number}
              onChange={handleChange}
            />

            <input
              className="px-1 rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
              placeholder="CP"
              type="text"
              name="cp"
              value={editedClient.cp}
              onChange={handleChange}
            />

            <input
              className="px-1 rounded-full pl-2 bg-[#f8f8f8] border-none focus:outline-none py-1"
              placeholder="Ciudad"
              type="text"
              name="city"
              value={editedClient.city}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row-reverse gap-4">
            <button
              onClick={handleCancel}
              className="bg-[#eb8d8d] text-[white] border hover:bg-[#a46161] px-2 py-1  mt-4  rounded-full"
            >
              Cancelar
            </button>
            <button className="bg-[#5bae9e]  text-[white] px-2 py-1  mt-4 hover:bg-[#3f796e]  rounded-full">
              Modificar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default EditClient;
