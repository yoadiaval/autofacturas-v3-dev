import { useState } from "react";
import { GoTrash, GoPencil } from "react-icons/go";
import { useClient } from "../hooks/useClient";
import Modal from "./Modal";
import EditClient from "./EditClient";
import Swal from "sweetalert2";

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
    <>
      {showModal && modal}
      <td
        className="cursor-pointer hover:font-bold w-[300px]"
        
        onClick={() => {
          currentClient(client);
         
        }}
      >
        {client.name.toUpperCase() + " " + client.lastName.toUpperCase()}
      </td>

      <td>
        <GoPencil onClick={handleClickModal} className="cursor-pointer" />
      </td>
      <td>
        <GoTrash onClick={alert} className="cursor-pointer" />
      </td>
    </>
  );
}

export default ClientItem;
