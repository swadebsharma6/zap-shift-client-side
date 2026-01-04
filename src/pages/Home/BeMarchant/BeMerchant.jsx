import location from '../../../assets/location-merchant.png'
const BeMerchant = () => {
  return (
    <section className='mb-20'>
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#03373D] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 text-white">
          
          
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
              <button className="btn bg-[#C8F169] text-black hover:bg-[#b8e85d] border-none">
                Become a Merchant
              </button>

              <button className="btn btn-outline border-[#C8F169] text-[#C8F169] hover:bg-[#C8F169] hover:text-black">
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
