import React from "react";
import { Link } from "react-router-dom";
import { servicesList } from "../data/services";

const Services = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-light-black-90 dark:text-light-white-90 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-light-black-80 dark:text-light-white-80 max-w-3xl mx-auto font-mono">
            Comprehensive blockchain infrastructure solutions designed for scale
            and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-light-black-90 dark:text-light-white-90">
          {servicesList.map((service) => {
            const isComingSoon = [
              "validator-services",
              "rollup-as-a-service",
              "faucet",
            ].includes(service.id);

            return (
              <div
                key={service.id}
                className={`relative bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg group ${
                  isComingSoon
                    ? "filter grayscale cursor-not-allowed"
                    : "hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                }`}
              >
                {isComingSoon && (
                  <div className="absolute top-0 right-0 rounded-tl-lg bg-yellow-500 text-yellow-900 px-3 py-1 text-xs font-semibold opacity-90">
                    Coming Soon
                  </div>
                )}
                <Link
                  to={!isComingSoon ? `/services/${service.id}` : "#"}
                  onClick={
                    isComingSoon ? (e) => e.preventDefault() : scrollToTop
                  }
                  className={`${
                    isComingSoon ? "cursor-not-allowed" : "cursor-pointer"
                  }`}
                >
                  <div className="mb-4">
                    <service.icon
                      className={`w-12 h-12 ${
                        isComingSoon
                          ? "text-gray-400"
                          : "text-[#E99710] group-hover:scale-110 transition-transform"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-xl font-bold mb-3 text-light-black-90 dark:text-light-white-90 font-mono ${
                      isComingSoon
                        ? ""
                        : " group-hover:text-[#E99710] transition-colors"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`text-sm mb-4 font-mono text-light-black-90 dark:text-light-white-90${
                      isComingSoon ? "" : "  transition-colors"
                    }`}
                  >
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center text-sm font-mono text-light-black-90 dark:text-light-white-90 ${
                          isComingSoon ? "" : " transition-colors"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full mr-2 ${
                            isComingSoon ? "bg-gray-400" : "bg-[#E99710]"
                          }`}
                        ></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
