import { useForm, } from "react-hook-form";

const SendParcel = () => {
      const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "document",
    },
  });
  
    const parcelType = watch("parcelType");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Form submitted! Check console.");
  };
      return (
         <div className="p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-teal-900">Send A Parcel</h1>
      <p className="text-gray-500 mt-1 mb-6">Enter your parcel details</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* ================= Parcel Info ================= */}
        <div>
          <div className="flex gap-6 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="document"
                {...register("parcelType")}
                className="radio radio-success"
              />
              Document
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                value="non-document"
                {...register("parcelType")}
                className="radio radio-success"
              />
              Not-Document
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="label">Parcel Name</label>
              <input
                {...register("parcelName", { required: "Parcel name required" })}
                className="input input-bordered w-full"
                placeholder="Parcel Name"
              />
              {errors.parcelName && (
                <p className="text-red-500 text-sm">{errors.parcelName.message}</p>
              )}
            </div>

            <div>
              <label className="label">Parcel Weight (KG)</label>
              <input
                type="number"
                {...register("parcelWeight")}
                disabled={parcelType === "document"}
                className="input input-bordered w-full"
                placeholder="Parcel Weight (KG)"
              />
            </div>
          </div>
        </div>

        {/* ================= Sender & Receiver ================= */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Sender */}
          <div>
            <h3 className="font-semibold mb-4">Sender Details</h3>

            <div className="space-y-3">
              <input
                {...register("senderName", { required: true })}
                placeholder="Sender Name"
                className="input input-bordered w-full"
              />

              <input
                {...register("senderAddress", { required: true })}
                placeholder="Address"
                className="input input-bordered w-full"
              />

              <input
                {...register("senderPhone", { required: true })}
                placeholder="Sender Phone No"
                className="input input-bordered w-full"
              />

              <select
                {...register("senderDistrict", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Sender District</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
                <option>Rajshahi</option>
              </select>

              <textarea
                {...register("pickupInstruction", { required: true })}
                placeholder="Pickup Instruction"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>

          {/* Receiver */}
          <div>
            <h3 className="font-semibold mb-4">Receiver Details</h3>

            <div className="space-y-3">
              <input
                {...register("receiverName", { required: true })}
                placeholder="Receiver Name"
                className="input input-bordered w-full"
              />

              <input
                {...register("receiverAddress", { required: true })}
                placeholder="Address"
                className="input input-bordered w-full"
              />

              <input
                {...register("receiverPhone", { required: true })}
                placeholder="Receiver Contact No"
                className="input input-bordered w-full"
              />

              <select
                {...register("receiverDistrict", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Receiver District</option>
                <option>Dhaka</option>
                <option>Khulna</option>
                <option>Sylhet</option>
              </select>

              <textarea
                {...register("deliveryInstruction", { required: true })}
                placeholder="Delivery Instruction"
                className="textarea textarea-bordered w-full"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-gray-500">
          * PickUp Time 4pm-7pm Approx.
        </p>

        <button className="btn bg-lime-400 hover:bg-lime-500 text-black">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
      );
};

export default SendParcel;