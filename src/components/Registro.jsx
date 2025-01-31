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
      <div className="flex flex-col  flex-wrap">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap gap-1 "
        >
          <div className="flex gap-10">
            <div className="flex flex-col gap-1">
              <label>Forma de pago:</label>
              <select
                value={registro.typePayment}
                name="typePayment"
                onChange={handleChange}
                className="rounded-full px-1 focus:outline-none w-32"
              >
                <option value="0"></option>
                <option value="Trasnferencia">Transferencia</option>
                <option value="Visa">Visa</option>
                <option value="Efectivo">Efectivo</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label>Indique la serie:</label>
              <select
                value={registro.serie}
                name="serie"
                onChange={handleChange}
                className=" w-14 rounded-full px-1 focus:outline-none"
              >
                <option value="0"></option>
                <option value="A">A</option>
                <option value="B">B</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label>Fecha:</label>
              <input
                type="date"
                value={registro.date}
                name="date"
                onChange={handleChange}
                className=" rounded-full px-1 focus:outline-none"
                required
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className=" bg-[#5bae9e] px-2 py-1 rounded-full border mt-4 mb-4 text-[white] ">
              Registrar
            </button>
          </div>
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
              className=" bg-[#5bae9e] text-[white] px-2 py-1 rounded-full border mt-4 mb-4 flex gap-2"
            >
              Descargar PDF <FiDownload size={20} />
            </button>
          </PDFDownloadLink>
        ) : (
          <button
            disabled={true}
            className="border-[#5bae9e] text-[#5bae9e] px-2 py-1 rounded-full border mt-4 mb-4 flex gap-2 w-fit"
          >
            Descargar PDF <FiDownload size={20} />
          </button>
        )}
      </div>

      <hr className="mb-4" />

      <div className=" w-fit p-4 rounded bg-[#f3f3f3] ">
        <h4 className="bolder">Próximos datos de registro:</h4>
        <hr />
        <p>Número Serie A: {A}</p>
        <p>Número Serie B: {B}</p>
      </div>
    </div>
  );
}

export default Registro;
