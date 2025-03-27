import React from 'react';
import { Mail, MessageSquare, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const offices = [
    {
      city: 'San Francisco',
      address: '123 Market Street, CA 94105',
      phone: '+1 (555) 123-4567',
      email: 'sf@blockinfura.com'
    },
    {
      city: 'London',
      address: '456 Tech Hub, EC2A 1BE',
      phone: '+44 20 7123 4567',
      email: 'london@blockinfura.com'
    },
    {
      city: 'Singapore',
      address: '789 Innovation Center, 018936',
      phone: '+65 6789 0123',
      email: 'singapore@blockinfura.com'
    }
  ];

  return (
    <div className="pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">
            Get in touch with our team for support or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#E99710] focus:border-[#E99710]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#E99710] focus:border-[#E99710]"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#E99710] focus:border-[#E99710]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#E99710] focus:border-[#E99710]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#E99710] focus:border-[#E99710]"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-[#E99710] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#d88a0e] transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-[#E99710] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">support@blockinfura.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageSquare className="w-6 h-6 text-[#E99710] mt-1 mr-4" />
                  <div>
                    <h3 className="font-semibold">Live Chat</h3>
                    <p className="text-gray-600">Available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E99710] to-[#d88a0e] rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Join Our Community</h2>
              <p className="mb-6">
                Connect with other developers and stay updated with the latest news
              </p>
              <button className="bg-white text-[#E99710] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Join Discord
              </button>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div>
          <h2 className="text-2xl font-bold mb-8 text-center">Our Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 group hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#E99710] transition-colors">
                  {office.city}
                </h3>
                <div className="space-y-4 text-gray-600">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-[#E99710] mt-1 mr-3" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-[#E99710] mt-1 mr-3" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-[#E99710] mt-1 mr-3" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;