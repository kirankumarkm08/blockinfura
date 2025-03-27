import React from 'react';
import { CheckCircle, AlertCircle, Clock } from 'lucide-react';

const StatusPage = () => {
  const services = [
    { name: 'Node-as-a-Service', status: 'operational', uptime: '99.99%' },
    { name: 'RPC URLs', status: 'operational', uptime: '99.98%' },
    { name: 'Monitoring', status: 'operational', uptime: '99.99%' },
    // { name: 'Validator Services', status: 'operational', uptime: '100%' },
    // { name: 'RollUp-as-a-Service', status: 'operational', uptime: '99.95%' },
    // { name: 'Faucet', status: 'operational', uptime: '99.97%' },
  ];

  const networks = [
    { name: 'Ethereum', status: 'operational', latency: '45ms' },
    { name: 'Base', status: 'operational', latency: '48ms' },
    { name: 'Polygon', status: 'operational', latency: '52ms' },
    { name: 'Abstract', status: 'operational', latency: '50ms' },
    { name: 'Avail', status: 'operational', latency: '120ms' },
    { name: 'Arbitrum', status: 'operational', latency: '55ms' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational':
        return <CheckCircle className="w-6 h-6 text-green-500" />;
      case 'maintenance':
        return <Clock className="w-6 h-6 text-yellow-500" />;
      default:
        return <AlertCircle className="w-6 h-6 text-red-500" />;
    }
  };

  return (
    <div className="pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">System Status</h1>
          <p className="text-xl text-gray-600">
            Current status of BlockInfura services and networks
          </p>
        </div>

        {/* Overall Status */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="flex items-center justify-center gap-4">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900">All Systems Operational</h2>
              <p className="text-gray-600">Updated 2 minutes ago</p>
            </div>
          </div>
        </div>

        {/* Services Status */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Services</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {services.map((service, index) => (
                <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(service.status)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{service.name}</h3>
                      <p className="text-sm text-gray-500">Uptime: {service.uptime}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-medium capitalize
                    ${service.status === 'operational' ? 'bg-green-100 text-green-800' :
                    service.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}">
                    {service.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Networks Status */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Networks</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-200">
              {networks.map((network, index) => (
                <div key={index} className="p-6 flex items-center justify-between hover:bg-gray-50">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(network.status)}
                    <div>
                      <h3 className="font-semibold text-gray-900">{network.name}</h3>
                      <p className="text-sm text-gray-500">Latency: {network.latency}</p>
                    </div>
                  </div>
                  <span className="px-4 py-2 rounded-full text-sm font-medium capitalize
                    ${network.status === 'operational' ? 'bg-green-100 text-green-800' :
                    network.status === 'maintenance' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'}">
                    {network.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusPage;