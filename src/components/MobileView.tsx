import React from "react";
import { servicesList } from "../data/services";
import { networksList } from "../data/networks";
import { Link } from "react-router-dom";
import { useAppKitAccount } from "./../appkit.tsx";
import { useState } from "react";
import LogoutBotton from "./LogoutBotton.tsx";
import LoginBotton from "./LoginBotton.tsx";
import { IoIosArrowDown } from "react-icons/io";

const MobileView = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected } = useAppKitAccount();

  const handleTaggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="md:hidden bg-white h-screen">
      <div className="px-2 pt-2 pb-10 space-y-1 sm:px-3 flex flex-col items-start ">
        <button
          className=" px-3 py-2 text-gray-700 hover:text-[#E99710] flex items-center gap-5"
          onClick={handleTaggle}
        >
          ServicesLIst
          <IoIosArrowDown
            className={`${isOpen ? "rotate-180 duration-300" : "duration-300"}`}
          />
        </button>

        {isOpen &&
          servicesList.map((service) => {
            const isComingSoon = [
              "validator-services",
              "rollup-as-a-service",
              "faucet",
            ].includes(service.id);

            return (
              <Link
                key={service.id}
                to={!isComingSoon ? `/services/${service.id}` : "#"}
                className={`block px-3 py-2 ${
                  isComingSoon
                    ? "text-gray-400 cursor-not-allowed"
                    : "hover:text-[#E99710]"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {service.title}
              </Link>
            );
          })}

        <button
          className=" px-3 py-2 text-gray-700 hover:text-[#E99710] flex items-center gap-5"
          onClick={handleTaggle}
        >
          Network
          <IoIosArrowDown
            className={`${isOpen ? "rotate-180 duration-300" : "duration-300"}`}
          />
        </button>

        {isOpen &&
          networksList.map((network) => (
            <Link
              key={network.id}
              to={`/networks/${network.id}`}
              className="px-3"
              onClick={() => setIsOpen(false)}
            >
              {network.name}
            </Link>
          ))}
        <Link
          to="/pricing"
          className="block px-3 py-2 text-gray-700 hover:text-[#E99710]"
          onClick={() => setIsOpen(false)}
        >
          Pricing
        </Link>
        {/* <button className="w-full text-left px-3 py-2 bg-[#E99710] text-white rounded-lg hover:bg-[#d88a0e]">
            <button
              onClick={handleGetStarted}
              className="w-full text-left px-3 py-2 bg-[#E99710] text-white rounded-lg hover:bg-[#d88a0e]"
            >
              Get Started
            </button> */}
        <div className="flex justify-center items-center w-full">
          {isConnected ? <LogoutBotton /> : <LoginBotton />}
        </div>
      </div>
    </div>
  );
};

export default MobileView;
