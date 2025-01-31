import ClientList from "./ClientList";
import CreateClient from "./CreateClient";
import { useEffect, useState } from "react";
import { IoPersonAdd } from "react-icons/io5";
import { useClient } from "../hooks/useClient";
import SheetJSReactAoO from "./ExportExcelComp";
import Modal from "../components/Modal";




function Client(){
  const [showModal, setShowModal] = useState(false);
  //Obtengo lista de personas almacenada en json
  const { getClients } = useClient();
  //Renderizo lista ed personas cada que se modifica fetchPerson
  useEffect(() => {
    getClients();
  }, [getClients]);

  const handleClickModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  const modal = (
    <Modal onClose={handleClose}>
      <CreateClient onClose={handleClose}></CreateClient>
    </Modal>
  );
  return (
    <div className="px-14 pt-10 ">
      {showModal && modal}
      <div className="flex justify-between items-center px-2 relative">
        <h2>LISTADO CLIENTES</h2>
        <div className="absolute right-4 flex gap-2">
          <SheetJSReactAoO />
          <div className="w-12 h-12 bg-[#5BAE9E] rounded-full flex items-center justify-center">
            <IoPersonAdd
              size={18}
              className="cursor-pointer"
              onClick={handleClickModal}
              color="white"
            />
          </div>
        </div>
      </div>
      <ClientList />{" "}
    </div>
  );
}

export default Client;