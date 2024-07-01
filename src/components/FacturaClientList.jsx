import { useClient } from "../hooks/useClient";

function FacturaClientList({onClose}){
const { clients, currentClient } = useClient();
const content = clients.map((client, index) => {
      return (
        <div
          key={index}
          className="hover:font-bold grid grid-cols-2 gap-4 justify-center cursor-pointer"
          onClick={() => {
            currentClient(client);
            onClose();

          }}
        >
          <div className="pl-4">
            {client.name.toUpperCase() + " " + client.lastName.toUpperCase()}
          </div>
          <div>{client.cif}</div>
        </div>
      );});
    return (
      <div className="bg-white rounded-3xl p-6 flex flex-col  gap-4 mt-10 min-w-[800px] overflow-y-scroll modalScroll">
        <h2 className="bg-[#5bae9e] rounded-full text-white pl-4">
          SELECCIONE UN CLIENTE
        </h2>
        {content}
      </div>
    );
}

export default FacturaClientList;