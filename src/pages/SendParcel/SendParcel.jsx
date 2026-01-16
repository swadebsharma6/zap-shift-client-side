import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const generateTrackingId = () => {
  const date = new Date();
  const datePart = date.toISOString().split("T")[0].replace(/-/g, "");
  const rand = Math.random().toString(36).substring(2, 7).toUpperCase();
  return `PLC-${datePart}-${rand}`;
};

const SendParcel = () => {
  const data = useLoaderData();
  const { user } = useAuth();
  const districts = [...new Set(data.map((item) => item.district))];
  const axiosSecure = useAxiosSecure();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      parcelType: "document",
    },
  });

  //  const parcelType = watch("parcelType");
  const parcelType = useWatch({
    control,
    name: "parcelType",
  });

  const onSubmit = (data) => {
    const parcelData = {
      ...data,
      created_by: user.email,
      payment_status: "unpaid",
      delivery_status: "not_collected",
      creation_date: new Date().toISOString(),
      tracking_id: generateTrackingId(),
    };

    //Send parcel data to the server
    axiosSecure.post("/parcels", parcelData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        Swal.fire({
          position: "top",
          title: "Parcel data added successfully",
          icon: "success",
          draggable: true,
        });
      }
    });
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
                {...register("parcelName", {
                  required: "Parcel name required",
                })}
                className="input input-bordered w-full"
                placeholder="Parcel Name"
              />
              {errors.parcelName && (
                <p className="text-red-500 text-sm">
                  {errors.parcelName.message}
                </p>
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

              {/* Sender District */}
              <select
                {...register("senderDistrict", { required: true })}
                className="select select-bordered w-full"
              >
                <option value="">Select Sender District</option>
                {districts?.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
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

              {/* Receiver District */}
              <select
                {...register("receiverDistrict", { required: true })}
                className="select select-bordered w-full mt-4"
              >
                <option value="">Select Receiver District</option>
                {districts?.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}
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
        <p className="text-sm text-gray-500">* PickUp Time 4pm-7pm Approx.</p>

        <button className="btn bg-lime-400 hover:bg-lime-500 text-black">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
