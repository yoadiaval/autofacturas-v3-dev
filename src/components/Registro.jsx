import { useState } from "react";
import PDFDoc from "./PDFDoc";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { FiDownload } from "react-icons/fi";
import { useRegistro } from "../hooks/useRegistro";
import { useNumReg } from "../hooks/useNumReg";

function Registro() {
  const {  addRegistro, dataPDF, activeDownload, setActiveDowload } =
    useRegistro();
    const {A, B,} = useNumReg();

  const [registro, setRegistro] = useState({
    typePayment: "",
    date: "",
    serie: "",
  });
  const handleActive = () => {
    setTimeout(() => setActiveDowload(false), 100);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    addRegistro(registro);
    setRegistro({
      clientId: "",
      typePayment: "",
      date: "",
      serie: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegistro((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <div className="flex flex-col gap-2 px-4 pb-8 pt-4">
      <h3>Datos de Registro</h3>
      <div className="flex items-center gap-4 flex-wrap">
        <form
          onSubmit={handleSubmit}
          className="flex items-center flex-wrap gap-1"
        >
          <label>Forma de pago:</label> <br />
          <div className="w-[100%] flex my-2 p-2 border rounded">
            <label className="flex items-center gap-1">
              Visa
              <input
                type="radio"
                name="typePayment"
                value="Visa"
                checked={registro.typePayment === "Visa"}
                onChange={handleChange}
              />
            </label>
            <label className="flex items-center gap-1">
              Efectivo
              <input
                type="radio"
                name="typePayment"
                value="Efectivo"
                checked={registro.typePayment === "Efectivo"}
                onChange={handleChange}
              />
            </label>
            <label className="flex items-center gap-1">
              Transferencia
              <input
                type="radio"
                name="typePayment"
                value="Transferencia"
                checked={registro.typePayment === "Transferencia"}
                onChange={handleChange}
              />
            </label>
          </div>
          <label>
            Indique la serie:
            <select
              value={registro.serie}
              name="serie"
              onChange={handleChange}
              className="ml-1"
            >
              <option value="0"></option>
              <option value="A">A</option>
              <option value="B">B</option>
            </select>
          </label>
          <label>
            Fecha:
            <input
              type="date"
              value={registro.date}
              name="date"
              onChange={handleChange}
              className="ml-1"
              required
            />{" "}
          </label>
          <button className=" bg-[#373a5a] text-white rounded px-2 py-1 flex items-center gap-2 mt-1">
            Registrar
          </button>
        </form>

        {activeDownload ? (
          <PDFDownloadLink
            document={<PDFDoc data={dataPDF} />}
            fileName={
              dataPDF.registro.serie +
              "-" +
              dataPDF.numReg +
              "_" +
              dataPDF.registro.date +
              "_" +
              dataPDF.selectedClient.cif
            }
          >
            <button
              onClick={handleActive}
              className=" bg-[#373a5a] text-white rounded px-2 py-1 flex items-center gap-2"
            >
              Descargar PDF <FiDownload size={20} />
            </button>
          </PDFDownloadLink>
        ) : (
          <button
            disabled={true}
            className=" bg-zinc-200 text-black rounded px-2 py-1 flex items-center gap-2"
          >
            Descargar PDF <FiDownload size={20} />
          </button>
        )}
      </div>
      <hr className="mt-4" />
      <div className="border w-fit p-4 rounded bg-[#373a5a] text-white">
        <h4 className="bolder">Próximos datos de registro:</h4>
        <hr />
        <p>Número Registro A: {A}</p>
        <p>Número Registro B: {B}</p>
      </div>
    </div>
  );
}

export default Registro;
