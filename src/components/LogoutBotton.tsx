import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useDisconnect } from "@reown/appkit/react";
import { useNavigate } from "react-router-dom";

const LogoutBotton = () => {
  const navigate = useNavigate();
  const { disconnect } = useDisconnect();

  const handleLogout = async () => {
    await disconnect();
    await localStorage.clear();
    navigate("/");
  };
  return (
    <button
      className="flex items-center  login-buttons border-2 border-[#E99710] !bg-white"
      onClick={handleLogout}
    >
      <p className="!text-black !font-normal !font-md mr-2">Logout</p>
      <div className="text-black">
        <IoIosLogOut style={{ width: "2em", height: "2em" }} />
      </div>
    </button>
  );
};

export default LogoutBotton;
