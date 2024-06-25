import { useState } from "react";
import { GoPeople } from "react-icons/go";
import { RiBillLine } from "react-icons/ri";
import FacturaSection from "../components/FacturaSection";
import Client from "../components/Client";
import Header from "../components/Header";



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
        <GoPeople size={20} color="#b4b4b4" />
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
    <div className=" bg-white absolute w-[85%] h-fit left-[150px] top-[100px] rounded-2xl">
      <FacturaSection />
      <Client />
    </div>
  </>
);


  
}

export default Home;
