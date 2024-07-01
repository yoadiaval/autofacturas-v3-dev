import ConfigNumRegistros from "./ConfigNumReg";
import { IoCloseCircleSharp } from "react-icons/io5";

function Settings(props) {
  return (
    <div className="bg-white p-8 flex flex-col gap-8 rounded-3xl mt-20">
      <div className=" absolute right-4 top-24 ">
        <IoCloseCircleSharp
          size={25}
          onClick={() => {
            props.onClose();
          }}
          className="cursor-pointer"
        />
      </div>
      <ConfigNumRegistros />
    </div>
  );
}

export default Settings;
