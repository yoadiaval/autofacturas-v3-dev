import { SlUserFollowing } from "react-icons/sl";
import { SlUserUnfollow } from "react-icons/sl";
import { useClient } from "../hooks/useClient";

function ClientView() {
  const { selectedClient } = useClient();

  let content = (
    <div className="block">
      <div className="uppercase font-bold">
        {selectedClient.name +
          " " +
          selectedClient.lastName}
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
    <div className=" relative py-5 px-5 my-1 mx-1 border h-[11em]">
      <h2>FICHA CLIENTE</h2>

      {Object.keys(selectedClient).length !== 0 ? (
        <>
          <SlUserFollowing size={60} className="absolute left-8 top-20" />
          <div className=" absolute left-28 top-16 ">{content}</div>
        </>
      ) : (
        <>
          <SlUserUnfollow size={60} className="absolute left-8 top-20" />
          <div className=" absolute left-28 top-16">
            Ningún cliente seleccionado.
          </div>
        </>
      )}
    </div>
  );
}

export default ClientView;
