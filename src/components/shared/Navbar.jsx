import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router";

const Navbar = () => {
  const location = useLocation(); // Get current route

  return (
    <div className="container mx-auto">
      <div className="navbar bg-[#F2E498] py-5 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {[
                { path: "/", label: "Home" },
                { path: "/about", label: "About" },
                { path: "/program", label: "Program" },
                { path: "/faculty", label: "Our Faculty" },
                { path: "/blogs", label: "Blogs" },
                { path: "/contact", label: "Contact" },
                { path: "/certificate", label: "Verify Certificate" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? "text-red-600 font-bold"
                        : "text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <img className="w-14" src="images/logo.png" alt="logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/program", label: "Program" },
              { path: "/faculty", label: "Our Faculty" },
              { path: "/blogs", label: "Blogs" },
              { path: "/contact", label: "Contact" },
              { path: "/certificate", label: "Verify Certificate" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-3 py-2 rounded-md ${
                    location.pathname === item.path
                      ? " text-red-800 font-bold"
                      : "text-black hover:bg-gray-300"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-red-800 px-4 py-2 text-white flex items-center">
            <div className="bg-orange-400 p-2 mr-2 rounded-full">
              <FaPhoneAlt />
            </div>
            APPLY NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
