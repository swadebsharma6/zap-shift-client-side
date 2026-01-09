import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import ProFastLogo from "../pages/Shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      {/* LEFT SIDE */}
      <div className="flex items-center justify-center px-6">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <ProFastLogo></ProFastLogo>

            <Outlet></Outlet>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden lg:flex items-center justify-center bg-lime-50">
        <img
          src={authImage}
          alt="Login Illustration"
          className="max-w-md"
        />
      </div>
    </div>
  );
};

export default AuthLayout;
