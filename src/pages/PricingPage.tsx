import React from 'react';

const PricingPage = () => {
  const plans = [
    {
      name: "Developer",
      price: "Contact Us",
      features: [
        "Up to 3M requests/month",
        "2 dedicated nodes",
        "Basic support",
        "Standard SLA"
      ]
    },
    {
      name: "Business",
      price: "Contact Us",
      features: [
        "Up to 10M requests/month",
        "5 dedicated nodes",
        "Priority support",
        "Enhanced SLA"
      ]
    },
    {
      name: "Enterprise",
      price: "Contact Us",
      features: [
        "Unlimited requests",
        "Custom node setup",
        "24/7 dedicated support",
        "Custom SLA"
      ]
    }
  ];

  return (
    <div className="pt-36 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h1>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your blockchain infrastructure needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h2 className="text-2xl font-bold mb-4">{plan.name}</h2>
              <div className="text-3xl font-bold text-[#E99710] mb-6">{plan.price}</div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-[#E99710] rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-[#E99710] text-white px-6 py-3 rounded-lg hover:bg-[#d88a0e] transition-colors">
                Get Started
              </button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a custom plan? Contact our sales team for a tailored solution.
          </p>
          <button className="bg-white border-2 border-[#E99710] text-[#E99710] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#E99710] hover:text-white transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;