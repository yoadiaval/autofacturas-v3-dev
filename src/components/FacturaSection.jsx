import Registro from "./Registro";
import TerminosPago from "./TerminosPago";
import ClientView from "./ClientView";

function FacturaSection(){
    return (
      <div className="flex flex-col gap-10 px-14 pt-10">
        <ClientView />
        <TerminosPago />
        <Registro />
      </div>
    );
}
export default FacturaSection;