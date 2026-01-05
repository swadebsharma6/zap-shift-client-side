import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import customerReview from "../../../assets/customer-top.png"

const CustomerReview = () => {
  const reviewsData = [
  {
    id: 1,
    name: "Awlad Hossin",
    designation: "Senior Product Designer",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    id: 2,
    name: "Rasel Ahamed",
    designation: "CTO",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Excellent delivery service. Parcels arrive on time and the tracking system is very reliable. Highly recommended for businesses.",
  },
  {
    id: 3,
    name: "Nasir Uddin",
    designation: "CEO",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Customer support is very responsive. Cash on delivery service helped us grow faster across districts.",
  },
  {
    id: 4,
    name: "Farhana Akter",
    designation: "E-commerce Manager",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Their nationwide delivery coverage is impressive. We can now serve customers outside Dhaka easily.",
  },
  {
    id: 5,
    name: "Mehedi Hasan",
    designation: "Operations Lead",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Very professional logistics handling. Parcel return system is smooth and efficient.",
  },
  {
    id: 6,
    name: "Sabbir Rahman",
    designation: "Startup Founder",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Affordable pricing with fast delivery. Perfect for startups and small businesses.",
  },
  {
    id: 7,
    name: "Nusrat Jahan",
    designation: "Brand Manager",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Their fulfillment solution saved us a lot of time managing inventory and orders.",
  },
  {
    id: 8,
    name: "Tanvir Ahmed",
    designation: "Business Owner",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Reliable service with transparent tracking. Customers are happier now.",
  },
  {
    id: 9,
    name: "Shakil Khan",
    designation: "Logistics Coordinator",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Corporate service is well-organized and professional. Highly satisfied.",
  },
  {
    id: 10,
    name: "Ayesha Rahman",
    designation: "Online Seller",
    photo: "https://i.ibb.co.com/QFhzDg0/architect.png",
    review:
      "Cash on delivery across Bangladesh helped my online store grow rapidly.",
  },
];


  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex(
      currentIndex === 0 ? reviewsData.length - 1 : currentIndex - 1
    );
  };

  const nextReview = () => {
    setCurrentIndex(
      currentIndex === reviewsData.length - 1 ? 0 : currentIndex + 1
    );
  };

  const currentReview = reviewsData[currentIndex];

  return (
    <section className="py-10 mb-10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        {/* Header */}
       <div className="flex justify-center mb-4">
             <img className="" src={customerReview} alt="" />
       </div>

        <h2 className="text-3xl font-bold mb-3">
          What our customers are saying
        </h2>
        <p className="text-sm text-gray-500 mb-12">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro.
          Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>

        {/* Review Card */}
        <div className="bg-white rounded-2xl p-8 shadow-md max-w-xl mx-auto">
          <FaQuoteLeft className="text-3xl text-gray-300 mb-4" />

          <p className="text-gray-600 text-sm mb-6">
            {currentReview.review}
          </p>

          <div className="border-t border-dashed my-4"></div>

          <div className="flex items-center justify-center gap-4">
            <img
              src={currentReview.photo}
              alt={currentReview.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="text-left">
              <h4 className="font-semibold text-sm">
                {currentReview.name}
              </h4>
              <p className="text-xs text-gray-500">
                {currentReview.designation}
              </p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          <button onClick={prevReview} className="btn btn-circle btn-outline">
            ❮
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {reviewsData.map((_, index) => (
              <span
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex
                    ? "bg-lime-400"
                    : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>

          <button
            onClick={nextReview}
            className="btn btn-circle bg-lime-400 text-black border-none"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
