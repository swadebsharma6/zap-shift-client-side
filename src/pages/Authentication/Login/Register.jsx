import { useForm } from "react-hook-form";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin";


const Register = () => {
       const {
          register,
          handleSubmit,
          formState: { errors },
        } = useForm();
      
        const onSubmit = (data) => {
          console.log(data);
        };

      return (
            <div>
       <h2 className="text-3xl font-bold mb-2">Create an Account</h2>
          <p className="text-gray-500 mb-6">Register with ZapShift</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name */}
            <div>
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full"
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>


            {/* Login button */}
            <button className="btn w-full bg-lime-400 hover:bg-lime-500 border-none text-black">
            Register
            </button>
          </form>
             {/* Register */}
          <p className="text-center text-sm mt-4">
           Already have an account?  
            <Link to='/login'  className="text-lime-500 font-medium">
               Login
            </Link>
          </p>

          {/* socialLogin */}
          <SocialLogin></SocialLogin>

          
   </div>
      );
};

export default Register;