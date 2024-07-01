import { useCallback} from "react";
import { utils, writeFileXLSX } from "xlsx";
import { useClient } from "../hooks/useClient";
import Button from "../layoutComps/Button";
import { SiMicrosoftexcel } from "react-icons/si";

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
      className="flex items-center justify-center w-12 h-12 rounded-full bg-[#5BAE9E] text-[#f5f5f5]"
      onChange={exportFile}
    >
      <SiMicrosoftexcel /> 
    </Button>
  );
}
