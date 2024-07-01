import { SlUserFollowing } from "react-icons/sl";
import { SlUserUnfollow } from "react-icons/sl";
import { useClient } from "../hooks/useClient";
import { useState } from "react";
import Button from "../layoutComps/Button";
import FacturaClientList from "./FacturaClientList";
import Modal from "./Modal";

function ClientView() {
  const { selectedClient } = useClient();
  const [showModal, setShowModal] = useState(false);
  console.log(showModal);
  const handleClickModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const modal = (
    <Modal onClose={handleClose}>
      <FacturaClientList onClose={handleClose} />
    </Modal>
  );

  let content = (
    <div className="block">
      <div className="uppercase font-bold">
        {selectedClient.name + " " + selectedClient.lastName}
      </div>
      <div>{selectedClient.street + ", " + selectedClient.number}</div>
      <div>{selectedClient.cp + ", " + selectedClient.city}</div>
      <div>
        <span>NIF:</span>
        {selectedClient.cif}
      </div>
    </div>
  );

  return (
    <div className=" relative py-5 px-5 my-1 mx-1  h-[16em]">
      {showModal && modal}
      <h2>FICHA CLIENTE</h2>

      {Object.keys(selectedClient).length !== 0 ? (
        <>
          <div className="flex gap-14 pt-10 items-center">
            <SlUserFollowing size={80} />
            <div className="absolute flex flex-col gap-2 left-[150px] top-16">
              {content}
              <Button onChange={handleClickModal} className="mt-4">
                Cambiar +{" "}
              </Button>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-14 pt-10 items-center">
            <SlUserUnfollow size={80} />
            <div className=" absolute flex flex-col gap-2 left-[150px] top-16">
              Ningún cliente seleccionado.
              <Button onChange={handleClickModal}>Seleccionar + </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ClientView;
