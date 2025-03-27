import React from 'react';
import { Link } from 'react-router-dom';
import { Book, Code, Terminal, FileCode, GitBranch, Puzzle } from 'lucide-react';

const DocumentationPage = () => {
  return (
    <div className="pt-36 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Everything you need to integrate and build with BlockInfura's Web3 infrastructure
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quick Start Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Quick Start Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {quickStartGuides.map((guide, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
                <guide.icon className="w-10 h-10 text-[#E99710] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-[#E99710] transition-colors">{guide.title}</h3>
                <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors">{guide.description}</p>
                <Link to={guide.link} className="text-[#E99710] hover:text-[#d88a0e] font-medium inline-flex items-center">
                  Learn More
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* API Reference Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">API Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {apiReferences.map((api, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#E99710] transition-colors">{api.title}</h3>
                <div className="space-y-3">
                  {api.endpoints.map((endpoint, idx) => (
                    <div key={idx} className="flex items-start p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                      <span className="px-2 py-1 text-xs font-medium bg-[#E99710] text-white rounded mr-3">
                        {endpoint.method}
                      </span>
                      <div>
                        <p className="font-mono text-sm text-gray-800">{endpoint.path}</p>
                        <p className="text-sm text-gray-600 mt-1">{endpoint.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SDKs & Tools Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">SDKs & Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sdksAndTools.map((tool, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <tool.icon className="w-8 h-8 text-[#E99710] mr-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold group-hover:text-[#E99710] transition-colors">{tool.name}</h3>
                </div>
                <p className="text-gray-600 mb-4 group-hover:text-gray-900 transition-colors">{tool.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <GitBranch className="w-4 h-4 mr-1" />
                    {tool.version}
                  </span>
                  <span className="mx-3">•</span>
                  <span>{tool.language}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-r from-[#E99710] to-[#d88a0e] rounded-xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
            <p className="mb-6">Our support team is available 24/7 to help you with any questions</p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-white text-[#E99710] px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#E99710] transition-colors">
                Join Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const quickStartGuides = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of BlockInfura and set up your first project',
    icon: Book,
    link: '/docs/getting-started'
  },
  {
    title: 'API Integration',
    description: 'Integrate BlockInfura APIs into your application',
    icon: Code,
    link: '/docs/api-integration'
  },
  {
    title: 'CLI Tools',
    description: 'Command-line tools for managing your infrastructure',
    icon: Terminal,
    link: '/docs/cli-tools'
  }
];

const apiReferences = [
  {
    title: 'Node API',
    endpoints: [
      {
        method: 'GET',
        path: '/v1/nodes',
        description: 'List all available nodes'
      },
      {
        method: 'POST',
        path: '/v1/nodes/deploy',
        description: 'Deploy a new node'
      }
    ]
  },
  {
    title: 'RPC API',
    endpoints: [
      {
        method: 'POST',
        path: '/v1/eth',
        description: 'Make Ethereum JSON-RPC calls'
      },
      {
        method: 'GET',
        path: '/v1/status',
        description: 'Check RPC endpoint status'
      }
    ]
  }
];

const sdksAndTools = [
  {
    name: 'JavaScript SDK',
    description: 'Official JavaScript library for BlockInfura APIs',
    version: 'v2.1.0',
    language: 'JavaScript',
    icon: FileCode
  },
  {
    name: 'Python SDK',
    description: 'Official Python library for BlockInfura APIs',
    version: 'v1.8.0',
    language: 'Python',
    icon: FileCode
  },
  {
    name: 'CLI Tool',
    description: 'Command-line interface for BlockInfura services',
    version: 'v3.0.1',
    language: 'Go',
    icon: Terminal
  }
];

export default DocumentationPage;