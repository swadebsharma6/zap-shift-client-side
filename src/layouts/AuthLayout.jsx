import { Outlet } from "react-router";
import authImage from "../assets/authImage.png";
import ProFastLogo from "../pages/Shared/ProFastLogo/ProFastLogo";

const AuthLayout = () => {
  return (
    <div>
      <div className="p-12">
        <ProFastLogo></ProFastLogo>
      </div>
      <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="flex-1">
             <img
          src={authImage}
          alt="AuthImage.png"
          className="max-w-sm rounded-lg shadow-2xl"
        />
       </div>
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
