import Registro from "./Registro";
import TerminosPago from "./TerminosPago";
import ClientView from "./ClientView";

function FacturaSection(){
    return (
      <div className="flex flex-col gap-10 px-14 pt-10 mb-10">
        <div className="border shadow-md rounded-3xl bg-[#5bae9e] text-white">
          <ClientView />
        </div>

        <div className="border shadow-sm rounded-3xl">
          <TerminosPago />
        </div>
        <div className="border shadow-sm rounded-3xl">
          <Registro />
        </div>
      </div>
    );
}
export default FacturaSection;