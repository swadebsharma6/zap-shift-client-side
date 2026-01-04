const BenefitCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-2xl p-8 flex items-center gap-8 shadow-sm">
      {/* Left Image */}
      <div className="w-28 shrink-0">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Divider */}
      <div className="h-24 border-l-2 border-dashed border-gray-300"></div>

      {/* Content */}
      <div>
        <h3 className="text-lg font-semibold text-[#03373D] mb-2">
          {title}
        </h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BenefitCard;
