// import React from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   Server,
//   Database,
//   Shield,
//   Blocks,
//   Droplet,
//   Activity,
// } from "lucide-react";
// import { networksList } from "../data/networks";

// // Map service names to their IDs and icons
// const serviceMap = {
//   "Node-as-a-Service": "node-as-a-service",
//   "RPC URLs": "rpc-urls",
//   Monitoring: "monitoring",
//   "Validator Services": "validator-services",
//   "RollUp-as-a-Service": "rollup-as-a-service",
//   Faucet: "faucet",
// };

// const getServiceIcon = (serviceName: string) => {
//   switch (serviceMap[serviceName]) {
//     case "node-as-a-service":
//       return Server;
//     case "rpc-urls":
//       return Database;
//     case "validator-services":
//       return Shield;
//     case "rollup-as-a-service":
//       return Blocks;
//     case "faucet":
//       return Droplet;
//     case "monitoring":
//       return Activity;
//     default:
//       return Server;
//   }
// };

// const NetworkPage = () => {
//   const { network } = useParams();
//   const networkData = networksList.find((n) => n.id === network);

//   if (!networkData) {
//     return <div className="pt-24 text-center">Network not found</div>;
//   }

//   return (
//     <div className="pt-24 pb-16">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Network Header */}
//         <div className="mb-12">
//           <div className="flex items-center gap-4 mb-6">
//             <img
//               src={networkData.logo}
//               alt={`${networkData.name} logo`}
//               className="w-16 h-16 rounded-full"
//             />
//             <h1 className="text-4xl font-bold text-gray-900">
//               {networkData.name}
//             </h1>
//           </div>
//           <p className="text-xl text-gray-600">{networkData.description}</p>
//         </div>

//         {/* Services and Details Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
//           {/* Available Services with yellow gradient */}
//           <div className="bg-gradient-to-br from-[#E99710] to-[#d88a0e] p-8 rounded-xl shadow-lg text-white">
//             <h2 className="text-2xl font-semibold mb-6 flex items-center">
//               <Server className="w-6 h-6 text-white mr-2" />
//               Available Services
//             </h2>
//             <div className="grid gap-4">
//               {networkData.services.map((service, index) => {
//                 const isComingSoon = [
//                   "Validator Services",
//                   "RollUp-as-a-Service",
//                   "Faucet",
//                 ].includes(service);
//                 const ServiceIcon = getServiceIcon(service);
//                 return (
//                   <Link
//                     key={index}
//                     to={
//                       !isComingSoon ? `/services/${serviceMap[service]}` : "#"
//                     }
//                     className={`${
//                       isComingSoon
//                         ? "bg-white/10 hover:bg-white/10"
//                         : " bg-white/25 hover:bg-white/20 hover:-translate-y-1"
//                     }  backdrop-blur-sm p-4 rounded-lg transition-all duration-300 transform  group ${
//                       isComingSoon
//                         ? "cursor-not-allowed hover:bg-gray-50"
//                         : "hover:bg-white/20"
//                     }`}
//                   >
//                     {isComingSoon && (
//                       <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-tl-lg">
//                         Coming Soon
//                       </div>
//                     )}

//                     <div className="flex items-center">
//                       {ServiceIcon && (
//                         <ServiceIcon className="w-5 h-5 text-white mr-3 group-hover:scale-110 transition-transform" />
//                       )}
//                       <div>
//                         <span className="font-medium group-hover:text-white transition-colors">
//                           {service}
//                         </span>
//                         <p className="text-sm text-white/70 mt-1">
//                           Click to learn more
//                         </p>
//                       </div>
//                     </div>
//                   </Link>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Network Details */}
//           <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
//             <h2 className="text-2xl font-semibold mb-6 group-hover:text-[#E99710] transition-colors">
//               Network Details
//             </h2>
//             <ul className="space-y-4">
//               <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
//                 <span className="text-gray-600">Chain ID</span>
//                 <span className="font-semibold text-gray-900">
//                   {networkData.chainId}
//                 </span>
//               </li>
//               <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
//                 <span className="text-gray-600">Network Type</span>
//                 <span className="font-semibold text-gray-900">
//                   {networkData.type}
//                 </span>
//               </li>
//               <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
//                 <span className="text-gray-600">Consensus</span>
//                 <span className="font-semibold text-gray-900">
//                   {networkData.consensus}
//                 </span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="bg-gray-50 rounded-xl p-8 text-center">
//           <h2 className="text-2xl font-bold mb-4">
//             Ready to Build on {networkData.name}?
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Get started with our enterprise-grade infrastructure
//           </p>
//           <button className="bg-[#E99710] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#d88a0e] transition-colors">
//             Start Integration
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NetworkPage;

import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Server,
  Database,
  Shield,
  Blocks,
  Droplet,
  Activity,
} from "lucide-react";
import { networksList, network_services } from "../data/networks";
import axios from "axios";

