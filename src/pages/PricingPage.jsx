import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {

  const navigate = useNavigate();

  const pricingPlans = [
    {
      title: "Guaranteed: Lose 5-10 kg in 6 weeks",
      price: "₹ 2,999/month",
      features: ["30 days Money-back guarantee", "Customized diet & workout", "Progress monitoring & intensive coaching", "24/7 Support"],
    },
    {
      title: "Body Recomposition",
      price: "₹ 2,999/month",
      features: ["30 days Money-back guarantee", "Combined muscle gain & fat loss", "Diet and training plans", "Weekly check-ins & 24/7 Support"],
    },
    {
      title: "Muscle Building",
      price: "₹ 2,499/month",
      features: ["Personalized workout plans", "Diet consultation", "Weekly check-ins", "24/7 Support"],
    },
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center text-white">
        <div>
          <h2 className="text-4xl font-semibold mb-6">Our Pricing Plans</h2>
        </div>
        <p className="text-sm mb-12">
          Choose the plan that suits your fitness goal. We offer flexible pricing for muscle building, weight loss, body recomposition, and guaranteed results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className="bg-black/50 shadow-lg rounded-lg">
              <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                <p className="mt-4 text-3xl font-bold text-blue-600">{plan.price}</p>
                <ul className="mt-6 text-white space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
