import location from '../../../assets/location-merchant.png'
const BeMerchant = () => {
  return (
    <section data-aos="fade-left" className='mb-20'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-secondary bg-[url('assets/be-a-merchant-bg.png')] bg-no-repeat rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 text-white">
          
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
              Merchant and Customer Satisfaction <br />
              is Our First Priority
            </h2>

            <p className="text-sm md:text-base text-gray-300 mb-8 max-w-xl">
              We offer the lowest delivery charge with the highest value along with
              100% safety of your product. Pathao courier delivers your parcels in
              every corner of Bangladesh right on time.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="btn rounded-full bg-primary text-black hover:bg-primary border-none">
                Become a Merchant
              </button>

              <button className="btn rounded-full btn-outline border-primary text-primary hover:bg-primary hover:text-black">
                Earn with ZapShift Courier
              </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center">
            <img
              src={location}
              alt="Merchant Illustration"
              className="max-w-md w-full"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeMerchant;
