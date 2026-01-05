const FAQ = () => {
  const faqData = [
    {
      id: 1,
      question: "How does this posture corrector work?",
      answer:
        "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. It helps reduce slouching and promotes better alignment over time.",
    },
    {
      id: 2,
      question: "Is it suitable for all ages and body types?",
      answer:
        "Yes, the posture corrector is designed to be adjustable and suitable for most ages and body types. However, it is recommended to consult a healthcare professional if you have specific medical conditions.",
    },
    {
      id: 3,
      question: "Does it really help with back pain and posture improvement?",
      answer:
        "Regular use can help improve posture and may reduce back and shoulder pain caused by poor posture. Results may vary depending on usage and individual condition.",
    },
    {
      id: 4,
      question: "Does it have smart features like vibration alerts?",
      answer:
        "Some models include smart vibration alerts that gently remind you to correct your posture when slouching is detected.",
    },
    {
      id: 5,
      question: "How will I be notified when the product is back in stock?",
      answer:
        "You can subscribe to notifications via email or SMS, and we will inform you as soon as the product is available again.",
    },
  ];

  return (
    <section className="py-20 mb-20">
      <div className="max-w-3xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">
            Frequently Asked Question (FAQ)
          </h2>
          <p className="text-gray-500 text-sm">
            Enhance posture, mobility, and well-being effortlessly with Posture Pro.
            Achieve proper alignment, reduce pain, and strengthen your body with ease!
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className="collapse collapse-arrow bg-white border border-gray-200  rounded-xl"
            >
              <input type="radio" name="faq-accordion" defaultChecked={index === 0} />

              <div className="collapse-title font-medium text-[#03373D]">
                {item.question}
              </div>

              <div className="collapse-content text-sm text-gray-600">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="btn bg-[#C8F169] text-black hover:bg-[#b8e85d] border-none">
            See More FAQ’s
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
