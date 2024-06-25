import Registro from "./Registro";
import TerminosPago from "./TerminosPago";
import Factura from "./Factura";
import ClientView from "./ClientView";

function FacturaSection(){
    return (
      <div className="px-14 pt-10">
        <ClientView />
        <TerminosPago />
        <Registro />
      </div>
    );
}
export default FacturaSection;