import FacilityCard from "./FacilityCard";


const OurFacilities = () => {
  const facilitiesData = [
    {
      id: 1,
      title: "Booking Pick & Drop",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "FaTruckPickup",
    },
    {
      id: 2,
      title: "Cash On Delivery",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "FaMoneyBillWave",
    },
    {
      id: 3,
      title: "Delivery Hub",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "FaWarehouse",
    },
    {
      id: 4,
      title: "Booking SME & Corporate",
      description:
        "From personal packages to business shipments — we deliver on time, every time.",
      icon: "FaBuilding",
    },
  ];

  return (
    <section className="py-10 bg-[#F2F5F4] mb-20 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-semibold text-[#03373D] mb-8">
          How it Works
        </h2>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {facilitiesData.map((item) => (
            <FacilityCard
              key={item.id}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurFacilities;
