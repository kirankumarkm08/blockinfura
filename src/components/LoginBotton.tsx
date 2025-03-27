import React from "react";
import { IoIosLogOut } from "react-icons/io";
import { useAppKitAccount } from "./../appkit";
import Spinner from "./Spinner.tsx";
import { useAppKit } from "@reown/appkit/react";

import { useNavigate } from "react-router-dom";

const LoginBotton = () => {
  const { isConnected, status } = useAppKitAccount();
  const { open } = useAppKit();

  const navigate = useNavigate();

  return (
    <button className="login-buttons bg-[#E99710] " onClick={() => open()}>
      {!isConnected && status === "connecting" && (
        <div className="flex items-center">
          <Spinner className="mx-2 w-7 h-7 border-4 border-white" /> Loading
        </div>
      )}
      <p className="text-light-black-90 dark:text-dark-black-90">
        {!isConnected && status === "disconnected" && "Login"}
      </p>
    </button>
  );
};

export default LoginBotton;
