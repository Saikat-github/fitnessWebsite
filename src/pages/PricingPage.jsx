import React from 'react';
import { useNavigate } from 'react-router-dom';

const PricingPage = () => {

  const navigate = useNavigate();

  const pricingPlans = [
    {
      title: "Guaranteed: Lose 5-10kg in 6 weeks",
      price: "₹1,999/month",
      features: ["Money-back guarantee", "Customized diet & workout", "Progress monitoring", "6-week intensive coaching"],
      cta: "Start Your Journey",
    },
    {
      title: "Muscle Building",
      price: "₹ 1,599/month",
      features: ["Personalized workout plans", "Diet consultation", "Weekly check-ins", "24/7 Support"],
      cta: "Get Started",
    },
    {
      title: "Weight Loss",
      price: "₹ 1,599/month",
      features: ["Custom fat-loss strategies", "Nutrition guides", "Daily motivation", "Progress tracking"],
      cta: "Join Now",
    },
    {
      title: "Body Recomposition",
      price: "₹ 1,999/month",
      features: ["Money-back guarantee", "Combined muscle gain & fat loss", "Diet and training plans", "Weekly adjustments"],
      cta: "Transform Now",
    }
  ];

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Our Pricing Plans</h2>
        <p className="text-sm sm:text-lg mb-12">
          Choose the plan that suits your fitness goal. We offer flexible pricing for muscle building, weight loss, body recomposition, and guaranteed results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pricingPlans.map((plan) => (
            <div key={plan.title} className="bg-gray-900 shadow-lg rounded-lg overflow-hidden">
              <div className="px-6 py-8">
                <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                <p className="mt-4 text-3xl font-bold text-blue-600">{plan.price}</p>
                <ul className="mt-6 text-white space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
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
              <div className="bg-gray-900 bg-opacity-40 px-6 py-4">
                <button onClick={() => navigate("/input")} className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
