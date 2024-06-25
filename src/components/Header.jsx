import { IoIosLogOut } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Settings from "./Settings";
import Modal from "./Modal";

function Header() {
    const [showModal, setShowModal] = useState(false);
     const { logout } = useContext(authContext);
      const navigate = useNavigate();
    const handleLogout = async () => {
      try {
        await logout();
        navigate("/");
      } catch (error) {
        console.log(error.message);
      }
    };

    
  const handleClickModal = () => {
    setShowModal(true);
  };
  const handleClose = () => {
    setShowModal(false);
  };

    const modal = (
      <Modal onClose={handleClose}>
        <Settings onClose={handleClose}></Settings>
      </Modal>
    );
  return (
    <>
      {showModal && modal}
      <div className="mb-14 ">
        <div className="flex flex-row items-center justify-between px-8 text-black bg-white shadow-lg fixed w-[100%] top-0 z-50">
          <h1 className="p-4 text-center">AUTOFACTURAS</h1>
          <div className="flex flex-row items-center gap-4">
            <IoSettingsOutline
              size={25}
              className="cursor-pointer"
              onClick={handleClickModal}
            />
            <IoIosLogOut
              onClick={handleLogout}
              size={25}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
