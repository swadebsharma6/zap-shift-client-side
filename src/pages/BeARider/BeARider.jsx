import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";
import riderPhoto from "../../assets/agent-pending.png";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const BeARider = () => {
  const { user } = useAuth();
  const locations = useLoaderData();

  const [region, setRegion] = useState("");
  const [districts, setDistricts] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const axiosSecure = useAxiosSecure();

  /* Unique Regions */
  const regions = locations
    ? [...new Set(locations.map((item) => item.region))]
    : [];

  /* Update District */
  useEffect(() => {
    if (region && locations) {
      const filtered = locations.filter((item) => item.region === region);
      setDistricts(filtered);
    }
  }, [region, locations]);

  /* Submit */
  const onSubmit = (data) => {
    const riderData = {
      name: user?.displayName,
      email: user?.email,
      region: data.region,
      district: data.district,
      age: data.age,
      phone: data.phone,
      nid: data.nid,
      license: data.license,
      bikeModel: data.bikeModel,
      bikeReg: data.bikeReg,
      about: data.about,
      status: "pending",
    };

    console.log("Rider Data:", riderData);

    // 👉 Send to backend later
    axiosSecure.post("/riders", riderData).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Application Submitted ✅",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });

  };

  /* Loading */
  if (!user) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold">Be a Rider</h1>
        <p className="text-gray-500 mt-2">
          Join our delivery team and earn with us 🚀
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Form */}
        <div className="card bg-base-100 shadow-xl p-6">
          <h2 className="text-xl font-semibold mb-4">Tell us about yourself</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered w-full"
            />

            {/* Email */}
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full"
            />

            {/* Age */}
            <input
              type="number"
              {...register("age", {
                required: "Age is required",
                min: { value: 18, message: "Must be 18+" },
              })}
              className="input input-bordered w-full"
              placeholder="Your Age"
            />

            {errors.age && (
              <p className="text-red-500 text-sm">{errors.age.message}</p>
            )}

            {/* Phone */}
            <input
              type="text"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^01[0-9]{9}$/,
                  message: "Invalid BD number",
                },
              })}
              className="input input-bordered w-full"
              placeholder="Phone Number"
            />

            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}

            {/* License */}
            <input
              type="text"
              {...register("license", {
                required: "License required",
              })}
              className="input input-bordered w-full"
              placeholder="Driving License Number"
            />

            {/* NID */}
            <input
              type="text"
              {...register("nid", {
                required: "NID required",
              })}
              className="input input-bordered w-full"
              placeholder="NID Number"
            />

            {/* Region */}
            <select
              {...register("region", { required: true })}
              className="select select-bordered w-full"
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="">Select Region</option>

              {regions.map((r, index) => (
                <option key={index} value={r}>
                  {r}
                </option>
              ))}
            </select>

            {errors.region && (
              <p className="text-red-500 text-sm">Region required</p>
            )}

            {/* District */}
            <select
              {...register("district", { required: true })}
              className="select select-bordered w-full"
              disabled={!region}
            >
              <option value="">Select District</option>

              {districts.map((d, index) => (
                <option key={index} value={d.district}>
                  {d.district}
                </option>
              ))}
            </select>

            {errors.district && (
              <p className="text-red-500 text-sm">District required</p>
            )}

            {/* Bike Model */}
            <input
              type="text"
              {...register("bikeModel")}
              className="input input-bordered w-full"
              placeholder="Bike Brand / Model"
            />

            {/* Bike Registration */}
            <input
              type="text"
              {...register("bikeReg")}
              className="input input-bordered w-full"
              placeholder="Bike Registration Number"
            />

            {/* About */}
            <textarea
              {...register("about")}
              className="textarea textarea-bordered w-full"
              placeholder="Tell us about yourself"
            />

            {/* Submit */}
            <button className="btn btn-success w-full">
              Submit Application
            </button>
          </form>
        </div>

        {/* Image */}
        <div className="hidden md:block text-center">
          <img src={riderPhoto} alt="Rider" className="mx-auto max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default BeARider;
