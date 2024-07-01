import { useState } from "react";
import ClientItem from "./ClientItem";
import { MdPersonSearch } from "react-icons/md";
import { useClient } from "../hooks/useClient";

function ClientList() {
  const [search, setSearch] = useState("");
  const { clients } = useClient();

  let content;
  if (search == "") {
    content = clients.map((client, index) => {
      return (
        <div key={index}>
          <ClientItem value={client} />
          <hr />
        </div>
      );
    });
  } else {
    const clientfiltered = clients.filter((client) => {
      return (
        client.lastName.toUpperCase().match(search.toUpperCase()) ||
        client.name.toUpperCase().match(search.toUpperCase())
      );
    });

    content = clientfiltered.map((client, index) => {
      return (
        <tr key={index}>
          <ClientItem value={client} />
        </tr>
      );
    });
  }

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className=" mb-10">
      <div className="flex items-center mb-4">
        <form>
          <input
            type="text"
            name="search"
            value={search}
            className="pl-4 py-1 rounded-full focus:outline-none border-[#F3F3F3] bg-[#F3F3F3] mt-2"
            onChange={handleChange}
          />
        </form>
        <MdPersonSearch size={25} className="cursor-pointer" />
      </div>
      <div className="grid grid-cols-3 pl-4 py-1 rounded-full bg-[#F3F3F3] text-[#b4b4b4]">
        <div>NOMBRE</div>
        <div>DNI</div>
        <div></div>
      </div>
      <div className="h-fit">{content}</div>
    </div>
  );
}

export default ClientList;
