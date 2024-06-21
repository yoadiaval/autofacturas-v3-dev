import React, { useCallback, useEffect, useContext } from "react";
import { utils, writeFileXLSX } from "xlsx";
import { FiDownload } from "react-icons/fi";
import { useClient } from "../hooks/useClient";

export default function SheetJSReactAoO() {
  const { clients } = useClient();

  // Exportar los datos a un archivo XLSX
  const exportFile = useCallback(() => {
    const clientsData = clients.map((client) => ({
      NOMBRE: client.name,
      APELLIDOS: client.lastName,
    }));
    const ws = utils.json_to_sheet(clientsData); // Utiliza el estado clients
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, "ListadoClientes.xlsx");
  }, [clients]);

  return (
    <button
      className="flex flex-row items-center justify-between ml-[1em] border rounded px-1 w-16 bg-[#373a5a] text-white"
      onClick={exportFile}
    >
      Excel <FiDownload />
    </button>
  );
}
