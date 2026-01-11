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
             <div className="max-w-5xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-2">Send A Parcel</h1>
      <p className="text-gray-500 mb-6">Enter your parcel details</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">

        {/* Parcel Info */}
        <div>
          <h2 className="font-semibold mb-3">Parcel Info</h2>

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
              Non-Document
            </label>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                {...register("parcelTitle", { required: "Parcel title is required" })}
                placeholder="Parcel Name"
                className="input input-bordered w-full"
              />
              {errors.parcelTitle && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.parcelTitle.message}
                </p>
              )}
            </div>

            {parcelType === "non-document" && (
              <div>
                <input
                  type="number"
                  {...register("weight")}
                  placeholder="Parcel Weight (KG)"
                  className="input input-bordered w-full"
                />
              </div>
            )}
          </div>
        </div>

        {/* Sender Info */}
        <div>
          <h2 className="font-semibold mb-3">Sender Details</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                {...register("senderName", { required: "Sender name required" })}
                placeholder="Sender Name"
                className="input input-bordered w-full"
              />
              {errors.senderName && (
                <p className="text-red-500 text-sm">{errors.senderName.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("senderPhone", { required: "Phone number required" })}
                placeholder="Sender Phone No"
                className="input input-bordered w-full"
              />
              {errors.senderPhone && (
                <p className="text-red-500 text-sm">{errors.senderPhone.message}</p>
              )}
            </div>

            <div>
              <select
                {...register("senderDistrict", { required: "District required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select District</option>
                <option>Dhaka</option>
                <option>Chattogram</option>
              </select>
              {errors.senderDistrict && (
                <p className="text-red-500 text-sm">{errors.senderDistrict.message}</p>
              )}
            </div>

            <div>
              <textarea
                {...register("pickupInstruction", { required: "Pickup instruction required" })}
                placeholder="Pickup Instruction"
                className="textarea textarea-bordered w-full"
              />
              {errors.pickupInstruction && (
                <p className="text-red-500 text-sm">
                  {errors.pickupInstruction.message}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Receiver Info */}
        <div>
          <h2 className="font-semibold mb-3">Receiver Details</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <input
                {...register("receiverName", { required: "Receiver name required" })}
                placeholder="Receiver Name"
                className="input input-bordered w-full"
              />
              {errors.receiverName && (
                <p className="text-red-500 text-sm">{errors.receiverName.message}</p>
              )}
            </div>

            <div>
              <input
                {...register("receiverPhone", { required: "Contact number required" })}
                placeholder="Receiver Contact No"
                className="input input-bordered w-full"
              />
              {errors.receiverPhone && (
                <p className="text-red-500 text-sm">{errors.receiverPhone.message}</p>
              )}
            </div>

            <div>
              <select
                {...register("receiverDistrict", { required: "District required" })}
                className="select select-bordered w-full"
              >
                <option value="">Select District</option>
                <option>Dhaka</option>
                <option>Rajshahi</option>
              </select>
              {errors.receiverDistrict && (
                <p className="text-red-500 text-sm">
                  {errors.receiverDistrict.message}
                </p>
              )}
            </div>

            <div>
              <textarea
                {...register("deliveryInstruction", {
                  required: "Delivery instruction required",
                })}
                placeholder="Delivery Instruction"
                className="textarea textarea-bordered w-full"
              />
              {errors.deliveryInstruction && (
                <p className="text-red-500 text-sm">
                  {errors.deliveryInstruction.message}
                </p>
              )}
            </div>
          </div>
        </div>

        <button className="btn btn-success">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
      );
};

export default SendParcel;