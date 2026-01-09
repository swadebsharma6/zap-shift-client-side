import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import SocialLogin from "../SocialLogin";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
    const { loginUser } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);

        //Redirect after signin user
        navigate(location.state || "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-2">Welcome Back</h2>
      <p className="text-gray-500 mb-6">Login with ZapShift</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
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

        {/* Forgot password */}
        <div className="text-right">
          <a href="#" className="text-sm text-gray-500 hover:underline">
            Forgot Password?
          </a>
        </div>

        {/* Login button */}
        <button className="btn w-full bg-lime-400 hover:bg-lime-500 border-none text-black">
          Login
        </button>
      </form>
      {/* Register */}
      <p className="text-center text-sm mt-4">
        Don't have any account?{" "}
        <Link to="/register" className="text-lime-500 font-medium">
          Register
        </Link>
      </p>

      {/* SocialLogin */}
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
