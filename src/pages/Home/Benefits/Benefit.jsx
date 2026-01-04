import BenefitCard from "./BenefitCard";


const Benefit = () => {
  const benefitsData = [
    {
      id: 1,
      title: "Live Parcel Tracking",
      description:
        "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
      image: "/src/assets/benefits/Illustration.png",
    },
    {
      id: 2,
      title: "100% Safe Delivery",
      description:
        "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
      image: "/src/assets/benefits/Group 4.png",
    },
    {
      id: 3,
      title: "24/7 Call Center Support",
      description:
        "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
      image: "/src//assets/benefits/Group 4.png",
    },
  ];

  return (
    <section className="relative py-20 bg-base-100 rounded-2xl mb-20">
       {/* Top dashed line */}
      <div className="absolute top-8 left-0 w-full border-t border-dashed border-blue-800"></div>
      <div className="relative max-w-6xl mx-auto px-4 space-y-8">
        {benefitsData.map((benefit) => (
          <BenefitCard
            key={benefit.id}
            title={benefit.title}
            description={benefit.description}
            image={benefit.image}
          />
        ))}
      </div>
       {/* bottom dashed line */}
      <div className="absolute bottom-8 left-0 w-full border-b border-dashed border-blue-800"></div>
    </section>
  );
};

export default Benefit;
