import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { networksList } from "../data/networks";

interface NetworkProps {
  id: string;
  name: string;
  logo: string;
}

const NetworkCard: React.FC<NetworkProps> = ({ id, name, logo }) => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Link
      key={id}
      to={`/networks/${id}`}
      onClick={scrollToTop}
      className="bg-white p-6 rounded-xl px-10 shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
      aria-label={`View ${name} network details`}
    >
      <div className="flex flex-col items-center">
        <img
          src={logo}
          alt={`${name} logo`}
          className="w-16 h-16 rounded-full mb-4 group-hover:scale-110 transition-transform"
          loading="lazy"
        />
        <span className="font-semibold text-center text-gray-800 group-hover:text-[#E99710] transition-colors">
          {name}
        </span>
      </div>
    </Link>
  );
};

const Networks: React.FC = () => {
  return (
    <section id="networks" className="py-20 bg-white dark:bg-black ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold  mb-4 font-boldonse text-light-black-90 dark:text-light-white-90">
            Supported Networks
          </h2>
          <p className="text-xl text-light-black-80 dark:text-light-white-80 font-mono">
            Access high-performance infrastructure across major blockchain
            networks
          </p>
        </div>

        <div className="flex justify-center  gap-8  ">
          {networksList.map((network) => (
            <NetworkCard
              key={network.id}
              id={network.id}
              name={network.name}
              logo={network.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Networks;
