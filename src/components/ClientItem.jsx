import { useState } from "react";
import { useClient } from "../hooks/useClient";
import Modal from "./Modal";
import EditClient from "./EditClient";
import Swal from "sweetalert2";
import Button from "../layoutComps/Button"

function ClientItem(props) {
  
  const client = props.value;

  const { currentClient, delClient } = useClient();
  const [showModal, setShowModal] = useState(false);
  const handleClickModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const alert = () => {
    Swal.fire({
      title: "Alerta",
      text: "Está a punto de eliminar un registro. ¿Desea continuar?",
      showDenyButton: true,
      denyButtonText: "CANCELAR",
      confirmButtonText: "CONTINUAR",
      confirmButtonColor: "#373a5a",
      icon: "warning",
      iconColor: "#373a5a",
    }).then((response) => {
      if (response.isConfirmed) {
        delClient(client.id);
        Swal.fire(
          "Éxito",
          "El registro se ha eliminado correctamente",
          "success"
        );
      }
    });
  };
  const modal = (
    <Modal onClose={handleClose}>
      <EditClient
        value={client}
        onClose={handleClose}
        onChange={handleClose}
      ></EditClient>
    </Modal>
  );

  
  return (
    <div className="grid grid-cols-3 h-[4em] items-center">
      {showModal && modal}
      <div
        className="cursor-pointer hover:font-bold w-[300px]"
        onClick={() => {
          currentClient(client);
        }}
      >
        {client.name.toUpperCase() + " " + client.lastName.toUpperCase()}
      </div>
      <div>{client.cif.toUpperCase()}</div>
      <div className="flex gap-3 col-start-3">
        <Button
          onChange={handleClickModal}
          className=" border-[#5BAE9E] text-[#5BAE9E]"
        >
          Editar
        </Button>
        <Button
          onChange={alert}
          className="cursor-pointer border-[#D81C1C] text-[#D81C1C]"
        >
          Eliminar
        </Button>
       
      </div>
    </div>
  );
}

export default ClientItem;
