import { useState } from "react";
import { GoPeople } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import FacturaSection from "../components/FacturaSection";


import Header from "../components/Header";

import TerminosPago from "../components/TerminosPago";

function Home() {
 
const [activeClientsView, setActiveClientsView] = useState(true);
const [activeBillView, setActiveBillView] = useState(false); 

const activeClient=()=>{
setActiveClientsView(true);
setActiveBillView(false);
}
const activeBill=()=>{
setActiveClientsView(false);
setActiveBillView(true);
}
 
  console.log("Client: "+ activeClientsView)
  console.log("Bill: "+ activeBillView)
return (
  <>
    <Header />
    <div className="absolute h-[100vh] left-0 w-[150px] top-[100px] flex flex-col gap-5 items-center">
      <h2 className="bold text-[#b4b4b4]">MENÚ</h2>
      <div
        onClick={activeClient}
        className={
          activeClientsView
            ? "cursor-pointer w-12 h-12 rounded-full flex items-center justify-center bg-gray-200"
            : " cursor-pointer w-12 h-12 rounded-full flex items-center justify-center bg-[#f3f3f3]"
        }
      >
        <GoPeople size={20} color="#b4b4b4"/>
      </div>
      <div
        onClick={activeBill}
        className={
          activeBillView
            ? "cursor-pointer w-12 h-12 rounded-full flex items-center justify-center bg-gray-200"
            : "cursor-pointer w-12 h-12 rounded-full flex items-center justify-center bg-[#f3f3f3]"
        }
      >
        <RiBillLine size={20} color="#b4b4b4" />
      </div>
    </div>
    <div className=" bg-white absolute w-[85%] h-[1000px] left-[150px] top-[100px] rounded-2xl">
      <FacturaSection/>
    </div>
  </>
);


  /*return (
    <>
      {showModal && modal}
      <Header  />

      <div className="md:grid md:grid-cols-5 mt-24 md:mt-16 mb-8 min-w-[400px] ">
        <div className="md:col-span-2 m-5 p-5 flex flex-col gap-4 border rounded h-[630px]">
          <>
            <div className="flex justify-between items-center px-2">
              <h2>LISTADO CLIENTES</h2>

              <IoPersonAdd
                size={18}
                className="cursor-pointer"
                onClick={handleClickModal}
              />
            </div>
            <hr className="mb-2" />
            <ClientList />{" "}
          </>
        </div>
        <div className="col-span-3 p-4 flex flex-col gap-4">
          <div>
            <ClientView></ClientView>
          </div>

          <div className="border flex flex-col gap-8">
            <div>
              <h3 className=" bg-[#373a5a] text-white p-1">TÉRMINOS DE PAGO</h3>
              <TerminosPago />
            </div>
            <div>
              <h3 className=" bg-[#373a5a] text-white p-1">REGISTRO</h3>
              <Registro />
            </div>
          </div>
        </div>
      </div>
    </>
  );*/
}

export default Home;
