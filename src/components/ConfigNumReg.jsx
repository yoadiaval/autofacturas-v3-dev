import { useState} from "react";
import { IoSaveOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { useNumReg } from "../hooks/useNumReg";
import Button from "../layoutComps/Button";


function ConfigNumRegistros() {
  const [regA, setRegA] = useState("");
  const [regB, setRegB] = useState("");

  const { setNumRegA, setNumRegB, resetNumRegistros } = useNumReg();
  const handleSubmitRegistroA = (event) => {
    event.preventDefault();
    setNumRegA(parseInt(regA));
    setRegA("");
  };
  const handleSubmitRegistroB = (event) => {
    event.preventDefault();
    setNumRegB(parseInt(regB));
    setRegB("");
  };

  const handleChangeRegA = (event) => {
    setRegA(event.target.value);
  };
  const handleChangeRegB = (event) => {
    setRegB(event.target.value);
  };

  const alert = () => {
    resetNumRegistros();
    Swal.fire({
      title: "Éxito",
      text: "Los números de registro se han inicializado correctamente",
      icon: "success",
      iconColor: "#5bae9e",
     
      confirmButtonColor: "#5bae9e",
    });
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3>Configurar número de registro</h3>
        <hr className="mt-2" />
      </div>

      <form
        onSubmit={handleSubmitRegistroA}
        className="flex flex-wrap gap-1 items-center"
      >
        <input
          type="number"
          name="rega"
          value={regA}
          onChange={handleChangeRegA}
          placeholder="A"
          className="pl-4 py-1 w-[70%] px-1 rounded-full  bg-[#f8f8f8] border-none focus:outline-none "
          required
        />
        <button>
          <IoSaveOutline size={20} className="cursor-pointer" />
        </button>
      </form>
      <form
        onSubmit={handleSubmitRegistroB}
        className="flex flex-wrap gap-1 items-center"
      >
        <input
          type="number"
          name="regb"
          value={regB}
          onChange={handleChangeRegB}
          placeholder="B"
          className="pl-4 py-1 w-[70%] px-1 rounded-full  bg-[#f8f8f8] border-none focus:outline-none "
          required
        />
        <button>
          <IoSaveOutline size={20} className="cursor-pointer" />
        </button>
      </form>
      <h3>Inicializar ambos registros</h3>
      <hr />
      <div className="flex flex-row gap-2">
        <p>Establecer valores inicialies</p>
        <Button
          onChange={() => {
            alert();
          }}
          className="bg-[#5bae9e] text-white rounded px-1 py-1"
        >
          Inicializar
        </Button>
      </div>
    </div>
  );
}

export default ConfigNumRegistros;
