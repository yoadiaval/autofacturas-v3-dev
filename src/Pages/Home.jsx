import { useState } from "react";
import { GoPeople } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import FacturaSection from "../components/FacturaSection";
import Client from "../components/Client";
import Header from "../components/Header";

function Home() {
  const [activeClientsView, setActiveClientsView] = useState(true);
  const [activeBillView, setActiveBillView] = useState(false);
  

  const activeClient = () => {
    setActiveClientsView(true);
    setActiveBillView(false);
   
  };
  const activeBill = () => {
    setActiveClientsView(false);
    setActiveBillView(true);
    
  };


  return (
    <>
      <Header />
      <div className=" h-[100vh] left-0 w-[80px] top-[70px] flex flex-col gap-2 items-center pt-4 fixed">
        <h2 className="bold text-[#8d8d8d]">MENÚ</h2>
        <div
          onClick={activeBill}
          className={
            activeBillView
              ? "cursor-pointer w-12 h-12 rounded-full flex items-center justify-center bg-gray-200"
              : " cursor-pointer w-12 h-12 rounded-full flex items-center justify-center "
          }
        >
          <RiBillLine size={20} color="#b4b4b4" />
        </div>
        <div
          onClick={activeClient}
          className={
            activeClientsView
              ? "cursor-pointer w-12 h-12 rounded-full flex items-center justify-center bg-gray-200"
              : "cursor-pointer w-12 h-12 rounded-full flex items-center justify-center "
          }
        >
          <GoPeople size={20} color="#b4b4b4" />
        </div>
      </div>
      <div className=" bg-white absolute w-[85%] left-[80px] top-[70px] rounded-3xl min-w-[800px] ">
        {activeClientsView ? <Client /> : <FacturaSection />}
      </div>
    </>
  );
}

export default Home;
