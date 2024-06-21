import { FaCloudDownloadAlt } from "react-icons/fa";
function SaveDB() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2>Salva base de datos</h2>
        <hr className="mt-2" />
      </div>
      <p >
        Descargar ahora{" "}
        <span>
          <FaCloudDownloadAlt size={30} className="cursor-pointer inline-block ml-2"/>
        </span>
      </p>
    </div>
  );
}

export default SaveDB;
