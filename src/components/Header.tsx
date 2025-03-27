import React from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { servicesList } from "../data/services";
import { networksList } from "../data/networks";
import { BLOCK_INFURA_LOGO } from "../../public/assets/logo";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname.includes("dashboard");
  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={BLOCK_INFURA_LOGO}
                alt="BlockInfura Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="relative">
              <button
                className={`${
                  isHomePage ? "text-[#E99710]" : "text-gray-700"
                } hover:text-[#E99710] transition-colors py-2 border-b-2 border-transparent hover:border-[#E99710]`}
                onClick={handleGetStarted}
              >
                Dashboard
              </button>

              <div className="absolute left-0 mt-0 w-52 bg-white rounded-lg shadow-xl py-2 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
                {servicesList.map((service) => (
                  <Link
                    key={service.id}
                    to={`/services/${service.id}`}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#E99710] border-l-2 border-transparent hover:border-[#E99710] transition-all duration-200"
                  >
                    <div className="flex items-center">
                      <service.icon className="w-4 h-4 mr-2" />
                      {service.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <button className="text-gray-700 hover:text-[#E99710] transition-colors py-2 border-b-2 border-transparent hover:border-[#E99710]">
              Profile
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-10 space-y-1 sm:px-3">
            <Link
              to="/dashboard"
              className={`${
                isHomePage ? "text-[#E99710]" : "text-gray-700"
              }  px-3 py-2 text-gray-700`}
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>

            <Link
              to=""
              className={"px-3 py-2 text-gray-700"}
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
