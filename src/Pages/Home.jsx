import { useEffect, useContext, useState } from "react";
import CreateClient from "../components/CreateClient";
import Registro from "../components/Registro";
import ClientView from "../components/ClientView";
import ClientList from "../components/ClientList";
import { useClient } from "../hooks/useClient";
import { IoPersonAdd } from "react-icons/io5";
import Header from "../components/Header";
import Modal from "../components/Modal";
import TerminosPago from "../components/TerminosPago";

function Home() {
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
    <>
      {showModal && modal}
      <Header  />

      <div className="md:grid md:grid-cols-5 mt-24 md:mt-16 mb-8 min-w-[400px] ">
        <div className="md:col-span-2 m-5 p-5 flex flex-col gap-4 border rounded h-[630px]">
          <>
            <div className="flex justify-between items-center px-2">
              <h2>LISTADO CLIENTES</h2>

              <IoPersonAdd
                size={18}
                className="cursor-pointer"
                onClick={handleClickModal}
              />
            </div>
            <hr className="mb-2" />
            <ClientList />{" "}
          </>
        </div>
        <div className="col-span-3 p-4 flex flex-col gap-4">
          <div>
            <ClientView></ClientView>
          </div>

          <div className="border flex flex-col gap-8">
            <div>
              <h3 className=" bg-[#373a5a] text-white p-1">TÉRMINOS DE PAGO</h3>
              <TerminosPago />
            </div>
            <div>
              <h3 className=" bg-[#373a5a] text-white p-1">REGISTRO</h3>
              <Registro />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
