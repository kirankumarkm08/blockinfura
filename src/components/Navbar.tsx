import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { servicesList } from "../data/services";
import "../appkit.tsx";
import { useAppKitAccount } from "./../appkit.tsx";
import axios from "axios";
import LoginBotton from "./LoginBotton.tsx";
import LogoutBotton from "./LogoutBotton.tsx";
import MobileView from "./MobileView.tsx";
import ThemeToggle from "./ThemeToggle.tsx";

// Navbar dropdown menu interface
interface NavDropdownProps {
  title: string;
  children: React.ReactNode;
}

// Reusable dropdown component
const NavDropdown: React.FC<NavDropdownProps> = ({ title, children }) => (
  <div className="relative group">
    <button className="text-gray-700 dark:text-white hover:text-[#E99710] transition-colors py-2 border-b-2 border-transparent hover:border-[#E99710]">
      {title}
    </button>
    <div className="absolute left-0 mt-0 w-52 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200">
      {children}
    </div>
  </div>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [avlNetworks, setAvlNetworks] = useState([]);
  const { isConnected, status } = useAppKitAccount();
  const account = useAppKitAccount();
  const navigate = useNavigate();

  // Handle user authentication
  useEffect(() => {
    const handleAuthentication = async () => {
      const connectedSocial = localStorage.getItem("@appkit/connected_social");

      if (isConnected && status === "disconnected") {
        try {
          const response = await axios.post(
            "https://api.blockinfura.com/v1/user/signIn",
            {
              email: account?.embeddedWalletInfo?.user?.email,
              login_types: [connectedSocial],
              name:
                account?.embeddedWalletInfo?.user?.email?.split("@")[0] || "",
              profile_image: "",
              wallet_addresses: [account?.address],
            }
          );

          localStorage.setItem("loginID", response?.data?.data?.id);
          navigate("/dashboard");
        } catch (err) {
          console.error("SIGN IN ERROR", err);
        }
      }
    };

    handleAuthentication();
  }, [isConnected, status, account, navigate]);

  // Fetch available networks
  useEffect(() => {
    const fetchNetworks = async () => {
      try {
        const response = await axios.get(
          "https://api.blockinfura.com/v1/chains"
        );
        setAvlNetworks(response?.data?.data?.chains);
      } catch (error) {
        console.error("ERROR FETCHING NETWORKS", error);
      }
    };

    fetchNetworks();
  }, []);

  // Check if a service is coming soon
  const isComingSoon = (serviceId: string) => {
    return ["validator-services", "rollup-as-a-service", "faucet"].includes(
      serviceId
    );
  };

  return (
    <nav className="bg-white dark:bg-black shadow-lg fixed w-full z-50 font-mono transition-colors duration-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src="/assets/blockinfura.svg"
                alt="BlockInfura Logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Services Dropdown */}
            <NavDropdown title="Services">
              {servicesList.map((service) => (
                <Link
                  key={service.id}
                  to={
                    !isComingSoon(service.id) ? `/services/${service.id}` : "#"
                  }
                  className={`block px-4 py-2.5 text-sm border-l-2 border-transparent hover:border-[#E99710] transition-all duration-200 ${
                    isComingSoon(service.id)
                      ? "text-gray-400 dark:text-gray-500 cursor-not-allowed hover:bg-transparent"
                      : "text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#E99710]"
                  }`}
                >
                  <div className="flex items-center">
                    <service.icon className="w-4 h-4 mr-2" />
                    {service.title}
                  </div>
                </Link>
              ))}
            </NavDropdown>

            {/* Networks Dropdown */}
            <NavDropdown title="Networks">
              {avlNetworks.map((network, index) => (
                <Link
                  key={index}
                  to={`/networks/${network?.name?.toLowerCase()}`}
                  className="block px-4 py-2.5 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-[#E99710] border-l-2 border-transparent hover:border-[#E99710] transition-all duration-200"
                >
                  <div className="flex items-center">
                    <img
                      src={network?.logo_url}
                      alt={`${network?.name} logo`}
                      className="w-4 h-4 mr-2"
                    />
                    {network.name}
                  </div>
                </Link>
              ))}
            </NavDropdown>

            {/* Pricing Link */}
            <Link
              to="/pricing"
              className="text-gray-700 dark:text-white hover:text-[#E99710] transition-colors py-2 border-b-2 border-transparent hover:border-[#E99710]"
            >
              Pricing
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Auth Button */}
            {isConnected ? <LogoutBotton /> : <LoginBotton />}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-white"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && <MobileView />}
    </nav>
  );
};

export default Navbar;
