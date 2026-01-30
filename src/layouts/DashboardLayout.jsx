import { NavLink, Outlet } from "react-router";
import ProFastLogo from "./../pages/Shared/ProFastLogo/ProFastLogo";
import {
  FaHome,
  FaBoxOpen,
  FaMoneyCheckAlt,
  FaSearchLocation,
  FaUserEdit,
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* New Implementation */}
        <div className="navbar bg-base-300 w-full lg:hidden">
          <div className="flex-none ">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">DashBoard</div>
        </div>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-300 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <ProFastLogo></ProFastLogo>
          <li>
            <NavLink to="/">
              <FaHome className="text-lg" />
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/myParcels">
              <FaBoxOpen className="text-lg" />
              My Parcels
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaMoneyCheckAlt className="text-lg" />
              Payment History
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/track">
              <FaSearchLocation className="text-lg" />
              Track Your Parcel
            </NavLink>
          </li>

          <li>
            <NavLink to="/dashboard/profile">
              <FaUserEdit className="text-lg" />
              Update Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
