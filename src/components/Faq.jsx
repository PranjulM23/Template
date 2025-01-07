import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Is there a free trial available?",
      answer:
        "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "You can cancel your subscription anytime from your account settings. No additional charges will be incurred after cancellation.",
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add custom details to your invoice via your account settings.",
    },
    {
      question: "How does billing work?",
      answer:
        "We bill your account monthly or annually based on your selected plan. You'll receive an invoice by email for every payment made.",
    },
    {
      question: "How do I change my account email?",
      answer: "You can update your account email from the profile settings page.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Frequently asked questions</h2>
      <p className="text-center text-gray-500 mb-8">
        Everything you need to know about the product and billing.
      </p>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow-sm transition duration-200"
          >
            <button
              className="flex justify-between items-center w-full text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              <svg
                className={`w-6 h-6 transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            {activeIndex === index && (
              <p className="mt-4 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
