const ServiceCard = ({ service }) => {
      const {icon: Icon, title, description} = service;
  return (
    <div className="card bg-base-100 hover:bg-[#CAEB66] shadow-md hover:shadow-xl transition duration-300">
      <div className="card-body items-center text-center ">
        <div className="text-4xl text-primary mb-4">
          <Icon />
        </div>

        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
