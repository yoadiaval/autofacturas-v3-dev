import {useState } from "react";

import ClientItem from "./ClientItem";
import { MdPersonSearch } from "react-icons/md";
import SheetJSReactAoO from "./ExportExcelComp";
import { useClient } from "../hooks/useClient";

function ClientList() {
  const [search, setSearch] = useState("");
  const { clients } = useClient();

  let content;
  if (search == "") {
    content = clients.map((client, index) => {
      return (
        <tr key={index}>
          <ClientItem value={client} />
        </tr>
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
    <>
      <div className="flex items-center">
        <form>
          <input
            type="text"
            name="search"
            value={search}
            className="py-1 px-2"
            onChange={handleChange}
          />
        </form>
        <MdPersonSearch size={25} className="cursor-pointer" />

        <SheetJSReactAoO />
      </div>
      <div className="h-[400px] overflow-auto">
        <table className="w-[100%]  ">
          <thead>
            <tr>
              <th>Nombre</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>{content}</tbody>
        </table>
      </div>
    </>
  );
}

export default ClientList;
