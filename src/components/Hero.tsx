import { useNavigate } from "react-router-dom";
import { useAppKitAccount } from "./../appkit.tsx";
import { useAppKit } from "@reown/appkit/react";
// import Features from "@/components/Features.tsx";
// import HeroAnimationData from "./animation/Animation.tsx";
// import Anime from "../animationsjson/Security.json";

// Button component for better reusability
interface ActionButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="bg-[#E99710] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#d88a0e] transition-colors"
  >
    {children}
  </button>
);

const Hero = () => {
  const navigate = useNavigate();
  const { isConnected } = useAppKitAccount();
  const { open } = useAppKit();

  const handleGetStarted = () => {
    navigate("/dashboard");
  };

  return (
    <section className="relative pt-36 pb-16 h-screen flex items-center justify-center bg-hero bg-cover bg-center">
      {/* Overlay with dark mode support */}
      <div className="absolute inset-0 bg-white dark:bg-black opacity-50 dark:opacity-80 transition-colors duration-300"></div>

      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 font-boldonse transition-colors duration-300">
            Enterprise-Grade Web3 Infrastructure
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto font-mono transition-colors duration-300">
            Power your blockchain applications with reliable, scalable, and
            secure infrastructure. Get instant access to high-performance nodes
            across multiple networks.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <ActionButton onClick={isConnected ? handleGetStarted : open}>
              Launch App
            </ActionButton>
          </div>
          {/* <Features /> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