// Map service names to their IDs and icons
const serviceMap = {
  "Node-as-a-Service": "node-as-a-service",
  "RPC URLs": "rpc-urls",
  Monitoring: "monitoring",
  "Validator Services": "validator-services",
  "RollUp-as-a-Service": "rollup-as-a-service",
  Faucet: "faucet",
};

const getServiceIcon = (serviceName: string) => {
  switch (serviceMap[serviceName]) {
    case "node-as-a-service":
      return Server;
    case "rpc-urls":
      return Database;
    case "validator-services":
      return Shield;
    case "rollup-as-a-service":
      return Blocks;
    case "faucet":
      return Droplet;
    case "monitoring":
      return Activity;
    default:
      return Server;
  }
};

const NetworkPage = () => {
  const [avlNetworks, setAvlNetworks] = useState([]);
  const { network } = useParams();
  const networkData = useMemo(() => {
    return avlNetworks?.filter((n) => {
      return n?.name?.toLowerCase() === network;
    });
  }, [avlNetworks, network]);

  if (!networkData) {
    return <div className="pt-24 text-center">Network not found</div>;
  }

  useEffect(() => {
    const getChains = async () => {
      await axios
        .get("https://api.blockinfura.com/v1/chains")
        .then((response) => {
          setAvlNetworks(response?.data?.data?.chains);
        })
        .catch((error) => console.log("ERROR", error));
    };

    getChains();
  }, []);

  return (
    <div className="pt-36 pb-16 dark:bg-[#1f1e1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Network Header */}
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <img
              src={networkData[0]?.logo_url}
              alt={`${networkData[0]?.name} logo`}
              className="w-16 h-16 rounded-full"
            />
            <h1 className="text-4xl font-bold font-boldonse text-light-black-90 dark:text-dark-black-90">
              {networkData[0]?.name}
            </h1>
          </div>
          <p className="text-xl text-gray-600 font-mono">
            {networkData[0]?.description}
          </p>
        </div>

        {/* Services and Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Available Services with yellow gradient */}
          <div className="bg-gradient-to-br from-[#E99710] to-[#d88a0e] p-8 rounded-xl shadow-lg text-white">
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Server className="w-6 h-6 text-white mr-2" />
              Available Services
            </h2>
            <div className="grid gap-4">
              {network_services[0]?.services?.map((service, index) => {
                const isComingSoon = [
                  "Validator Services",
                  "RollUp-as-a-Service",
                  "Faucet",
                ].includes(service);
                const ServiceIcon = getServiceIcon(service);
                return (
                  <Link
                    key={index}
                    to={
                      !isComingSoon ? `/services/${serviceMap[service]}` : "#"
                    }
                    className={`${
                      isComingSoon
                        ? "bg-white/10 hover:bg-white/10"
                        : " bg-white/25 hover:bg-white/20 hover:-translate-y-1"
                    }  backdrop-blur-sm p-4 rounded-lg transition-all duration-300 transform  group ${
                      isComingSoon
                        ? "cursor-not-allowed hover:bg-gray-50"
                        : "hover:bg-white/20"
                    }`}
                  >
                    {isComingSoon && (
                      <div className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-tl-lg">
                        Coming Soon
                      </div>
                    )}

                    <div className="flex items-center">
                      {ServiceIcon && (
                        <ServiceIcon className="w-5 h-5 text-white mr-3 group-hover:scale-110 transition-transform" />
                      )}
                      <div>
                        <span className="font-medium group-hover:text-white transition-colors">
                          {service}
                        </span>
                        <p className="text-sm text-white/70 mt-1">
                          Click to learn more
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Network Details */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h2 className="text-2xl font-semibold mb-6 group-hover:text-[#E99710] transition-colors">
              Network Details
            </h2>
            {networkData[0] && (
              <ul className="space-y-4">
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600">Chain Type</span>
                  <span className="font-semibold text-gray-900 flex">
                    {networkData[0]?.chain_type?.map((chain, idx) => {
                      return (
                        <span
                          key={idx}
                          className="mx-1 bg-yellow-600 text-white px-3 py-1 rounded-lg capitalize"
                        >
                          {chain?.type}
                        </span>
                      );
                    })}
                  </span>
                </li>
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600">Node Type</span>
                  <span className="font-semibold text-gray-900 flex">
                    {networkData[0]?.node_types?.map((type, idx) => {
                      return (
                        <div
                          key={idx}
                          className="mx-1 bg-yellow-600 text-white px-3 py-1 rounded-lg capitalize"
                        >
                          {type}
                        </div>
                      );
                    })}
                  </span>
                </li>
                <li className="flex justify-between items-center p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <span className="text-gray-600">Symbol</span>
                  <span className="font-semibold text-gray-900">
                    {networkData[0]?.symbol}
                  </span>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* CTA Section */}
        {networkData[0] && (
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Build on {networkData[0].name}?
            </h2>
            <p className="text-gray-600 mb-6">
              Get started with our enterprise-grade infrastructure
            </p>
            <button className="bg-[#E99710] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#d88a0e] transition-colors">
              Start Integration
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NetworkPage;
