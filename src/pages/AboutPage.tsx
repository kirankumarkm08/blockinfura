import React from 'react';
import { Users, Target, Globe, Award } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: 'Active Users', value: '10,000+' },
    { label: 'Networks Supported', value: '6+' },
    { label: 'Daily Transactions', value: '1M+' },
    { label: 'Uptime', value: '99.99%' }
  ];

  const values = [
    {
      icon: Users,
      title: 'Customer First',
      description: 'We prioritize our customers\' needs and provide exceptional support.'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Constantly pushing boundaries in blockchain infrastructure.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building infrastructure for the decentralized future.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality services.'
    }
  ];

  const team = [
    {
      name: 'John Smith',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="pt-36 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">About BlockInfura</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Building the foundation for the decentralized future with enterprise-grade Web3 infrastructure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-3xl font-bold text-[#E99710] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To provide reliable, scalable, and secure blockchain infrastructure that enables developers 
            and enterprises to build the future of Web3 technology.
          </p>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center group hover:shadow-xl transition-all">
                <value.icon className="w-12 h-12 text-[#E99710] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#E99710] transition-colors">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          {/* <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#E99710] transition-colors">{member.name}</h3>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;