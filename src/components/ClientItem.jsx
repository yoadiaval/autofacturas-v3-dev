import { useState } from "react";
import { useClient } from "../hooks/useClient";
import Modal from "./Modal";
import EditClient from "./EditClient";
import Swal from "sweetalert2";
import Button from "../layoutComps/Button"

function ClientItem(props) {
  
  const client = props.value;

  const { delClient } = useClient();
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
      confirmButtonColor: "#5bae9e",
      icon: "warning",
      iconColor: "#5bae9e",
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
        className=" w-[300px]"
        
      >
        {client.name.toUpperCase() + " " + client.lastName.toUpperCase()}
      </div>
      <div>{client.cif.toUpperCase()}</div>
      <div className="flex gap-3 col-start-3 justify-end">
        <Button
          onChange={handleClickModal}
          className=" border-[#5bae9e] text-[#5bae9e] "
        >
          Editar
        </Button>
        <Button onChange={alert} className=" border-[#eb8d8d] text-[#eb8d8d]">
          Eliminar
        </Button>
      </div>
    </div>
  );
}

export default ClientItem;
