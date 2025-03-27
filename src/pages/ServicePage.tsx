import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Code, Terminal, Cpu, Globe, Shield, Zap } from 'lucide-react';
import { servicesList } from '../data/services';
import { networksList } from '../data/networks';

const ServicePage = () => {
  const { service } = useParams();
  const serviceData = servicesList.find(s => s.id === service);
const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  if (!serviceData) {
    return <div className="pt-24 text-center">Service not found</div>;
  }

  const techStack = {
    'node-as-a-service': ['Docker', 'Kubernetes', 'Terraform', 'Prometheus', 'Grafana'],
    'rpc-urls': ['JSON-RPC', 'WebSocket', 'REST API', 'GraphQL', 'WebHooks'],
    'monitoring': ['Real-time Metrics', 'Alert System', 'Analytics Dashboard', 'Custom Reports'],
    'validator-services': ['Proof of Stake', 'MEV-Boost', 'Slashing Protection', 'Key Management'],
    'rollup-as-a-service': ['Optimistic Rollups', 'ZK Rollups', 'Data Availability', 'Sequencing'],
    'faucet': ['API Integration', 'Rate Limiting', 'Token Distribution', 'Network Management'],
  };

  const benefits = {
    'node-as-a-service': [
      { title: 'Zero Maintenance', icon: Shield, description: 'Fully managed infrastructure with automatic updates and security patches' },
      { title: 'Global Distribution', icon: Globe, description: 'Deploy nodes across multiple regions for optimal performance' },
      { title: 'Enterprise Grade', icon: Cpu, description: 'High-availability infrastructure with automated failover' }
    ],
    'rpc-urls': [
      { title: 'High Performance', icon: Zap, description: 'Ultra-low latency with dedicated endpoints' },
      { title: 'Developer Tools', icon: Terminal, description: 'Comprehensive SDK and API documentation' },
      { title: 'Advanced Analytics', icon: Code, description: 'Detailed usage metrics and request analysis' }
    ],
    'monitoring': [
      { title: 'Real-time Data', icon: Zap, description: 'Instant insights into your infrastructure' },
      { title: 'Custom Alerts', icon: Terminal, description: 'Configurable notification system' },
      { title: 'Rich Analytics', icon: Code, description: 'Comprehensive reporting and analysis' }
    ],
    'validator-services': [
      { title: 'Secure Infrastructure', icon: Shield, description: 'Enterprise-grade security with key management' },
      { title: 'MEV Optimization', icon: Cpu, description: 'Maximize validator rewards with MEV strategies' },
      { title: 'Performance Monitoring', icon: Terminal, description: '24/7 monitoring with instant alerts' }
    ],
    'rollup-as-a-service': [
      { title: 'Customizable', icon: Code, description: 'Flexible configuration for your specific needs' },
      { title: 'Scalable', icon: Globe, description: 'Handle millions of transactions with ease' },
      { title: 'Secure', icon: Shield, description: 'Built-in security features and monitoring' }
    ],
    'faucet': [
      { title: 'Multi-Network', icon: Globe, description: 'Support for multiple blockchain networks' },
      { title: 'Anti-Spam', icon: Shield, description: 'Advanced protection against abuse' },
      { title: 'API Access', icon: Code, description: 'Programmatic access for automation' }
    ],
    
  };

  // Get supported networks data
  const supportedNetworksData = networksList.filter(network => 
    serviceData.supportedNetworks.includes(network.id)
  );

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-white">
            <div className="flex items-center gap-4 mb-6">
              <serviceData.icon className="w-16 h-16 text-[#E99710]" />
              <h1 className="text-5xl font-bold">{serviceData.title}</h1>
            </div>
            <p className="text-xl text-gray-200 max-w-2xl">{serviceData.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Benefits Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {benefits[service].map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
              <benefit.icon className="w-12 h-12 text-[#E99710] mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-[#E99710] transition-colors">{benefit.title}</h3>
              <p className="text-gray-600 text-lg group-hover:text-gray-900 transition-colors">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h2 className="text-2xl font-semibold mb-6 group-hover:text-[#E99710] transition-colors">Features</h2>
            <ul className="space-y-4">
              {serviceData.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700 hover:text-[#E99710] transition-colors">
                  <span className="w-2 h-2 bg-[#E99710] rounded-full mr-3"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <h2 className="text-2xl font-semibold mb-6 group-hover:text-[#E99710] transition-colors">Tech Stack</h2>
            <ul className="space-y-4">
              {techStack[service].map((tech, index) => (
                <li key={index} className="flex items-center text-gray-700 hover:text-[#E99710] transition-colors">
                <span className="w-2 h-2 bg-[#E99710] rounded-full mr-3"></span>
                {tech}
              </li>
                
              ))}
            </ul>
          </div>
        </div>

        {/* Supported Networks Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Supported Networks</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {supportedNetworksData.map((network) => (
              <Link
                key={network.id}
                to={`/networks/${network.id}`}
                onClick={scrollToTop}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow transform hover:-translate-y-1 duration-300 group"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src={network.logo} 
                    alt={`${network.name} logo`} 
                    className="w-12 h-12 rounded-full mb-3 group-hover:scale-110 transition-transform"
                  />
                  <span className="font-medium text-gray-800 text-center group-hover:text-[#E99710] transition-colors">
                    {network.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-[#E99710] to-[#d88a0e] rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-6">Join thousands of developers building the future of Web3</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#E99710] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Integration
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;