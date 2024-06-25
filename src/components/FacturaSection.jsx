import Registro from "./Registro";
import TerminosPago from "./TerminosPago";
import Factura from "./Factura";
import ClientView from "./ClientView";

function FacturaSection(){
    return (
      <>
        <ClientView />
        <TerminosPago />
        <Registro/>
      </>
    );
}
export default FacturaSection;