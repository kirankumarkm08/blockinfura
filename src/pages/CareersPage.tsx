import React from 'react';
import { Briefcase, MapPin, Clock, DollarSign } from 'lucide-react';

const CareersPage = () => {
  const openings = [
    {
      title: 'Senior Blockchain Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years'
    }
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation with equity options'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work when you\'re most productive'
    },
    {
      icon: MapPin,
      title: 'Remote First',
      description: 'Work from anywhere in the world'
    },
    {
      icon: Briefcase,
      title: 'Learning Budget',
      description: 'Annual budget for courses and conferences'
    }
  ];

  return (
    <div className="pt-36 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Help us build the future of Web3 infrastructure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Why Join Us Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Join BlockInfura?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg group hover:shadow-xl transition-all">
                <benefit.icon className="w-12 h-12 text-[#E99710] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#E99710] transition-colors">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
          <p className="text-md text-gray-400 text-center">
              Currently No Open Positions.
              </p>
            {/* {openings.map((job, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all">
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-[#E99710] transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <button className="bg-[#E99710] text-white px-6 py-2 rounded-lg hover:bg-[#d88a0e] transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))} */}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-[#E99710] to-[#d88a0e] rounded-xl p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Don't See Your Perfect Role?</h2>
          <p className="mb-6">We're always looking for talented individuals to join our team</p>
          <button className="bg-white text-[#E99710] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Send Open Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;