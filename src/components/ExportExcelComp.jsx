import React, { useCallback, useEffect, useContext } from "react";
import { utils, writeFileXLSX } from "xlsx";
import { FiDownload } from "react-icons/fi";
import { useClient } from "../hooks/useClient";
import Button from "../layoutComps/Button";

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
    <Button
      className="flex items-center gap-2 bg-[#5BAE9E] text-[#f5f5f5]"
      onClick={exportFile}
    >
      Excel <FiDownload />
    </Button>
  );
}
