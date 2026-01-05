import {
  FaTruckPickup,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";

const iconMap = {
  FaTruckPickup,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
};

const FacilityCard = ({ title, description, icon }) => {
  const Icon = iconMap[icon];

  return (
    <div data-aos="zoom-in-down" className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition">
      <div className="text-3xl text-[#03373D] mb-4">
        <Icon />
      </div>

      <h3 className="font-semibold text-[#03373D] mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default FacilityCard;
